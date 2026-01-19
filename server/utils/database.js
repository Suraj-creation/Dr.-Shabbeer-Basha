/**
 * MongoDB Connection Utility for Vercel Serverless
 * 
 * This module provides a robust MongoDB connection that:
 * - Caches connections for serverless environments
 * - Handles reconnection automatically
 * - Provides connection status checking
 * - Implements proper error handling
 */

const mongoose = require('mongoose');

// Connection states
const ConnectionState = {
  DISCONNECTED: 0,
  CONNECTED: 1,
  CONNECTING: 2,
  DISCONNECTING: 3
};

// Global connection cache for serverless
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Get MongoDB connection options optimized for serverless
 */
const getConnectionOptions = () => ({
  // Connection pool settings
  maxPoolSize: parseInt(process.env.MONGODB_MAX_POOL_SIZE) || 10,
  minPoolSize: parseInt(process.env.MONGODB_MIN_POOL_SIZE) || 2,
  
  // Timeout settings
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
  
  // Heartbeat and monitoring
  heartbeatFrequencyMS: 10000,
  
  // Write and read settings
  retryWrites: true,
  retryReads: true,
  w: 'majority',
  
  // Serverless optimizations
  bufferCommands: false,
  maxIdleTimeMS: 30000,
  
  // Auto index (disable in production for performance)
  autoIndex: process.env.NODE_ENV !== 'production',
});

/**
 * Connect to MongoDB with connection caching for serverless
 * @returns {Promise<mongoose.Connection>}
 */
async function connectToDatabase() {
  // Return cached connection if available and connected
  if (cached.conn && mongoose.connection.readyState === ConnectionState.CONNECTED) {
    return cached.conn;
  }

  // If a connection is in progress, wait for it
  if (cached.promise) {
    cached.conn = await cached.promise;
    return cached.conn;
  }

  // Validate MONGODB_URI
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  // Create new connection
  cached.promise = mongoose
    .connect(MONGODB_URI, getConnectionOptions())
    .then((mongoose) => {
      console.log('✅ New MongoDB connection established');
      return mongoose;
    })
    .catch((error) => {
      cached.promise = null; // Reset promise on error
      console.error('❌ MongoDB connection failed:', error.message);
      throw error;
    });

  cached.conn = await cached.promise;
  return cached.conn;
}

/**
 * Get the current connection status
 * @returns {Object} Connection status object
 */
function getConnectionStatus() {
  const state = mongoose.connection.readyState;
  const stateNames = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  
  return {
    isConnected: state === ConnectionState.CONNECTED,
    state: state,
    stateName: stateNames[state] || 'unknown',
    host: mongoose.connection.host || null,
    name: mongoose.connection.name || null,
    cached: !!cached.conn
  };
}

/**
 * Close the MongoDB connection gracefully
 * @returns {Promise<void>}
 */
async function closeConnection() {
  if (mongoose.connection.readyState !== ConnectionState.DISCONNECTED) {
    await mongoose.connection.close();
    cached.conn = null;
    cached.promise = null;
    console.log('✅ MongoDB connection closed');
  }
}

/**
 * Check if the database is healthy
 * @returns {Promise<boolean>}
 */
async function isDatabaseHealthy() {
  try {
    if (mongoose.connection.readyState !== ConnectionState.CONNECTED) {
      return false;
    }
    await mongoose.connection.db.admin().ping();
    return true;
  } catch (error) {
    console.error('Database health check failed:', error.message);
    return false;
  }
}

/**
 * Middleware to ensure database connection for Express
 */
const ensureConnection = async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (error) {
    console.error('Database middleware error:', error);
    res.status(503).json({
      success: false,
      message: 'Database service temporarily unavailable',
      retryAfter: 5
    });
  }
};

module.exports = {
  connectToDatabase,
  getConnectionStatus,
  closeConnection,
  isDatabaseHealthy,
  ensureConnection,
  ConnectionState
};
