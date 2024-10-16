# Lab 3 Hints

## How do I create a KV namespace?

You will create a default KV namespace with name `SHORT_URLS` by running (in CLI):

```
npx wrangler kv:namespace create SHORT_URLS
```

You will create a **preview** KV namespace with name `SHORT_URLS` by running (in CLI):

```
npx wrangler kv:namespace create --preview SHORT_URLS
```

**Note:**
The API was changed from `kv:namespace` to `kv namespace` in newer versions of Wrangler.

## How do I insert a JSON to KV without <form> implemented yet?

Run this in CLI to insert in local KV (notice `--local` and `--preview`):

```
npx wrangler kv:key put --preview --local --binding SHORT_URLS "url:remix" '{"url":"https://remix.run","shortUrl":"remix"}'
```

Run this in CLI to insert in remote KV (remove `--preview` for production environment):

```
npx wrangler kv:key put --preview --binding SHORT_URLS "url:remix" '{"url":"https://remix.run","shortUrl":"remix"}'
```

**Note:**
The API was changed from `kv:key` to `kv key` in newer versions of Wrangler.
