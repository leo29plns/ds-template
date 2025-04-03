# Design System Template

A minimal, educational template for building a Design System using React, TypeScript, and Vite. This template is specifically designed for students learning about component libraries and design systems.

## 🎯 Purpose

This template provides a foundation for:

- Learning how to build a component library
- Understanding Design System principles
- Practicing component development with React and TypeScript
- Exploring documentation with Storybook

## 🚀 Getting Started

Clone this repository:

```bash
git clone [repository-url]
cd ds-template
```

Install dependencies:

```bash
npm install
```

Start Storybook to view components:

```bash
npm run storybook
```

Build the library:

```bash
npm run build
```

## 📦 Project Structure

```txt
ds-template/
├── src/
│   ├── components/     # React components
│   │   └── divider/   # Example component
│   └── index.ts       # Main export file
├── .storybook/        # Storybook configuration
└── vite.config.ts     # Build configuration
```

## 🛠️ Technology Stack

- **React** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Build tool
- **Storybook** - Component documentation and development
- **ESLint** - Code linting
- **CSS Modules** - Scoped styling

## 📚 Available Scripts

- `npm run dev` - Builds the library in watch mode
- `npm run build` - Builds the library for production
- `npm run storybook` - Starts Storybook development server
- `npm run build-storybook` - Builds Storybook for production
- `npm run lint` - Runs ESLint

## 🎨 Creating Components

1. Create a new directory under `src/components`
2. Add your component files (`.tsx`, `.module.css`)
3. Create a story file (`.stories.tsx`)
4. Export the component in `src/index.ts`

Example component structure:

```txt
component-name/
├── component-name.tsx
├── component-name.module.css
├── component-name.stories.tsx
└── index.ts
```

## 📖 Learning Resources

- [React Documentation](https://react.dev/)
- [Storybook Tutorials](https://storybook.js.org/tutorials/)
- [Design Systems Handbook](https://www.designbetter.co/design-systems-handbook)

## 🤝 Contributing

This template is meant for educational purposes. Feel free to fork it and adapt it to your needs!
