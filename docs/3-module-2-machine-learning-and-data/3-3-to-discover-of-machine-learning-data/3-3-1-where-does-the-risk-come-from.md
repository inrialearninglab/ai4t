---
title: Where Does the Risk Come From?
description:
---
#### Where Does the Risk Come From?

Long article about AI risk identification and classification published on www.lemonde.fr Web site.  

The article is dedicated to two types of risks linked to AI:  
\- Data risk refers to the protection of data on these platforms  
\- Algorithm risk refers to the drift of algorithmic discrimination  

The EU Guidelines for Trustworthy AI is quoted at the end of the unit.  
Other resources in English about risk and cross studies between law and informatics may be found and integrated.

[Full article published on February 20, 2020 by binaire on Le Monde web site: "D’où vient le risque ? Des données et des algorithmes"](https://www.lemonde.fr/blog/binaire/2020/02/05/les-plateformes-numeriques-un-foyer-pour-les-risques-donnees-et-algorithmes/)

The meeting of legal and IT researchers as part of the launch of the [Internet and Society Centre](http://cis.cnrs.fr/) [](http://cis.cnrs. fr/) and the setting up of the GdR Internet et Socié, has been the occasion for cross-reflections and to raise a number of questions and first avenues of research to explore together. This article summarises the results of a round table. **Serge Abiteboul, Thierry Viéville  
**

![](https://storage.googleapis.com/prd-blogs/2020/02/cc883a26-white-caution-cone-on-keyboard-211151.jpg)

[Photo by Fernando Arcos from Pexels](https://www.pexels.com/photo/white-caution-cone-on-keyboard-211151/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

Digital platforms and their role in society are occupying the media and governing bodies. We, lawyers and computer scientists, perceive them as new data markets. Several human actors, artists, authors, content creators, language developers, platform developers, application developers, Internet users and consumers, public and private actors, gravitate around these platforms and are exposed to two types of risk:

*   Data risk is about data protection on these platforms.
*   Algorithm-risk refers to the issues of algorithmic discrimination.

This paper provides a first reflection on how to deal with digital platforms and data and algorithmic risks. These issues can be approached from two complementary points of view: the legal point of view, whose main concern is to define the frameworks that allow these risks to be identified and managed, and the IT point of view, whose aim is to develop the tools needed to quantify and resolve these risks.

##### The three facets of algorithmic risk

Algorithm risk can be characterised in three ways.

*   Firstly, there is algorithmic confinement, which can also relate to opinions, cultural knowledge or even commercial practices. Indeed, the algorithms confront the Internet user with the same content, depending on his profile and the integrated parameters, despite the respect of the principle of fairness. This is the case on news recommendation sites such as Facebook or product recommendation sites such as Amazon.
*   The second facet of algorithmic risk is linked to the control of all aspects of an individual's life, from the regulation of information for investors to his or her eating habits, hobbies, or even health status. This tracing of the individual suggests a form of surveillance that contravenes the very essence of individual freedom.
*   The third is related to the potential violation of fundamental rights. In particular, algorithmic discrimination defined as unfavourable or unequal treatment, in comparison with other persons or other equal or similar situations, based on a ground expressly prohibited by law. This encompasses the study of the fairness (_fairness_) of ranking (sorting of people looking for a job online), recommendation, and prediction learning algorithms. The problem of [discriminatory bias](https://www.ted.com/talks/joy_buolamwini_how_i_m_fighting_bias_in_algorithms?language=fr) induced by algorithms concerns several areas such as online hiring on MisterTemp', Qapa and TaskRabbit, court decisions, police patrol decisions, or school admissions.

There is no official English version of the "Algorithmes, données et biais: quelles politiques publiques ?" report on Classification of biases mentionned below. Other resources in English on risk characterisation shoud be found and integrated if needed.

We take up a [classification of biases](https://www.telecom-paris.fr/wp-content-EvDsK19/uploads/2019/02/Algorithmes-Biais-discrimination-equite.pdf) proposed by colleagues at Télécom ParisTech and discussed in [a report](https://www.institutmontaigne.org/blog/algorithmes-donnees-et-biais-quelles-politiques-publiques) from the Institut Montaigne in Paris. We adapt this classification to risk-data and risk-algorithms with a focus on biases.

![](https://storage.googleapis.com/prd-blogs/2020/01/f72b6361-illustrationsbiais2.png)

©Sihem Amer-Yahia

Les données proviennent de sources différents et ont des formats multiples. Elles véhiculent différents types de biais.

##### From risks to biases on data and in algorithms.

Data bias is mainly statistical

**Data-bias** is typically present in data values. For example, this is the case for a recruitment algorithm trained on a database in which men are over-represented will exclude women.

**Standard bias** is a tendency to act in reference to the social group we belong to. For example, one study shows that women tend to click on job offers that they think are easier to get as a woman.

**Omitted variable bias** (modelling or coding bias) is a bias due to the difficulty of representing or coding a factor in the data. For example, because it is difficult to find factual criteria to measure emotional intelligence, this dimension is absent from recruitment algorithms.

The problem is that it is difficult to find factual criteria to measure emotional intelligence.

**The selection bias** is in turn due to the characteristics of the sample selected to draw conclusions. For example, a bank will use internal data to derive a credit score, focusing on those who have or have not obtained a loan, but ignoring those who have never needed to borrow, etc.

The algorithmic bias holds true for all of the sample.

The algorithmic bias is mainly a matter of reasoning.

**An economic bias** is introduced into algorithms, intentionally or unintentionally, because it will be economically efficient. For example, an advertising algorithm directs ads to particular profiles for which the chances of success are greater; razors will be more likely to be seen by men, fast food by socially disadvantaged populations, etc.

It is appropriate for the algorithm to be able to identify the most important factors in the success of an ad.

A range of cognitive biases should also be mentioned

*   Conformity biases, known as "panhandle sheep," correspond to our tendency to reproduce the beliefs of our community. This is the case, for example, when we support a candidate in an election because his family and friends support him.       
*   Confirmation bias is a tendency to favour information that reinforces one's view. For example, after a trusted person has told us that so-and-so is bossy, we only notice examples that show this.            
*   The illusory correlation bias is a tendency to want to associate phenomena that are not necessarily related. For example, thinking that there is a relationship between oneself and an external event such as a train delay or weather.
*   The endogenous bias is related to a relative inability to anticipate the future. For example, in the case of _credit scoring_, it may be that a prospect with a poor loan repayment history may change their lifestyle when they decide to start a family.  


![](https://storage.googleapis.com/prd-blogs/2020/01/f9e2cccb-illustrationsbiais1.png)

©Sihem Amer-Yahia

Algorithms are a series of instructions that manipulate input data and return output data. This input data sometimes carries biases. Biases can also be found in one or more instructions of the algorithms.

##### Should we address data-risk and algorithm-risk on digital digital platforms together or separately?

Let's consider two examples, the context of technology blockchain technology, and that of Artificial Intelligence systems.

On blockchain, first of all, there are data, risks and their bias. Let's take the example of data and the associated risks. The blockchain works by encryption with two cryptographic keys: private keys and public keys. Many Internet users entrust platforms with their private keys, thus delegating to them the management of their address and the movement of funds. These private keys are stored either in a file accessible on the Internet (_hot storage_) or on an isolated device (_cold storage_). The former is obviously highly vulnerable to hacking, while 92% of trading platforms report using a _cold storage_ system. Since 2011, 19 serious incidents have been recorded for an estimated loss amounting to $1.2 billion. The causes of these incidents are multiple. The most common comes from private key tampering, followed by the introduction of malware. The _hack_ of the Coincheck platform in Japan in January 2018 illustrates the weak protection of the _hot storage_ system.

Another example on algorithms and associated risks, the exchange of cryptocurrencies on platforms is seeing the development and diversification of market infrastructures. The ambition is _"to enable the establishment of an environment that promotes the integrity, transparency and security of the services concerned for investors in digital assets, while ensuring a secure regulatory framework for the development of a robust French ecosystem"_. France has recently France has recently adopted a legal framework to regulate these activities activities in a flexible manner. However, at the global level, the risks of non-transparent listings or suspicious transactions of non-transparent quotations or suspicious transactions resembling of direct price manipulation or informed investor practices, such as type of _frontrunning_. Frontrunning is a stock market technique that allows a broker to use an order transmitted by its customers transmitted by his clients in order to enrich himself. The technique consists of The technique consists of taking advantage of price discrepancies generated by large orders The technique consists of taking advantage of price shifts caused by large orders placed by the broker's clients.

Let's get to the question "should we address risk-data and data-risk and algorithm-risk on digital platforms together or separately?" With regard to blockchain, the law's answer is separate, because the risks captured are different. On the one hand, certain provisions of criminal law, civil liability or personal data protection will be mobilised. mobilised. On the other hand, in France, the recent legal framework for the other hand, in France, the recent legal framework aimed at capturing the activities of service providers and to avoid algorithmic risk is mainly regulatory. is mainly regulatory.

Other resources in English on AI algorithms liability and accountability shoud be found and integrated if needed.

**On AI systems, we will take the prism of liability and our question through the prism of liability and accountability.**

This question is diabolical because it requires the lawyer to dive into the world of computing in order to understand what artificial intelligence consists of, this catch-all word that covers, in reality, numerous computer sciences and techniques. And is it necessary to use this term at all, when the creator of the much used voice assistant Siri has just written a book with a slightly provocative title, which is a tad provocative, states that artificial intelligence intelligence does not exist... ([Luc Julia, L’intelligence artificielle n’existe pas, _First editions,_ 2019](https://www.decitre.fr/livres/l-intelligence-artificielle-n-existe-pas-9782412043400.html?gclid=CjwKCAiA0svwBRBhEiwAHqKjFn1VMnxXJfj2t5mUiTcazBI-Bg9q6s9zDvYC8Oz8mII4f1z6TiTEIhoCGl8QAvD_BwE).

A distinction between AI systems is often made: only certain systems are actually embedded in a body in order to offer its algorithmic behaviours: Other AI systems make algorithmic decisions or recommendations that can have an immediate effect on the real world and the human mind, without needing to be embodied in a body: These include consumer marketing recommendations, social network feeds, predictive justice, and are often seen as "rigged". However, all AI systems eventually become embedded in a machine: a robot, a car, a computer, a phone, and all AI systems have the potential to impact on the human mind or body, and even on personal rights ([M. Baccache, Intelligence artificielle et droits de la responsabilité, in Droit de l’intelligence artificielle, A. Bensamoun, G. Loiseau, (dir.), L.G.D.J., Les intégrales 2019, p. 71 f.](https://www. lgdj.fr/droit-de-l-intelligence-artificielle-9782275065649.html)), so much so that we will choose here to grasp the question of liability when using AI systems in a transversal manner.

The cross-cutting question we will ask is whether the specificity of AI systems, both in terms of their evolving nature and their complex governance, and in terms of the risks of their implementation for humans and society, are sufficiently well understood; volutive nature and their complex governance, as well as the risks of their implementation for human beings and society, do not call for a new approach; This is not to say that accountability, understood as the sole a posteriori sanction for the occurrence of a risk, should be seen as a complement between accountability in the governance of each AI system throughout its life cycle and a posteriori accountability. If accountability is recognised as a prerequisite for responsibility, it will imply considering data-risks and algorithmic-risks jointly, thus preserving the specificity of the system; cificity of each of these risks, but by linking them, because it is through the conjunction of these two types of risks, that consequences that are precarious for humans or society can occur.

In fact, in its April 2019 guidelines on trustworthy AI, the High Level Expert Group on Artificial Intelligence, mandated by the European Commission to develop and implement a European strategy on artificial intelligence; In one of its proposals, the High Level Expert Group on Artificial Intelligence, mandated by the European Commission, recalls a fundamental point, namely the need to recognise and acknowledge that &some applications of AI may bring considerable benefits to the environment; While some AI applications may bring significant benefits to individuals and society, they may also have negative impacts, including impacts that may be difficult to anticipate, recognise or measure (e.g. in the form of the use of AI); (e.g. on democracy, the rule of law and distributive justice, or on the human mind itself) (High Level Expert Group on Artificial Intelligence, [Guidelines for Trustworthy AI, April 2019, constituted by the European Commission in June 2018](https://ec.europa.eu/digital-single-market/en/news/ethics-guidelines-trustworthy-ai),).

In doing so, the High Level Expert Group calls for appropriate measures to mitigate these risks where necessary, in a manner commensurate with the scale of the problem; (b) to take into account the extent of the risk and, on the basis of the articles of the Charter of Fundamental Rights of the European Union, to pay particular attention to situations involving more vulnerable groups of people; In this context, the European Commission should pay particular attention to situations concerning more vulnerable groups such as children, people with disabilities and other historically disadvantaged groups at risk of exclusion, and/or to situations characterised by asymmetries of power or information, for example between employers and workers, or between businesses and consumers.

Even though certain risks and the protection of certain vulnerable groups require it, taking the appropriate measures is not easy, even beyond the current tension between the principle of innovation and the principle of security. The reason is that both the technical bricks used and the people involved in the operation of an AI system are numerous, varied and complex, leading to many interactions that are not easy to master. It is worth noting that the high-level panel makes a set of proposals, in terms of the ethics and technical robustness of AI systems, that challenge the idea that trust in an AI system is a prerequisite for its success; In the light of the current risks of AI deployment, trust in an AI system must be based on an a priori accountability of its governance throughout its life cycle, which includes the objective of making these actions explicit.

The notion of accountability is central to understanding the complementarity and the long continuum between accountability and responsibility. More than the term responsibility, this notion of _accountability_ can be precisely translated by the notions of accountability and/or responsibility. This accountability makes it possible to consider data-risks and algorithmic risks together, thus taking into account the specificity of each of these risks, but also to take into account the fact that each of them has its own specificity; It is through the conjunction of these two types of risks that consequences that are harmful to humans or society can occur.

**In summary**, the legal perspective will differ depending on the issues and applicable concepts. In the case of blockchain, it is important to separate the data risk from the risk-algorithms as they deal with different issues and require and require different legal frameworks. The The first deals with the issue of disclosure of the identity of the The first deals with the issue of disclosure of the identity of parties, which is a matter of data security, while the second deals with the issue of fraudulent digital assets. In the In the case of artificial intelligence systems, it will depend on whether whether the damage should be prevented or sanctioned once it has the damage or to sanction it once it has occurred. In the case of In the case of a search for accountability, it is necessary to consider the In the case of accountability, data-risks and algorithm-risks should be considered together.

If the question is one of responsibility (_liability_) and accountability (_accountability_), i.e., that of imputing fault to a the issue of attributing fault to a natural person, it will be important to to separate the two risks. This separation is also the one that is This separation is also the one advocated in computer science in order to identify the "culprits": data or algorithms. Data provenance and algorithmic tracing techniques and algorithmic tracing techniques will help to isolate the the reasons for the fault. The first step is to identify whether the fault is due to a data risk such as disclosure of privacy or statistical bias in the data, or data, or to an algorithmic risk of the economic or cognitive type, or if the cognitive type, or whether the fault is due to both. It will therefore only be possible to fault and determine the applicable legal frameworks only if there is a separation. if there is a separation. Similarly, if the objective is to "fix" the data or the algorithm, the data or the algorithm, the two types of risk must be considered separately. be done separately. This is called orthogonality in computer science. According to the dictionary, the instruction set of a computer is said to be _orthogonal_ when (almost) all instructions can be applied to all types of data. An orthogonal instruction set simplifies the task of the compiler since there are fewer special cases to deal with the operations can be applied as is to any type of data. any type of data. In our context, this would mean having a context, this would mean having a perfect dataset and seeing how the algorithm behaves to determine if there is a risk-algorithms and having a perfect algorithm and examining the results applied to a dataset to determine the risk-data. These strategies have a bright future ahead of them.

**Authors :** 

[**Sihem Amer-Yahia**](https://www.linkedin.com/in/sihem-amer-yahia-96072622/?originalSubdomain=fr) (DR CNRS INS2I, Univ. Grenoble-Alpes) - Research director at National Centre for Scientific Research  
[**Amélie Favreau**](https://www.linkedin.com/in/am%C3%A9lie-favreau-36b56b109/?originalSubdomain=fr) (MdC Droit Privé, Univ. Grenoble-Alpes) - Associate Professor in Private Law  
[**Juliette Sénéchal**](https://pro.univ-lille.fr/juliette-senechal/) (MdC Droit Privé, Univ. de Lille) -Associate Professor in Private Law

### Your feedback
