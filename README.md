# Ravi Kakadia Portfolio

Personal portfolio website built with React and deployed to GitHub Pages.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

Create a production build:

```bash
npm run build
```

The optimized files are generated in the `build` folder.

## Deploy To GitHub Pages

This repo is configured for GitHub Pages with:

```json
"homepage": "https://ravi-p-k-1.github.io"
```

Deployment uses the `gh-pages` package and these scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

To deploy the latest version:

```bash
npm run deploy
```

The `predeploy` script automatically runs `npm run build`, then `gh-pages -d build` publishes the production files to the `gh-pages` branch.

After deployment, make sure the GitHub repository is configured to serve GitHub Pages from the `gh-pages` branch:

1. Go to the repository on GitHub.
2. Open `Settings` > `Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Select the `gh-pages` branch and `/ (root)` folder.
5. Save the settings.

The live site should be available at:

```text
https://ravi-p-k-1.github.io
```

On Windows PowerShell, if `npm run deploy` is blocked by execution policy, use:

```powershell
npm.cmd run deploy
```
