# Barrie-George Davies — game showcase

A one-page site introducing Barrie-George Davies and two games: Monkey Business and Seeds of Change. Each game has a short description, a GitHub link, and a video that plays automatically.

## Add your trailers

Export each trailer as an **MP4 (H.264)**, ideally under 30 MB. GitHub rejects files over 100 MB.

Save them in the `videos` folder with these exact names:

- `videos/monkey-business.mp4`
- `videos/seeds-of-change.mp4`

Reload the page. The title card disappears and the clip plays on its own, muted and looping. Use **Sound on** to hear it, and **Pause** to stop it.

A `.webm` file with the same name also works, if you have one.

## Edit the words

In `index.html`, replace the paragraph under each game title with your own short description.

Seeds of Change links to [https://github.com/DavidBarker05/Seeds-Of-Change](https://github.com/DavidBarker05/Seeds-Of-Change).

## Use www.barrie-georgedavies.co.za

The site files are published at [https://thebgster.github.io](https://thebgster.github.io). The domain [www.barrie-georgedavies.co.za](http://www.barrie-georgedavies.co.za/) is registered with Afrihost and still points at Afrihost’s placeholder server, so the showcase does not appear there until the DNS records below are changed.

The `CNAME` file tells GitHub Pages to serve this site at `www.barrie-georgedavies.co.za`. Push that file before changing DNS. Leave the mail records alone so email keeps working.

Afrihost’s guide: [How to manage DNS records via ClientZone](https://help.afrihost.com/entry/how-to-manage-dns-records-via-clientzone/).

## Host it on GitHub Pages

The site address on GitHub is **https://thebgster.github.io**. The public address to share is **https://www.barrie-georgedavies.co.za** once DNS is updated. The repository must be named exactly `TheBGster.github.io`.

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

After you add videos or change a description:

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
