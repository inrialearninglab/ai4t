# AI4T : Educational resources

This repository contains educational resources for teachers about artificial intelligence.

## How to use these resources

This resources a free to use, download and to make your own website. You can host **for free** using **Github Pages** ([see below](#make-your-own-github-website)). 

To download this entire resources package you can use the top right menu :

![Download](https://user-images.githubusercontent.com/5736114/133274837-b30bf8fa-abb7-4c15-98cc-a6d87d41f6a8.png)


## Files tree

```bash
📦ai4t # ------------------------------ Root directory
 ┣ 📂docs # --------------------------- Website sources
 ┃ ┣ 📂assets # ----------------------- General assets (logo, favicon, etc)
 ┃ ┣ 📂general-presentation # --------- Folder module 1
 ┃ ┣ 📂module-2-how-does-ml-work # ---- Folder module 2
 ┃ ┣ 📂module-3-AI-at-our-service # --- Folder module 3
 ┃ ┃ ┗ 📜.pages # --------------------- Folder website config file
 ┃ ┗ 📜index.md # --------------------- Homepage content file(overriden by home.html)
 ┣ 📂overrides # ---------------------- Custom pages overrides
 ┃ ┗ 📜home.html # -------------------- Homepage override
 ┣ 📜.gitignore # --------------------- Git ignored files
 ┣ 📜README.md # ---------------------- Main readme file (This file you're reading)
 ┗ 📜mkdocs.yml # --------------------- Website main config file
```

--------

## Make your own github website

1. Fork this project in you own github space
2. Make your changes
3. After a few minutes, visit : https://[YOUR_LOGIN_OR_GROUPNAME].github.io/ai4t/

--------

## Deploy your own website locally (on your computer)

To preview the website locally on **your computer** you need to install `python`, `mkdocs` and `git`.

### Installation

**Prerequisites :**
- Install python using Miniconda : https://docs.conda.io/en/latest/miniconda.html
- Install mkdocs dependencies (in a terminal) :
  ```shell
  pip install mkdocs-material mkdocs-pdf-export-plugin mkdocs-jupyter mkdocs-macros-plugin
  ```
- Install git : https://git-scm.com/downloads

### Preview locally

In a terminal :

1. Clone this repository `git clone https://github.com/inrialearninglab/ai4t.git`
2. Change directory `cd ai4t`
3. Run the local server : `mkdocs serve`

After a few seconds, the website should be available at : http://localhost:8000
