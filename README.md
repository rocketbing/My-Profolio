# Steve Zhang's Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ⚡ **Fast**: Built with Vite for optimal performance
- 🎭 **Animations**: Smooth transitions and interactions with Framer Motion
- 📧 **Contact Form**: Ready-to-use contact form (needs backend integration)

## Tech Stack

- **Frontend**: React 19, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Experience.jsx  # Experience timeline
│   ├── Projects.jsx    # Projects showcase
│   ├── Education.jsx   # Education section
│   ├── Contact.jsx     # Contact form
│   ├── Navbar.jsx      # Navigation bar
│   └── Footer.jsx      # Footer
├── data/               # Data files
│   ├── personalInfo.js # Personal information
│   ├── skills.js       # Skills data
│   ├── experience.js   # Work experience
│   ├── projects.js     # Projects data
│   └── education.js    # Education data
├── lib/                # Utility functions
│   └── utils.js        # Helper functions
└── App.jsx             # Main app component
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization

### Personal Information
Update your personal information in `src/data/personalInfo.js`:
- Name, title, email, phone
- Bio and description
- Social media links
- Resume URL

### Skills
Modify your skills in `src/data/skills.js`:
- Frontend technologies
- Backend technologies
- Tools and frameworks
- Soft skills

### Experience
Update your work experience in `src/data/experience.js`:
- Company names and positions
- Job descriptions and achievements
- Technologies used

### Projects
Add your projects in `src/data/projects.js`:
- Project titles and descriptions
- Images and links
- Technologies used
- GitHub and live demo URLs

### Education
Update your education in `src/data/education.js`:
- Degrees and certifications
- Institutions and dates
- Descriptions

## Contact Form Integration

The contact form is ready but needs backend integration. You can use:

1. **Formspree**: Simple form handling service
2. **EmailJS**: Send emails directly from the frontend
3. **Custom backend**: Build your own API endpoint

### Formspree Integration
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the form action in `Contact.jsx`

### EmailJS Integration
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install EmailJS: `npm install @emailjs/browser`
3. Update the form submission in `Contact.jsx`

## Deployment

The project can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions
- **Firebase Hosting**: `firebase deploy`1

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Steve Zhang - torontobing@hotmail.com

Project Link: [https://github.com/rocketbing/react-portfolio](https://github.com/rocketbing/react-portfolio)
