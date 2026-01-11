# 🚀 Quick Start Guide

## Complete Setup in 5 Steps

### Step 1: Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### Step 2: Set Up MongoDB

**Option A: Local MongoDB**
1. Download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB:
   ```bash
   # Windows
   "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
   
   # Or if MongoDB is in PATH
   mongod
   ```

**Option B: MongoDB Atlas (Cloud)**
1. Create free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `.env` file with your connection string

### Step 3: Configure Environment

The `.env` file is already created with default values:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dl-course-platform
JWT_SECRET=dl_course_secret_key_2026_change_in_production
ADMIN_EMAIL=admin@dlcourse.com
ADMIN_PASSWORD=admin123
```

✅ **No changes needed for local development!**

⚠️ **For production**: Change JWT_SECRET and admin credentials

### Step 4: Initialize Database

```bash
npm run setup
```

This will:
- Connect to MongoDB
- Create default admin account
- Display login credentials

**Output:**
```
✅ Default admin created successfully!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email: admin@dlcourse.com
🔑 Password: admin123
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Step 5: Start the Application

```bash
npm run dev
```

This starts both:
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:3000

## 🎯 Access the Application

### Public Website
- URL: **http://localhost:3000**
- Features: View courses, lectures, assignments, TAs, resources

### Admin Panel
- URL: **http://localhost:3000/admin/login**
- Email: **admin@dlcourse.com**
- Password: **admin123**

## 📝 First Steps After Login

1. **Create a Course**
   - Go to Admin Panel → Courses
   - Click "➕ Add New Course"
   - Fill in course details (code, title, instructor, semester)
   - Save

2. **Add Lectures**
   - Go to Lectures
   - Select your course
   - Click "➕ Add New Lecture"
   - Add:
     - Lecture number and title
     - Description
     - Topics covered
     - YouTube video links (e.g., https://youtube.com/watch?v=...)
     - Slide URLs (Google Drive, Dropbox, etc.)
     - Reading materials
   - Check "Publish immediately"
   - Save

3. **Create Assignments**
   - Go to Assignments
   - Add assignment details
   - Set release and due dates
   - Upload template files (optional)
   - Publish

4. **Add Teaching Assistants**
   - Go to Teaching Assistants
   - Add TA name, email, office hours
   - Save

5. **View Your Live Website**
   - Open http://localhost:3000
   - See all your content immediately!

## 🎨 Customization Guide

### Add Your Course Logo
1. Place logo in `client/public/`
2. Update HomePage.js to reference your logo

### Change Color Scheme
Edit CSS files:
- `client/src/pages/admin/AdminLayout.css` - Admin panel colors
- `client/src/pages/public/PublicPages.css` - Public site colors

Primary colors to change:
```css
/* Current primary: #2c3e50 (dark blue-gray) */
/* Current accent: #3498db (blue) */
```

### Add More Fields
Follow the pattern in `LectureManager.js`:
1. Update model in `server/models/`
2. Update form in admin manager
3. Display in public pages

## 🔧 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Start MongoDB first
```bash
mongod
```

### Port Already in Use
```
Error: Port 5000 is already in use
```
**Solution**: Change port in `.env`
```env
PORT=5001
```

### React Build Errors
```bash
cd client
npm install
npm start
```

### Can't Login to Admin
1. Reset admin account:
   ```bash
   npm run setup
   ```
2. Use displayed credentials

## 📂 Project Structure Overview

```
DL-course/
├── server/              # Backend (Node.js + Express)
│   ├── models/         # Database schemas (8 models)
│   ├── routes/         # API endpoints (9 routes)
│   ├── middleware/     # Auth & file upload
│   └── index.js        # Server entry
│
├── client/             # Frontend (React)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── admin/     # Admin panel (9 managers)
│   │   │   └── public/    # Public website (5 pages)
│   │   ├── components/    # Reusable components
│   │   ├── services/      # API calls
│   │   └── context/       # Auth context
│   └── public/
│
├── uploads/            # File storage (created automatically)
├── .env               # Configuration
└── README.md          # Full documentation
```

## 🎓 Usage Examples

### Adding a YouTube Video to Lecture
1. Find YouTube URL: `https://youtube.com/watch?v=dQw4w9WgXcQ`
2. In Lecture form, click "+ Add Video"
3. Title: "Part 1 - Introduction"
4. URL: Paste the YouTube link
5. Save

### Uploading Slides
**Option 1: Google Drive**
1. Upload PDF to Google Drive
2. Right-click → Share → Get link
3. Make sure "Anyone with the link can view"
4. Copy link
5. Paste in "Slides URL" field

**Option 2: Dropbox**
1. Upload file to Dropbox
2. Get shareable link
3. Change `?dl=0` to `?dl=1` at the end
4. Paste in form

### Setting Assignment Deadlines
- Release Date: When students can see it
- Due Date: Submission deadline
- Status automatically updates based on dates

## 🌐 Deployment (Production)

### Deploy Backend (Heroku/Railway)
```bash
# Install Heroku CLI
heroku create your-app-name
git push heroku main
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
heroku config:set JWT_SECRET=your_secret_key
```

### Deploy Frontend (Netlify/Vercel)
```bash
cd client
npm run build
# Upload 'build' folder to Netlify
```

### Environment Variables for Production
Set these in your hosting platform:
- `MONGODB_URI`: MongoDB Atlas connection string
- `JWT_SECRET`: Strong random secret
- `CLIENT_URL`: Your frontend URL
- `NODE_ENV`: production

## 📞 Support

- GitHub Issues: [Report bugs]
- Email: [Your email]
- Documentation: See README.md

## ✨ Key Features Recap

✅ **Admin Panel**
- Course management
- Lecture upload with videos & slides
- Assignment creation
- TA management
- Resource organization
- Real-time publishing

✅ **Public Website**
- Clean, professional design
- Mobile responsive
- Easy navigation
- All content from admin panel

✅ **Security**
- JWT authentication
- Password hashing
- Protected routes
- File validation

✅ **Developer Friendly**
- Well-organized code
- Template pattern for new features
- Comprehensive documentation
- Easy to extend

---

**Ready to build your course website! 🎉**

For detailed documentation, see the main [README.md](README.md)
