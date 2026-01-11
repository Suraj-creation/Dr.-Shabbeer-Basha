# 🗄️ MongoDB Setup Guide

## Quick Start with MongoDB Atlas (Cloud - No Installation Needed)

### Step 1: Create Free MongoDB Atlas Account (2 minutes)

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up with your email or Google account
3. Choose **FREE** tier (M0 Sandbox)
4. Select cloud provider (AWS recommended)
5. Choose region closest to you
6. Click "Create Deployment"

### Step 2: Configure Database Access (1 minute)

1. Click **"Database Access"** in left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Username: `dlcourse`
5. Password: Click **"Autogenerate Secure Password"** and **COPY IT**
6. User Privileges: Select **"Atlas Admin"**
7. Click **"Add User"**

### Step 3: Configure Network Access (30 seconds)

1. Click **"Network Access"** in left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development)
4. Click **"Confirm"**

### Step 4: Get Connection String (1 minute)

1. Click **"Database"** in left sidebar
2. Click **"Connect"** button on your cluster
3. Choose **"Drivers"**
4. Select **"Node.js"** and version **"5.5 or later"**
5. **COPY** the connection string (looks like):
   ```
   mongodb+srv://dlcourse:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<password>` with the password you copied earlier
7. Add `/dl-course-platform` before the `?` to specify database name:
   ```
   mongodb+srv://dlcourse:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/dl-course-platform?retryWrites=true&w=majority
   ```

### Step 5: Update Your Application (30 seconds)

1. Open `.env` file in your project
2. Replace the `MONGODB_URI` line with your connection string:
   ```
   MONGODB_URI=mongodb+srv://dlcourse:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/dl-course-platform?retryWrites=true&w=majority
   ```
3. Save the file

### Step 6: Run Your Application

```powershell
# Setup database with default admin
npm run setup

# Start the application
npm run dev
```

**That's it! Your application is now using cloud database!** ☁️

---

## Alternative: Local MongoDB Installation

If you prefer to run MongoDB on your computer:

### Windows Installation

1. **Download MongoDB**:
   - Visit: https://www.mongodb.com/try/download/community
   - Select:
     - Version: 8.0.4 (current)
     - Platform: Windows
     - Package: MSI
   - Click Download

2. **Install MongoDB**:
   - Run the downloaded `.msi` file
   - Choose **"Complete"** installation
   - Install MongoDB as a **Service** (check the box)
   - Install **MongoDB Compass** (optional, but helpful)
   - Click Install

3. **Verify Installation**:
   ```powershell
   mongod --version
   ```

4. **Start MongoDB** (if not running as service):
   ```powershell
   mongod
   ```
   Leave this terminal open

5. **Run Application** (in new terminal):
   ```powershell
   cd "C:\Users\Govin\Desktop\DL-course"
   npm run setup
   npm run dev
   ```

---

## Troubleshooting

### "mongod is not recognized"

MongoDB is not in your PATH. Options:
1. Restart your terminal after installation
2. Add MongoDB to PATH manually:
   - Find MongoDB installation (usually `C:\Program Files\MongoDB\Server\8.0\bin`)
   - Add to System PATH environment variable
3. **Or use MongoDB Atlas** (cloud option above - no installation needed!)

### "ECONNREFUSED ::1:27017"

MongoDB is not running. Solutions:
1. If installed locally: Run `mongod` in a terminal
2. If using Atlas: Check your connection string in `.env`
3. If MongoDB service is installed: 
   ```powershell
   Start-Service MongoDB
   ```

### "Authentication failed"

For Atlas:
- Check your username/password in connection string
- Make sure you replaced `<password>` with actual password
- Password should NOT contain special characters `< > : / ? # [ ] @`

For local:
- Default local MongoDB has no authentication
- Use: `mongodb://localhost:27017/dl-course-platform`

---

## Which Option Should I Choose?

### Choose **MongoDB Atlas (Cloud)** if:
- ✅ You want to start quickly (5 minutes setup)
- ✅ You don't want to install software
- ✅ You want automatic backups
- ✅ You might deploy to production later
- ✅ You want to access database from anywhere
- ✅ **This is recommended for beginners!**

### Choose **Local MongoDB** if:
- ✅ You want to work offline
- ✅ You're comfortable with installations
- ✅ You want faster database operations
- ✅ You're experienced with databases

---

## Quick Commands Reference

```powershell
# Check if MongoDB is running (local)
Get-Process mongod

# Start MongoDB service (Windows)
Start-Service MongoDB

# Stop MongoDB service (Windows)
Stop-Service MongoDB

# Setup your application database
npm run setup

# Start application (both frontend and backend)
npm run dev

# Start only backend
npm run server

# Start only frontend
cd client
npm start
```

---

## Next Steps

After MongoDB is running:

1. **Setup database**: `npm run setup`
   - Creates default admin account
   - Email: admin@dlcourse.com
   - Password: admin123

2. **Start application**: `npm run dev`
   - Backend: http://localhost:5000
   - Frontend: http://localhost:3000

3. **Login**: http://localhost:3000/admin/login

4. **Start creating courses!** 🎓

---

## MongoDB Atlas Benefits

- **Free tier**: 512MB storage (plenty for development)
- **No maintenance**: Automatic updates and security patches
- **Scalable**: Easy to upgrade when needed
- **Backups**: Automatic daily backups
- **Monitoring**: Built-in performance monitoring
- **Global**: Access from anywhere
- **Secure**: Enterprise-grade security

**I recommend starting with Atlas - it's the fastest way to get your application running!**
