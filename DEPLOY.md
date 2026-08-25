# Deploy to GitHub Pages (singhvm-boop)

Your site will be live at: **https://singhvm-boop.github.io/somaiyasat/**

## One-time setup

```bash
gh auth login
```

## Push code

```bash
cd /Users/vedant/Downloads/vedant-somaiyasat
git push -u origin main --force
```

## Enable GitHub Pages

1. Open https://github.com/singhvm-boop/somaiyasat/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** `main` → folder `/docs`
4. Click **Save**

Wait 1–2 minutes, then open https://singhvm-boop.github.io/somaiyasat/

## Rebuild after changes

```bash
cd frontend
GITHUB_PAGES=true VITE_API_BASE=https://somaiyasat.vercel.app npm run build
rm -rf ../docs && cp -R dist ../docs
cd ..
git add -A && git commit -m "Update site" && git push
```
