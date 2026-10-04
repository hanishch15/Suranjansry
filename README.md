# A Small Truth

A single-page apology website made with plain HTML, CSS, and JavaScript. There is no framework, backend, account, or environment setup in the downloadable site files.

## Personalize it

The letters are fully written and address the recipient as Buggu🫀. Read through `index.html` and adjust any wording you want to make more personal. The downloadable PDF uses the wording as written in the page.

## Deploy to Vercel

1. Extract the ZIP so `index.html`, `styles.css`, `script.js`, `favicon.svg`, `vercel.json`, and the PDF are together in the project root.
2. Import that folder into a Git repository, then import the repository in Vercel. You can also run `npx vercel` from the extracted folder.
3. Vercel is configured to publish the root as a static site with no build command. No dependencies or environment variables are needed.

## Preview locally

From the extracted folder, run `python3 -m http.server 8000` and open `http://localhost:8000`. The website also works from any static web host.