# FitBot
A fitness chatbot to ask whatever you need in order to fulfill your fitness goals!

____

### Description

This chatbot is done by connecting two main modules: Natural Language Processing module (*npl.js*) and Interpreter module (*interpreter.js*).

#### NPL module

The main function of this module is to manage all the operations needed to process natural language.

* Tokenization.
* Remove punctuation.
* Remove stopwords.
* Stemming or lemmatization.

This module limits the capability of FitBot to understand the user input. However, the first four operations (including stemming)
can be done through regex operations, but Lemmatization depends on a table of terms that can be mapped. 
Finally, most of the capability of this module depends on this look up table (*lookup.js*).

#### Interpreter

This module depends on an object called Answer that holds information regarding answers (from bot to user) and 
inquiries (from user to bot).

Finally, the interpreter gets the user’s inquiries and maps it to an answer that our FitBot will reply with.

### HOW TO

In order to add answers and inquires it has to be done in a declarative way using the answerFactory to build answers and map
them to inquiries, inside *bot.js* -> *initBot()*. Example:
```
    // Greetings
    let hello_how_can_i_help_you = answerFactory("Hello! How can I help you?");
    // Declaring answers
    let whats_your_gender = answerFactory("What’s your gender (male/female)?");
    hello_how_can_i_help_you.addInquiry("want lose weight", whats_your_gender);
    hello_how_can_i_help_you.addInquiry("need lose weight", whats_your_gender);
    let are_you_active = answerFactory("Are you an active person?");
    whats_your_gender.addInquiry("male", are_you_active);
    whats_your_gender.addInquiry("female", are_you_active);
    let how_many_times_per_week = answerFactory("How many times per week do you train?");
    are_you_active.addInquiry("yes", how_many_times_per_week);
    are_you_active.addInquiry("no", how_many_times_per_week);
```