# Torre Rosa Psicología

## Business Knowledge

**Torre Rosa Psicología (Centro Torre Rosa)** is an infant psychology clinic. The clinic provides specialized psychological and psychopedagogical services ("Valoraciones Psicopedagógicas" / Psychopedagogical Assessments) focused on children and adolescents. Its identity is modern, minimalist, and Montessori-inspired, reflecting the psychologist's active and connected role within the local Montessori school community.

## Technology Stack

The project uses a modern web development stack optimized for performance and maintainability:

- **Framework**: [Next.js](https://nextjs.org/) (App Router, static export)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) for English and Spanish support
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## How to Build

To build the project for production, run:

```bash
npm run build
```

This will run `next build`. Because the project is configured for static export (`output: 'export'` in `next.config.ts`), this command generates an `out` folder containing all the optimized static HTML, CSS, JavaScript files, and unoptimized assets.

## How to Run Locally

First, start the local development server:

```bash
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the source files.

## How to Deploy with Firebase

This project is configured to be deployed to Firebase Hosting. The `firebase.json` specifies the `out` directory as the public folder.

1. Ensure you have the Firebase CLI installed and are logged in:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. Generate the static export of the project:
   ```bash
   npm run build
   ```

3. Deploy the files to Firebase Hosting:
   ```bash
   firebase deploy --only hosting
   ```
