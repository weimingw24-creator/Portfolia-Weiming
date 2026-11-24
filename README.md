# Build Your Own AI Portfolio 🎨

A one-page portfolio you can make yours in under an hour. You edit **one file** (`content.js`), and the site builds itself from it. Fill it in by hand, or hand it to an AI.

Made for the GDG CareerOS workshop. No installs, no build step, no frameworks.

Preview of what you get: your photo, name, mission, links, skills, projects, education, and (optional) work experience and extracurriculars. It works on phones first, and has dark mode.

---

## The 60-minute plan

| Time | Step |
| --- | --- |
| 0–10 min | [Set up](#0-what-you-need) (volunteers will help) |
| 10–20 min | [Get your own copy](#1-get-your-own-copy), [open it locally](#2-open-it-on-your-computer), and [turn on GitHub Pages](#4-put-it-on-the-internet-github-pages) |
| 20–45 min | [Fill in `content.js`](#3-make-it-yours): by hand or with AI |
| 45–55 min | Save, commit, push. Your site updates in about a minute |
| 55–60 min | Share your link! Put it on an NFC keychain, LinkedIn, your résumé |

---

## 0. What you need

- A free [GitHub](https://github.com) account
- [Git](https://git-scm.com/downloads) (or [GitHub Desktop](https://desktop.github.com/), which is easier)
- A code editor, like [VS Code](https://code.visualstudio.com/)

Stuck? Wave down a volunteer.

## 1. Get your own copy

1. At the top of this repo's page, click the green **Use this template** button → **Create a new repository**.
2. **Name the repo `YOUR-GITHUB-USERNAME.github.io`**, for example `percy-portfolio.github.io` if your username is `percy-portfolio`. This gives you the short link `https://YOUR-GITHUB-USERNAME.github.io`. Any other name still works, but the link gets longer.
3. Leave it **Public** and click **Create repository**.
4. Download it to your computer:
   - **GitHub Desktop:** *File → Clone repository* → pick your new repo.
   - **Terminal:** `git clone https://github.com/YOUR-GITHUB-USERNAME/YOUR-GITHUB-USERNAME.github.io.git`
5. Open the folder in your editor.

## 2. Open it on your computer

Double-click `index.html`. It opens in your browser, showing the sample portfolio for **Percy Portfolio**. Keep this tab open. After you save changes in your editor, refresh the page to see them.

## 3. Make it yours

Open **`content.js`**. Every field has a comment explaining it. Change:

- **name, tagline, mission**: who you are in a sentence or two
- **photo**: put your picture in the `assets/` folder and set the file name (see [photo tips](#photo-tips))
- **theme**: this is what makes yours not look like everyone else's:
  - `style`: the overall look. `"classic"` is clean and friendly, `"techy"` is a dark terminal with one tab per section, and `"fancy"` has big serif headings, an arched photo and swipeable project cards.
  - `accent`: a preset like `"coral"` or any hex code like `"#ff6b9d"`.
  - `font` and dark/light `mode`. (`techy` is always dark and monospace.)
- **links**: GitHub, LinkedIn, email
- **skills, projects, education**
- **experience and extracurriculars**: optional. Set to `[]` to hide them

**Rules:** keep the quotes around text and the commas at the ends of lines. If the page shows a red error box, you deleted one by accident. Use undo (Ctrl/Cmd+Z), or the error message will point you to the problem.

Anything you don't want public, **leave it out**. This site will be on the internet: your photo, name, and email can be seen by anyone. Don't add your phone number or home address.

### Photo tips

Keep your photo around 600 pixels wide and under 1 MB, so the page loads quickly on a phone. The site crops it to a circle for you. If you have trouble:

- Use [squoosh.app](https://squoosh.app) (works in the browser) or the Preview app on a Mac to shrink it.
- If you use an AI tool that can edit files (Claude Code, Cursor, Codex...), just ask it to resize and crop the photo for you.

### Use AI to fill it in

Pick the prompt that matches your tool.

**If your AI can edit files in this folder** (Claude Code, Cursor, Copilot agent mode, Codex...):

```
Read AGENTS.md in this repo, then help me fill in my portfolio. Interview me first
(one or two questions at a time): my name, what I'm studying, my projects, skills,
and what kind of job or co-op I want. Only edit content.js, and never make up
projects, jobs, or credentials; if I don't tell you something, leave it out or ask.
Also resize my photo at assets/<my-photo-file> to about 600px wide and under 500 KB.
```

**If your AI is a chat window** (ChatGPT, Gemini, Claude.ai...):

```
I'm filling in a portfolio website template. Below is the file content.js. Interview me
first (one or two questions at a time) about my name, studies, projects, skills, and
the kind of job or co-op I want. Then send me back the COMPLETE updated content.js,
keeping the same structure, the quotes and commas, and the comments. Don't invent
any projects, jobs, or credentials. If I don't give you something, leave it out.

Here is my content.js:

<paste the whole file here>
```

Paste the AI's answer over everything in `content.js`, save, and refresh your preview. **Read what it wrote.** It's your portfolio, and you're the one who has to stand behind it in an interview.

## 4. Put it on the internet (GitHub Pages)

GitHub Pages hosts your site for free, straight from your repo. You turn it on once.

1. On your repo's page on github.com, click **Settings** (the tab with the gear).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **`main`** and the **`/ (root)`** folder, then click **Save**.
5. Wait a minute or two, then refresh the page. A banner at the top says **"Your site is live at …"**. That's your link.

**Do this early** (before you edit anything), so the sample site goes live first and you can fix any problem while volunteers are around. After that, every time you push a change, the site updates by itself in about a minute.

### Pushing your changes

- **GitHub Desktop:** type a short summary in the box at bottom left → **Commit to main** → **Push origin**.
- **Terminal:**
  ```
  git add .
  git commit -m "Add my portfolio content"
  git push
  ```

Then wait about a minute and refresh your live link.

## Put it on a keychain

Once your link works, write it to an NFC tag with a free app like **NFC Tools** (iOS/Android): *Write → Add a record → URL*, paste your link, then tap the tag. Your site is designed to look good on a phone.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Red error box on the page | You probably deleted a quote `"` or comma `,` in `content.js`. Undo and try again. |
| My photo doesn't show (I see my initials) | Check the file name and extension in `photo:` match the file in `assets/` exactly. Capitals count. |
| The live site is a 404 | Pages may still be building. Wait a couple of minutes, and check [step 4](#4-put-it-on-the-internet-github-pages) again. |
| My changes aren't on the live site | Did you commit **and push**? Hard-refresh (Ctrl/Cmd+Shift+R). |

## For maintainers

- No build step. Plain HTML/CSS/JS. `content.js` is the only student-edited file.
- `script.js` is the engine (theme, colors, fonts, shared helpers). Each look is a pair of files: `layout-<style>.js` builds the page and a stylesheet styles it (`style.css` for classic, `techy.css`, `fancy.css`). To add a look, register a new function on `window.LAYOUTS`, add its name to `STYLE_NAMES` in `script.js`, and load its files in `index.html`.
- The sample photo in `assets/photo.jpg` is a stock image used for demo purposes only. Students replace it. To swap the default, replace that file or change `photo:` in `content.js`.
- Colors and fonts: edit `PRESETS` and `FONTS` at the top of `script.js`.
- Techy tab deep links: add `#education`, `#projects`, etc. to the URL.
- To test: open `index.html` with each `style`, and check phone width, dark mode (classic and fancy), and an empty `experience: []`.

Licensed under MIT. See `LICENSE`.
