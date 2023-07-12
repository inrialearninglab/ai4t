---
title: "3.2.5 Dejavnost: Igraj se z nevroni stroja"
description: Razumite, kako delujejo umetne nevronske mreže
type: activity
contributor: Spletna stran Pixees
---
??? info "Metadata"
    - Id: EU.AI4T.O1.M3.2.5a
    - Title: 3.2.5 Dejavnost: Igraj se z nevroni stroja
    - Type: activity
    - Description: Razumite, kako delujejo umetne nevronske mreže
    - Subject: Artificial Intelligence for and by Teachers
    - Authors:
        - AI4T 
        - Spletna stran Pixees
    - Licence: CC BY 4.0
    - Date: 2022-11-15


# Dejavnost:  Igrajte se z nevroni stroja
Spletna programska oprema **[TensorFlow](https://www.tensorflow.org/overview/)** omogoča gradnjo umetnih nevronskih mrež in preizkušanje njihovih odzivov za različne vrste problemov in na različnih vrstah podatkov. Pri vrsti problema "razvrščanje" je cilj ločiti modro in oranžno obarvane točke. Uporaba te vrste problema je na primer algoritem za razvrščanje fotografij. V spodnjem primeru je en vhodni podatek (značilnost), ki ločuje točke vodoravno, in drugi, ki ločuje navpično. Z združitvijo teh dveh vhodov dobimo poševno ločevanje. Rezultat (izhod) je dobro prilagojen izbrani vrsti podatkov.

<figure>
  <img src="Images/tensor-flow.png" />
  <figcaption> Pogled na igrišče tenzorskega toka </figcaption>
</figure>

## TensorFlow: nekaj pojasnil, preden poskusite simulacijo nevronske mreže

*Izvir: prevod iz [Pixejeve francoske spletne strani](https://pixees.fr/jouez-avec-les-neurones-de-la-machine/)*

**Ko je nevronsko omrežje in kako deluje?**
Nevronsko omrežje je splošni mehanizem, sestavljen iz majhnih enot (psevdonevronov), ki so med seboj povezane. Vsaka enota izvaja zelo preprosto operacijo: sprejme vhodne vrednosti, jih zelo preprosto združi (preprosto povprečenje s koeficienti) in na rezultat uporabi transformacijo (npr. ohrani samo pozitivne vrednosti).

Parametri tega algoritma so koeficienti, ki se uporabljajo za ponderiranje povprečja. Kombinacija zelo, zelo velikega števila teh enot je tista, ki omogoča izvajanje zelo zapletenih operacij. Omrežje takšnih "nevronov" dobimo z akumulacijo več slojev takšnih enot. Vhod so podatki, ki jih želimo obdelati. Ti se preoblikujejo skozi vse plasti, zadnja plast pa kot rezultat poda napoved teh podatkov, na primer za ugotavljanje, ali je na sliki obraz. Nevronska mreža je torej parametrizirana funkcija s številnimi koeficienti (imenovanimi "uteži"), izbira teh uteži pa določa izvedeno obdelavo.

**Kje so nevroni v programu TensorFlow?**
V spletnem vmesniku TensorFlow lahko preprosto ustvarite omrežje z ducatom nevronov, od katerih ima vsak od 3 do 10 parametrov. Izračunani rezultat je tako poleg dveh koordinat (x,y) vhodne točke odvisen od več sto parametrov. Na vmesniku vsak kvadratek predstavlja nevron, barva pike s koordinatama (x,y) v kvadratku pa predstavlja izhod nevrona, ko vnesemo (x,y) v vhod omrežja. Če je na izhodu samo en nevron, je predstavljen z večjim kvadratom na desni strani omrežja. Parametri omrežja so inicializirani z naključnimi vrednostmi.

**Ale kako se naučimo teh uteži?**
Nadzorno učenje je sestavljeno iz zagotavljanja primerov podatkov z rešitvijo, ki jo je treba poiskati, da se omrežje usposobi za ustrezno prilagajanje teh uteži. V primeru na zgornji sliki gre za vrsto točk v kvadratu, od katerih ima vsaka pričakovano barvo (modro ali oranžno), z namenom napovedati barvo točke na določenem mestu.  Za iskanje zadevnih parametrov se uporablja klasični algoritem postopnega prilagajanja uteži.  
Ta algoritem se zažene z gumbom "play" v zgornjem levem kotu vmesnika, izhod nevronske mreže pa se med procesom "učenja" spreminja: barva ozadja izhodnega nevrona prevzame barvo učnih točk, ki so narisane nad njim. Drug del nabora podatkov se nato uporabi za testiranje kakovosti funkcije, ki jo dobi omrežje. Krivulja zgoraj desno prikazuje stopnjo napake podatkov, uporabljenih za učenje (za preverjanje, ali so se uteži pravilno prilagodile), in stopnjo napake drugih testnih podatkov (za preverjanje, ali se naučeno dobro posplošuje na nove podatke). Gumbi na levi strani omogočajo prilagoditev porazdelitve podatkov med učno in testno množico ter dodajanje napak podatkom (šumni podatki), da bi preverili, ali je mehanizem odporen na te napake.

V praksi nam uspe najti zadovoljive parametre, vendar ni pravega teoretičnega okvira za formalizacijo vsega tega, temveč je to stvar eksperimentiranja: izbira pravega števila nevronov, pravega števila slojev nevronov, katere predhodne izračune dodati kot vhod (na primer pomnoževanje vhodov za povečanje stopenj prostosti za izračun).  
Tovrstne tehnike lahko v praksi prinesejo impresivne rezultate, na primer pri prepoznavanju glasu ali predmetov na sliki.

Vendar pa je razumevanje, zakaj (in kako) se dosegajo tako dobri rezultati, še vedno precej odprto znanstveno vprašanje.

## Poskusite TensorFlow

_C Klikni na spodnjo sliko, da v novem oknu odpreš aplikacijo TensorFlow_

<a href="https://playground.tensorflow.org/#activation=tanh&amp;batchSize=8&amp;dataset=circle&amp;regDataset=reg-plane&amp;learningRate=0.03&amp;regularizationRate=0&amp;noise=10&amp;networkShape=5,2&amp;seed=0.02708&amp;showTestData=false&amp;discretize=false&amp;percTrainData=50&amp;x=true&amp;y=true&amp;xTimesY=false&amp;xSquared=false&amp;ySquared=false&amp;cosX=false&amp;sinX=false&amp;cosY=false&amp;sinY=false&amp;collectStats=false&amp;problem=classification&amp;initZero=false&amp;hideText=false;" target="_blank"><figure>
  <img src="Images/playground-TensorFlow.png">
  <figcaption> TensorFlow playground view </figcaption>
</figure></a>
