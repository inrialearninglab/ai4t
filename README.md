![Logo](https://user-images.githubusercontent.com/5736114/133277346-2bf4460c-9a3d-48a7-a28c-6f81fc7f709c.png)

This repository contains educational resources for acculturation of teachers in artificial intelligence. A view of the current content is available on https://inrialearninglab.github.io/ai4t/index.html website.

# How to use this repository

All files of this repository are free to use and download to make your own website in the context of the AI4T project. Here are two possible solutions to do so:
- host a copy of this website **for free** using **Github Pages** ([see below](#make-your-own-github-website))
- import html pages in your own Learning Management System (such as moodle)

To download the entire resources package you can use the top right menu:

![Download](https://user-images.githubusercontent.com/5736114/133274837-b30bf8fa-abb7-4c15-98cc-a6d87d41f6a8.png)


## Files tree

```bash
📦ai4t # ------------------------------ Root directory
 ┣ 📂docs # --------------------------- Website sources
 ┃ ┣ 📂assets # ----------------------- General assets (logo, favicon, etc)
 ┃ ┣ 📂general-presentation # --------- Folder Mooc presentation
 ┃ ┣ 📂module-1-what-is-meant-by-AI # ---- Folder module 1
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

## How to access specific resources

1. **Videos**  
  The videos are hosted with their english subtitles on the [AI4T YouTube Channel](https://www.youtube.com/channel/UCBd_PgP_BdhmgdSzz5d83vQ) of the project created by the WP4 team. Videos files (mp4 format) as well as subtitles files (vtt or srt format) are unlisted (_therefore not visible_) but available if needed.

2. **Quiz**  
  Each module of the Mooc contains a set of quizzes. They are hosted and presented on the website (https://inrialearninglab.github.io/ai4t/index.html).
  You can also download them from this repository in 3 formats: pdf, html or Scorm1.2 files (a format commonly used on Learning Management System as Moodle or 360Learning):
  * Quiz Module 1  
    [download pdf format](https://github.com/inrialearninglab/ai4t/blob/main/docs/module-1-what-is-meant-by-ai/1-4-quiz-module-1/Quiz-1-ressources/PDF/AI4T-quiz-module3-artificial-intelligence-at-our-service.pdf) / [download html files zip](https://github.com/inrialearninglab/ai4t/blob/main/docs/module-1-what-is-meant-by-ai/1-4-quiz-module-1/Quiz-1-ressources/HTML.zip) / [download Scorm1.2 files zip](https://github.com/inrialearninglab/ai4t/blob/main/docs/module-1-what-is-meant-by-ai/1-4-quiz-module-1/Quiz-1-ressources/SCORM.zip)

  * Quiz Module 2  
  [download pdf format](https://github.com/inrialearninglab/ai4t/tree/main/docs/module-2-how-does-ml-work/2-4-quiz-module-2/Quiz-2-ressources/PDF) / [download html files zip](https://github.com/inrialearninglab/ai4t/blob/main/docs/module-2-how-does-ml-work/2-4-quiz-module-2/Quiz-2-ressources/HTML.zip) / [download Scorm1.2 files zip](https://github.com/inrialearninglab/ai4t/blob/main/docs/module-2-how-does-ml-work/2-4-quiz-module-2/Quiz-2-ressources/SCORM.zip)

  * Quiz Module 3  
    [download pdf format](https://github.com/inrialearninglab/ai4t/tree/main/docs/module-3-AI-at-our-service/3-4-quiz-module-3/Quiz-3-ressources/PDF) / [download html files zip](https://github.com/inrialearninglab/ai4t/blob/main/docs/module-3-AI-at-our-service/3-4-quiz-module-3/Quiz-3-ressources/HTML.zip) / [download Scorm1.2 files zip](https://github.com/inrialearninglab/ai4t/blob/main/docs/module-3-AI-at-our-service/3-4-quiz-module-3/Quiz-3-ressources/SCORM.zip)


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
