````markdown
# next-shadcn-mcp-lab

Experimental laboratory for testing Next.js + GitHub Copilot + shadcn MCP + kibo-patterns integration for UI development with AI.

## 🚀 Tech Stack

- **[Next.js 16](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - UI components via MCP server
- **[kibo-patterns](https://www.kibo-ui.com/patterns)** - Pre-built component patterns
- **[GitHub Copilot](https://github.com/features/copilot)** - AI-assisted development
- **[MCP Server](https://modelcontextprotocol.io/)** - Model Context Protocol for shadcn
- **[ESLint](https://eslint.org/)** - Linting

## 🎯 Project Purpose

This laboratory project demonstrates how to leverage:
- **GitHub Copilot** with custom instructions for intelligent page/section generation
- **shadcn MCP server** for seamless component integration
- **kibo-patterns registry** for rapid UI prototyping
- **AI-driven workflow** for building Next.js applications

The setup enables generating complete pages and sections through natural language prompts to Copilot, which intelligently selects and assembles components from kibo-patterns.

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
