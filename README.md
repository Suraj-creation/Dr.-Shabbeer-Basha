# DL Course Platform - Educational Website with Admin Panel

A full-stack educational platform for course instructors to create, manage, and publish course content with an intuitive admin dashboard.

## 🎯 Features

### Admin Panel
- **Course Management**: Create and manage course information, metadata, and settings
- **Lecture Management**: Upload lectures with slides, videos (YouTube links), and reading materials
- **Assignment System**: Create assignments with due dates, templates, and grading status
- **Teaching Assistants**: Manage TA information, contact details, and office hours
- **Tutorials**: Add supplementary tutorials with resources and practice problems
- **Prerequisites**: Define course prerequisites with external resource links
- **Exams**: Schedule and manage exam information
- **Resources**: Organize external resources by category (Books, Tools, Papers, etc.)
- **File Uploads**: Support for PDFs, PPTs, documents with drag-and-drop interface
- **Real-time Updates**: Changes reflect immediately on the public website

### Public Website
- **Clean Navigation**: Easy-to-navigate structure with all course components
- **Responsive Design**: Mobile-friendly interface
- **Course Overview**: Hero section with course highlights
- **Curriculum View**: Organized lecture list with all materials
- **Assignment Tracking**: View assignments with status indicators
- **TA Directory**: Contact information and office hours
- **Resource Library**: Categorized external resources

## 🛠 Tech Stack

### Backend
- **Node.js** + **Express.js** - RESTful API
- **MongoDB** + **Mongoose** - Database
- **JWT** - Authentication
- **Multer** - File uploads
- **bcryptjs** - Password hashing

### Frontend
- **React.js** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP client
- **TailwindCSS** - Styling (to be added)
- **React Icons** - Icon library

## 📁 Project Structure

```
dl-course-platform/
├── server/
│   ├── models/           # MongoDB schemas
│   │   ├── Admin.js
│   │   ├── Course.js
│   │   ├── Lecture.js
│   │   ├── Assignment.js
│   │   ├── TeachingAssistant.js
│   │   ├── Tutorial.js
│   │   ├── Prerequisite.js
│   │   ├── Exam.js
│   │   └── Resource.js
│   ├── routes/           # API endpoints
│   │   ├── auth.js
│   │   ├── courses.js
│   │   ├── lectures.js
│   │   ├── assignments.js
│   │   ├── teachingAssistants.js
│   │   ├── tutorials.js
│   │   ├── prerequisites.js
│   │   ├── exams.js
│   │   └── resources.js
│   ├── middleware/       # Auth & upload middleware
│   │   ├── auth.js
│   │   └── upload.js
│   └── index.js          # Server entry point
├── client/
│   ├── public/
│   └── src/
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       │   ├── admin/    # Admin panel pages
│       │   └── public/   # Public website pages
│       ├── services/     # API services
│       ├── context/      # React context
│       └── App.js
├── uploads/              # File uploads directory
├── .env                  # Environment variables
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd DL-course
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/dl-course-platform
   JWT_SECRET=your_secret_key_here
   ADMIN_EMAIL=admin@dlcourse.com
   ADMIN_PASSWORD=admin123
   CLIENT_URL=http://localhost:3000
   ```

5. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

6. **Run the application**
   
   **Option 1: Run both frontend and backend together**
   ```bash
   npm run dev
   ```
   
   **Option 2: Run separately**
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm run client
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin Panel: http://localhost:3000/admin

### Default Admin Credentials
```
Email: admin@dlcourse.com
Password: admin123
```
⚠️ **Change these after first login!**

## 📚 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Create admin (protected)
- `GET /api/auth/me` - Get current admin
- `PUT /api/auth/change-password` - Change password

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (protected)
- `PUT /api/courses/:id` - Update course (protected)
- `DELETE /api/courses/:id` - Delete course (protected)

### Lectures
- `GET /api/lectures/course/:courseId` - Get course lectures
- `GET /api/lectures/:id` - Get single lecture
- `POST /api/lectures` - Create lecture (protected)
- `PUT /api/lectures/:id` - Update lecture (protected)
- `DELETE /api/lectures/:id` - Delete lecture (protected)

### Assignments
- `GET /api/assignments/course/:courseId` - Get course assignments
- `GET /api/assignments/:id` - Get single assignment
- `POST /api/assignments` - Create assignment (protected)
- `PUT /api/assignments/:id` - Update assignment (protected)
- `DELETE /api/assignments/:id` - Delete assignment (protected)

*Similar endpoints exist for TAs, Tutorials, Prerequisites, Exams, and Resources*

## 🎨 Admin Panel Features

### Navigation Structure
```
Admin Dashboard
├── 🏠 Dashboard (Overview & Stats)
├── 📚 Courses
│   ├── View All Courses
│   ├── Create New Course
│   └── Edit Course
├── 📖 Lectures
│   ├── View All Lectures
│   ├── Add New Lecture
│   ├── Upload Slides (PDF/PPT)
│   └── Add Video Links
├── 📝 Assignments
│   ├── View All Assignments
│   ├── Create Assignment
│   └── Upload Templates
├── 👥 Teaching Assistants
│   ├── View All TAs
│   └── Add/Edit TA
├── 🎓 Tutorials
├── 📋 Prerequisites
├── 📄 Exams
├── 📦 Resources
└── ⚙️ Settings

```

### Quick Actions
- **Add Lecture**: Quick form to add new lecture with all materials
- **Upload Files**: Drag-and-drop or browse to upload files
- **Publish/Unpublish**: Toggle content visibility instantly
- **Reorder**: Drag to reorder lectures, tutorials, etc.

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Protected API routes
- File type validation
- File size limits (10MB default)
- XSS protection
- CORS configuration

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Usage Guide

### For Course Instructors

1. **Login to Admin Panel**
   - Navigate to `/admin/login`
   - Enter credentials

2. **Create a Course**
   - Go to "Courses" → "Create New Course"
   - Fill in course details (code, title, instructor info)
   - Save

3. **Add Lectures**
   - Go to "Lectures" → "Add New Lecture"
   - Enter lecture number, title, description
   - Upload slides (PDF/PPT)
   - Add YouTube video links
   - Add reading materials
   - Click "Publish" to make it live

4. **Create Assignments**
   - Go to "Assignments" → "Create Assignment"
   - Set due dates
   - Upload template files
   - Define grading rubric

5. **Manage Teaching Assistants**
   - Add TA information
   - Set office hours and availability

6. **Organize Resources**
   - Categorize by type (Books, Tools, Papers)
   - Add external links

### For Students (Public View)

1. Visit the website homepage
2. Browse course information
3. Navigate to "Curriculum" for lectures
4. View "Assignments" for deadlines
5. Check "Teaching Team" for TA contacts
6. Access "Resources" for additional materials

## 🔧 Configuration

### File Upload Settings
Edit `.env`:
```env
MAX_FILE_SIZE=10485760  # 10MB in bytes
UPLOAD_PATH=./uploads
```

### Allowed File Types
In `server/middleware/upload.js`:
- Images: jpeg, jpg, png, gif
- Documents: pdf, doc, docx, ppt, pptx, xls, xlsx
- Archives: zip
- Text: txt, md

## 🚀 Deployment

### Backend (Node.js)
- Deploy to Heroku, Railway, or DigitalOcean
- Set environment variables
- Configure MongoDB Atlas

### Frontend (React)
- Build: `cd client && npm run build`
- Deploy to Netlify, Vercel, or serve from backend

### Full-Stack Deployment
```bash
# Build frontend
cd client
npm run build

# Serve static files from Express
# Add to server/index.js:
app.use(express.static(path.join(__dirname, '../client/build')));
```

## 📝 TODO / Future Enhancements

- [ ] Student authentication and enrollment
- [ ] Assignment submission system
- [ ] Grading interface for instructors
- [ ] Discussion forum
- [ ] Email notifications
- [ ] Calendar integration
- [ ] Video player with progress tracking
- [ ] Search functionality
- [ ] Dark mode
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 💬 Support

For issues or questions:
- Open an issue on GitHub
- Contact: [Your Email]

## 🙏 Acknowledgments

Based on course website analysis of CS6910 and ML Basics courses.

---

**Built with ❤️ for educators and students**
