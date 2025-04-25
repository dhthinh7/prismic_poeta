# POETA WEBSITE + PRISMIC

## Requirement

- [Node.js 18.19.0](https://nodejs.org/en/)
- [Nextjs 14.2.4](https://nextjs.org/docs)
- [Prismic](https://prismic.io/)
- [TailwindCss 3.4.14](https://v3.tailwindcss.com/)

## For Development

```shell
npm install
```

Create `.env` in local

```shell
NEXT_PUBLIC_API_ENDPOINT=
NEXT_PUBLIC_PRISMIC_REF=
NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL=
NEXT_PUBLIC_GOOGLE_PRIVATE_KEY=
NEXT_PUBLIC_TALK_TO_EXPERT_GOOGLE_SHEET_ID=
NEXT_PUBLIC_MAIL_SERVER=
NEXT_PUBLIC_MAIL_SERVER_NAME=
NEXT_PUBLIC_MAIL_SERVER_PASSWORD=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
```

Run hot-reload for development

```shell
npm run dev
```

Start slice machine to define template and models

```shell

npm run slicemachine
```
