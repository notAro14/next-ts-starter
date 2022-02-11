# Next TS starter code

Next typescript app starter code

```shell
# Pre requisite: generate sqlite db
npx prisma db push

# Pre requisite: seed database
npx prisma db seed

# dev
npm run dev

# run build
npm run build && npm start
```

## Generate types

```bash
npx openapi-typescript https://your-project.supabase.co/rest/v1/?apikey=your-anon-key --output types/supabase.ts
```
