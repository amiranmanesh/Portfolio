<div align="center">

# Amir Iranmanesh — Personal Portfolio

Personal portfolio and résumé site of **Amir Iranmanesh** — CTO & Senior Backend Engineer.

[**amiranmanesh.ir**](https://amiranmanesh.ir) · [Résumé (PDF)](https://amiranmanesh.ir/resume/resume.pdf) · [LinkedIn](https://www.linkedin.com/in/amiranmanesh/) · [GitHub](https://github.com/amiranmanesh)

[![Deploy](https://github.com/amiranmanesh/Portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/amiranmanesh/Portfolio/actions/workflows/main.yml)
![React](https://img.shields.io/badge/React-16-61DAFB?logo=react&logoColor=white)
![Node](https://img.shields.io/badge/Node-18.x-339933?logo=node.js&logoColor=white)

</div>

---

## Overview

A single-page React application presenting experience, education, projects, and contact information, plus a LaTeX-built résumé PDF. Every push to `main` builds the app **and** compiles the résumé, then publishes the result to the `gh-pages` branch behind the custom domain `amiranmanesh.ir`.

**Features**

- Light/dark theme with a persistent toggle
- Sections: Home, Experience, Education, Projects, Contact
- All content driven from a single data file — [src/portfolio.js](src/portfolio.js)
- Résumé compiled from LaTeX (XeLaTeX + Vazirmatn) via `make resume-pdf`
- Automated build and deploy through GitHub Actions

---

## Quick Start

**Requirements:** Node.js **18.x** (see [.nvmrc](.nvmrc)). Newer versions break some transitive dependencies.

```bash
nvm use            # picks up .nvmrc
make install       # npm install
make run           # dev server at http://localhost:3000
```

Production build:

```bash
make build         # output in build/
```

If `npm install` fails on peer dependencies:

```bash
npm install --legacy-peer-deps
```

---

## Make Targets

| Target                   | Description                                        |
| ------------------------ | -------------------------------------------------- |
| `make install`           | Install Node.js dependencies                       |
| `make run`               | Start the development server                       |
| `make build`             | Production build into `build/`                     |
| `make resume-pdf`        | Compile `public/resume/resume.tex` to `resume.pdf` |
| `make resume-font-check` | Check whether Vazir/Vazirmatn is installed         |
| `make resume-clean`      | Remove LaTeX auxiliary files                       |
| `make clean`             | Remove auxiliary files **and** the résumé PDF      |

`make help` prints the same list from the command line.

---

## Editing Content

All site content lives in [src/portfolio.js](src/portfolio.js) — a content change needs no component edits.

| Export             | Controls                                          |
| ------------------ | ------------------------------------------------- |
| `settings`         | Splash screen, custom cursor, Google Analytics ID |
| `greeting`         | Name, headline, résumé link, contact email        |
| `socialMediaLinks` | GitHub, LinkedIn, Telegram, email, website        |
| `skills`           | Skill groups and their technology icons           |
| `degrees`          | Education entries                                 |
| `certifications`   | Certification cards                               |
| `experience`       | Work history, grouped into sections               |
| `projects`         | Project cards and their language/tech badges      |
| `contactPageData`  | Contact page copy and profile image               |

Colors and typography live in [src/theme.js](src/theme.js) and [src/global.js](src/global.js). Images belong in `src/assests/images/`; logos referenced by `logo_path` resolve from that directory.

---

## Résumé

The résumé source is [public/resume/resume.tex](public/resume/resume.tex) with its class file [resume.cls](public/resume/resume.cls). Building it requires **XeLaTeX** and the **Vazirmatn** (or Vazir) font.

```bash
# macOS
brew install --cask basictex
export PATH="/Library/TeX/texbin:$PATH"

make resume-font-check   # verify the font is installed
make resume-pdf          # writes public/resume/resume.pdf
```

`make resume-pdf` runs XeLaTeX twice so cross-references resolve, then reports the output path. A missing toolchain or font produces an explicit error with install instructions instead of a broken PDF. CI installs `texlive-xetex`, `texlive-latex-extra`, and `fonts-vazirmatn`, then performs the same step on every deploy.

---

## Project Structure

```
├── .github/workflows/main.yml   # build + deploy pipeline
├── public/
│   ├── index.html
│   └── resume/                  # resume.tex, resume.cls, resume.pdf
├── src/
│   ├── components/              # reusable UI (cards, header, footer, ...)
│   ├── containers/              # page sections (greeting, skills, projects, ...)
│   ├── pages/                   # routed pages (home, experience, education, ...)
│   ├── assests/                 # fonts, images, Font Awesome
│   ├── portfolio.js             # ← all site content
│   ├── theme.js                 # color themes
│   └── global.js                # global styles
├── Makefile
└── CNAME                        # amiranmanesh.ir
```

---

## Deployment

[.github/workflows/main.yml](.github/workflows/main.yml) runs on every push to `main`:

1. Check out the repository on Node 18.x
2. Install the LaTeX toolchain and compile the résumé PDF
3. `npm i --legacy-peer-deps` and `npm run build`
4. Force-push the contents of `build/` to the `gh-pages` branch with a `CNAME` for `amiranmanesh.ir`

The workflow needs a `GH_TOKEN` repository secret with push access. Manual deploy from a local machine:

```bash
npm run deploy     # gh-pages -b gh-pages -d build
```

---

## Tech Stack

**React 16** · **React Router** · **Sass** · **styled-components** · **Base Web** · **Bootstrap** · **Iconify** / **Font Awesome** · **react-reveal** · **react-ga** — built with **react-scripts 5**, formatted by **Prettier** with **husky** + **lint-staged** pre-commit hooks.

---

## Contact

- Website — [amiranmanesh.ir](https://amiranmanesh.ir)
- Email — [iranmanesh.ah@gmail.com](mailto:iranmanesh.ah@gmail.com)
- LinkedIn — [in/amiranmanesh](https://www.linkedin.com/in/amiranmanesh/)
- Telegram — [@iranmanesh_ah](https://t.me/iranmanesh_ah)
