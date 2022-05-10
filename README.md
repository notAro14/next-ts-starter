# Next Typescript Starter Code

I use this starter every time I want to setup a Next.js code. To use it, you can

```shell
yarn create next-app --example https://github.com/notAro14/next-ts-starter
# or
npx create-next-app --example https://github.com/notAro14/next-ts-starter
```

## Features

- [x] Typescript
- [x] Jest and React testing library for unit and integration testing
- [x] [MSW](https://mswjs.io/) for API mocking
- [x] [Whatwg Fetch](https://github.com/github/fetch) to polyfill `fetch` during testing
- [x] [Stitches](https://stitches.dev/) for styling (with [Radix UI colors](https://www.radix-ui.com/colors))
- [x] CSS reset based on [Josh Comeau's css reset](https://www.joshwcomeau.com/css/custom-css-reset/#our-finished-product)
- [x] Husky and Lint staged configured to run prettier and eslint during pre-commit hook
- [x] `_app` component already configured to accept [Single shared layout](https://nextjs.org/docs/basic-features/layouts#single-shared-layout-with-custom-app) and [Per-page layouts](https://nextjs.org/docs/basic-features/layouts#per-page-layouts)
- [ ] tRPC for e2e typesafe API
- [ ] Prisma for database ORM
- [ ] NextAuth for authentication
