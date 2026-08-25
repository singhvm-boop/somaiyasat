# SomaiyaSat Website — Vedant Singh

Personal deployment of the **SomaiyaSat & SomaiyaPod** mission website (KJS-SRS-01) for DiM Experiment 01.

| | |
|---|---|
| **Developer** | Vedant Singh |
| **Roll No.** | 16010423111 |
| **Batch** | A3 |
| **GitHub** | [singhvm-boop/somaiyasat](https://github.com/singhvm-boop/somaiyasat) |
| **Live site** | https://singhvm-boop.github.io/somaiyasat/ |

Five linked pages: Home, Mission, Architecture, Program, Ground Station Dashboard.

## Local development

```bash
npm install --prefix backend && npm start --prefix backend
npm install --prefix frontend && npm run dev --prefix frontend
```

Open http://localhost:5180

## Deploy

- **GitHub Pages** — push to `main`; Actions workflow builds and publishes to GitHub Pages.
- **Vercel** — deploy from repo root; `vercel.json` includes API serverless functions.
