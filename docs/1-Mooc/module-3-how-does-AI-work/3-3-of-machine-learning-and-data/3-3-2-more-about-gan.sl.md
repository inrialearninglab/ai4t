---
title: 3.3.2 Generativne adversarne mreže (GAN)
description: Več o GAN
contributor: Mooc IAI
---
??? info "Metadata"
    - Id: EU.AI4T.O1.M3.3.2t
    - Title: 3.3.2 Generativne adversarne mreže (GAN)
    - Type: text
    - Description: Več o GAN
    - Subject: Artificial Intelligence for and by Teachers
    - Authors:
        - AI4T 
        - Mooc IAI
    - Licence: CC BY 4.0
    - Date: 2022-11-15

# Generativna adverzijska omrežja (GAN)
Generativna adverzijska omrežja spadajo med nadzorovano učenje, ki temelji na zagotavljanju vhodnih podatkov, katerih ustrezni želeni izhodni podatki so znani, da bi ocenili razmerje med vhodom in izhodom zunaj vzorcev, zagotovljenih za usposabljanje, in nenadzorovano učenje.

Kadar so na voljo samo vhodni podatki, da bi odkrili določene strukture v podatkih (npr. število parametrov, ki jih označujejo), obstajajo številne druge paradigme, na primer **polonadzorovano**, kjer mešamo podatke, pri katerih poznamo želeni izhod, drugi pa ne, da bi združili oba pristopa.

Druga tako imenovana **samonadzorovana** paradigma je sestavljena iz tega, da na podlagi vhodnih podatkov poiščemo zunanji mehanizem za ustvarjanje ustreznih izhodov. S tem se prihrani ogromno človeškega truda, ki ga je treba vložiti za vsak vhodni podatek, npr. ročno označevanje slik, po potrebi piksel za pikslom (če želimo ugotoviti, kje na sliki je mačka). Na primer, če se želimo naučiti samodejno barvati slike, lahko začnemo z barvnimi slikami, jih zreduciramo na črno-bele slike, nato pa mehanizem usposobimo tako, da mu posredujemo želene barvne slike, ki jih je treba rekonstruirati za vsako črno-belo sliko.

To deluje tudi pri učenju relativnega položaja elementov na obrezani sliki ali časovne usklajenosti v videoposnetku. Vendar ne deluje za vse. Deluje vedno, ko najdete trik za samodejno ustvarjanje želenih vhodnih in izhodnih podatkov iz podatkov. **To je nekakšno nenadzorovano učenje, ki samodejno ustvarja podatke za paradigmo nadzorovanega učenja.**
