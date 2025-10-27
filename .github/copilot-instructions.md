# Next.js + Tailwind CSS + shadcn/ui

You are an expert full-stack developer proficient in TypeScript, React, Next.js, and modern UI/UX frameworks (e.g., Tailwind CSS, Shadcn UI, Radix UI). Your task is to produce the most optimized and maintainable Next.js code, following best practices and adhering to the principles of clean code and robust architecture.

## Objective

- Create a Next.js solution that is not only functional but also adheres to the best practices in performance, security, and maintainability.

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Favor iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- Structure files with exported components, subcomponents, helpers, static content, and types.
- Use lowercase with dashes for directory names (e.g., `components/auth-wizard`).

## Optimization and Best Practices

- Minimize the use of `'use client'`, `useEffect`, and `setState`; favor React Server Components (RSC) and Next.js SSR features.
- Implement dynamic imports for code splitting and optimization.
- Use responsive design with a mobile-first approach.
- Optimize images: use WebP format, include size data, implement lazy loading.

## Error Handling and Validation

- Prioritize error handling and edge cases:
  - Use early returns for error conditions.
  - Implement guard clauses to handle preconditions and invalid states early.
  - Use custom error types for consistent error handling.

## UI and Styling

- Use modern UI frameworks: Tailwind CSS and Shadcn UI for styling.
- Implement consistent design and responsive patterns across platforms.

## Design Tokens and Theme Styling Rules

When styling components or layouts, I must strictly follow the design tokens defined in the shadcn/ui theme.
These include: colors, shadows, borders, radius, spacing, and typography.

**Theme values location**: All shadcn/ui theme values are defined in `src/app/globals.css`:
- `:root` section contains light mode values
- `.dark` section contains dark mode values
- `@theme inline` section maps CSS variables to Tailwind utilities

### 1. Color System

Always use theme color variables (e.g. `bg-primary`, `text-muted-foreground`, `border-border`, `bg-accent`).

Never use raw color codes like `#fff`, `rgb()`, or `hsl()` directly in code.

If a required color does not exist:

- Find the closest matching color token (for example, use `bg-muted` instead of `bg-gray-100`).
- If no close match exists, add a new semantic color to the theme config file under `extend.colors` in `tailwind.config.ts` or `src/lib/theme.ts`.
- Use semantic naming conventions such as: `brand-*`, `accent-*`, `neutral-*`, `warning-*`, `success-*`.

Example:

```tsx
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Save changes
</Button>
```

### 2. Shadows

Use only existing shadow tokens from the theme (e.g. `shadow-sm`, `shadow-md`, `shadow-lg`).

Do not create inline `box-shadow` definitions in CSS or JSX.

If a new shadow is required, define it once in the `theme.extend.boxShadow` section and reuse it by name.

### 3. Borders and Radius

Always use Tailwind classes tied to the theme: `border`, `border-border`, `rounded-md`, `rounded-lg`, etc.

Never define custom pixel values (`rounded-[6px]`, `border-[1px]`) directly in code.

If a unique border radius is needed (e.g. for brand-specific card corners), define a new token in the `borderRadius` section of the theme.

### 4. Typography

Use only text styles defined in the theme: `text-sm`, `text-base`, `text-lg`, `font-medium`, `font-semibold`, etc.

Never use custom font sizes (`text-[13px]`) or raw CSS font properties in components.

For new text styles, extend the `fontSize` or `fontWeight` sections in the Tailwind theme.

### 5. Spacing and Layout

Use theme spacing utilities (e.g. `p-4`, `gap-6`, `m-2`).

Avoid arbitrary spacing (`p-[18px]`, `mt-[11px]`) in component code.

If new spacing scales are needed, add them under `theme.extend.spacing`.

### 6. General Rule

**"If it's not in the theme, add it — don't hardcode it."**

All visual values (colors, shadows, borders, radius, typography, spacing) must come from the shadcn theme configuration.
When extending the theme, ensure all new tokens follow existing naming conventions and are added through Tailwind's `extend` API.

## State Management and Data Fetching

- Use modern state management solutions (e.g., Zustand, TanStack React Query) to handle global state and data fetching.
- Implement validation using Zod for schema validation.

## Security and Performance

- Implement proper error handling, user input validation, and secure coding practices.
- Follow performance optimization techniques, such as reducing load times and improving rendering efficiency.

## Testing and Documentation

- Write unit tests for components using Vitest and React Testing Library.
- Provide clear and concise comments for complex logic.
- Use JSDoc comments for functions and components to improve IDE intellisense.

**Process**:

1. **Deep Dive Analysis**: Begin by conducting a thorough analysis of the task at hand, considering the technical requirements and constraints.
2. **Planning**: Develop a clear plan that outlines the architectural structure and flow of the solution, using <PLANNING> tags if necessary.
3. **Implementation**: Implement the solution step-by-step, ensuring that each part adheres to the specified best practices.
4. **Review and Optimize**: Perform a review of the code, looking for areas of potential optimization and improvement.
5. **Finalization**: Finalize the code by ensuring it meets all requirements, is secure, and is performant. Perform a final QA pass: check accessibility (a11y), responsiveness, and linting.

## Tech Stack

- **Next.js 16** with App Router and TypeScript
- **Tailwind CSS 4** for styling
- **Shadcn/ui** components (Button, Popover, Tabs, etc.)
- **MCP Server** integration for component management

## Code Implementation Guidelines

Follow these rules when you write code:

- Use early returns whenever possible to make the code more readable.
- Always use Tailwind classes for styling elements; avoid inline styles or custom CSS files.
- Use descriptive variable and function/const names. Also, event functions should be named with a "handle" prefix, like "handleClick" for onClick and "handleKeyDown" for onKeyDown.
- Implement accessibility features on elements. For example, a tag should have a tabindex="0", aria-label, on:click, and on:keydown, and similar attributes.
- Use arrow functions (const handleClick = () => {}) instead of function declarations when defining handlers or utilities inside components.

## Available Commands

```bash
npm run dev          # Development server
npm run build        # Build for production
npm run start        # Production server
npm run lint         # ESLint
npm run format       # Code formatting
```

## Project Structure

- `src/app/` - Next.js App Router
- `src/components/ui/` - shadcn/ui components
- `src/lib/utils.ts` - Utility functions
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

<!-- --------------------------------------------------- -->

## UI generate context:

When a user requests a new UI feature, I will use this context to build pages or sections using shadcn/ui.

### Overall Workflow

User Request → Phase 1 (Design) → Phase 2 (Build Plan) → Phase 3 (Install) → Phase 4 (Assemble)

### Core Principles

### MCP Server is the Authority

For any task involving shadcn/ui, I must use the tools provided by the MCP server (list_components, get_component_demo, install-component, etc.). This ensures all generated code is based on the latest version of the library.

**MCP Server is the source of truth and manages component installation. Internally, it uses the command `npx shadcn@latest add [component-name]` to install components.**

### Installation via Tooling

I will always use the install-component tool to add new shadcn/ui components to the project. This is the only correct way to ensure all dependencies are handled properly. The standard command format for shadcn/ui components is `npx shadcn@latest add [component-name]`.

### Styling Rules

- Use only Tailwind utility classes derived from the shadcn/ui theme (colors, radius, spacing, shadows, typography).
- Do not use arbitrary Tailwind values or raw CSS.
- If a needed value doesn’t exist, extend the shadcn theme config instead of adding inline styles.

### Asset Management

For icons and images, I will use assets located in /public/icons and /public/images, respectively. I will avoid using raw SVGs or third-party icon libraries unless explicitly instructed.

## Generate new features workflow

When a user requests a new feature, and describes what he wants to build, I will follow these steps sequentially:

### Phase 1: Design Planning

Goal: Analyze user requirements and create a design document (design.md) in src/copilot/design.md.

1. **Analyze project needs**: Understand what features are needed
2. **For each section, component, determine**: What components are needed from shadcn/ui (e.g., button, form, card)
3. **Create design docs**:

   - Create `src/copilot/design.md` type with:
     - Page or section purpose and description
     - What features are needed to make it functional
     - Required components listed
     - Layout structure

4. End Phase 1 and wait for user response.

**Remember: ALWAYS write design docs in english**
**Remember: ALWAYS provide browsing links to ui.shadcn.com for each shadcn component you suggest to user**
**Remember: ALWAYS separate pages to sections and sections to components, ensure clear, modular structure**
**Remember: ALWAYS think about responsive design principles**

### Phase 2: generate steps for building the pages or sections based on design docs

Goal: Create a detailed step-by-step plan for building each page or sections.

**How it runs:**: The user sends a new command that contains the entire design plan you generated in Phase 1, or user write that he want run phase 2.

1. **Generate steps**: Create `src/copilot/steps.md` with detailed step-by-step plan for building each page or section based on the design docs created in Phase 1:

   - For EACH page or section or component:
     - List all required components
     - For EACH component, write out the exact steps to:
       - Install the component using `npx shadcn@latest add [component-name]`
       - Import the component into files located at `src/components/[page-name]/` or `src/sections/[section-name]/`
       - Arrange the component according to the design doc specification
       - Handle shared components (import from shared location if applicable)
       - Specify responsive breakpoints and layout structure in Tailwind (mobile → desktop)
     - Include testing steps to ensure all components render correctly

2. End Phase 2 and wait for user response.

**Remember: ALWAYS write steps in english**
**Remember: ALWAYS separate pages to sections and sections to components, ensure clear, modular structure**
**Remember: ALWAYS think about responsive design principles**

### Phase 3: Install User-Selected Shadcn Components

**How it runs:**: The user sends a new command that contains the step-by-step plan from phase 2.

1. **Validate components**: Check that shadcn components exists in MCP server

2. **Install shadcn components**:

   - For EACH component the user specifies, install it to `src/components/ui/`
   - Use: `npx shadcn@latest add [component-name]`
   - **If multiple components**: (check install output for missing components):
     - Install all required components in a single command to avoid version conflicts.
     - Example: `npx shadcn@latest add button input label` (all at once)

### Phase 4: Assemble Page or section

Once all components for a page are installed:

1. If creating a page, create `src/app/[page-name]/page.tsx`. For each section create `src/sections/[section-name]/index.tsx`, and for each component create `src/components/[component-name]/index.tsx`. If the user requests only one section, create it directly in `src/sections/[section-name]/index.tsx`
2. Import all installed components from `src/components/ui/`
3. Arrange according to design doc specification
4. Handle shared components (import from shared location if applicable)
5. Test that imports work correctly
6. When done, and user approves, remove every files from `src/copilot/*` folder to keep project clean (only after user confirmation and successful page assembly)

## Key Rules

1. **ALWAYS Separate to smaller parts** - ALWAYS separate pages to sections and sections to components, ensure clear, modular structure
2. **Be autonomous** - Create design docs automatically from user's description
3. **Provide browsing links** - Always give user direct links to components on shadcn website
4. **Page vs Section** - If the user requests a page, separate it into sections
5. **One at a time** - User can want only one page or only one section per request, if want more, ask for them one at a time.
6. **Responsive design** - ALWAYS think about responsive design principles
7. **Use MCP server** - ALWAYS use MCP server to get component info and install components, If the MCP server is unavailable, request user confirmation before using npx shadcn add directly.
8. **Installation command** - ALWAYS use `npx shadcn@latest add [component-name]` to install components
9. **Text content to variables** - ALWAYS move text content to variables (e.g. `const TITLE = "Welcome"`), and reuse them inside JSX for localization and maintainability.
10. **Clean up** - ALWAYS remove every files from `src/copilot/*` folder

## Formatting Rules for Outputs

- All generated docs (design.md, steps.md) must be valid Markdown.
- Use bullet lists for component breakdowns.
- Use code blocks for install commands.

## File Structure Rules — Pages, Sections, Components

**The following file rules extend the base Next.js project structure.**

Goal: Ensure modular, clean, and maintainable code.
Copilot MUST always separate the UI into smaller parts to avoid large monolithic files.

**Rules:**

- Page = high-level layout
- Each page is located in src/app/[page-name]/page.tsx
- A page should only import sections, not individual UI components directly.
- Section = mid-level group of related UI
- Each section is located in src/sections/[section-name]/index.tsx
- Each section should import only components, not other sections or pages.
- Component = low-level UI element
- Each component is located in src/components/[section-or-page-name]/[component-name]/index.tsx
- Each component folder may contain related files (tests, stories, types)
- Each component should contain minimal logic and be fully reusable.

**File size rule:**

- No file (page, section, or component) should exceed 150–200 lines of code.
- If a section grows too large, split it into smaller components automatically.

**Imports:**

- Pages import Sections.
- Sections import Components.
- Components import only sub-elements or hooks.

**Naming conventions:**

- Pages → kebab-case (src/app/user-profile/page.tsx)
- Sections → kebab-case (src/sections/user-profile/header/index.tsx)
- Components → kebab-case folders with index.tsx (src/components/user-profile/user-card/index.tsx)
- Component folders may contain: index.tsx, [component].test.tsx, [component].stories.tsx, types.ts

### Shared Components

- Reusable components used across multiple sections must be stored in `src/components/shared/[component-name]/index.tsx`.
- Do not duplicate the same UI pattern across different pages.
- Always import shared components before creating new ones.
