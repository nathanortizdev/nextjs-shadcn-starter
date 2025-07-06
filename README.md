# Next.js + shadcn/ui + Tailwind CSS + MDX Starter

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It includes:

- ✅ [shadcn/ui](https://ui.shadcn.dev) – Fully customizable, accessible component library
- 🎨 [Tailwind CSS](https://tailwindcss.com) – Utility-first styling
- 📄 [MDX](https://mdxjs.com) – Write JSX in Markdown files
- 🧹 ESLint + Prettier – Code quality, formatting, and Tailwind plugin support

---

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

For other package managers, make sure to first install dependencies explicitly if needed:

```bash
# Using Yarn
yarn install
yarn dev

# Using pnpm
pnpm install
pnpm dev

# Using bun
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## Node.js Version

This project requires **Node.js `>=18.17.0`** or **Node.js `>=20.5.0`** to run correctly, especially when using Turbopack.

You can check your version with:

```bash
node -v
```

---

## Scripts

| Command          | Description                             |
| ---------------- | --------------------------------------- |
| `npm run dev`    | Run local dev server (`localhost:3000`) |
| `npm run build`  | Create production build                 |
| `npm start`      | Start production server                 |
| `npm run lint`   | Run ESLint                              |
| `npm run format` | Format all files with Prettier          |

---

## Project Structure

- `app/` – App Router pages and layouts
- `components/` – Custom, reusable UI components
- `components/ui` – Prebuilt shadcn/ui components (based on Radix UI)
- `public/` – Static assets like images, favicons, and metadata

---

## Environment Variables

No environment variables are required by default.

If you later introduce any, create an .env file based on an .env.example and document it here.

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router + MDX)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/))
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [`tailwind-merge`](https://github.com/dcastil/tailwind-merge)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Markdown with JSX:** [MDX](https://mdxjs.com/)

### Linting & Formatting

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

---

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – comprehensive guide to Next.js features and API, including routing, data fetching, and deployment.
- [shadcn/ui Docs](https://ui.shadcn.com/docs) – detailed documentation for the shadcn/ui component library built on Radix UI, including usage and customization.
- [Tailwind CSS Docs](https://tailwindcss.com/docs) – official documentation for Tailwind CSS v4, covering utility classes, configuration, and best practices.
- [MDX Docs](https://mdxjs.com/docs) – learn how to use MDX for writing Markdown with embedded JSX components.

You can also explore the repositories for these projects to contribute or provide feedback:

- [Next.js GitHub repository](https://github.com/vercel/next.js)
- [shadcn/ui GitHub repository](https://github.com/shadcn/ui)
- [Tailwind CSS GitHub repository](https://github.com/tailwindlabs/tailwindcss)
- [MDX GitHub repository](https://github.com/mdx-js/mdx)

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
