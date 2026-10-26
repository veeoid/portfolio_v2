# Vismay Chaudhari — Portfolio

A personal portfolio for software engineering work, built with React, TypeScript, Vite, and Tailwind CSS. It presents experience, deployed applications, selected projects, technical skills, publications, and contact information.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Opening `index.html` directly from disk does not run the app.

For a production build:

```bash
npm run build
npm run preview
```

## Project structure

- `src/components/` — page sections and navigation
- `src/index.css` — color tokens and shared styles
- `public/images/` — project images
- `public/resume.pdf` — downloadable résumé
- `netlify/functions/contact.ts` — contact form endpoint

## Contact form

The form posts to `/.netlify/functions/contact`. On Netlify, configure `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, and `SENDGRID_TO_EMAIL` before deploying. The static site builds without these values, but sending a message requires the function and its environment variables.

## Links

- [Portfolio](https://vismay.vercel.app/)
- [GitHub](https://github.com/veeoid)
- [LinkedIn](https://www.linkedin.com/in/vismay-chaudhari/)
