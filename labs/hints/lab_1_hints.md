# Lab 1 hints

## Creating a Remix project using Cloudflare template

### [Cloudflare way](https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/#setting-up-a-new-project) (preferred):

It includes `wrangler.toml` file, but may not include the latest release of Remix.

```
npm create cloudflare@latest -- my-remix-app --framework=remix
```

### [Remix docs](https://remix.run/docs/en/main/guides/templates#official-templates):

It includes the latest release of Remix, but may not include some Cloudflare recommended stuff.

```
npx create-remix@latest --template remix-run/remix/templates/cloudflare
```
