/*
tokenize();          -> Barbara (String) -> Array<String>
//removeStopWords();   -> Barbara (Array<String>) -> Array<String> [optional]
removePunctuation(); -> Nikki   (Array<String>) -> Array<String>
stemmize();          -> Nikki   (Array<String>) -> Array<String>
lemmatize();         -> Javier  (Array<String>) -> Array<String>
*/
import * as lookup_data from '../data/lemmatize/lookup.js' ;

export function getNlpProcessedInput(userInput){
    const tokenizedInput = tokenize(userInput);
    //use this tokenizedInput to remove punctuation etc
    const withoutPunctuation = removePunctuation(tokenizedInput);
    const lemmatized = lemmatize(withoutPunctuation);


    //return the nlp analyzed input
    return "nlp processed input";
}

const stopWords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll",
    "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers',
    'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who',
    'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have',
    'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as',
    'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during',
    'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again',
    'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few',
    'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's',
    't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain',
    'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't",
    'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan',
    "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]

function tokenize(userInputString){
    let words = userInputString.split(/\W+/).filter(token => {
        token.toLowerCase();
        return token.length >=2 && stopWords.indexOf(token) == -1;
    })
    return words;
}


function removePunctuation(stringArr) {
    let r = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    stringArr.forEach((string)=>{
        string = string.replace(r, '');
    })
    return stringArr;
}

function stem(token) {
    token.toLowerCase();
    for(let i = 0; i < token.length; i++) {
        if (token.endsWith("ed") && token[indexOf("ed") - 1]) {
            string.replace("ed", "")
            //lookupTable[token]
        }
    }
}

function isVowel(letter){
    let vowels;
    vowels = new Set(["a", "e", "i", "o", "u", "y"]);

    if(vowels.has(letter)){
            return true;
    }

    return false;

}

/**
 *
 * @param {String} input
 * @return {String}
 */
function lemmatize(input) {
    let lookupTable = lookup_data.data;

    console.log(lookupTable);
    console.log(lookupTable["men"]);

}