# My Love Website

This is a static website (HTML + CSS + JS) located at the project root. Use one of the methods below to publish it so others can open a link and view the site.

## Quick local preview

From PowerShell in the project folder run one of these:

- Python 3 built-in server:
```powershell
python -m http.server 8000
# then open http://localhost:8000 in a browser
```

- Or with Node (if installed):
```powershell
npx http-server -p 8000
# then open http://localhost:8000
```

## Initialize Git locally (already included in this repo if committed)

From PowerShell in the project folder:
```powershell
git init
git add --all
git commit -m "Initial commit"
```

## Create a GitHub repo and push (recommended)

Option A — using the GitHub website (easiest):
1. Go to https://github.com and sign in.
2. Click **New** to create a new repository. Give it a name (e.g. `my-love-website`).
3. Do NOT initialize with a README (you already have one) — if you do, you'll have to pull first.
4. Follow the instructions GitHub shows to push your existing repo. Example commands (replace `USERNAME` and `REPO`):

```powershell
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

Option B — using GitHub CLI (`gh`) to create and push in one go:
```powershell
# install gh if you don't have it: https://cli.github.com/
gh auth login
gh repo create USERNAME/REPO --public --source=. --remote=origin --push
```

## Enable GitHub Pages (host on github.io)

1. Open your repo on github.com.
2. Settings -> Pages.
3. Under "Build and deployment", select "Deploy from a branch".
4. Choose `main` branch and folder `/ (root)` and Save.
5. After a few minutes, your site will be published at `https://USERNAME.github.io/REPO/`.

Notes:
- GitHub Pages serves static files (HTML/CSS/JS) — perfect for this project.
- If audio files are larger than GitHub's single-file limit (~100 MB), use Git LFS or host audio externally and update `src` URLs.

## Alternatives (zero-config hosts)

- Netlify: drag-and-drop the site folder or connect the GitHub repo. Good for continuous deploys and custom domains.
- Vercel: easy Git-based deploys, also supports static sites.

## Helpful tips

- Make sure all asset paths in your HTML are relative (they already are if `assets/...`), so Pages/Netlify will serve them correctly.
- If you want automatic deploys: push to GitHub then connect the repo to Netlify or Vercel.
- If you want me to: I can initialize the local git repo here and make the initial commit for you. I cannot create the remote GitHub repo without your GitHub credentials (or `gh` authenticated login) — I can show the exact commands to run locally.

