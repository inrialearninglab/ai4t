---
title: 4.1.7 Odločanje z umetno inteligenco v medicini in pravu
description: V tem poglavju se seznanite s področji zunaj izobraževanja, kjer so sistemi umetne inteligence že temeljito spremenili način sprejemanja odločitev.
---
??? info "Metadata"
    - Id: EU.AI4T.O1.M4.1.7t
    - Title: 4.1.7 Odločanje z umetno inteligenco v medicini in pravu
    - Type: text
    - Description: V tem poglavju se seznanite s področji zunaj izobraževanja, kjer so sistemi umetne inteligence že temeljito spremenili način sprejemanja odločitev.
    - Subject: Artificial Intelligence for and by Teachers
    - Authors:
        - AI4T 
    - Licence: CC BY 4.0
    - Date: 2022-11-15

# Odločanje z umetno inteligenco v medicini in pravosodju

Ko gre za pomoč pri sprejemanju odločitev, sta dve področji, ki že imata zgodovino uporabe umetne inteligence v pravu in medicini.  
Glede na pomembnost odločitev, ki se sprejemajo na teh področjih, sta to zanimiva primera.

## UI in Medicina

"*I je dejansko v središču medicine prihodnosti z asistiranimi operacijami, spremljanjem bolnikov na daljavo, inteligentnimi protezami ali celo personaliziranim zdravljenjem zaradi navzkrižnega povezovanja podatkov (bigdata)*." [deepl translation] [^1]

Pred približno 50 leti je bil prav na področju diagnostike razvit eden najbolj znanih ekspertnih sistemov: MYCIN.  
"*To je bil zgodnji ekspertni sistem, ki je uporabljal umetno inteligenco za prepoznavanje bakterij, ki povzročajo hude okužbe, kot sta bakteriemija in meningitis, ter za priporočanje antibiotikov, pri čemer je bil odmerek prilagojen bolnikovi telesni teži*" [deepl translation] [^2].

Sistem MYCIN, ki je bil razvit leta 1972, je bil šest let pozneje pri postavljanju natančnih diagnoz boljši od zdravnikov. V obsežnem preizkusu so MYCIN in 9 zdravnikov, pripravnikov in akademikov, prosili, da postavijo diagnoze in predpišejo recepte za 80 bolnikov z meningitisom. Diagnoze in predpise je nato slepo ocenilo 8 specialistov in specializantov za meningitis in ... MYCIN je dosegel višje ocene kot človeški strokovnjaki.

Danes je eno od pomembnih področij uporabe strojnega učenja v medicinske namene analiza slik za medicinske diagnoze[^3]. V nekaj besedah si oglejmo, kako deluje, kot je pojasnil Gaël Varoquaux, raziskovalec podjetja AI Inria:

"*Strojno učenje je veja umetne inteligence (UI). Na kratko povedano, gre za to, da se programski opremi posreduje na tisoče primerov, tako da se nauči izvajati naloge prepoznavanja, npr. pregledovanje slik za prepoznavanje psov ali mačk. lepotnih madežev ali malignih melanomov. Teoretično naj bi to omogočilo široko paleto aplikacij v medicini. Na primer, rentgenske slike se zbirajo od tisočih bolnikov, ki trpijo za isto boleznijo - kar imenujemo kohorta. Nato bo računalnik na podlagi teh podatkov strojnega učenja zaznal enake vizualne značilnosti na vseh novih posnetkih, posnetih med pregledom drugih posameznikov. To postanejo ciljni podatki*." [deepl translation] [^4]

## UI in Pravosodje

Na področju pravosodja sta opredeljeni dve glavni uporabi sistemov umetne inteligence.

Prva so orodja, ki lahko pomagajo pri postopku odločanja. Sistem umetne inteligence lahko sodniku pomaga pri preiskavi zadeve, na primer tako, da ga obvesti o vseh sodbah, ki so jih v podobnih primerih izdala ustrezna sodišča. V tem primeru umetna inteligenca izboljša iskanje informacij, vendar odločitev sprejme sodnik sam[^5].

Obstajajo tudi orodja, ki lahko napovedujejo odločitve. V tem primeru UI sodniku neposredno predlaga odločitev sodišča[^6]. Programska oprema analizira veliko število primerov sodnih odločb in "samodejno" izpelje pravila za odločanje. Pojav napovedovalnega pravosodja vzbuja številne pomisleke.

Če "*uporaba umetne inteligence na področju pravosodja lahko prispeva k izboljšanju učinkovitosti in kakovosti*", [jo je] "*potrebno izvajati odgovorno in v skladu s temeljnimi pravicami*" [deepl translation] [^7]. Na evropski ravni je bila leta 2018 sprejeta Etična listina o uporabi umetne inteligence v pravosodnih sistemih in njihovem okolju.

Organizirana je okoli petih načel in priznava pomen nediskriminacije, spoštovanja temeljnih pravic, nediskriminacije, kakovosti, varnosti, preglednosti, nepristranskosti in pravičnosti.

Na koncu poudarja načelo "pod nadzorom uporabnika": "*izključuje normativni pristop in zagotavlja, da so uporabniki obveščeni akterji in da nadzorujejo svoje odločitve*." [deepl translation] [^7]

Tako v pravu kot v izobraževanju ali medicini lahko podpora pri odločanju s strani sistema umetne inteligence izboljša sprejeto odločitev. V zvezi z morebitnimi posledicami teh istih odločitev je ohranjanje človeškega nadzora pomembno vprašanje za razvoj sistemov UI v prihodnjih letih.

Vsak njihov uporabnik mora biti sposoben ohraniti kritično uporabo predloga odločitve, ki jo sprejmejo sistemi UI. Na primer, pri odkrivanju nekaterih vrst raka so sistemi tako dobro usposobljeni za določene vizualne značilnosti, da odlično diagnosticirajo te manifestacije, drugih pa niso več sposobni prepoznati. Še vedno je potrebno zdravnikovo oko, da vidi tisto, kar je dobro usposobljeni umetni inteligenci ušlo.

[^1]: Translated from the French article [Intelligence artificielle et santé: Des algorithmes au service de la médecine](https://www.inserm.fr/dossier/intelligence-artificielle-et-sante/) / *Artificial intelligence and health: Algorithms in the service of medicine* - Website of "Institut national de la santé et de la recherche médicale" / *French National Institute of Health and Medical Research* (consulted 08/23/2022).

[^2]: [Mycin](https://en.wikipedia.org/wiki/Mycin), Wikipedia article (consulted 08/23/2022)

[^3]: Varoquaux, G., Cheplygina, V. - [Machine learning for medical imaging: methodological failures and recommendations for the future](https://doi.org/10.1038/s41746-022-00592-y). *npj Digit. Med.* 5, 48 (2022).

[^4]: Varoquaux, G. - [Medical imaging: can artificial intelligence deliver?](https://www.inria.fr/en/medical-imagingartificial-intelligence-automatic-learning) - Interview on Inria Website (consulted 08/23/2022)

[^5]: In this case it refers to "Decision augmentation" or "Decision support" as mentioned in the previous section on "Decision Making with AI".

[^6]: Here it refers to "Decision automation" as mentioned in the previous section on "Decision Making with AI".

[^7]: From [Ethical Charter on the Use of Artificial Intelligence in Judicial Systems](https://www.coe.int/en/web/cepej/cepej-european-ethical-charter-on-the-use-of-artificial-intelligence-ai-in-judicial-systems-and-their-environment)- European Commission for the efficiency of justice Web site (consulted 08/29/2022).
