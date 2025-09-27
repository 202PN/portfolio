# Pete Nguyen - Software Engineer Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS. Features an IDE-themed interface that showcases my skills, experience, and projects.

## 🚀 Deployment Status

**Live Portfolio**: [https://202PN.github.io/portfolio](https://202PN.github.io/portfolio)

This portfolio is automatically deployed using GitHub Actions. Every push to the main branch triggers a new deployment.

**Last Deployment**: August 12, 2025 - Portfolio updates with army picture and improved carousel navigation

## Features

- **Modern React Architecture**: Built with React 18, TypeScript, and modern hooks
- **Performance Optimized**: Uses React.memo, useMemo, and useCallback for optimal rendering
- **Centralized Constants**: All colors, fonts, and configuration values in one place
- **Type Safety**: Full TypeScript coverage with proper interfaces and types
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **IDE Theme**: Unique developer-focused interface mimicking VS Code
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Fast build tool and development server

### Icons & UI
- **Lucide React** - Customizable icons
- **Custom CSS** - Styling for IDE theme

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Git** - Version control and collaboration

##  Getting Started

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

## Key Components

### Hero Section
- Professional introduction with animated elements
- Technology showcase with interactive badges
- Call-to-action buttons for portfolio exploration

### IDE Interface
- **Code Editor Theme** - Mimics VS Code
- **Interactive Tabs** - Navigate between different portfolio sections
- **Syntax Highlighting** - Code examples with proper formatting
- **Responsive Sidebar** - File explorer and quick actions

### Portfolio Sections
- **About Me** - Personal introduction and background
- **Skills** - Technical expertise and tools
- **Experience** - Professional work history
- **Projects** - Featured projects with descriptions
- **Contact** - Get in touch and collaboration opportunities

## Contact

- **Email**: petenguyen96@gmail.com
- **LinkedIn**: [petehnguyen](https://www.linkedin.com/in/petehnguyen/)
- **GitHub**: [202PN](https://github.com/202PN)
- **Portfolio**: [Live Site](https://your-vercel-url.vercel.app)

---

**Built using React, TypeScript, and Tailwind CSS**
