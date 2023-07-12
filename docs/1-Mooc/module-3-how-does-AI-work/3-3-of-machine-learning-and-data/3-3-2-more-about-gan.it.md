---
title: "3.3.2 Reti avversarie generative (GAN)"
description: Ulteriori informazioni su GAN
contributor:  Mooc IAI
---
??? info "Metadata"
    - Id: EU.AI4T.O1.M3.3.2t
    - Title: 3.3.2 Reti avversarie generative (GAN)
    - Type: text
    - Description: Ulteriori informazioni su GAN
    - Subject: Artificial Intelligence for and by Teachers
    - Authors:
        - AI4T 
        - Mooc IAI
    - Licence: CC BY 4.0
    - Date: 2022-11-15

# Reti avversarie generative (GAN)
Le reti avversarie generative si collocano tra l'apprendimento supervisionato, basato sulla fornitura di dati in ingresso, di cui si conosce il corrispondente output desiderato, al fine di stimare la relazione ingresso-uscita al di là dei campioni forniti per l'addestramento, e l'apprendimento non supervisionato.

Quando sono disponibili solo i dati di input, per scoprire determinate strutture all'interno dei dati (ad esempio, il numero di parametri che li caratterizzano), esistono molti altri paradigmi, ad esempio **semisupervisionato** in cui si mescolano dati di cui si conosce l'output desiderato e altri no, in modo da mescolare i due approcci.

Un altro paradigma cosiddetto **auto-supervisionato** consiste nel trovare, a partire dai dati di input, un meccanismo esterno per generare gli output corrispondenti. Questo per risparmiare l'enorme sforzo umano di inserire per ogni input l'output desiderato, ad esempio etichettando a mano le immagini, pixel per pixel se necessario (se si vuole trovare dove si trova il gatto in un'immagine). Ad esempio, per imparare a colorare automaticamente le immagini, si può partire da immagini a colori, ridurle in bianco e nero e quindi addestrare il meccanismo fornendogli le immagini a colori desiderate, qui note senza la necessità di ricostruirle per ogni immagine in bianco e nero.

Questo metodo funziona anche per imparare la posizione relativa degli elementi in un'immagine che viene ritagliata, o la coerenza temporale in un video. Ma non funziona per tutto. Funziona ogni volta che si trova un trucco per generare automaticamente gli input e gli output desiderati dai dati. **Si tratta di una sorta di apprendimento non supervisionato che genera automaticamente i dati per un paradigma di apprendimento supervisionato.**
