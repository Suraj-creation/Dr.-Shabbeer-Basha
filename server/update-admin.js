const mongoose = require('mongoose');
const Admin = require('./models/Admin');
require('dotenv').config();

const updateAdminCredentials = async () => {
  try {
    // Connect to MongoDB
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    console.log('📊 Database:', mongoose.connection.name);

    // Find and update or create admin
    const existingAdmin = await Admin.findOne({});
    
    if (existingAdmin) {
      // Update existing admin credentials
      existingAdmin.name = 'Dr. Shabbeer Basha';
      existingAdmin.email = process.env.ADMIN_EMAIL || 'dr.shabbeer@vidyashilp.edu.in';
      existingAdmin.password = process.env.ADMIN_PASSWORD || 'DL@VU2026$ecure';
      existingAdmin.role = 'superadmin';
      
      await existingAdmin.save();
      console.log('');
      console.log('✅ Admin credentials updated successfully!');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('👤 Name:', existingAdmin.name);
      console.log('📧 Email:', existingAdmin.email);
      console.log('🔑 Password:', process.env.ADMIN_PASSWORD || 'DL@VU2026$ecure');
      console.log('🛡️  Role:', existingAdmin.role);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    } else {
      // Create new admin
      const admin = new Admin({
        name: 'Dr. Shabbeer Basha',
        email: process.env.ADMIN_EMAIL || 'dr.shabbeer@vidyashilp.edu.in',
        password: process.env.ADMIN_PASSWORD || 'DL@VU2026$ecure',
        role: 'superadmin'
      });

      await admin.save();
      console.log('');
      console.log('✅ New admin created successfully!');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('👤 Name:', admin.name);
      console.log('📧 Email:', admin.email);
      console.log('🔑 Password:', process.env.ADMIN_PASSWORD || 'DL@VU2026$ecure');
      console.log('🛡️  Role:', admin.role);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    }

    console.log('');
    console.log('⚠️  SECURITY REMINDER:');
    console.log('   • Store these credentials securely');
    console.log('   • Never share passwords in plain text');
    console.log('   • Consider changing password after first login');
    console.log('');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error updating admin credentials:', error);
    process.exit(1);
  }
};

updateAdminCredentials();
