---
title: "3.1.2 Kakšna umetna inteligenca?"
description: Prvo razumevanje vrst umetne inteligence
---
??? info "Metadata"
    - Id: EU.AI4T.O1.M3.1.2t
    - Title: 3.1.2 Kakšna umetna inteligenca?
    - Type: text
    - Description: Prvo razumevanje vrst umetne inteligence
    - Subject: Artificial Intelligence for and by Teachers
    - Authors:
        - AI4T 
    - Licence: CC BY 4.0
    - Date: 2022-11-15


# What kind of AI?  
V literaturi je mogoče najti veliko vrst UI. Poglejmo, na kaj se nanašajo.

## Šibka ali močna umetna inteligenca?
- Šibka umetna inteligenca  
  To je umetna inteligenca, ki jo poznamo danes: gre za algoritem, ki se "uči" tako, da svoje parametre prilagaja učnim podatkom, in ni obdarjen z umskimi in kognitivnimi sposobnostmi, vendar lahko določeno nalogo včasih opravi veliko učinkoviteje kot človek.
- Močna umetna inteligenca  
  Umetna inteligenca, ki bi bila sposobna kopirati človeške sposobnosti (učenje, razumevanje, dojemanje, sklepanje, odločanje, vest, čustva itd.) Tako imenovana "močna" umetna inteligenca, ki bi bila sposobna samostojnosti in vsestranskosti v nepričakovanih situacijah, je znanstveni cilj. Vendar pa trenutno obstajajo rezultati, ki kažejo, da je ta idealni cilj močne umetne inteligence tehnično nemogoč. Do danes močna umetna inteligenca še ne obstaja, je le prepričanje.

## Simbolni pristop ali pristop strojnega učenja?

Na kaj se v okviru šibke umetne inteligence nanašata simbolični pristop ali pristop strojnega učenja?

- Simbolni pristop k umetni inteligenci  
  Znan tudi kot "na pravilih temelječa" ali "klasična" umetna inteligenca, ki temelji na logiki in apriornem znanju, ki ga zagotavljajo človeški strokovnjaki.
  Zgodovinsko gledano je simbolni pristop starejši, ustreza ekspertnim sistemom, v zadnjem času pa tako imenovanemu semantičnemu spletu.
- Pristop strojnega učenja (ali digitalni pristop)  
  Znan tudi kot "digitalni" pristop, temelji na podatkih in učenju.
  Številčni pristop ali pristop strojnega učenja (ML) vključuje umetne nevronske mreže in globoko učenje, kadar je več plasti takšnih računalniških enot[^1]. Učinkovit je postal v zadnjem času in prav ta pristop nam omogoča samodejno prepisovanje besedil, ki jih narekujemo, ali prepoznavanje predmetov na slikah. Zahteva veliko podatkov in temelji na statističnih pristopih.

<figure>
  <img src="Images/Machine-Learning-NN-Deep-Learning-SI.png" alt= "Relationship between AI types">
  <figcaption>Razmerje med umetno inteligenco, nevronskimi mrežami in globokim učenjem (prevedeno z DeepL) - Source: AI and education: Guidance for policy-makers, UNESCO, 2021</figcaption>
</figure>

## Nadzorni ali nenadzorovani pristop k učenju?

V okviru pristopov strojnega učenja se sistemi umetne inteligence delijo na dva načina, odvisno od načina uporabe podatkov za njihovo usposabljanje:[^2]

- nadzorovano učenje  
  "*Nadzorovano učenje se nanaša na uporabo označenih podatkov - na primer slik, na katerih je navedeno, ali so na njih mačke ali ne - za usposabljanje algoritmov. Ti pristopi razvijajo lastne metode za napovedovanje, kako naj bodo slike označene.*" [deepl translation]
- Nenadzorovano učenje  
  "*Nenadzorovano učenje se lahko uporablja, kadar ni na voljo kakovostnih označenih podatkov. Odlikuje jih iskanje novih grozdov in povezav v podatkih, ki jih ljudje sicer ne bi prepoznali ali označili. Ker so oznake pogosto nepopolne ali nenatančne, številne aplikacije, kot so sistemi za priporočanje vsebine, združujejo tako nadzorovane kot nenadzorovane pristope ML.*" [deepl translation]

Veliko mehanizmov umetne inteligence danes deluje z nadzorovanim učenjem. Za opis delovanja si predstavljajmo, da želimo umetno inteligenco naučiti prepoznati mačko na sliki.

V ta namen bomo zagotovili veliko podatkov, in sicer veliko slik, na katerih je mogoče videti mačko, in veliko slik, na katerih mačke ni mogoče videti, tako da izračun prilagodi svoje parametre, da bi dal izhodno vrednost, ki ustreza prisotnosti ali odsotnosti mačke. Vse te slike so vhodni podatki, pričakovani rezultat, ali je na sliki mačka ali ne, pa izhodni podatki. Ti "vhodni" in "izhodni" podatki so edine informacije, ki so na voljo za njegovo usposabljanje.

Izračunski mehanizem mora zato prilagoditi notranje parametre (kot so krmilni gumbi fotoaparata), da ugotovi, ali je na sliki mačka ali ne. Prvič bo na voljo naključen in zato najverjetneje napačen rezultat, nato pa bo mehanizem postopoma opazil napake in z zaporednimi poskusi prilagodil parametre, da bi jih zmanjšal. Ta proces je znan kot strojno učenje.

Pravzaprav veliko aplikacij umetne inteligence uporablja ML in skoraj vedno nekaj simbolne umetne inteligence v ozadju. Na primer, številne aplikacije klepetalnih robotov so vnaprej programirane s pravili, ki jih je določil človek, o tem, kako odgovoriti na predvidena vprašanja. Aktualna tema raziskav pa je ugotoviti, kako združiti simbolični pristop in pristop strojnega učenja.

[^1]:[AI and education: Guidance for policy-makers](https://unesdoc.unesco.org/ark:/48223/pf0000376709) - Miao Fengchun, Holmes Wayne, Ronghuai Huang, Hui Zhang - ISBN: 978-92-3-100447-6 - UNESCO, 2021

[^2]:[Artificial intelligence: How does it work, why does it matter, and what can we do about it?](https://www.europarl.europa.eu/thinktank/en/document/EPRS_STU(2020)641547) - Philip Boucher, Scientific Foresight Unit (STOA) - ISBN: 978-92-846-6770-3 - European Union, 2020
