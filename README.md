# Bigyan Tamang: Personal Portfolio

GitHub Pages portfolio for Bigyan Tamang, Junior IT Officer, Chitwan, Nepal.

**Live address after publish:** https://big7782.github.io

## Important: the address and the GitHub account

A `username.github.io` address only works when the GitHub account username matches it.
This site is built for the address **big7782.github.io**, so it must be published from a GitHub account whose username is **bigyan-tamang-portfolio**, in a repository with the exact name **big7782.github.io**.

Bigyan's current GitHub account from his CV is **BIG7782** (github.com/BIG7782). If the site is published from that account instead, the working address will be **big7782.github.io**, and the canonical and og:url lines in `index.html` must be changed to that address. One decision, one address. Do not publish the same site at both.

## Files
- `index.html`: the full one-page portfolio
- `style.css`: design, pale grey background, white rounded cards, orange accent, Inter font
- `script.js`: mobile menu, active menu highlight, back to top button, footer year
- `favicon.svg`: BT site icon
- `404.html`: page not found page
- `assets/bigyan-tamang.jpg`: professional portrait. The background was cleaned to a soft office setting. His face, clothing and identity were not changed.
- `assets/Bigyan-Tamang-CV.pdf`: CV download file, made from the CV uploaded on 15 Nov 2026
- `robots.txt` and `sitemap.xml`: search engine files for the live address
- `.nojekyll`: tells GitHub Pages to serve the files as they are

## How to publish (about 5 minutes, one time only)
1. Sign in to GitHub with the account chosen above
2. Click + (top right), then New repository
3. Repository name, exactly: `big7782.github.io` (or `big7782.github.io` if the BIG7782 account is used)
4. Keep it Public, then Create repository
5. Click "uploading an existing file" and upload every file in this folder, including the `assets` folder and `.nojekyll`
6. Commit changes
7. Wait 1 to 2 minutes, then open the live address
8. If it does not open: Settings, Pages, Source: Deploy from a branch, Branch: main / (root), Save

## Decisions already applied in this build
- Phone number is NOT shown on the public page (the CV has one). Email, LinkedIn and GitHub are the public contact routes. Add the phone only on Bigyan's clear word.
- Education wording is honest: all eight BCA semesters completed, final 8th semester results awaited. Update this line when the result is out.
- Reference at the end, as given: Jiwan Bhattarai, CCIE #60261, CEH, IT Security Consultant, Mentor, jiwanbhattarai.com

## GitHub SEO setup (one time, after the repo is created)
GitHub search and Google both read the repository About box and topics. Set these once:

1. Open the repository, click the gear icon beside About (right side)
2. Description, paste this line:
   `Portfolio of Bigyan Tamang, Junior IT Officer in Chitwan, Nepal: system and network administration, IT support, Wazuh SOC monitoring, MikroTik, VLAN and OSPF labs`
3. Website: the live address of this site
4. Topics, add these: `portfolio`, `junior-it-officer`, `system-administration`, `network-administration`, `it-support`, `cybersecurity`, `soc`, `wazuh`, `mikrotik`, `cisco`, `ccna`, `nepal`
5. Save changes

On-page SEO is already built in: keyword title and description, canonical link, Open Graph and Twitter cards, Person and ProfilePage structured data (schema.org) with skills and education, an image sitemap, and robots.txt.

After publishing, submit the live address once in Google Search Console (URL inspection, Request indexing) so Google picks it up faster. This is optional and free.

## When the updated resume arrives
1. Replace `assets/Bigyan-Tamang-CV.pdf` with the new CV PDF (same file name)
2. Recheck every fact on the page against the new resume and update `index.html`
3. Commit. The live site updates in about 1 minute
