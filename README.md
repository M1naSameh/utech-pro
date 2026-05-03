# UTech Pro Website

A bilingual company website for **UTech Pro** built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Requirements

- Node.js 18 or newer
- npm

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Production Build

Before pushing changes, run:

```bash
npm run build
```

This checks that the project can compile for production.

## Clean Deployment Workflow

1. Edit the code locally.
2. Test the website on `http://localhost:3000`.
3. Run `npm run build`.
4. Commit your changes.
5. Push to GitHub.
6. Vercel automatically deploys the latest pushed updates.

## PowerShell Troubleshooting

If PowerShell blocks `npm` or cannot find it, use:

```bash
npm.cmd install
npm.cmd run dev
```

For production build:

```bash
npm.cmd run build
```

## Update Contact Links

Contact data lives in:

```txt
src/lib/site.ts
```

Update:

```ts
export const contactLinks = {
  whatsappNumber: "01283533348",
  whatsapp: "https://wa.me/201283533348",
  email: "mina0sameh0wiliam@gmail.com",
  facebook: "https://www.facebook.com/share/1B9DVr8z52/"
};
```

## Founder Photo

The founder section uses:

```txt
public/images/founder-mina.png
```

Add your personal photo with this exact filename to replace the fallback logo in the Home and About founder sections.

## Brand Images

Image assets are stored in:

```txt
public/images/logo.png
public/images/logo-mark.png
public/images/logo-transparent.png
public/images/utech-cover.png
```

## Deploy on Vercel

1. Push the project to GitHub.
2. Open [Vercel](https://vercel.com).
3. Import the GitHub repository.
4. Keep the default Next.js settings.
5. Vercel will run `npm install` and `npm run build` automatically.
6. Every future push to GitHub triggers a new Vercel deployment.
