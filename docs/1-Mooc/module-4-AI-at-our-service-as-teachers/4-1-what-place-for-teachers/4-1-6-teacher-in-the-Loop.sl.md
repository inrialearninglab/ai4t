---
title: "4.1.6 Učitelj v zanki (Teacher-in-the-loop)"
description: Razumeti model učitelja v zanki in ga uporabiti kot orodje za spodbujanje "uporabnikov pri nadzoru" za sisteme umetne inteligence v izobraževanju
---
??? info "Metadata"
    - Id: EU.AI4T.O1.M4.1.6t
    - Title: 4.1.6 Učitelj v zanki (Teacher-in-the-loop)
    - Type: text
    - Description: Razumeti model učitelja v zanki in ga uporabiti kot orodje za spodbujanje uporabnikov pri nadzoru za sisteme umetne inteligence v izobraževanju
    - Subject: Artificial Intelligence for and by Teachers
    - Authors:
        - AI4T 
    - Licence: CC BY 4.0
    - Date: 2022-11-15

# Učitelj v zanki

Na področju izobraževanja in usposabljanja "*Vse zainteresirane strani bi morale razmisliti o posledicah predaje pooblastil nastajajočim tehnologijam za sprejemanje pedagoških odločitev, ki bi jih sicer sprejel pedagoški delavec z ustreznim pedagoškim znanjem in znanjem o vsebini predmeta*" [deepl translation] [^1].  
Da bi bili sistemi umetne inteligence v izobraževanju vredni zaupanja, je potrebna ustrezna analiza z uporabo **modela "Teacher-in-the-loop"**.

Skupno raziskovalno središče v svojem poročilu[^1] predlaga, da: "*Za izobraževalne aplikacije in storitve, ki temeljijo na avtonomnem odločanju, je mogoče predvideti tri različne pristope za obravnavo porazdelitve odgovornosti med človekom in algoritmom/strojem*" [deepl translation] [^1], in sicer Teacher-in-the-Loop, Teacher-out-of-the-Loop, Teacher-over-the-Loop:  

- ***Učitelj v zanki - Teacher-in-the-loop***: Razmislite o aplikaciji, ki avtonomno ocenjuje izpite z visokimi ocenami ali izvaja diagnosticiranje učnih težav. V takšnih primerih lahko napačna odločitev povzroči resno škodo končnemu uporabniku (npr. izguba priložnosti, nepošteno ravnanje). Odločitve ali aplikacije, ki bi lahko povzročile škodo ali imele resne posledice za končnega uporabnika, bi morale izobraževalcu najprej priporočiti odločitev z dovolj preglednimi informacijami, da jo lahko izobraževalec pregleda - in se šele nato odločiti, ali bo končno odločitev izvedel ali ne (slika 1, desno zgoraj).

- ***Učitelj preko zanke - Teacher-over-the-loop***: Obstajajo tudi druge vrste odločitev, pri katerih je dovolj, da izobraževalec ohrani pregled nad odločitvijo, ki jo sprejme aplikacija. To je lahko na primer primer, ko prilagodljiva učna platforma učencu priporoči učno dejavnost za dosego predvidenega učnega rezultata (slika 1, spodaj desno).

- ***Učitelj zunaj kroga - Teacher-out-of-the-loop***: V primeru, ko je verjetnost in resnost škode, ki jo povzroči na primer izobraževalna aplikacija, ki se uporablja zunaj šole, majhna, nadzor učitelja ni potreben (slika 1, spodaj levo).

## Interaktivna predstavitev modela "Teacher in the loop"
_C Klikni na spodnjo sliko, če želiš podrobneje spoznati model "Učitelj v zanki"!_

<a href="https://view.genial.ly/63d8d796d67371001ab52ffa" target="_blank">
<figure>
  <img src="Images/Teacher-in-the-Loop.si.jpg" alt="Teacher in the Loop Model representation" />
  <figcaption>Slika 1: Različne stopnje človeškega nadzora pri avtonomnem odločanju v izobraževanju in usposabljanju. (Prirejeno iz poročila "Emerging technologies and the teaching profession").</figcaption>
</figure></a>  

[^1]: ["Emerging technologies and the teaching profession: Ethical and pedagogical considerations based on near-future scenarios"](https://publications.jrc.ec.europa.eu/repository/handle/JRC120183) - Vuorikari Riina, Punie Yves, Marcelino Cabrera - Joint Research Center report - European Commission, 2020.
