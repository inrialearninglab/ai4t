![Logo](https://user-images.githubusercontent.com/5736114/133277346-2bf4460c-9a3d-48a7-a28c-6f81fc7f709c.png)

This repository contains educational resources for acculturation of teachers in artificial intelligence. A view of the current content on the 5 languages of the consortium is available on https://inrialearninglab.github.io/ai4t/index.html website.

# How to use this repository

All files of this repository can be used downloaded and used according to their licence (most of the project ressources are CC BY 4.0, some elements from a former Inria/Class’code training are in CC BY-SA 2.0). Here are two possible solutions to do reuse them :
- host a copy of this website **for free** using **Github Pages** ([see below](#make-your-own-github-website))
- import html pages in your own Learning Management System (such as Moodle)

To download the entire resources package you can use the top right menu:

![Download](https://user-images.githubusercontent.com/5736114/133274837-b30bf8fa-abb7-4c15-98cc-a6d87d41f6a8.png)

## Files tree

```bash
📦ai4t # ------------------------------------------ Root directory
 ┣ 📂docs # --------------------------------------- Website sources
 ┃ ┣ 📂assets # ----------------------------------- General assets (logo, favicon, etc)
 ┃ ┣ 📂1-Mooc # ----------------------------------- Folder Mooc contents (A. Thillay interview, full training path)
 ┃ ┃ ┗ 📂general-presentation # ------------------- Folder General presentation of the Mooc (A. Thillay interview, full training path)
 ┃ ┃ ┗ 📂module-1-using-AI-and-Education # -------- Folder module 1
 ┃ ┃ ┗ 📂module-2-what-is-meant-by-ai # ----------- Folder module 2
 ┃ ┃ ┗ 📂module-3-how-does-AI-work # -------------- Folder module 3
 ┃ ┃ ┗ 📂module-4-AI-at-our-service-as-teachers # - Folder module 4
 ┃ ┃ ┗ 📂to-conlude # ----------------------------- Folder conclusion
 ┃ ┃ ┃ ┗ 📜.pages # ------------------------------- Folder website config file
 ┃ ┣ 📂2-Other-resources # ------------------------ Folder Resources contents
 ┃ ┗ 📜index.md # --------------------------------- Homepage content file(overriden by home.html)
 ┣ 📂overrides # ---------------------------------- Custom pages overrides
 ┃ ┗ 📜home.html # -------------------------------- Homepage override
 ┣ 📜.gitignore # --------------------------------- Git ignored files
 ┣ 📜README.md # ---------------------------------- Main readme file (This file you're reading)
 ┗ 📜mkdocs.yml # --------------------------------- Website main config file
```
--------

## How to access specific resources

1. **Videos**  
  The videos are hosted with their english subtitles on the [AI4T YouTube Channel](https://www.youtube.com/channel/UCBd_PgP_BdhmgdSzz5d83vQ) of the project. Videos files (mp4 format) as well as subtitles files (vtt or srt format) are public.

2. **Quizzes and interactive online activities**  
  Each module of the Mooc contains a set of quizzes and activities. They are hosted and presented on the website in 5 languages (https://inrialearninglab.github.io/ai4t/index.html).

  You can download them from this repository in 2 formats: html or h5p files.

  * Quizzes for all Modules  
  [Download a zip file of all EN Quizzes in html format](https://github.com/inrialearninglab/ai4t/raw/main/docs/1-Mooc/Download/Quiz/Quiz-all-in-one-folder-html-EN/Quiz-all-in-one-folder-html-EN.zip) / [Download a zip file of all EN Quizzes in h5p format](https://github.com/inrialearninglab/ai4t/raw/main/docs/1-Mooc/Download/Quiz/Quiz-all-in-one-folder-H5P-EN/Activities-H5P-EN.zip).

  * Activities for all Modules  
  [Download a zip file of all EN Online Activities in html format](https://github.com/inrialearninglab/ai4t/raw/main/docs/1-Mooc/Download/Activities/Activities.zip).

--------

## How to translate the Mooc resources in another target languages.

1. **Texts**  
All texts files are accessible in HTML or Markdown format. Within the AI4T project, all resources were initially produced in English then translated and reviewed by partners in the 4 other languages of the project : French, German, Italian and Slovenian. 

3. **Videos with Voice-Over**  
- All the videos are in English, voice-over versions has been produced in the 4 other languages of the project (The German version of the videos in module 2, 3 et 4 was developped within the project as requested by Luxembourg partner - another project is now on and will produce the german version of those 6 videos).
The Voice-over videos and their associated subtitles were produced by a sub-contractor. Each partner has interacted directly with the provider to review and when necessary improve the translated voice scripts of each original video before the recording of voice-over. Note that all voice-overs were made by native speakers.
- All the videos in the 5 languages can be accessed on the AI4T YouTube Channel.

3. **Videos subtitles**
- Translated subtitles are available on the project AI4T YouTube channel.

4. **Tutorials**  
- Videos with voice-over have been integrated into the tutorials interface.
- Translated subtitles have been directly inserted in the tutorial.

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
- Install python using Miniconda : https://docs.conda.io/en/latest/miniconda.html (use `.pkg`for MacOS for convenience)
- Install mkdocs dependencies (in a terminal) :
  ```shell
  pip install mkdocs-material mkdocs-pdf-export-plugin mkdocs-jupyter mkdocs-macros-plugin mkdocs-awesome-pages-plugin
  ```
- Install git : https://git-scm.com/downloads

### Preview locally

In a terminal :

1. Clone this repository `git clone https://github.com/inrialearninglab/ai4t.git`
2. Change directory `cd ai4t`
3. Run the local server : `mkdocs serve`

After a few seconds, the website should be available at : http://localhost:8000
