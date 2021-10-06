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
 ┃ ┣ 📂module-1-what-is-meant-by-AI # - Folder module 1
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
    [download pdf format](https://github.com/inrialearninglab/ai4t/raw/main/docs/module-1-what-is-meant-by-ai/1-4-quiz-module-1/Quiz-1-ressources/PDF/AI4T-quiz-module3-artificial-intelligence-at-our-service.pdf) / [download html files zip](https://github.com/inrialearninglab/ai4t/raw/main/docs/module-1-what-is-meant-by-ai/1-4-quiz-module-1/Quiz-1-ressources/HTML.zip) / [download Scorm1.2 files zip](https://github.com/inrialearninglab/ai4t/raw/main/docs/module-1-what-is-meant-by-ai/1-4-quiz-module-1/Quiz-1-ressources/SCORM.zip) / [download texts in .xlf files for translation](https://github.com/inrialearninglab/ai4t/raw/main/docs/general-presentation/0-1-conditions-of-use-of-the-mooc-and-its-contents/Quiz-subtitles-xlf-files/Quiz-module-1-who-is-afraid-of-ai.xlf.zip)

  * Quiz Module 2  
  [download pdf format](https://github.com/inrialearninglab/ai4t/raw/main/docs/module-2-how-does-ml-work/2-4-quiz-module-2/Quiz-2-ressources/PDF/AI4T-quiz-module2-how-does-machine-learning-works.pdf) / [download html files zip](https://github.com/inrialearninglab/ai4t/raw/main/docs/module-2-how-does-ml-work/2-4-quiz-module-2/Quiz-2-ressources/HTML.zip) / [download Scorm1.2 files zip](https://github.com/inrialearninglab/ai4t/raw/main/docs/module-2-how-does-ml-work/2-4-quiz-module-2/Quiz-2-ressources/SCORM.zip)/[download texts in .xlf files for translation](https://github.com/inrialearninglab/ai4t/raw/main/docs/general-presentation/0-1-conditions-of-use-of-the-mooc-and-its-contents/Quiz-subtitles-xlf-files/Quiz-module-2-how-does-machine-learning-work.xlf.zip)

  * Quiz Module 3  
    [download pdf format](https://github.com/inrialearninglab/ai4t/raw/main/docs/module-3-AI-at-our-service/3-4-quiz-module-3/Quiz-3-ressources/PDF/AI4T-quiz-module3-artificial-intelligence-at-our-service.pdf) / [download html files zip](https://github.com/inrialearninglab/ai4t/raw/main/docs/module-3-AI-at-our-service/3-4-quiz-module-3/Quiz-3-ressources/HTML.zip) / [download Scorm1.2 files zip](https://github.com/inrialearninglab/ai4t/raw/main/docs/module-3-AI-at-our-service/3-4-quiz-module-3/Quiz-3-ressources/SCORM.zip)/
    [download texts in .xlf files for translation](https://github.com/inrialearninglab/ai4t/raw/main/docs/general-presentation/0-1-conditions-of-use-of-the-mooc-and-its-contents/Quiz-subtitles-xlf-files/Quiz-module-3-artificial-intelligence-at-our-service.xlf.zip)


--------

## How to adapt resources

1. **Text**  
All texts are accessible in HTML or Markdown format.

2. **Videos**  
*Translated subtitles will be directly uploaded on the project YouTube channel by Inria.*

How to proceed for translation :
- step 1 : [download the subtitles in .srt format](https://github.com/inrialearninglab/ai4t/raw/main/docs/general-presentation/0-1-conditions-of-use-of-the-mooc-and-its-contents/Subtitles-EN-09-2021/Videos-SRT.zip)
- step 2 : propose your translation while taking care on note modifying the timecodes
- step 3:  send us [mooc-ai4t@inria.fr](mailto:mooc-ai4t@inria.fr) the translated files.

**Note on file naming**  : Respect the file naming that will allow us to insert the resource at the correct place - Only change the -EN at the end of the file into :

-DE for the German version,
-IT for the Italian version,
-SI for the Slovenian version.

*exemple.*  for the Italian version of the video of the module 1 - sequence 3 (ie. **What is Artificial Intelligence?**) the file name would be : Module 1-Sequence 3-IT.srt

3. **Tutorials**  
*Translated subtiles will be directly inserted in the tutorial by Inria.*

How to proceed for the translation :
- step 1 : [download the subtitles in .vtt format](https://github.com/inrialearninglab/ai4t/raw/main/docs/general-presentation/0-1-conditions-of-use-of-the-mooc-and-its-contents/Subtitles-EN-09-2021/Tutorials-VTT.zip)  
- step 2 : propose your translation while taking care on note modifying the timecodes or the mentions on the top of the document
- step 3 : send us [mooc-ai4t@inria.fr](mailto:mooc-ai4t@inria.fr) the translated files

**Note on file naming**  : Also respect the file naming that will allow us to insert the resource at the correct place - Only change the -EN at the end of the file into :

-DE for the German version,
-IT for the Italian version,
-SI for the Slovenian version.

*exemple.*  for the German version of the video of the Tutorial 2  - video 7 (ie. the last video in the tutorial **Boosted with AI**) the file name would be : tutorial2-vid7-DE.vtt

4. **Quiz**  
All quiz texts can be downloaded in .xlf format in the previous section of the README : **How to access specific ressources**

### General remarks on translation
Each partner is in charge of the translation of the contents from English to the target language (reminder : a budget has been allocated to every partner for this task).
You can  use some free online translator such as :
- [eTranslation](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/Grants+eTranslation)is a UE translation service we can use a member of an Erasmus+ project. Its easy to use and there are many features that can be really helpful for our projet (ie. upload a .pdf or .ppt and receive the formated translation in your mailbox)
- The [official translation website of the EU presidency](https://presidencymt.eu/#/)
- [DeepL](https://www.deepl.com/translator) (a german company which traduction service has an interface in 4 of the languages project : DE, EN, FR, IT). If you download the application (it's also free), the use of DeepL is then really quick and easy - we used it to internationalize the french Mooc **Intelligence Artificielle avec Intelligence**)

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
