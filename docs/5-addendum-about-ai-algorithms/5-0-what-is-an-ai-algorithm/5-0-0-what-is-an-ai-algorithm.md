#### What is an AI Algorithm ?

![Frédéric Alexandre](/static/Frederic-Alexandre-rond.png)

An algorithm is a method that allows a sequence of instructions (that can be transcribed with a programming language) to be described precisely, fed with information and providing a result. AI, as we have seen throughout this MOOC, is an approach that consists in making a computer do typical cognitive functions. We have also seen that there is no single approach to AI, but different approaches possible, depending on the problems we face.

**So there will not be a single AI algorithm, but a number of algorithms that can be useful in tracking these different approaches.**

We have seen a first important distinction, relating to the knowledge manipulated by AI: **numerical knowledge** (numbers often gathered in tables) or **symbolic knowledge** (concepts often organised in graphs). Then, in a more specific way, AI approaches will propose to perform certain functions on the knowledge submitted to them: **analyse, recognise, predict, recommend, decide.** With these broad trends defined, some nuances can now be added. On the one hand, if an AI approach is primarily numerical or symbolic, it may also have more limited access to the other type of knowledge. On the other hand, AI approaches that seek to **solve a complicated problem** will generally use not just one of the functions mentioned but a series of these functions, also organised in an algorithm to solve the problem.

With these elements in place, it is now easier to answer the initial question:

> *   On the one hand, AI algorithms working on numerical knowledge will mainly deal with arrays of numbers, while those working on symbolic knowledge will rather manipulate graphs.
> *   On the other hand, there will be simple algorithms that simply propose to perform one of the functions mentioned above and more complex algorithms that propose to organise these functions to achieve a more elaborate result.
> *   One last remark before giving examples: some of these algorithms were created specifically for AI, but most of them were already known to computer scientists and mathematicians for a long time, as standard automatic information processing techniques.

![example](/static/sphx_glr_plot_unveil_tree_structure_thumb.png)

### Let's give some examples:

For the manipulation of **symbolic knowledge**, we find most of the methods for **manipulating graphs**: graph construction, heuristic traversal of a graph, graph comparison, graph evaluation, etc.

For the manipulation of **numerical knowledge**, there are numerous methods for statistical (k-nearest neighbour, classification) and probabilistic (Bayesian methods) processing of data. In this context, neural networks can be presented as **sophisticated statistical techniques** (in particular because of the non-linearities introduced).

_**"An algorithm is a method of doing calculations for a certain purpose, whereas a neural network is just a concept."**_

> [![Neural network example](/static/simple-neural-network.png)](https://commons.wikimedia.org/wiki/File:Neural_network_example.svg "User:Wiso / Public domain")

 There are **simple algorithms** (series of calculations to be applied) to evaluate a network or to train it or to test it, etc. 

Then there are **intermediate level algorithms** that explain how to chain together the previous algorithms (training, testing, validation) to obtain quality networks.

Finally, there are even more **advanced algorithms** which, for a given application, can test and compare several candidate networks, themselves obtained with intermediate algorithms which are themselves composed of simple algorithms.

And to fully understand algorithms on networks, you need to know how they compute (level 1 algorithms); how to concatenate these algorithms to make efficient networks (level 2); and how to implement several of these concatenations to test different solutions and take the best one, aso.

 

**In Short**

If you want to know the main principles and technical principles of AI, the important thing is to know these elementary algorithms, applicable to symbolic or numerical knowledge, while having clearly identified that some of them are standard algorithms, known and used for a long time in other fields than AI. If one wants a more detailed knowledge for a particular problem (for example AI applied to medical images), it is rather the study (but also the practice) of advanced algorithms that should be recommended.    
 

### Your feedback