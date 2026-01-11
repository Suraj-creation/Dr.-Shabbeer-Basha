# MASTER COMPREHENSIVE COURSE WEBSITE COMPONENTS GUIDE
## Complete Detailed Breakdown from CS6910 & ML Basics Analysis

---

## TABLE OF CONTENTS

1. [Header & Navigation System](#1-header--navigation-system)
2. [Homepage Structure](#2-homepage-structure)
3. [Course Metadata Block](#3-course-metadata-block)
4. [Prerequisites Section](#4-prerequisites-section)
5. [Teaching Assistants System](#5-teaching-assistants-system)
6. [Lectures & Curriculum](#6-lectures--curriculum)
7. [Assignments & Assessments](#7-assignments--assessments)
8. [Exams Section](#8-exams-section)
9. [Tutorials Section](#9-tutorials-section)
10. [Resources & External Links](#10-resources--external-links)
11. [Navigation & Information Architecture](#11-navigation--information-architecture)
12. [Visual Design Components](#12-visual-design-components)
13. [Content Management Elements](#13-content-management-elements)
14. [Accessibility & Technical Requirements](#14-accessibility--technical-requirements)
15. [Typography & Spacing](#15-typography--spacing)
16. [Color & Visual Styling](#16-color--visual-styling)
17. [Responsive Design Elements](#17-responsive-design-elements)
18. [Footer & Support Elements](#18-footer--support-elements)
19. [Advanced Components](#19-advanced-components)
20. [Implementation Code Templates](#20-implementation-code-templates)

---

## 1. HEADER & NAVIGATION SYSTEM

### 1.1 Website Header Structure

#### Primary Header Component
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  COURSE CODE : COURSE TITLE                                │
│  [CS6910/CS7015: Deep Learning]                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Design Specifications:**
- **Font Size**: 28-36px (H1 tag)
- **Font Weight**: Bold (600-700)
- **Color**: Primary text color (typically dark)
- **Spacing**: 
  - Top margin: 20-30px
  - Bottom margin: 20-30px
  - Letter spacing: -0.01em
- **Alignment**: Left-aligned or centered
- **Background**: Optional subtle background color or gradient
- **Padding**: 20px horizontal, 15px vertical minimum

#### Subtitle/Tagline (Optional)
```
Subtitle: "Learn Deep Learning: From Fundamentals to Transformers"
```

**Design Specifications:**
- **Font Size**: 16-18px
- **Font Weight**: Normal (400)
- **Color**: Secondary text color (slightly muted)
- **Margin**: 10-15px below main title
- **Purpose**: Brief course description

### 1.2 Navigation Bar/Menu

#### Navigation Structure (Multi-page model - ML Basics approach)
```
┌─────────────────────────────────────────────────────────────┐
│ Home | Curriculum | Teaching Team | Assignments | Resources │
│                                                              │
│                                             [Search] [About] │
└─────────────────────────────────────────────────────────────┘
```

**Navigation Items:**
- **Home**: Links to homepage
- **Curriculum/Lectures**: Links to lectures page
- **Teaching Team/Assistants**: Links to TA page
- **Assignments**: Links to assignments page
- **Resources**: Links to resources page
- **About**: Course information
- **Contact**: Contact form or support

**Design Specifications:**
- **Position**: Sticky header (stays visible on scroll)
- **Height**: 50-60px
- **Background**: Slightly darker or contrasting color
- **Text Color**: High contrast, readable
- **Font Size**: 14-16px
- **Spacing**: 20px padding horizontal
- **Active State**: Highlight current page
- **Hover State**: Color change, underline, or background

### 1.3 Breadcrumb Navigation (for deeper pages)
```
Home > Curriculum > Lecture 5 > Gradient Descent
```

**Design Specifications:**
- **Font Size**: 12-14px
- **Color**: Secondary text color
- **Separator**: "/" or ">"
- **Margin**: 10px top, 10px bottom

---

## 2. HOMEPAGE STRUCTURE

### 2.1 Hero/Welcome Section

#### Hero Section (ML Basics style - Warm welcome)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Machine Learning Basics                        │
│                                                             │
│  Artificial intelligence is an ill-defined term and most   │
│  researchers prefer the term machine learning: algorithms  │
│  that learn how an output (y) depends on an input (X),     │
│  through a function y = f(X).                              │
│                                                             │
│  In the videos I show you how to implement increasingly    │
│  complex machine learning functions in Python from scratch.│
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Component Specifications:**
- **Container Width**: Full viewport width or max-width 1200px
- **Padding**: 60px vertical, 40px horizontal
- **Background**: 
  - Option 1: Clean white (minimalist)
  - Option 2: Subtle gradient
  - Option 3: Accent color at 10% opacity
- **Text Alignment**: Center or left
- **Line Height**: 1.6-1.8
- **Paragraph Spacing**: 20-30px between paragraphs

**Content Elements:**
1. **Main Heading**: Course title (28-36px)
2. **Introduction Paragraph**: What is this course? (16-18px)
3. **Value Proposition**: Why take this course? (16px)
4. **Call-to-Action**: "Get Started" or "View Curriculum" button

### 2.2 Quick Course Information Block (CS6910 style)

```
┌─────────────────────────────────────────────────────────────┐
│ QUICK COURSE INFORMATION                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ **Instructor**: Mitesh M. Khapra                            │
│ **When**: Jan-May 2024                                      │
│ **Lectures**: Slot H                                        │
│ **Where**: CS25                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Component Specifications:**
- **Layout**: 2x2 grid or single column list
- **Background**: Subtle background color (light gray or accent color at 5% opacity)
- **Border**: 1px border with rounded corners (8px)
- **Padding**: 30px
- **Margin**: 40px bottom

**Label Specifications:**
- **Font Weight**: Bold (600)
- **Font Size**: 14px
- **Color**: Primary text color
- **Format**: `**Label**: Value`

**Value Specifications:**
- **Font Weight**: Normal (400)
- **Font Size**: 16px
- **Color**: Primary text color

### 2.3 Course Overview Cards (Grid Layout)

```
┌──────────────────────────────────────────────────────────────┐
│                    COURSE HIGHLIGHTS                         │
├──────────────┬──────────────┬──────────────┬───────────────┤
│ 📚 14        │ 🎥 Multiple  │ 📋 5         │ 👥 10 Teaching│
│ Lectures     │ Videos Per   │ Assignments  │ Assistants    │
│              │ Lecture      │              │               │
├──────────────┼──────────────┼──────────────┼───────────────┤
│ ✓ Structured │ ✓ Hands-on   │ ✓ Industry   │ ✓ Mentor      │
│ Learning     │ Projects     │ Relevant     │ Support       │
└──────────────┴──────────────┴──────────────┴───────────────┘
```

**Card Specifications:**
- **Card Count**: 4-6 cards
- **Grid Layout**: 2x2 or 3x2
- **Card Dimensions**: 200x150px minimum
- **Border Radius**: 12px
- **Shadow**: 0 2px 8px rgba(0,0,0,0.1)
- **Hover Effect**: Slight scale (1.05) or shadow increase
- **Padding**: 20px
- **Background**: White or light background
- **Text Alignment**: Center
- **Icon Size**: 30-40px

---

## 3. COURSE METADATA BLOCK

### 3.1 Detailed Metadata Display

```
┌──────────────────────────────────────────────────────────────┐
│ COURSE INFORMATION                                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Instructor: Mitesh M. Khapra                               │
│  Instructor Email: miteshk@cse.iitm.ac.in                   │
│  Office Hours: By appointment                               │
│                                                              │
│  Duration: Jan-May 2024 (Semester 2)                        │
│  Lecture Slot: Slot H                                       │
│  Lecture Location: CS25                                     │
│                                                              │
│  Credits: 3-4 credits                                       │
│  Prerequisites: CS6015, CS5020, CS5691                      │
│  Level: Advanced (M.Tech / B.Tech 4th year)                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Metadata Fields to Include:**

| Field | Value | Notes |
|-------|-------|-------|
| **Instructor Name** | Mitesh M. Khapra | Primary contact |
| **Instructor Email** | Email address | Clickable mailto |
| **Instructor Office** | Location | Room/Building |
| **Office Hours** | Time/Days or "By appointment" | Availability |
| **Course Code** | CS6910/CS7015 | Department code |
| **Credits** | Number (3, 4, etc.) | Academic credits |
| **Semester/Term** | Jan-May 2024 | Time period |
| **Lecture Slot** | Slot H | Schedule identifier |
| **Lecture Location** | CS25 or similar | Room/Building |
| **Course Level** | B.Tech/M.Tech/PhD | Academic level |
| **Enrollment Status** | Open/Closed | Current status |
| **Max Students** | Number if applicable | Capacity |

### 3.2 Metadata Styling

**Container:**
- **Width**: Full (max 1200px)
- **Padding**: 40px
- **Border**: 1px solid #ddd
- **Border Radius**: 8px
- **Background**: #f9f9f9 or light accent color
- **Margin**: 30px 0

**Field Labels:**
- **Font Weight**: 600 (semi-bold)
- **Font Size**: 14px
- **Color**: #333 or primary color
- **Margin Right**: 10px

**Field Values:**
- **Font Weight**: 400 (normal)
- **Font Size**: 16px
- **Color**: #666 or primary text
- **Line Height**: 1.6

**Layout:**
- **Desktop**: 2-3 columns
- **Tablet**: 2 columns
- **Mobile**: 1 column (stacked)

---

## 4. PREREQUISITES SECTION

### 4.1 Prerequisites List Structure

```
┌──────────────────────────────────────────────────────────────┐
│ PREREQUISITES                                                │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ 1. Calculus [Online course from MIT]                        │
│                                                              │
│ 2. Linear Algebra [CS6015 or equivalent]                    │
│    [Online course from MIT]                                 │
│                                                              │
│ 3. Probability Theory [CS6015 or equivalent]                │
│    [Online course from MIT]                                 │
│                                                              │
│ 4. Non-linear Optimization [CS5020 or equivalent]           │
│    [First Course in Optimization by Prof. Soman (IITB)]    │
│                                                              │
│ 5. Pattern Recognition and Machine Learning                 │
│    [CS5691 or equivalent]                                   │
│    [Andrew Ng's ML course]                                  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Structure Format:**
```
[Number]. [Course Name] [Institution/Equivalent] | [Online Resource Link]
```

**Component Specifications:**

| Element | Spec |
|---------|------|
| **Course Number** | Ordered list (1., 2., 3., etc.) |
| **Course Name** | Bold, 16px, primary color |
| **Equivalent Text** | [CS XXXX or equivalent] in brackets |
| **Resource Link** | Pipe-separated \| before link |
| **Link Style** | Underlined, primary color |
| **List Type** | Ordered (ol) or unordered (ul) |
| **Item Spacing** | 15px between items |
| **Indentation** | 20px from left |
| **Link Target** | Opens in new tab (_blank) |

### 4.2 Prerequisites Display Options

#### Option 1: Simple List
```
- Calculus (MIT Course Link)
- Linear Algebra (CS6015 or equivalent) (MIT Course Link)
- Probability Theory (CS6015 or equivalent) (MIT Course Link)
```

#### Option 2: Table Format
```
| # | Prerequisite | Code | Resource |
|---|--------------|------|----------|
| 1 | Calculus | - | MIT Course |
| 2 | Linear Algebra | CS6015 | MIT Course |
| 3 | Probability Theory | CS6015 | MIT Course |
```

#### Option 3: Expandable Cards
```
┌─────────────────────────┐
│ Calculus ▼              │
├─────────────────────────┤
│ Code: None              │
│ Resources: MIT Course   │
│ Duration: ~8 weeks      │
│ Level: Intermediate     │
└─────────────────────────┘
```

**Recommended**: Option 1 (Simple List) for simplicity, Option 2 (Table) for comprehensiveness

### 4.3 Prerequisites Styling

**Container:**
- **Padding**: 30px
- **Background**: Subtle background color
- **Border**: Optional left accent border (4px)
- **Border Radius**: 8px
- **Margin**: 40px 0

**Heading:**
- **Font Size**: 20-24px
- **Font Weight**: 600 (bold)
- **Color**: Primary text color
- **Margin Bottom**: 20px

**List Items:**
- **Font Size**: 16px
- **Line Height**: 1.8
- **Margin Bottom**: 15px
- **Color**: #333

---

## 5. TEACHING ASSISTANTS SYSTEM

### 5.1 Teaching Assistants Table

```
┌────────────────────────────────────────────────────────────────────┐
│ TEACHING ASSISTANTS                                                │
├────────────┬──────────┬──────────────┬──────────┬────────────────┤
│ Name       │ Lab      │ Email        │ Hours    │ Days           │
├────────────┼──────────┼──────────────┼──────────┼────────────────┤
│ Anushka    │ AI4Bh.   │ cs22s015@... │ 3-4 pm   │ Tue, Thu       │
│ Singh      │          │              │          │                │
├────────────┼──────────┼──────────────┼──────────┼────────────────┤
│ Oikantik   │ AI4Bh.   │ cs22s013@... │ 12-1 pm  │ Tue, Thu       │
│ Nath       │          │              │          │                │
├────────────┼──────────┼──────────────┼──────────┼────────────────┤
│ Bibhuti    │ AI4Bh.   │ cs22m031@... │ 2-4 pm   │ Wednesday      │
│ Majhi      │          │              │          │                │
├────────────┼──────────┼──────────────┼──────────┼────────────────┤
│ ... (7 more) │                                                      │
└────────────┴──────────┴──────────────┴──────────┴────────────────┘
```

**Table Specifications:**

| Column | Details |
|--------|---------|
| **Name** | Full name of TA, 16px, bold |
| **Lab** | Lab/Department affiliation, 14px |
| **Email** | Email address, clickable (mailto:), monospace |
| **Office Hours** | Time range (e.g., 3-4 pm), 14px |
| **Days** | Days available (Tue, Thu), comma-separated |

**Table Design:**
- **Border Collapse**: Yes
- **Header Background**: Primary color or dark gray
- **Header Text Color**: White
- **Header Font Weight**: 600 (bold)
- **Header Font Size**: 14-16px
- **Row Height**: 60px minimum
- **Cell Padding**: 12px horizontal, 15px vertical
- **Border**: 1px solid #ddd between rows
- **Alternating Rows**: Light gray (#f5f5f5) background every other row
- **Hover State**: Highlight row with slight background color change
- **Responsive**: Horizontal scroll on mobile, or collapse to cards

### 5.2 Alternative Display Options

#### Option 1: Card Layout (Mobile-Friendly)
```
┌─────────────────────────┐
│ Anushka Singh           │
├─────────────────────────┤
│ Lab: AI4Bharat          │
│ Email: cs22s015@smail.. │
│ Hours: 3-4 pm           │
│ Days: Tue, Thu          │
│                         │
│ [Contact] [Schedule]    │
└─────────────────────────┘
```

**Card Specifications:**
- **Width**: 100% on mobile, 300px on desktop
- **Grid**: 2-3 columns on desktop
- **Padding**: 20px
- **Border Radius**: 12px
- **Shadow**: 0 2px 8px rgba(0,0,0,0.1)
- **Background**: White
- **Hover**: Subtle shadow increase

#### Option 2: Expandable Rows
```
Anushka Singh ▼
├─ Lab: AI4Bharat
├─ Email: cs22s015@smail.iitm.ac.in
├─ Office Hours: 3-4 pm
└─ Available: Tuesday, Thursday
```

**Expandable Specs:**
- **Toggle Icon**: "▼" or "+" icon
- **Expanded Content**: Hidden by default
- **Animation**: Smooth slide-down (200ms)
- **Font Size Details**: 14px

### 5.3 Email and Contact Integration

**Email Links:**
```html
<a href="mailto:cs22s015@smail.iitm.ac.in">cs22s015@smail.iitm.ac.in</a>
```

**Specifications:**
- **Link Color**: Primary blue (#0066cc)
- **Hover State**: Underline + slightly darker color
- **Font Family**: Monospace (courier new or similar)
- **Font Size**: 13-14px

**Contact Buttons (Optional):**
```
[📧 Email] [📅 Schedule Meeting] [💬 Message]
```

**Button Specs:**
- **Style**: Secondary button
- **Padding**: 8px 16px
- **Font Size**: 12px
- **Border Radius**: 6px
- **Margin**: 5px

---

## 6. LECTURES & CURRICULUM

### 6.1 Lectures Table (Comprehensive View)

```
┌─────┬──────────────────────┬──────────┬──────────────┬─────────────┐
│ Lec │ Contents             │ PDF      │ Videos       │ Reading     │
├─────┼──────────────────────┼──────────┼──────────────┼─────────────┤
│ 1   │ (Partial) History of │ Slides   │ M1│M2│M3│M4 │ Schmidhuber │
│     │ Deep Learning, DL    │          │ M5           │ 2014        │
│     │ Success Stories      │          │              │             │
├─────┼──────────────────────┼──────────┼──────────────┼─────────────┤
│ 2   │ McCulloch Pitts      │ Slides   │ M1│M2│M3│M4 │ Rojas Ch.   │
│     │ Neuron, Thresholding │          │ M5│M6│M7│M8 │ 1-4         │
│     │ Logic, Perceptrons   │          │              │             │
├─────┼──────────────────────┼──────────┼──────────────┼─────────────┤
│ ... │ ...                  │ ...      │ ...          │ ...         │
└─────┴──────────────────────┴──────────┴──────────────┴─────────────┘
```

**Column Specifications:**

| Column | Specs |
|--------|-------|
| **Lecture #** | Center-aligned, 50px width, bold |
| **Contents** | Left-aligned, 300px+ width, detailed description |
| **PDF/Slides** | Center-aligned, "Slides" or "Slides-1 \| Slides-2" (multi-part) |
| **Videos** | Left-aligned, pipe-separated (M1 \| M2 \| M3...) |
| **Reading** | Left-aligned, citations with author and year |

**Table Overall Specs:**
- **Border Collapse**: Yes
- **Width**: 100% or max 1200px
- **Header Background**: #2c3e50 or primary dark color
- **Header Text**: White, 600 weight, 14px
- **Row Height**: 80px minimum (due to multi-line content)
- **Cell Padding**: 15px
- **Cell Border**: 1px solid #ddd
- **Alternating Rows**: Light gray background (#f9f9f9)
- **Hover State**: Highlight row
- **Responsive**: Full-width table or horizontal scroll on mobile

### 6.2 Lecture Content Details

#### 6.2.1 Lecture Title Formatting
```
Lecture 1: History of Deep Learning & Success Stories
or
Lecture 1 - Fundamentals: McCulloch Pitts Neurons
```

**Formatting Specs:**
- **Format**: `Lecture [#]: [Title]` or `Lecture [#] - [Category]: [Title]`
- **Font Size**: 16-18px
- **Font Weight**: 600 (bold)
- **Color**: Primary text color

#### 6.2.2 Video Link Formatting
```
M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8
```

**Specs:**
- **Separator**: Pipe character (|)
- **Link Style**: Underlined, colored
- **Font Size**: 13px
- **Hover State**: Darker, possibly with tooltip showing video title
- **Links Open**: New tab (_blank)
- **Max Links**: 10-15 per lecture (if more, consider "More Videos" expandable)

#### 6.2.3 Reading Material Formatting
```
Juergen Schmidhuber, Deep Learning in Neural Networks: An Overview. 2014
```

**Specs:**
- **Format**: Author, Title, Year (Chicago style)
- **Font Size**: 13px
- **Font Style**: Optional italics for book/journal titles
- **Color**: #666
- **Link Style**: If hyperlink, underlined and colored

### 6.3 Alternative Lecture Display

#### Option 1: Lecture Cards (Grid View)
```
┌──────────────────────────┐
│ Lecture 1                │
├──────────────────────────┤
│ History of Deep Learning │
│                          │
│ 📊 5 Videos              │
│ 📚 2 Resources           │
│ 📄 Slides                │
│                          │
│ [View Details]           │
└──────────────────────────┘
```

**Card Specs:**
- **Width**: 250px
- **Grid**: 3-4 columns on desktop
- **Padding**: 20px
- **Border Radius**: 8px
- **Shadow**: 0 2px 8px rgba(0,0,0,0.1)
- **Hover**: Scale 1.05, shadow increase
- **Icon Size**: 16px

#### Option 2: Expandable Lecture List
```
1. History of Deep Learning ▼
   Videos: M1, M2, M3, M4, M5
   Reading: Schmidhuber 2014
   [Download Slides]

2. McCulloch Pitts Neuron ▼
   ...
```

**Specs:**
- **Toggle**: "▼" or "+" icon
- **Click Action**: Expand/collapse details
- **Animation**: Smooth transition (200ms)
- **Default State**: Collapsed (summaries only)

### 6.4 Lecture Details Page (Individual Lecture View)

When clicking on a lecture, show detailed view:

```
┌──────────────────────────────────────────────────────────┐
│ Lecture 5: Gradient Descent and Optimization Algorithms  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ OVERVIEW                                                │
│ This lecture covers various gradient descent methods    │
│ used in deep learning, from basic GD to Adam optimizer. │
│                                                          │
│ TOPICS COVERED                                          │
│ • Gradient Descent (GD)                                 │
│ • Momentum-Based GD                                     │
│ • Nesterov Accelerated GD                               │
│ • Stochastic GD                                         │
│ • AdaGrad                                               │
│ • RMSProp                                               │
│ • Adam Optimizer                                        │
│                                                          │
│ LECTURE MATERIALS                                       │
│ [📄 Download Slides - Part 1] [📄 Download Slides - Part 2]│
│                                                          │
│ VIDEOS                                                  │
│ [M1] [M2] [M3] [M4] [M5] [M6] [M7] [M8]               │
│ [M9] [M10] [M11] [M12] [M13] [M14] [M15]               │
│                                                          │
│ RECOMMENDED READING                                     │
│ • Kingma, D. P., & Ba, J. (2014). Adam: A method for  │
│   stochastic optimization. arXiv preprint...            │
│                                                          │
│ ASSIGNMENTS RELATED TO THIS LECTURE                     │
│ Assignment 1: Implement GD variants                     │
│ Assignment 5: Transformer Training (Uses Adam)          │
│                                                          │
│ [← Back to Curriculum] [← Previous] [Next →]            │
└──────────────────────────────────────────────────────────┘
```

**Page Specifications:**
- **Max Width**: 900px
- **Padding**: 40px
- **Header Size**: 28-32px
- **Section Headers**: 20-24px, bold
- **Text Font Size**: 16px
- **Line Height**: 1.8
- **Content Spacing**: 30px between sections

---

## 7. ASSIGNMENTS & ASSESSMENTS

### 7.1 Assignments Table

```
┌──────┬─────────────────────┬──────────┬──────────────┬──────────────┐
│Topic │ Title               │ Released │ Due Date     │ Status       │
├──────┼─────────────────────┼──────────┼──────────────┼──────────────┤
│ 1    │ Feedforward Neural  │ 19-Feb   │ 10-Mar-2024  │ ✅ Graded    │
│      │ Networks            │ 2024     │              │              │
├──────┼─────────────────────┼──────────┼──────────────┼──────────────┤
│ 2    │ Convolutional       │ 03-Mar   │ 03-Apr-2024  │ ⭕ Ungraded  │
│      │ Neural Networks     │ 2024     │              │              │
├──────┼─────────────────────┼──────────┼──────────────┼──────────────┤
│ 3    │ Recurrent Neural    │ 03-Mar   │ 03-Apr-2024  │ ⭕ Ungraded  │
│      │ Networks            │ 2024     │              │              │
├──────┼─────────────────────┼──────────┼──────────────┼──────────────┤
│ 4    │ RBMs and GANs       │ 03-Mar   │ 03-Mar-2024  │ ⭕ Ungraded  │
│      │                     │ 2024     │              │              │
├──────┼─────────────────────┼──────────┼──────────────┼──────────────┤
│ 5    │ Transformers        │ 22-Mar   │ 22-Apr-2024  │ ✅ Graded    │
│      │                     │ 2024     │              │              │
└──────┴─────────────────────┴──────────┴──────────────┴──────────────┘
```

**Column Specifications:**

| Column | Specs |
|--------|-------|
| **Assignment #** | Numeric (1-5), bold, centered, 50px width |
| **Title/Topic** | Descriptive name, left-aligned, 300px+ |
| **Released/Posted** | Date format DD-MMM-YYYY, centered, 100px |
| **Due Date** | Date format DD-MMM-YYYY, centered, 100px |
| **Grading Status** | ✅ Graded or ⭕ Ungraded, centered, 100px |
| **Resources Link** | Optional "Link" or "Download" button |

**Table Design:**
- **Header Background**: Primary color (blue/teal)
- **Header Text**: White, 600 weight, 14px
- **Row Height**: 60px
- **Cell Padding**: 12px horizontal, 15px vertical
- **Border**: 1px solid #ddd
- **Alternating Rows**: #f9f9f9
- **Hover State**: Highlight row, cursor pointer
- **Row Click**: Expandable or links to assignment page

### 7.2 Assignment Grading Status Indicators

**Visual Indicators:**
- **✅ Graded**: Green checkmark, "Graded", green background (light)
- **⭕ Ungraded**: Orange circle, "Ungraded", orange background (light)
- **🔄 In Progress**: Yellow arrows, "In Progress"
- **📋 Submitted**: Blue checkmark, "Submitted"
- **⏰ Upcoming**: Gray clock, "Upcoming"

**Styling:**
- **Size**: 20x20px icon
- **Margin Right**: 5px
- **Text Size**: 13px
- **Font Weight**: 500

### 7.3 Assignment Detail Page

```
┌───────────────────────────────────────────────────────────┐
│ Assignment 1: Feedforward Neural Networks                 │
├───────────────────────────────────────────────────────────┤
│                                                           │
│ Status: ✅ Graded  Due: 10-Mar-2024  Points: 100          │
│                                                           │
│ DESCRIPTION                                              │
│ In this assignment, you will implement a feedforward    │
│ neural network from scratch using NumPy...               │
│                                                           │
│ LEARNING OBJECTIVES                                      │
│ • Understand forward propagation                         │
│ • Implement backpropagation algorithm                    │
│ • Train network on standard datasets                     │
│                                                           │
│ REQUIREMENTS                                             │
│ • Python 3.7+                                            │
│ • NumPy, Pandas                                          │
│ • Submission format: .py files                           │
│                                                           │
│ RESOURCES                                                │
│ • Lecture 2: Perceptrons and MLPs                        │
│ • Lecture 3: Sigmoid Neurons                             │
│ • Lecture 4: Backpropagation                             │
│                                                           │
│ SUBMISSION                                               │
│ [📤 Download Template] [📤 Upload Assignment]             │
│                                                           │
│ [← Back to Assignments]                                  │
└───────────────────────────────────────────────────────────┘
```

**Detail Page Specs:**
- **Max Width**: 900px
- **Padding**: 40px
- **Title Size**: 28px
- **Section Headers**: 18px, bold
- **Text Size**: 16px
- **Line Height**: 1.8
- **Code Blocks**: Monospace, background color, padding

---

## 8. EXAMS SECTION

### 8.1 Exam Schedule Display

```
┌───────────────────────────────────────────────────────────┐
│ END-SEMESTER EXAMINATION                                  │
├───────────────────────────────────────────────────────────┤
│                                                           │
│ Date: 11-May-2024 (Saturday)                              │
│ Time: [TBD / 9:00 AM - 12:00 PM]                          │
│ Location: [TBD / Main Campus]                             │
│ Duration: 3 hours                                         │
│ Marks: 100                                                │
│                                                           │
│ Format: Written exam (mix of theory and problems)         │
│ Syllabus: All lectures (1-14)                             │
│                                                           │
│ [📥 Download Exam Guidelines]                             │
│ [📥 Download Sample Questions]                            │
│ [📥 Download Previous Year Exams]                         │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Exam Information Fields:**
- **Date**: Full date with day (11-May-2024 (Saturday))
- **Time**: Start time - end time if fixed
- **Location**: Venue/Room information
- **Duration**: Total time allowed
- **Total Marks**: Points/percentage
- **Format**: Exam type (written, practical, mixed)
- **Syllabus**: Covered lectures/topics
- **Exam Guidelines**: Link to rules and regulations

**Component Specs:**
- **Container Padding**: 30px
- **Background**: Light background color
- **Border**: 1px border, rounded
- **Section Margin**: 20px
- **Label Font Weight**: 600
- **Value Font Size**: 16px

### 8.2 Exam Preparation Resources

```
┌───────────────────────────────────────────────────────────┐
│ EXAM PREPARATION                                          │
├───────────────────────────────────────────────────────────┤
│                                                           │
│ 📚 Review Lectures 1-14                                   │
│ ✏️  Practice with assignments 1-5                         │
│ 💡 Review key concepts from each lecture                  │
│ 🎯 Solve previous year exam papers                        │
│ 📝 Create summary notes for revision                      │
│                                                           │
│ IMPORTANT DATES                                           │
│ • Last lecture: 08-May-2024                               │
│ • Exam review session: 09-May-2024 (2-4 pm)              │
│ • Exam date: 11-May-2024                                  │
│                                                           │
│ RESOURCES                                                │
│ [📥 Sample Paper] [📥 Marking Scheme] [📥 FAQ]            │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

---

## 9. TUTORIALS SECTION

### 9.1 Tutorials Table

```
┌────────┬───────────────────────┬──────────────┬──────────────┐
│ # | Topic                     │ Resources    │ Covered in   │
├────────┼───────────────────────┼──────────────┼──────────────┤
│ 1  │ Calculus                 │ [Video Link] │ Pre-course   │
│    │                          │ [Slides]     │ material     │
├────────┼───────────────────────┼──────────────┼──────────────┤
│ 2  │ Linear Algebra           │ [Video Link] │ Pre-course   │
│    │                          │ [Slides]     │ material     │
├────────┼───────────────────────┼──────────────┼──────────────┤
│ 3  │ MP Neurons, Perceptrons  │ [Video Link] │ Lecture 2    │
│    │                          │ [Slides]     │              │
├────────┼───────────────────────┼──────────────┼──────────────┤
│ 4  │ Sigmoid Neurons, Grad.   │ [Video Link] │ Lectures 3-4 │
│    │ Descent                  │ [Slides]     │              │
├────────┼───────────────────────┼──────────────┼──────────────┤
│ 5  │ FFNNs, Backpropagation   │ [Video Link] │ Lectures 4-5 │
│    │                          │ [Slides]     │              │
└────────┴───────────────────────┴──────────────┴──────────────┘
```

**Column Specs:**
- **#**: Tutorial number, 30px width
- **Topic**: Title, 300px+ width
- **Resources**: Links to videos, slides, documents
- **Covered In**: Which lecture(s) use this tutorial

**Table Design:**
- Same as lectures table
- Row Height**: 70px
- **Cell Padding**: 12px

### 9.2 Tutorial Detail View

```
┌───────────────────────────────────────────────────────────┐
│ Tutorial 1: Calculus Fundamentals                         │
├───────────────────────────────────────────────────────────┤
│                                                           │
│ TOPICS COVERED                                            │
│ • Derivatives and partial derivatives                     │
│ • Chain rule                                              │
│ • Gradient vectors                                        │
│ • Taylor series expansion                                 │
│                                                           │
│ WHY THIS MATTERS                                          │
│ Calculus is fundamental to understanding gradient descent │
│ and backpropagation algorithms in deep learning.          │
│                                                           │
│ RESOURCES                                                │
│ [▶️ Watch Video] [📄 View Slides]                         │
│                                                           │
│ PRACTICE PROBLEMS                                         │
│ [📥 Download Problems] [📥 Download Solutions]            │
│                                                           │
│ RELATED LECTURES                                          │
│ • Lecture 3: Gradient Descent                             │
│ • Lecture 4: Backpropagation                              │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

---

## 10. RESOURCES & EXTERNAL LINKS

### 10.1 External Resources Section

```
┌───────────────────────────────────────────────────────────┐
│ ADDITIONAL RESOURCES                                      │
├───────────────────────────────────────────────────────────┤
│                                                           │
│ SPECIALIZATION COURSES                                    │
│ • Deep Learning for Computer Vision [from Stanford]       │
│ • Deep Learning for NLP [from Stanford]                   │
│ • [Additional specialized courses...]                     │
│                                                           │
│ RECOMMENDED BOOKS                                         │
│ • Deep Learning by Goodfellow, Bengio, and Courville     │
│ • Neural Networks and Deep Learning by Nielsen           │
│ • [Additional reading recommendations...]                 │
│                                                           │
│ ONLINE COMMUNITIES                                        │
│ • Deep Learning Subreddit: r/deeplearning                │
│ • Fast.ai forums                                          │
│ • [Additional communities...]                             │
│                                                           │
│ TOOLS & FRAMEWORKS                                        │
│ • TensorFlow & Keras                                      │
│ • PyTorch                                                 │
│ • [Additional frameworks...]                              │
│                                                           │
│ RESEARCH PAPERS                                           │
│ • Seminal papers in deep learning                         │
│ • [Links to arXiv, IEEE, ACM...]                          │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Resource Formatting:**
- **Category Headers**: 18px, bold
- **Resource Items**: Bullet list, 16px
- **Links**: Blue, underlined, opens in new tab
- **Icon**: Optional icon before category (📚, 🔗, etc.)
- **Spacing**: 20px between categories

### 10.2 Resource Cards (Alternative Display)

```
┌─────────────────────────────┐
│ 📚 Deep Learning for CV     │
│                             │
│ Stanford University         │
│ Covers: Image processing,  │
│ CNN architectures, vision  │
│ tasks                       │
│                             │
│ [Learn More →]              │
└─────────────────────────────┘
```

**Card Specs:**
- **Width**: 250px
- **Grid**: 2-3 columns
- **Padding**: 20px
- **Border Radius**: 8px
- **Icon Size**: 32px
- **Shadow**: 0 2px 8px rgba(0,0,0,0.1)

---

## 11. NAVIGATION & INFORMATION ARCHITECTURE

### 11.1 Site Map Structure

```
HOME
├── COURSE OVERVIEW
│   ├── Quick Info
│   ├── Prerequisites
│   └── Eligibility
│
├── CURRICULUM
│   ├── Lecture List (14 lectures)
│   │   └── Individual Lecture Pages
│   ├── Tutorial Resources (5 tutorials)
│   └── Learning Path Visualization
│
├── TEACHING TEAM
│   ├── Instructor Profile
│   └── Teaching Assistants (10 TAs)
│       └── TA Profiles/Contact
│
├── ASSESSMENTS
│   ├── Assignments (5 assignments)
│   │   └── Individual Assignment Pages
│   ├── Tutorials
│   └── Exams
│       └── Exam Schedule & Resources
│
├── RESOURCES
│   ├── External Links
│   ├── Recommended Books
│   ├── Specialized Courses
│   └── Tools & Frameworks
│
├── ANNOUNCEMENTS (Optional)
│   └── Course Updates
│
├── FAQ (Optional)
│   └── Frequently Asked Questions
│
└── CONTACT
    ├── Contact Form
    └── Support Email
```

### 11.2 Navigation Bar Structure

**Primary Navigation (Header):**
```
[Logo] Course Name | Home | Curriculum | Team | Assessments | Resources | [Search]
```

**Secondary Navigation (Breadcrumb):**
```
Home > Curriculum > Lecture 5 > Optimization
```

**Sidebar Navigation (Optional on detail pages):**
```
Lectures
├─ Lecture 1
├─ Lecture 2
├─ Lecture 3 [Current]
├─ Lecture 4
└─ ...
```

### 11.3 Footer Navigation

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ Quick Links       Contact         Resources                │
│ • Home            cs22m031@...    • MIT OpenCourseWare     │
│ • Curriculum      +91 XXXX XXXX   • Stanford Courses       │
│ • Team            [Contact Form]  • TensorFlow Docs        │
│ • Assignments     Office Hours    • PyTorch Docs           │
│ • Resources                                                │
│                                                             │
│ © 2024 IITM. All Rights Reserved | Privacy | Accessibility │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Footer Specs:**
- **Background**: Dark (charcoal or dark blue)
- **Text Color**: Light/white
- **Columns**: 3-4 columns
- **Link Color**: Light blue
- **Font Size**: 13-14px
- **Padding**: 40px
- **Copyright Text**: 12px, muted color

---

## 12. VISUAL DESIGN COMPONENTS

### 12.1 Color Palette

**Primary Color Scheme:**
```
Primary Blue: #0066cc or #2196F3
Secondary Color: #FF9800 or #FF6B35
Background: #f9f9f9 or #ffffff
Text Primary: #333333 or #1a1a1a
Text Secondary: #666666 or #555555
Border: #dddddd or #cccccc
Success: #4CAF50
Warning: #FFC107
Error: #F44336
```

**Alternative (Teal/Professional):**
```
Primary Teal: #1DB6B6 or #00897B
Secondary Brown: #5E5240
Light Background: #F2F2F0
Dark Text: #1f2121
Light Text: #a7a9a9
```

### 12.2 Button Styles

**Primary Button (CTA)**
```
Background: Primary Color (#0066cc)
Text Color: White
Padding: 12px 24px
Border Radius: 6px
Font Weight: 600
Hover: Darker shade, slight scale (1.02)
Active: Darker shade
Shadow: 0 2px 4px rgba(0,0,0,0.2)
```

**Secondary Button**
```
Background: Light gray (#f0f0f0)
Text Color: Primary dark
Border: 1px solid #ddd
Padding: 12px 24px
Border Radius: 6px
Hover: Darker background
```

**Tertiary Button (Links)**
```
Background: Transparent
Text Color: Primary blue
Text Decoration: Underline
Hover: Darker blue, no underline
```

### 12.3 Alert/Info Boxes

**Information Box**
```
┌──────────────────────────────────────────┐
│ ℹ️  Note: Lectures are recorded and      │
│ available on YouTube                     │
└──────────────────────────────────────────┘
```

**Success Alert**
```
┌──────────────────────────────────────────┐
│ ✅ Assignment submitted successfully     │
└──────────────────────────────────────────┘
```

**Warning Alert**
```
┌──────────────────────────────────────────┐
│ ⚠️  Assignment deadline is approaching   │
└──────────────────────────────────────────┘
```

**Box Specs:**
- **Padding**: 15px
- **Border Radius**: 4px
- **Border Left**: 4px colored border
- **Background**: Light tint of alert color
- **Icon Size**: 20px
- **Font Size**: 14px

---

## 13. CONTENT MANAGEMENT ELEMENTS

### 13.1 Last Updated Information

```
Last updated: 15-Jan-2024
Last revised: Instructor name
```

**Specs:**
- **Font Size**: 12px
- **Color**: #999 (muted)
- **Position**: Bottom of page or sidebar
- **Format**: "Last updated: DD-MMM-YYYY"

### 13.2 Expandable Sections

**Unopened:**
```
Lecture 1 ▼ (Collapsed)
```

**Opened:**
```
Lecture 1 ▲ (Expanded)
├─ Videos: M1, M2, M3...
├─ Reading: [Links]
└─ Slides: [Download]
```

**Implementation:**
- **Toggle Icon**: "▼" for collapsed, "▲" for expanded
- **Animation**: Smooth slide-down (200-300ms)
- **Content Indentation**: 20px left margin
- **Font Size**: 14px for expanded content

### 13.3 Print-Friendly Styles

**Print CSS:**
- Hide navigation and footer
- Adjust colors to grayscale
- Use readable fonts
- Optimize spacing for paper
- Add page breaks for long tables
- Include URLs as footnotes for links

---

## 14. ACCESSIBILITY & TECHNICAL REQUIREMENTS

### 14.1 Accessibility Features

**Text Accessibility:**
- [ ] Minimum font size: 14px body text
- [ ] Line height: Minimum 1.5
- [ ] Color contrast: 4.5:1 for normal text, 3:1 for large text
- [ ] No text as images (alt text for any images)

**Navigation Accessibility:**
- [ ] Keyboard navigation support (Tab key)
- [ ] Focus indicators visible
- [ ] Skip to main content link
- [ ] Semantic HTML (h1, h2, nav, main, etc.)
- [ ] ARIA labels for complex components

**Table Accessibility:**
- [ ] Proper table headers (th tags)
- [ ] Row/column headers associated
- [ ] Summary attribute (optional)

**Form Accessibility:**
- [ ] Labels associated with inputs
- [ ] Error messages clear and helpful
- [ ] Required fields marked
- [ ] Keyboard operable

**Image Accessibility:**
- [ ] Alt text for all meaningful images
- [ ] Descriptive captions
- [ ] SVG icons with titles

### 14.2 Mobile Accessibility

- [ ] Responsive design (mobile-first)
- [ ] Touch targets minimum 44x44px
- [ ] Readable on small screens
- [ ] No horizontal scroll
- [ ] Optimized tap targets

### 14.3 SEO Optimization

**Meta Tags:**
```html
<title>CS6910: Deep Learning | IITM</title>
<meta name="description" content="Comprehensive deep learning course...">
<meta name="keywords" content="deep learning, neural networks, AI...">
<meta property="og:title" content="CS6910: Deep Learning">
<meta property="og:description" content="...">
```

**Heading Hierarchy:**
- [ ] One H1 per page
- [ ] Proper H2, H3 nesting
- [ ] Descriptive headings
- [ ] Keyword inclusion

**URL Structure:**
```
example.com/ (home)
example.com/curriculum/ (lectures)
example.com/curriculum/lecture-5/ (individual)
example.com/team/ (TAs)
example.com/assignments/ (all assignments)
example.com/assignments/assignment-1/ (individual)
```

---

## 15. TYPOGRAPHY & SPACING

### 15.1 Font Selection

**Recommended Font Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Alternative Professional Stack:**
```css
font-family: "Georgia", "Garamond", serif;
```

**Monospace (for code):**
```css
font-family: "Monaco", "Courier New", monospace;
```

### 15.2 Font Sizing Scale

```
H1 (Page Title): 32-40px, weight 700
H2 (Section): 24-28px, weight 600
H3 (Subsection): 20-24px, weight 600
H4 (Minor heading): 18px, weight 600
Body Text: 16px, weight 400
Small Text: 14px, weight 400
Caption/Meta: 12px, weight 400
```

### 15.3 Spacing Scale

```
xs: 4px (between inline elements)
sm: 8px (tight spacing)
md: 16px (standard spacing)
lg: 24px (section spacing)
xl: 32px (major section spacing)
xxl: 48px (page padding)
```

**Specific Spacing:**
- **Section Padding**: 40-60px (top/bottom), 30-40px (left/right)
- **Element Margins**: 20-30px between major elements
- **Line Height**: 1.6-1.8 for body text
- **Paragraph Margins**: 0 top, 20px bottom

---

## 16. COLOR & VISUAL STYLING

### 16.1 Color Usage Guidelines

**Primary Color (#0066cc - Blue)**
- Headings
- Links
- Primary buttons
- Active navigation items
- Important highlights

**Secondary Color (#FF9800 - Orange)**
- Call-to-action buttons
- Alerts/warnings
- Accent highlights
- Icons

**Neutral Colors**
- Background: #f9f9f9
- Borders: #ddd or #ccc
- Text: #333 (primary), #666 (secondary)
- Disabled: #aaa

**Status Colors**
- Success: #4CAF50 (green)
- Warning: #FFC107 (yellow/orange)
- Error: #F44336 (red)
- Info: #2196F3 (blue)

### 16.2 Background Treatments

**Option 1: Minimal (Recommended)**
- White background (#fff)
- Light gray accents (#f9f9f9)
- Subtle shadows for depth

**Option 2: Academic**
- Cream background (#F2F2F0)
- Deep blue accents
- Structured spacing

**Option 3: Modern**
- White background
- Gradient accents
- Bold colors

### 16.3 Shadow and Depth

**Subtle Elevation:**
```
box-shadow: 0 1px 2px rgba(0,0,0,0.05);
```

**Card Shadow:**
```
box-shadow: 0 2px 8px rgba(0,0,0,0.1);
```

**Deep Shadow (Hover):**
```
box-shadow: 0 4px 12px rgba(0,0,0,0.15);
```

---

## 17. RESPONSIVE DESIGN ELEMENTS

### 17.1 Breakpoints

```css
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
Large Desktop: > 1280px
```

### 17.2 Responsive Behavior

**Tables:**
- Desktop: Full table with all columns
- Tablet: Some column hiding or horizontal scroll
- Mobile: Card layout or simplified table

**Navigation:**
- Desktop: Horizontal menu bar
- Mobile: Hamburger menu (collapsible)

**Layout:**
- Desktop: 3-4 columns maximum
- Tablet: 2 columns
- Mobile: 1 column, full-width stacking

**Font Sizes:**
- Desktop: 16px body
- Tablet: 15px body
- Mobile: 14-15px body

---

## 18. FOOTER & SUPPORT ELEMENTS

### 18.1 Footer Structure

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  Quick Links          Contact           Resources         │
│  • Home               Email:             • MIT OCW         │
│  • Curriculum         instructor@...     • Stanford        │
│  • Team              Office:              • TF/PyTorch     │
│  • Assignments        Room 123, Bldg X   • Papers          │
│  • Resources                              • Communities    │
│                                                           │
│  Social Links         Policies           Site              │
│  [LinkedIn] [GitHub]  • Privacy          • Sitemap         │
│  [Twitter] [YouTube]  • Terms            • Accessibility  │
│                       • Disclaimer       • Report Issue    │
│                                                           │
│  © 2024 IITM Department of CSE. All Rights Reserved      │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Footer Specs:**
- **Background**: Dark (#333 or #2c3e50)
- **Text Color**: Light (#fff or #eee)
- **Padding**: 40px vertical, 30px horizontal
- **Columns**: 4-5 columns
- **Link Color**: Light blue (#66b3ff)
- **Font Size**: 13px (body), 12px (copyright)

### 18.2 Support/Help Section

```
┌───────────────────────────────────────┐
│ Need Help?                            │
├───────────────────────────────────────┤
│ Email: cs6910-support@iitm.ac.in      │
│ Office Hours: See Teaching Team page  │
│ [Contact Form] [FAQ] [Report Issue]   │
└───────────────────────────────────────┘
```

---

## 19. ADVANCED COMPONENTS

### 19.1 Search Functionality

**Search Bar Placement:**
- Top right of header
- Sticky on scroll

**Search Specs:**
- **Width**: 250px
- **Height**: 40px
- **Placeholder**: "Search lectures, assignments..."
- **Icon**: Magnifying glass
- **Results Page**: List of results with highlighting

### 19.2 Learning Path Visualization

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Start   │───→│ Lecture  │───→│ Tutorial │───→│Assignment│
│          │    │  Content │    │ & Lab    │    │          │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
                                                        │
                                                        ↓
                                                 ┌──────────┐
                                                 │ Exam/     │
                                                 │ Project   │
                                                 └──────────┘
```

**Specs:**
- **Interactive**: Click to jump to section
- **Progress Indicator**: Visual progress on current path
- **Visual**: Boxes connected by arrows
- **Colors**: Completed (green), current (blue), upcoming (gray)

### 19.3 Discussion Forum / Comments

**Comment Section:**
```
┌────────────────────────────────────────┐
│ 💬 Questions & Discussion               │
├────────────────────────────────────────┤
│                                        │
│ User (Timestamp)                       │
│ > This is a great lecture on GD!       │
│ > I have a question about momentum...  │
│   [Reply] [Vote ✓ 5]                    │
│                                        │
│  ├─ TA Reply (Timestamp)               │
│  │  > Good question! The key is...     │
│  │  [Reply] [Vote ✓ 8]                  │
│  │                                     │
│  └─ User Reply (Timestamp)             │
│     > Thank you for clarifying!        │
│     [Reply] [Vote ✓ 2]                  │
│                                        │
└────────────────────────────────────────┘
```

**Specs:**
- **Nested Threading**: Threaded replies
- **Voting**: Upvote system (👍)
- **User Avatar**: Small profile picture
- **Timestamp**: Relative time ("2 days ago")
- **TA Indicator**: Badge showing instructor/TA posts
- **Reply Box**: Text editor for new comments

---

## 20. IMPLEMENTATION CODE TEMPLATES

### 20.1 HTML Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CS6910: Deep Learning Course">
    <title>CS6910/CS7015: Deep Learning</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="navbar">
            <div class="container">
                <a href="/" class="logo">CS6910</a>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/curriculum">Curriculum</a></li>
                    <li><a href="/team">Teaching Team</a></li>
                    <li><a href="/assignments">Assignments</a></li>
                    <li><a href="/resources">Resources</a></li>
                </ul>
                <input type="text" placeholder="Search..." class="search">
            </div>
        </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <section class="hero">
            <div class="container">
                <h1>CS6910/CS7015: Deep Learning</h1>
                <p class="subtitle">Master the fundamentals and advanced techniques of deep learning</p>
            </div>
        </section>

        <section class="course-info">
            <div class="container">
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Instructor:</strong> Mitesh M. Khapra
                    </div>
                    <div class="info-item">
                        <strong>When:</strong> Jan-May 2024
                    </div>
                    <div class="info-item">
                        <strong>Lectures:</strong> Slot H
                    </div>
                    <div class="info-item">
                        <strong>Where:</strong> CS25
                    </div>
                </div>
            </div>
        </section>

        <!-- Add other sections here -->
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container footer-content">
            <!-- Footer columns -->
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 IITM. All Rights Reserved</p>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

### 20.2 CSS Structure Template

```css
/* CSS Variables */
:root {
    --primary-color: #0066cc;
    --secondary-color: #FF9800;
    --text-primary: #333;
    --text-secondary: #666;
    --background: #f9f9f9;
    --border-color: #ddd;
    
    --font-size-body: 16px;
    --font-size-heading: 28px;
    --spacing-base: 16px;
    --spacing-lg: 40px;
}

/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: var(--font-size-body);
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--background);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-base);
}

/* Header */
.header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: var(--spacing-base);
}

.nav-links a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--primary-color);
}

/* Hero Section */
.hero {
    padding: var(--spacing-lg) var(--spacing-base);
    text-align: center;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.hero h1 {
    font-size: var(--font-size-heading);
    margin-bottom: var(--spacing-base);
}

/* Tables */
table {
    width: 100%;
    border-collapse: collapse;
    margin: var(--spacing-lg) 0;
}

th {
    background-color: var(--primary-color);
    color: white;
    padding: 12px;
    text-align: left;
    font-weight: 600;
}

td {
    padding: 12px;
    border-bottom: 1px solid var(--border-color);
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f0f0f0;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-weight: 600;
}

.btn:hover {
    background-color: #0052a3;
    transform: scale(1.02);
}

.btn-secondary {
    background-color: var(--secondary-color);
}

.btn-secondary:hover {
    background-color: #ff8c00;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .container {
        padding: 0 var(--spacing-base);
    }
    
    table {
        font-size: 14px;
    }
}
```

### 20.3 Component Templates

**Lecture Card Component:**
```html
<div class="lecture-card">
    <div class="lecture-number">1</div>
    <div class="lecture-content">
        <h3>History of Deep Learning</h3>
        <p>From early neural networks to modern architectures</p>
    </div>
    <div class="lecture-meta">
        <span class="videos">5 Videos</span>
        <span class="reading">2 Resources</span>
    </div>
    <button class="btn btn-sm">View Details</button>
</div>
```

**TA Card Component:**
```html
<div class="ta-card">
    <div class="ta-avatar">AS</div>
    <div class="ta-info">
        <h4>Anushka Singh</h4>
        <p class="ta-lab">AI4Bharat Lab</p>
        <p class="ta-hours">3-4 pm</p>
        <p class="ta-days">Tuesday, Thursday</p>
        <a href="mailto:cs22s015@smail.iitm.ac.in" class="btn btn-sm">Email</a>
    </div>
</div>
```

**Assignment Item Component:**
```html
<div class="assignment-item">
    <div class="assignment-header">
        <h3>Assignment 1: Feedforward Neural Networks</h3>
        <span class="badge badge-graded">Graded</span>
    </div>
    <div class="assignment-dates">
        <span class="released">Released: 19-Feb-2024</span>
        <span class="due">Due: 10-Mar-2024</span>
    </div>
    <p class="assignment-description">Implement a feedforward neural network with backpropagation...</p>
    <a href="assignment-1.html" class="btn">View Assignment</a>
</div>
```

---

## SUMMARY: COMPLETE COMPONENT CHECKLIST

### Essential Components (Must Have)
- [ ] Page header with course title
- [ ] Navigation bar with main sections
- [ ] Course metadata block
- [ ] Prerequisites list
- [ ] Teaching assistants table
- [ ] Lectures/curriculum table
- [ ] Assignments table
- [ ] Exam information
- [ ] Footer with links

### Recommended Components (Should Have)
- [ ] Tutorial section
- [ ] External resources
- [ ] Hero/welcome section
- [ ] Breadcrumb navigation
- [ ] Search functionality
- [ ] Last updated info
- [ ] Contact/support section
- [ ] Mobile-responsive design

### Advanced Components (Nice to Have)
- [ ] Course cards/grid layout
- [ ] Learning path visualization
- [ ] Discussion forum
- [ ] Announcement section
- [ ] FAQ page
- [ ] Calendar/timeline view
- [ ] Progress tracking
- [ ] Certificate upon completion

---

**This comprehensive guide covers ALL components from both CS6910 and ML Basics websites with detailed specifications, code templates, and implementation guidelines. Use this as your master reference for building a professional course website.**

