# Next.js + Tailwind CSS + shadcn/ui + Biome Project

This project is a complete boilerplate with a modern tech stack.

## Completed Tasks

- [x] Created copilot-instructions.md file
- [x] Clarified project requirements  
- [x] Created Next.js project scaffold
- [x] Configured Tailwind CSS, shadcn/ui and Biome
- [x] Installed required extensions (none)
- [x] Compiled project without errors
- [x] Created and ran development server task
- [x] Launched project on http://localhost:3000
- [x] Updated documentation

## Tech Stack

- **Next.js 16** with App Router and TypeScript
- **Tailwind CSS 4** for styling
- **shadcn/ui** components (Button, Card, Input)
- **Biome** linter and formatter
- **ESLint** additional linting

## Available Commands

```bash
npm run dev          # Development server
npm run build        # Build for production  
npm run start        # Production server
npm run lint         # ESLint
npm run lint:biome   # Biome linting
npm run lint:biome:fix # Automatic Biome fixes
npm run format       # Code formatting
```

## Project Structure

- `src/app/` - Next.js App Router
- `src/components/ui/` - shadcn/ui components
- `src/lib/utils.ts` - Utility functions
- `biome.json` - Biome configuration
- `components.json` - shadcn/ui configuration

The project is ready for development!

## Commit Message Convention

Follow this format for consistent and informative commit messages:

### Format
```
<type><icon>: <short description>

<optional longer description>
<optional breaking changes>
```

### Types and Icons
- `feat✨` - new feature
- `fix🐛` - bug fix
- `refactor♻️` - code refactoring (no functional changes)
- `style💄` - formatting, styling changes
- `perf⚡` - performance improvements
- `docs📝` - documentation changes
- `test🧪` - adding or updating tests
- `chore🔧` - maintenance tasks, deps updates
- `ci👷` - CI/CD pipeline changes
- `build📦` - build system changes

### Examples

**Good examples:**
```bash
feat✨: add product filtering by category

- Add category filter dropdown to products page
- Implement server-side filtering logic
- Update ProductsList component to handle filtered results

fix🐛: resolve header menu not closing on mobile

refactor♻️: convert type declarations to interfaces

- Improve TypeScript error messages
- Enable better interface extension
- Follow React/TypeScript best practices

style💄: update button hover states and spacing

perf⚡: optimize product images loading with next/image

docs📝: update README with deployment instructions

chore🔧: update dependencies to latest versions
```

**Bad examples:**
```bash
// ❌ Too vague
fix: stuff

// ❌ No icon/type
update header component

// ❌ Too long subject line
feat: add very long description that explains everything in the subject line which should be in the body instead

// ❌ Paragraphs without line breaks
feat✨: add product filtering by category

- Add category filter dropdown to products page - Implement server-side filtering logic - Update ProductsList component to handle filtered results

// ❌ No blank line between subject and body
feat✨: add product filtering by category
- Add category filter dropdown to products page
- Implement server-side filtering logic
- Update ProductsList component to handle filtered results
```

### Rules
1. **Subject line**: max 50 characters
2. **Use present tense**: "add" not "added"
3. **No period** at the end of subject line
4. **Body**: explain what and why, not how
5. **Separate** separate subject from body with blank line
6. **Not too long**: keep body lines under 72 characters
7. **Don't use files names** in description and subject 
8. **Line breaks**: ALWAYS use line breaks for readability between paragraphs
9. **English only**: write commit messages in English
10. **Do NOT** generate `-- <file list>` after the commit message. Only the commit message is needed if files are already staged.