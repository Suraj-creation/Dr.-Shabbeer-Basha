# 🔓 How to Fix MongoDB Connection Error

## ❌ Error You're Seeing:
```
MongooseError: Operation buffering timed out after 10000ms
MongoDB connection error: connect ETIMEDOUT
```

## ✅ Solution: Whitelist Your IP Address

### Step-by-Step Instructions:

1. **Go to MongoDB Atlas**
   - Open: https://cloud.mongodb.com/
   - Login with your MongoDB account

2. **Navigate to Network Access**
   - Click on your project
   - In the left sidebar, click **"Network Access"**

3. **Add IP Address**
   - Click the **"Add IP Address"** button
   - You'll see two options:
     - "Add Current IP Address" (specific to your current network)
     - "Allow Access from Anywhere" (recommended for development)

4. **Allow Access from Anywhere**
   - Click **"Allow Access from Anywhere"**
   - This adds `0.0.0.0/0` to the whitelist
   - Click **"Confirm"**

5. **Wait and Restart**
   - Wait **2-3 minutes** for changes to propagate
   - Stop your server (Ctrl+C in terminal)
   - Run `npm run dev` again

---

## 🎯 Alternative: Add Only Your Current IP

If you want more security:
1. Find your IP: https://whatismyipaddress.com/
2. In MongoDB Atlas Network Access, click "Add IP Address"
3. Click "Add Current IP Address"
4. Or manually enter your IP address
5. Click "Confirm"

**Note:** You'll need to update this every time your IP changes (e.g., different WiFi network)

---

## 🔍 Verify Your Connection String

Your `.env` file should have:
```
MONGODB_URI=mongodb+srv://dlcourse:lCxZUuFhBOrIycQb@cluster0.u6dyo4p.mongodb.net/dl-course-platform?appName=Cluster0
```

✅ This looks correct if:
- Username: `dlcourse`
- Password: `lCxZUuFhBOrIycQb`
- Cluster: `cluster0.u6dyo4p.mongodb.net`
- Database: `dl-course-platform`

---

## 🚀 After Whitelisting

Once you've whitelisted your IP, you should see:
```
✅ MongoDB connected successfully
📊 Database: dl-course-platform
🌐 Connection host: cluster0-shard-00-01.u6dyo4p.mongodb.net
```

---

## 🆘 Still Having Issues?

### Check if Cluster is Paused:
1. Go to MongoDB Atlas Dashboard
2. Look at your cluster status
3. If it says "Paused", click "Resume"

### Check Connection String:
- Username and password must match exactly
- No special characters in password (or they must be URL-encoded)
- Database name exists

### Test Connection:
Run the test script:
```bash
node test-connection.js
```

---

## 📞 Need Help?

If still not working after following these steps:
1. Take a screenshot of MongoDB Atlas Network Access page
2. Share the exact error message
3. Verify your MongoDB Atlas account is active
