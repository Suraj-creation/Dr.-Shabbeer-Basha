# 🚀 Vercel Deployment Guide - DL Course Platform

## Quick Start Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Production ready for Vercel"
git push origin main
```

### Step 2: Import Project in Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Select the `DL-course` repository

### Step 3: Configure Environment Variables

In Vercel Dashboard → Your Project → **Settings** → **Environment Variables**

Add these **REQUIRED** variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Enables production mode |
| `MONGODB_URI` | `mongodb+srv://dlcourse:lCxZUuFhBOrIycQb@cluster0.u6dyo4p.mongodb.net/dl-course-platform?retryWrites=true&w=majority&appName=Cluster0` | MongoDB Atlas connection |
| `JWT_SECRET` | **Generate a new one!** | Authentication secret |
| `CLIENT_URL` | `https://your-app.vercel.app` | Your Vercel app URL |

**Optional** variables (have defaults):

| Variable | Default | Description |
|----------|---------|-------------|
| `JWT_EXPIRES_IN` | `7d` | Token expiration time |
| `MAX_FILE_SIZE` | `10485760` | Max upload size (10MB) |
| `RATE_LIMIT_WINDOW_MS` | `900000` | Rate limit window (15min) |
| `RATE_LIMIT_MAX_REQUESTS` | `100` | Max requests per window |
| `AUTH_RATE_LIMIT_MAX` | `10` | Max login attempts/hour |
| `LOG_LEVEL` | `combined` | Morgan logging level |

### Step 4: Generate a Strong JWT_SECRET

Run this command locally and copy the output:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Example output (DO NOT USE THIS ONE):
```
a1b2c3d4e5f6... (128 characters)
```

### Step 5: Configure MongoDB Atlas Network Access

**CRITICAL**: Vercel uses dynamic IPs, so you must allow access from anywhere.

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Navigate to **Network Access** (left sidebar)
3. Click **"+ ADD IP ADDRESS"**
4. Click **"ALLOW ACCESS FROM ANYWHERE"** or enter `0.0.0.0/0`
5. Click **"Confirm"**

⚠️ This is secure because your database still requires username/password authentication.

### Step 6: Deploy!

Click **"Deploy"** in Vercel. The build process will:
1. Install dependencies
2. Build the React frontend
3. Deploy the API routes

---

## 📋 Environment Variables Copy-Paste Template

```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://dlcourse:lCxZUuFhBOrIycQb@cluster0.u6dyo4p.mongodb.net/dl-course-platform?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=PASTE_YOUR_GENERATED_SECRET_HERE
CLIENT_URL=https://your-project-name.vercel.app
JWT_EXPIRES_IN=7d
MAX_FILE_SIZE=10485760
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
AUTH_RATE_LIMIT_MAX=10
```

---

## 🔧 Vercel Configuration

The `vercel.json` is already configured:

```json
{
  "version": 2,
  "builds": [
    { "src": "server/index.js", "use": "@vercel/node" },
    { "src": "client/build/**", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "server/index.js" },
    { "src": "/(.*)", "dest": "client/build/$1" }
  ],
  "functions": {
    "server/index.js": {
      "memory": 1024,
      "maxDuration": 30
    }
  }
}
```

---

## ✅ Post-Deployment Checklist

1. **Test Health Endpoint**
   ```
   https://your-app.vercel.app/api/health
   ```
   Should return: `{ "success": true, "message": "Server is healthy" }`

2. **Test Database Connection**
   ```
   https://your-app.vercel.app/api/health
   ```
   Check `database.status` is `"connected"`

3. **Test Admin Login**
   - Go to `https://your-app.vercel.app/admin`
   - Login with your admin credentials

4. **Update CLIENT_URL**
   - After first deploy, get your Vercel URL
   - Update `CLIENT_URL` in Environment Variables
   - Redeploy if needed

---

## 🐛 Troubleshooting

### "MONGODB connection error"
- ✅ Check MONGODB_URI is correct
- ✅ Whitelist `0.0.0.0/0` in Atlas Network Access
- ✅ Verify username/password in connection string

### "CORS error"
- ✅ Make sure `CLIENT_URL` matches your Vercel domain exactly
- ✅ Include `https://` in CLIENT_URL

### "Rate limit exceeded"
- This is normal protection
- Wait 15 minutes or adjust `RATE_LIMIT_MAX_REQUESTS`

### "JWT errors"
- ✅ Make sure `JWT_SECRET` is set in Vercel
- ✅ Generate a new strong secret if needed

---

## 🔒 Security Checklist

- [x] Strong JWT_SECRET (64+ random bytes)
- [x] HTTPS enforced (Vercel does this automatically)
- [x] Rate limiting enabled
- [x] Helmet security headers
- [x] CORS configured for your domain
- [x] MongoDB connection pooling optimized
- [x] Sensitive data in environment variables

---

## 📊 Monitoring

Check your deployment logs in Vercel:
1. Go to your project
2. Click on a deployment
3. View **Functions** tab for API logs
4. View **Runtime Logs** for real-time monitoring

---

Made with ❤️ for DL Course Platform
