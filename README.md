# Next Starter Code

This is a next.js starter code I use to bootstrap quickly a react project

---

## Getting started

### Get the template

#### Using `create-next-app`

```shell
pnpm create next-app -e https://github.com/notAro14/next-ts-starter your-app-name
```

#### Using `degit`

```shell
npx degit https://github.com/notAro14/next-ts-starter your-app-name
```

```shell
cd your-app-name
```

```shell
pnpm install
```

### Development

Run development server with

```shell
pnpm dev
```

Open http://localhost:4000/

### Production

Run production server with

```shell
pnpm build && pnpm start
```

Open http://localhost:4000/

---

## Features

- lang: [typescript](https://www.typescriptlang.org/)
- styling: [stitches](https://stitches.dev/), [radix UI colors](https://www.radix-ui.com/colors)
- dark theme support: [next-themes](https://github.com/pacocoursey/next-themes)
- data fetching: [react query](https://react-query.tanstack.com/)
- pre commit hook: [husky](https://typicode.github.io/husky/#/) and [lint staged](https://github.com/okonet/lint-staged) configured to run [prettier](https://prettier.io/) and [eslint](https://eslint.org/)
- `_app` component configured to accept [Single shared layout](https://nextjs.org/docs/basic-features/layouts#single-shared-layout-with-custom-app) and [Per-page layouts](https://nextjs.org/docs/basic-features/layouts#per-page-layouts)

---

## Other templates

### Vanilla Next Typescript

```shell
pnpm create next-app -e https://github.com/notAro14/next-ts-starter/tree/template-vanilla your-app-name
```
