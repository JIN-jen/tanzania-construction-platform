# Tanzania Construction Resource Platform

A landing page for driver and operator matching in Tanzania with support for English, Chinese, and Swahili.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/` — Next.js app entrypoints and global styles
- `components/` — reusable UI sections
- `data/translations.ts` — English / Chinese / Swahili UI copy
- `data/drivers.ts` — localized driver sample data
- `data/config.ts` — contact channels and platform identity
- `lib/whatsapp.ts` — WhatsApp link helpers
- `public/images/wechat-qr.png` — WeChat QR code

## Important rule

Do not show driver phone numbers publicly. All requests should route through WhatsApp or WeChat.
