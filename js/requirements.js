let requirements = {};

requirements.height = '';
requirements.weight = '';
requirements.fatPer = '';
requirements.activeness = '';
requirements.gender = '';
requirements.active = '';

tokenize();
removeStopWords();
removePunctuation();
stemming();
lemmatize();
