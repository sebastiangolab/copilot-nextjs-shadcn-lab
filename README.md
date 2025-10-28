````markdown
# copilot-nextjs-shadcn-lab

Experimental laboratory for testing Next.js + GitHub Copilot + shadcn MCP + kibo-patterns integration for UI development with AI.

## 🚀 Tech Stack

- **[Next.js 16](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - UI components via MCP server
- **[GitHub Copilot](https://github.com/features/copilot)** - AI-assisted development
- **[MCP Server](https://modelcontextprotocol.io/)** - Model Context Protocol for shadcn
- **[ESLint](https://eslint.org/)** - Linting

## 🎯 Project Purpose

This laboratory project where i tested how to use:
- **GitHub Copilot** with custom instructions for intelligent page/section generation
- **shadcn MCP server** for seamless component integration
- **shadcn/ui components** components to build features
- **AI-driven workflow** for building Next.js applications

The setup enables generating complete pages and sections through natural language prompts to Copilot, which intelligently selects and assembles components from shadcn/ui.

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

## 🚀 Quick Start to test

1. Clone repo from github
   ```bash
   git clone LINK
   cd copilot-nextjs-shadcn-lab
   ```

2. Install dependencies
   ```bash
   npm i
   ```

3. Try to generate page or section by copilot, make prompt for example "Create page by description: [detailed about page or secion]"

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Go to [http://localhost:3001](http://localhost:3001)


## 🔧 Configuration

## 📁 Project Structure

```
src/
├── app/                 # App Router (Next.js 13+)
│   ├── globals.css      # Global CSS styles + Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   └── ui/              # shadcn/ui components
├── lib/                 # Utility functions
└── sections/            # Sections components

```

## 🔍 System Requirements

- **Node.js** 22.11.0
- **npm** 10.9.0

The project includes `.nvmrc` file with Node.js version - use `nvm use` to switch to the correct version.

## 🚢 Deploy

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
