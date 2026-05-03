# UTech Pro Website

A complete bilingual company website for **UTech Pro** built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Run Locally

Prerequisite: Node.js 18+ with npm installed.

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

If PowerShell blocks or cannot find `npm`, try:

```bash
npm.cmd install
npm.cmd run dev
```

## Update Contact Links

Contact placeholders live in:

```txt
src/lib/site.ts
```

Change these values:

```ts
export const contactLinks = {
  whatsappNumber: "01283533348",
  whatsapp: "https://wa.me/201283533348",
  email: "mina0sameh0wiliam@gmail.com",
  facebook: "https://www.facebook.com/share/1B9DVr8z52/"
};
```

For WhatsApp, replace the number with the country code and phone number without `+`, spaces, or dashes.

## Change Brand Images

Logo and cover assets are stored in:

```txt
public/images/logo.png
public/images/logo-mark.png
public/images/utech-cover.png
```

Replace these files with new images using the same filenames, or update the image paths in the components.

## Deploy on Vercel

1. Push the project to GitHub.
2. Go to [Vercel](https://vercel.com).
3. Import the repository.
4. Keep the default Next.js settings.
5. Click **Deploy**.

Vercel will run `npm install` and build the site automatically.
