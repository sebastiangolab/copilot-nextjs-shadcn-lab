# Next.js + Tailwind CSS + shadcn/ui + Biome

Modern tech stack boilerplate project ready for production web application development.

## 🚀 Tech Stack

- **[Next.js 16](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - UI components
- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
- **[ESLint](https://eslint.org/)** - Additional linting

## 📦 Installed shadcn/ui components

- `Button` - Button component
- `Card` - Card with header, content and footer
- `Input` - Input field

## 🛠️ Available Commands

```bash
# Start development server
npm run dev

# Build project for production
npm run build

# Start production server
npm run start

# Linting with ESLint
npm run lint

# Linting with Biome
npm run lint:biome

# Auto-fix Biome errors
npm run lint:biome:fix

# Code formatting
npm run format
```

## 🚀 Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Go to [http://localhost:3001](http://localhost:3001)

3. **Start editing:**
   Modify `src/app/page.tsx` - the page will auto-refresh

## 🔧 Configuration

### Biome
Configuration is in `biome.json`. Configured for:
- TypeScript/React
- 2-space indentation formatting
- Automatic import sorting
- Tailwind CSS support

### Tailwind CSS
- Uses Tailwind CSS 4 (latest version)
- Integrated with shadcn/ui
- Dark mode support

### shadcn/ui
- Configuration in `components.json`
- Components in `src/components/ui/`
- Add new components: `npx shadcn@latest add [component-name]`

## 📁 Project Structure

```
src/
├── app/                 # App Router (Next.js 13+)
│   ├── globals.css     # Global CSS styles + Tailwind
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
└── lib/utils.ts       # cn() helper for Tailwind

```

## 🎨 Adding New shadcn/ui Components

```bash
# Examples of popular components
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
npx shadcn@latest add table
npx shadcn@latest add toast
```

## 🔍 System Requirements

- **Node.js** >= 20.9.0 (recommended: 22.x)
- **npm** >= 10.x

The project includes `.nvmrc` file with Node.js version - use `nvm use` to switch to the correct version.

## 🚢 Deploy

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
