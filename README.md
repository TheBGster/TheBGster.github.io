# Barrie-George Davies — game showcase

A one-page site introducing Barrie-George Davies and two games: Monkey Business and Bushveld Brothers. Each game has a short description, a GitHub link, and a video that plays automatically.

## Add your trailers

Export each trailer as an **MP4 (H.264)**, ideally under 30 MB. GitHub rejects files over 100 MB.

Save them in the `videos` folder with these exact names:

- `videos/monkey-business.mp4`
- `videos/bushveld-brothers.mp4`

Reload the page. The title card disappears and the clip plays on its own, muted and looping. Use **Sound on** to hear it, and **Pause** to stop it.

A `.webm` file with the same name also works, if you have one.

## Edit the words

In `index.html`, replace the paragraph under each game title with your own short description.

Bushveld Brothers does not have a repository link yet. When you do, replace the “GitHub link coming soon” line with:

```html
<a class="text-link" href="https://github.com/TheBGster/YOUR-REPO" target="_blank" rel="noopener noreferrer">View on GitHub<span class="sr-only"> (opens in a new tab)</span></a>
```

## Host it on GitHub Pages

The recommended address is **https://thebgster.github.io**. That needs a public repository named exactly `TheBGster.github.io`.

You need [Git](https://git-scm.com/download/win) installed, and you need to be signed in to GitHub as [TheBGster](https://github.com/TheBGster). [GitHub Desktop](https://desktop.github.com/) is an easier alternative to the commands below if you prefer clicking through it.

### 1. Create the repository

1. Open [github.com/new](https://github.com/new).
2. Set the repository name to `TheBGster.github.io`.
3. Leave it **Public**.
4. Do not add a README, .gitignore, or license (this folder already has the site).
5. Click **Create repository**.

### 2. Push this folder

In PowerShell:

```powershell
cd "C:\Users\Barrie-George Davies\Desktop\ShowCase"
git init
git add .
git commit -m "Add game design showcase site"
git branch -M main
git remote add origin https://github.com/TheBGster/TheBGster.github.io.git
git push -u origin main
```

Sign in if Git asks you to. If GitHub offers a browser login, use the account **TheBGster**.

### 3. Turn on GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set the branch to **main** and the folder to **/ (root)**.
5. Save.

After a minute or two the site is at [https://thebgster.github.io](https://thebgster.github.io).

A repository named `TheBGster.github.io` often enables Pages on its own. If the Pages screen already shows a green live address, you can skip step 3.

### 4. Update the live site later

After you add videos, change a description, or paste the Bushveld Brothers link:

```powershell
cd "C:\Users\Barrie-George Davies\Desktop\ShowCase"
git add .
git commit -m "Update showcase content"
git push
```

Refresh the live site after a minute. Hard-refresh (Ctrl+F5) if an old clip is still cached.

### If you use a different repository name

A repo called `ShowCase` is published at `https://thebgster.github.io/ShowCase/` instead. The steps are the same, except the remote URL uses that repository name. The special `TheBGster.github.io` name is the cleaner portfolio address.

GitHub’s own guide: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
