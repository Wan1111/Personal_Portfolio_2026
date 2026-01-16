# Juan IV R. Magarro - Portfolio

A modern, professional portfolio website built with React and Tailwind CSS.

## Features

- 🎨 Modern, clean, and professional design
- 📱 Fully responsive across all devices
- ⚡ Built with React and Vite for optimal performance
- 🎯 Smooth scrolling navigation
- 🌓 Dark/Light mode toggle
- 🎭 Advanced 3D animations and interactions using Three.js
- ✨ Framer Motion animations for smooth transitions
- 🖼️ Profile image gallery with hover effects
- 🚀 Ready for Netlify deployment with database support
- 📧 Contact form with Netlify Forms integration

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **Three.js & React Three Fiber** - 3D graphics and animations
- **Framer Motion** - Advanced animations and interactions
- **Netlify** - Hosting and serverless functions

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Deployment to Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

## Contact Form Database Setup

The contact form uses **Netlify Forms** by default, which stores submissions in your Netlify dashboard.

### To add a custom database:

1. Update `netlify/functions/submit-contact.js` with your database connection
2. Add your database credentials as environment variables in Netlify
3. Install required database packages (e.g., `mongodb`, `pg` for PostgreSQL)

### Example Database Integrations:

**MongoDB:**
```javascript
const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGODB_URI)
await client.db().collection('contacts').insertOne(data)
```

**PostgreSQL:**
```javascript
const { Pool } = require('pg')
const pool = new Pool({ connectionString: process.env.DATABASE_URL })
await pool.query('INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4)', [name, email, subject, message])
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── netlify/
│   └── functions/
│       └── submit-contact.js
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── netlify.toml
```

## Customization

Update your personal information in:
- `src/components/Hero.jsx` - Hero section and social links
- `src/components/About.jsx` - About section
- `src/components/Skills.jsx` - Skills and technologies
- `src/components/Projects.jsx` - Projects section
- `src/components/Contact.jsx` - Contact information

## Contact Information

- **Email:** magarro.jn@gmail.com
- **LinkedIn:** [Juan Magarro](https://www.linkedin.com/in/juan-magarro-6136b1152/)
- **GitHub:** [Wan1111](https://github.com/Wan1111)

## License

© 2024 Juan IV R. Magarro. All rights reserved.
