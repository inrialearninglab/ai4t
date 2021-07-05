#### AI Challenges

###  Generic Challenges in Machine Learning

_[![](/static/livre-blanc-IA.png)  
](https://www.inria.fr/sites/default/files/2019-10/AI_livre-blanc_n01%20(1).pdf#page=26)[What does the Inria White](https://www.slideshare.net/INRIA/inria-white-paper-artificial-intelligence-current-challenges-and-inrias-engagement?ref=https://intranet.inria.fr/)   
[Paper says about AI.....](https://www.slideshare.net/INRIA/inria-white-paper-artificial-intelligence-current-challenges-and-inrias-engagement?ref=https://intranet.inria.fr/)_

_Machine learning algorithms and systems have made great strides in recent years due to the availability of large volumes of data and high performance computing, as well as interesting advances in optimisation. A major feature of deep learning is its ability to learn descriptors while performing clustering._

However, there are still a number of limitations and challenges which can be classified as follows :

*   i) data sources

The challenges in this field are numerous: learning from heterogeneous data, available on a multiplicity of channels; managing uncertain information; identifying and dealing with rare events beyond purely statistical approaches; working with a combination of knowledge sources and data sources; integrating models and ontologies into the learning process; and finally, achieving good learning performance with little data, when massive data sources are not available.

*   ii) symbolic versus continuous representations

Continuous representations allow the machine learning algorithm to approximate complex functions, while symbolic representations are used to learn symbolic rules and models. The most significant recent advances concern continuous representations. However, these leave out reasoning, whereas it would be desirable to integrate it into the continuous representation in order to make inferences on numerical data. Moreover, in order to exploit the power of deep learning, it may be useful to define continuous representations of symbolic data, as has been done for example for text with _word2vec_ and _text2vec_.

**Word2vec** (a Google project ) is a technique for natural language processing. The Word2vec algorithm uses a neural network model to learn word association from a large corpus of text. Once trained, such a model can detect synonymous words or suggest additional word for a partial sentence. More info about Word2vec on [the wikipedia page of the project](https://en.wikipedia.org/wiki/Word2vec).

**text2vec** is an R packages (or collections of functions and data sets developed by the community) which provides an efficient network for text analysisand natural language processing (or NLP : how to make computer "understand" the contents of a document ). More info about text2vec on [the website of the project](http://text2vec.org/).

*   iii) continuous and endless learning

Some AI systems are expected to be resilient, i.e. able to run 24/7 without interruption. Interesting advances have been made in 'lifelong' learning systems that will continuously gather new knowledge. The challenge here lies in the ability of AI systems to operate online in real time, while being able to challenge previous beliefs autonomously. Self-booting is an option for these systems because it allows the basic knowledge acquired at the beginning of operation to be used to guide future learning tasks, as in the NELL (Never-Ending Language Learning) system developed at Carnegie-Mellon University [(http://rtw.ml.cmu.edu/rtw/)](http://rtw.ml.cmu.edu/rtw/).

*   iv) constrained learning

Privacy is perhaps the most important constraint to consider. Machine learning researchers have recently recognised the need to protect privacy while learning from personal data. A theory of privacy-friendly machine learning is being developed by researchers such as Michael Jordan [(http://arxiv.org/abs/1210.2085)](https://arxiv.org/abs/1210.2085)... More generally, machine learning may have to take into account other external constraints such as decentralised data or energy limits. Research on the general problem of machine learning under external constraints is therefore necessary.

*   v) computing architectures

Modern machine learning systems require intensive computing and efficient data storage to accommodate the size of the data and the dimensions of the problems. Algorithms will be run on GPUs and other powerful architectures; data and processes must be distributed across multiple processors. Further research should focus on improving machine learning algorithms and problem formulations to make the most of these computing architectures.

*   vi) unsupervised learning

The most notable results in the field of machine learning are based on supervised learning, i.e. learning from examples in which the expected outcome is provided with the input data. This involves labelling the data with the corresponding expected results, a process that requires large-scale data. Amazon's Mechanical Turk (www.mturk.com) is a perfect example of how large companies mobilise human resources to annotate data. But the vast majority of data exists with no expected outcome, i.e. no desired annotation or class name. It is therefore necessary to develop unsupervised learning algorithms to handle this huge amount of unlabelled data. In some cases, minimal human supervision can be used to guide the unsupervised algorithm.

*   vii) Learning process with human intervention, explanations

The challenges are to establish a natural collaboration between machine learning algorithms and users in order to improve the learning process. To do this, machine learning systems must be able to show their status in a form that is understandable to humans. In addition, the human user must be able to get explanations from the system about any result obtained. These explanations would be provided during training and could be linked to input data or intermediate representations. They could also indicate confidence levels, as appropriate.

### Your feedback