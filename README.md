# Harvest AI Hackathon

React TypeScript Web Application with automated GitHub Pages CI/CD deployment pipeline.

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📦 GitHub Pages Automated Deployment

This repository includes a GitHub Actions workflow configured in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds and deploys the application automatically to GitHub Pages on every push to the `main` branch.

### ⚙️ Enabling GitHub Pages on GitHub

1. Go to your repository settings on GitHub: `https://github.com/CasHil/harvest-ai-hackathon/settings/pages`
2. Under **Build and deployment**:
   - Set **Source** to **GitHub Actions**.
3. Push changes to the `main` branch or trigger manually via **Actions** -> **Deploy React App to GitHub Pages** -> **Run workflow**.

The application will automatically be published to:
`https://CasHil.github.io/harvest-ai-hackathon/`
