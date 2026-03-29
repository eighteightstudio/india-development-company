# India Development Company — Official Website

A modern, responsive B2B industrial website for **India Development Company (IDC)**, a hard chrome plating and precision manufacturing company based in Kolkata, India. Established 1992.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework, routing, SSG |
| TypeScript | Type-safe development |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Scroll animations |
| Lucide React | Icon set |
| next-mdx-remote | MDX blog rendering |
| gray-matter | Blog frontmatter parsing |
| Supabase (optional) | Image hosting |
| Vercel | Deployment |

---

## Project Structure

```
/
├── app/                   # Next.js App Router pages
│   ├── layout.tsx         # Root layout (Navbar + Footer)
│   ├── page.tsx           # Home page
│   ├── services/
│   ├── about/
│   ├── contact/
│   ├── blogs/
│   │   └── [slug]/        # Dynamic blog post pages
│   ├── terms/
│   └── privacy/
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── home/              # All home page sections
│   ├── services/          # Services page components
│   ├── about/             # About page components
│   ├── contact/           # Contact form + info
│   ├── blogs/             # BlogCard, BlogContent
│   └── ui/                # Reusable UI primitives
├── content/
│   └── blogs/             # MDX blog posts
├── lib/
│   ├── mdx.ts             # Blog loading utilities
│   └── supabase-images.ts # Supabase image URL helper
└── public/
    ├── robots.txt
    └── sitemap.xml
```

---

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/your-org/idc-website.git
cd idc-website
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your credentials:

```env
# Supabase (for image hosting — optional for initial setup)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# EmailJS (for contact form — optional, form works as dummy without these)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

---

## Deployment to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and create a new project.
3. Import the GitHub repository.
4. Add environment variables in Vercel dashboard (same as `.env.local`).
5. Deploy — Vercel auto-detects Next.js. No additional config required.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Optional | Supabase project URL for image hosting |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional | Supabase public anon key |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Optional | EmailJS service ID for contact form |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Optional | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Optional | EmailJS public key |

The site works without any environment variables — images fall back to `placehold.co` placeholders and the contact form uses a dummy handler.

---

## Adding Blog Posts

1. Create a new `.mdx` file in `/content/blogs/`
2. Add frontmatter at the top:

```mdx
---
title: "Your Blog Title"
slug: "your-blog-slug"
date: "2025-03-01"
author: "IDC Editorial"
category: "Technical Education"
excerpt: "Short description for card and SEO."
coverImage: "https://your-supabase-url/storage/v1/object/public/blog-images/your-image.jpg"
---

Your MDX content here...
```

3. The post will automatically appear on `/blogs` and be routed to `/blogs/your-blog-slug`.

---

## Replacing Placeholder Images

All images currently use `placehold.co` URLs. To replace with real images:

1. Upload images to a Supabase Storage bucket.
2. Configure `NEXT_PUBLIC_SUPABASE_URL` in your environment.
3. Use `getImageUrl(bucket, path)` from `lib/supabase-images.ts` to generate URLs.
4. Update `src` props in image components.

---

## Activating EmailJS Contact Form

1. Create an account at [emailjs.com](https://emailjs.com).
2. Create a service, template, and get your public key.
3. Add the three `NEXT_PUBLIC_EMAILJS_*` variables to your environment.
4. Uncomment the EmailJS code block in `components/contact/ContactForm.tsx`.
5. Remove the dummy `console.log` handler.

---

## Company Contact

**India Development Company**
36 Chaulpatty Road, Kolkata 700010, West Bengal
+91 99036 21231 | +91 98311 71196
jpbanik@indiadevelopmentcompany.in
