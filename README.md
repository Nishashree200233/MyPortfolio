# Professional Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations and a professional design. Perfect for researchers, academics, and professionals to showcase their work and experience.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern UI**: Clean, professional design with gradient backgrounds and cards
- **Interactive Navigation**: Smooth scrolling navigation with mobile menu
- **Contact Form**: Functional contact form with validation
- **Downloadable Resume**: Resume download functionality
- **Publication Filtering**: Filter publications by type (Journal, Conference, Book)
- **Social Media Integration**: Links to professional social media profiles

## Sections Included

1. **Hero Section** - Professional introduction with call-to-action buttons
2. **About Me** - Personal information and professional overview
3. **Research** - Research areas, statistics, and philosophy
4. **Current Research** - Ongoing projects and initiatives
5. **Publications** - Academic publications with filtering
6. **Current Position** - Current role and responsibilities
7. **Resume** - Downloadable resume with skills overview
8. **Education & Experience** - Academic background and work history
9. **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Customization Guide

### Personal Information

Update the following files with your personal information:

#### 1. Header Component (`src/components/Header.js`)
```javascript
// Line 25: Update your name
<h2>Dr. [Your Name]</h2>
```

#### 2. Hero Component (`src/components/Hero.js`)
```javascript
// Line 18: Update your name
Dr. [Your Name]

// Line 23: Update your title
Research Scientist & Academic Professional

// Line 28-31: Update your description
Dedicated researcher with expertise in [Your Field]...
```

#### 3. About Component (`src/components/About.js`)
```javascript
// Lines 6-12: Update personal information
const personalInfo = [
  { icon: <User size={20} />, label: 'Name', value: 'Dr. [Your Name]' },
  { icon: <Award size={20} />, label: 'Title', value: 'Research Scientist' },
  { icon: <MapPin size={20} />, label: 'Location', value: '[Your City, Country]' },
  { icon: <Mail size={20} />, label: 'Email', value: 'your.email@university.edu' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+1 (555) 123-4567' }
];
```

#### 4. Contact Component (`src/components/Contact.js`)
```javascript
// Lines 8-18: Update contact information
const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: 'Email',
    value: 'your.email@university.edu',
    link: 'mailto:your.email@university.edu'
  },
  // ... other contact info
];
```

### Content Updates

#### Research Areas
Update research areas in `src/components/Research.js`:
```javascript
const researchAreas = [
  {
    icon: <FlaskConical size={32} />,
    title: 'Experimental Research',
    description: 'Your research description...',
    keywords: ['Your', 'Keywords', 'Here']
  },
  // ... add more research areas
];
```

#### Publications
Update publications in `src/components/Publications.js`:
```javascript
const publications = [
  {
    title: 'Your Publication Title',
    authors: 'Your Name, Co-author Name',
    journal: 'Journal Name',
    year: 2023,
    doi: '10.1000/your.doi',
    type: 'journal',
    impact: 'High Impact',
    citations: 45,
    abstract: 'Your abstract...'
  },
  // ... add more publications
];
```

#### Education & Experience
Update education and work experience in `src/components/Education.js`:
```javascript
const education = [
  {
    degree: 'Your Degree',
    institution: 'Your University',
    location: 'City, State',
    period: 'Year - Year',
    gpa: 'Your GPA',
    thesis: 'Your Thesis Title',
    highlights: ['Highlight 1', 'Highlight 2']
  },
  // ... add more education
];
```

### Styling Customization

#### Colors
The main color scheme uses a purple gradient. To change colors, update the CSS variables in `src/index.css`:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Primary color for buttons and accents */
color: #667eea;
```

#### Fonts
The website uses Inter font. To change fonts, update the Google Fonts link in `public/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font-family in `src/index.css`:

```css
body {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, ...;
}
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## Technologies Used

- **React 18** - Frontend framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **CSS3** - Styling with modern features
- **HTML5** - Semantic markup

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the repository or contact the developer.

---

**Note**: Remember to replace all placeholder content (marked with `[Your Name]`, `[Your Field]`, etc.) with your actual information before deploying the website. 