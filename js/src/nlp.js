import  *  as lookup_data from "../../data/lemmatize/lookup"

const nlp = require( 'wink-nlp-utils' );

export function getNlpProcessedInput(userInput){
    const noPunctuations = nlp.string.removePunctuations(userInput);
    const noExtraSpace = nlp.string.removeExtraSpaces(noPunctuations);
    const lowerCase = nlp.string.lowerCase(noExtraSpace);
    const amplifiedNotEllision = nlp.string.amplifyNotElision(lowerCase);
    //const stemmed = nlp.string.stem(amplifiedNotEllision);
    const tokenizedInput = nlp.string.tokenize(amplifiedNotEllision);
    const removedStopWords = nlp.tokens.removeWords(tokenizedInput);
    const lemmatized = lemmatize(removedStopWords);

    /* Old shit
    const tokenizedInput = tokenize(userInput.toLowerCase());
    //use this tokenizedInput to remove punctuation etc
    const withoutPunctuation = removePunctuation(tokenizedInput);
    const lemmatized = lemmatize(withoutPunctuation);
     */

    const final = lemmatized.join(" ");
    console.log(lemmatized);

    //return the nlp analyzed input
    return final;
}

const stopWords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll",
    "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers',
    'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who',
    'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have',
    'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as',
    'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during',
    'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again',
    'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few',
    'more', 'most', 'other', 'some', 'such', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's',
    't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain',
    'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't",
    'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan',
    "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]

function tokenize(userInputString){
    let words = userInputString.split(/\W+/).filter(token => {
        token.toLowerCase();
        return token.length >=1 && stopWords.indexOf(token) === -1;
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
// ing ed es fucking or fucked
function stem(token) {
    token.toLowerCase();
    for(let i = 0; i < token.length; i++) {
        if (token.endsWith("ed")) {
            string.replace("ed", "")
            //lookupTable[token]
        }
        else if (token.endsWith("ing")) {
            string.replace("ing", "")
        }
        else if (token.endsWith("es")) {
            string.replace("e", "")
        }
    }
}

function isVowel(letter){
    let vowels;
    vowels = new Set(["a", "e", "i", "o", "u", "y"]);

    if(vowels.has(letter)) {
            return true;
    }

    return false;

}

/**
 *
 * @param {Array<String>} input
 * @return {Array<String>}
 */
function lemmatize(input) {
    let lookupTable = lookup_data.data;
    let result = [];
    input.forEach((word) => {
        if(lookupTable[word] !== undefined)
            result.push(lookupTable[word]);
        else
            result.push(word);
    })

    return result;
}