# Development Guide

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
git clone https://github.com/202PN/portfolio.git
cd portfolio
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
npm run preview
```

## Project Structure

### Key Directories
- `src/components/` - React components
- `src/data/` - Static data and content
- `src/types/` - TypeScript interfaces
- `src/utils/` - Utility functions
- `src/config/` - Configuration constants

### File Naming Conventions
- Components: PascalCase (e.g., `Hero.tsx`)
- Utilities: camelCase (e.g., `scrollUtils.ts`)
- Types: PascalCase (e.g., `Project.ts`)
- Data: camelCase (e.g., `projects.ts`)

## Adding New Features

### 1. Create Component
```typescript
// src/components/NewFeature.tsx
import React from 'react';
import { NewFeatureProps } from '../types';

const NewFeature: React.FC<NewFeatureProps> = ({ prop1, prop2 }) => {
  return (
    <div className="new-feature">
      {/* Your component content */}
    </div>
  );
};

export default NewFeature;
```

### 2. Add to Types
```typescript
// src/types/index.ts
export interface NewFeatureProps {
  prop1: string;
  prop2: number;
}
```

### 3. Add to Index
```typescript
// src/components/index.ts
export { default as NewFeature } from './NewFeature';
```

### 4. Use in App
```typescript
// src/components/App.tsx
import { NewFeature } from './index';

// Add to your JSX
<NewFeature prop1="value" prop2={42} />
```

## Styling Guidelines

### CSS Classes
- Use Tailwind CSS utilities when possible
- Create custom CSS for complex components
- Follow BEM methodology for custom classes
- Use CSS variables for theme colors

### Responsive Design
- Mobile-first approach
- Test on multiple screen sizes
- Use Tailwind responsive prefixes

## Code Quality

### TypeScript
- Always define interfaces for props
- Use strict type checking
- Avoid `any` type
- Use proper return types

### React Best Practices
- Functional components with hooks
- Proper dependency arrays in useEffect
- Memoization for expensive operations
- Clean component separation

### Performance
- Lazy load heavy components
- Optimize re-renders
- Use React.memo when appropriate
- Bundle size optimization

## Testing

### Manual Testing
- Test all interactive elements
- Verify responsive behavior
- Check accessibility features
- Test cross-browser compatibility

### Build Testing
- Ensure `npm run build` succeeds
- Check for TypeScript errors
- Verify all imports resolve
- Test production build locally

## Deployment

### GitHub Pages
- Automatic deployment on push to main
- Check Actions tab for deployment status
- Verify live site functionality

### Manual Deployment
```bash
npm run build
# Deploy dist/ folder to your hosting platform
```

## Troubleshooting

### Common Issues

#### Build Errors
- Check TypeScript compilation
- Verify all imports are correct
- Ensure all dependencies are installed

#### Runtime Errors
- Check browser console for errors
- Verify component props are correct
- Check for missing dependencies

#### Styling Issues
- Verify CSS imports are correct
- Check Tailwind configuration
- Ensure CSS variables are defined

### Getting Help
1. Check the browser console for errors
2. Review the PROJECT_STRUCTURE.md file
3. Check GitHub Issues for known problems
4. Create a new issue with detailed information

## Contributing

### Pull Request Process
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Update documentation if needed
5. Submit a pull request

### Code Review
- All changes require review
- Ensure tests pass
- Follow project conventions
- Update documentation as needed
