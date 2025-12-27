# Jason Wang - Personal Portfolio

A modern personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design inspired by professional portfolio layouts
- 🌐 Bilingual support (English/Chinese)
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 and React 19
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: Yarn

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Run the development server:
```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
jason-wang-portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ClientLayout.tsx   # Client-side layout wrapper
│   ├── Hero.tsx           # Hero section component
│   ├── LanguageProvider.tsx # Language context provider
│   ├── Navigation.tsx     # Navigation bar component
│   └── Welcome.tsx        # Welcome section component
├── public/
│   └── images/            # Image assets
└── ...
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## License

MIT
