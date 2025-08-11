# 🚀 Pete Nguyen - Software Engineer Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS. Features a unique IDE-themed interface that showcases my skills, experience, and projects in an engaging way.

## ✨ Features

- **🎨 Modern Design** - Clean, professional interface with smooth animations
- **💻 IDE Theme** - Interactive code editor interface for a developer-focused experience
- **📱 Responsive** - Fully responsive design that works on all devices
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds
- **🎯 Dual Mode** - Toggle between developer mode (IDE) and simple portfolio view
- **🔍 Interactive Elements** - Hover effects, smooth scrolling, and dynamic content

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development for better code quality
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Fast build tool and development server

### Icons & UI
- **Lucide React** - Beautiful, customizable icons
- **Custom CSS** - Tailored styling for unique IDE theme

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Git** - Version control and collaboration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/202PN/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Hero section component
│   │   └── IDE/            # IDE-themed components
│   │       ├── IDEWindow.tsx
│   │       ├── IDETitleBar.tsx
│   │       ├── IDENavigation.tsx
│   │       ├── IDESidebar.tsx
│   │       ├── IDEStatusBar.tsx
│   │       └── Content/    # Tab content components
│   ├── data/               # Static data files
│   │   ├── projects.ts     # Project information
│   │   ├── experience.ts   # Work experience
│   │   ├── skills.ts       # Skills and technologies
│   │   └── tabs.ts         # IDE navigation tabs
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── styles/             # CSS and styling
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── static/                 # Static assets
├── public/                 # Public assets
├── dist/                   # Production build output
└── README.md               # This file
```

## 🎯 Key Components

### Hero Section
- Professional introduction with animated elements
- Technology showcase with interactive badges
- Call-to-action buttons for portfolio exploration

### IDE Interface
- **Code Editor Theme** - Mimics popular IDEs like VS Code
- **Interactive Tabs** - Navigate between different portfolio sections
- **Syntax Highlighting** - Code examples with proper formatting
- **Responsive Sidebar** - File explorer and quick actions

### Portfolio Sections
- **About Me** - Personal introduction and background
- **Skills** - Technical expertise and tools
- **Experience** - Professional work history
- **Projects** - Featured projects with descriptions
- **Contact** - Get in touch and collaboration opportunities

## 🌐 Deployment

### Vercel (Recommended)
This portfolio is optimized for Vercel deployment:

1. **Connect GitHub** - Import your repository on [vercel.com](https://vercel.com)
2. **Automatic Deploy** - Vercel detects it's a Vite React project
3. **Live URL** - Get your portfolio URL instantly
4. **Auto-updates** - Every push to GitHub triggers a new deployment

### Other Platforms
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Enable in repository settings
- **AWS S3** - Static website hosting
- **Any static hosting** - The build output is completely static

## 🎨 Customization

### Colors & Theme
The portfolio uses CSS custom properties for easy theming:
```css
:root {
  --bg-primary: #0a0f1c;
  --bg-secondary: #1a1f2e;
  --text-primary: #ffffff;
  --chrome: #c0c0c0;
}
```

### Content Updates
- **Projects**: Edit `src/data/projects.ts`
- **Experience**: Modify `src/data/experience.ts`
- **Skills**: Update `src/data/skills.ts`
- **Personal Info**: Change content in component files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: Full IDE experience with sidebar
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Mobile-first design with touch-friendly interactions

## 🔧 Development

### Code Style
- **TypeScript** for type safety
- **Functional Components** with React hooks
- **Tailwind CSS** for consistent styling
- **ESLint** for code quality

### Adding New Features
1. Create new components in `src/components/`
2. Add types in `src/types/`
3. Update data files as needed
4. Test responsiveness across devices

## 📸 Screenshots

*[Add screenshots of your portfolio here]*

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: petenguyen96@gmail.com
- **LinkedIn**: [petehnguyen](https://www.linkedin.com/in/petehnguyen/)
- **GitHub**: [202PN](https://github.com/202PN)
- **Portfolio**: [Live Site](https://your-vercel-url.vercel.app)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

*Last updated: December 2024*
