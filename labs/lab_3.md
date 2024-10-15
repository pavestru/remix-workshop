# Lab 3: Data fetching

## Tasks
- Create a KV database on Cloudflare (call it e.g. SHORT_URLS)
- Add binding on localhost (via `wrangler.toml`)
- In Remix
    - Implement data loading via `loader(...)` in `/dashboard` route
    - Show list of URLs in `/dashboard` route
    - Implement redirection via dynamic `$slug.tsx` route
    - Add `ErrorBoundary` if redirection unsuccessful (e.g. 404 Not found)

[Hints](hints/lab_3_hints.md)
