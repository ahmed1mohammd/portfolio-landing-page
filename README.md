# Ahmed - Full-Stack Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features a clean design with dark/light mode toggle and showcases skills, projects, and contact information.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Smooth Animations**: CSS transitions and hover effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML structure

## 📋 Sections

1. **Hero Section**: Introduction with CTA buttons
2. **About Section**: Personal information and statistics
3. **Skills Section**: Technology proficiency with progress bars
4. **Projects Section**: Showcase of recent work
5. **Contact Section**: Contact form and information
6. **Footer**: Social links and navigation

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Theme**: Custom theme context with localStorage persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
# or
pnpm build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Hero section
│   │   ├── About.jsx      # About section
│   │   ├── Skills.jsx     # Skills section
│   │   ├── Projects.jsx   # Projects section
│   │   ├── Contact.jsx    # Contact section
│   │   └── Footer.jsx     # Footer component
│   ├── context/           # React context
│   │   └── ThemeContext.jsx
│   ├── assets/            # Images and static files
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global styles
│   └── main.jsx           # App entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors and Theme
The color scheme is defined in `src/App.css` using CSS custom properties. You can modify the light and dark theme colors by updating the `:root` and `.dark` selectors.

### Content
Update the content in each component file:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - About section content
- `src/components/Skills.jsx` - Skills and technologies
- `src/components/Projects.jsx` - Project showcase
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer content

### Images
Replace placeholder images in `src/assets/` with your own:
- `hero_background.png` - Hero background image
- `project_placeholder_*.png` - Project showcase images

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

