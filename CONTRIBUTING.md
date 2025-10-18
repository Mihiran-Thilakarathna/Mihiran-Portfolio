# Contributing to Mihiran Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect differing viewpoints and experiences

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- A code editor (VS Code recommended)

### Setup

1. Fork the repository

2. Clone your fork:
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

3. Add upstream remote:
```bash
git remote add upstream https://github.com/original-owner/portfolio.git
```

4. Install dependencies:
```bash
npm install
```

5. Start development server:
```bash
npm run dev
```

## 💻 Development Workflow

### Creating a Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `style/` - Code style changes
- `refactor/` - Code refactoring
- `test/` - Test additions or changes

### Making Changes

1. Make your changes
2. Test thoroughly
3. Lint your code:
```bash
npm run lint
```
4. Build to check for errors:
```bash
npm run build
```

### Keeping Your Fork Updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

## 📁 Project Structure

```
src/
├── components/      # React components
│   ├── About.tsx   # Component file
│   └── About.css   # Component styles
├── contexts/        # React contexts
├── data/           # Static data
├── hooks/          # Custom hooks
├── types/          # TypeScript types
└── assets/         # Images, fonts, etc.
```

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types/interfaces
- Avoid `any` type
- Use meaningful variable names

### React

- Use functional components
- Use hooks for state management
- Keep components small and focused
- Extract reusable logic into custom hooks

### CSS

- Use CSS modules or scoped styles
- Follow BEM naming convention when applicable
- Use CSS variables for theming
- Mobile-first responsive design

### Example Component

```typescript
import React from 'react';
import './MyComponent.css';

interface MyComponentProps {
  title: string;
  description?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
  return (
    <div className="my-component">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default MyComponent;
```

## 📝 Commit Guidelines

### Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Test additions or changes
- `chore`: Build process or auxiliary tool changes

### Examples

```bash
feat(about): add skills carousel animation
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(hero): improve responsive layout
```

## 🔍 Pull Request Process

### Before Submitting

1. **Test your changes**:
```bash
npm run dev    # Test in development
npm run build  # Ensure it builds
npm run preview # Test production build
```

2. **Check for lint errors**:
```bash
npm run lint
```

3. **Update documentation** if needed

4. **Add screenshots** for UI changes

### Submitting

1. Push your branch:
```bash
git push origin feature/your-feature-name
```

2. Go to GitHub and create a Pull Request

3. Fill out the PR template:
   - **Title**: Clear, descriptive title
   - **Description**: What changes were made and why
   - **Screenshots**: For UI changes
   - **Testing**: How you tested the changes

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Screenshots (if applicable)
[Add screenshots here]

## Testing
- [ ] Tested in development mode
- [ ] Tested production build
- [ ] Tested on mobile devices
- [ ] Tested in different browsers

## Checklist
- [ ] Code follows project style guidelines
- [ ] Commented code in complex areas
- [ ] Updated documentation
- [ ] No console errors
- [ ] Responsive on all screen sizes
```

### Review Process

1. Maintainer will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged

## 🐛 Reporting Bugs

### Before Reporting

- Check if the bug has already been reported
- Test in the latest version
- Check if it's reproducible

### Bug Report Template

```markdown
**Describe the bug**
Clear description of what the bug is

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment:**
- OS: [e.g. Windows 11]
- Browser: [e.g. Chrome 120]
- Version: [e.g. 1.0.0]

**Additional context**
Any other relevant information
```

## 💡 Feature Requests

### Template

```markdown
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
What you want to happen

**Describe alternatives you've considered**
Other solutions you've thought about

**Additional context**
Any other context or screenshots
```

## 📖 Documentation

- Update README.md for user-facing changes
- Update code comments for complex logic
- Add JSDoc comments for functions/components
- Keep CHANGELOG.md updated

## ❓ Questions?

- Open a discussion on GitHub
- Check existing issues and PRs
- Reach out through the portfolio contact form

## 🙏 Thank You!

Your contributions make this project better. Thank you for taking the time to contribute!

---

**Happy Coding!** 🚀
