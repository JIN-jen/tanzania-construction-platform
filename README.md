# Tanzania Construction Resource Platform

A V1 landing page for driver/operator matching in Tanzania.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content

- `data/translations.ts` — English / Chinese / Swahili text
- `data/drivers.ts` — driver cards
- `data/config.ts` — WhatsApp link, WeChat ID, QR image
- `public/images/wechat-qr.png` — WeChat QR code

## Important rule

Do not show driver phone numbers publicly. All requests go through WhatsApp or WeChat.
