(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataType = exports.data = void 0;
const data = {
  "girl": "female",
  "woman": "female",
  "men": "male",
  "man": "male",
  "boy": "male",
  "ass": "buttocks",
  "butt": "buttocks",
  "bigger": "increment",
  "increase": "increment",
  "increasing": "increment",
  "less": "decrement",
  "decrease": "decrement",
  "decreasing": "decrement",
  "minimize": "decrement",
  "minimizing": "decrement",
  "main": "area",
  "low": "area",
  "side": "area",
  "workout": "exercise",
  "training": "exercise",
  "train": "exercise",
  "yes": "yes",
  "sure": "yes",
  "ok": "yes",
  "no": "no",
  "nope": "no",
  "okay": "yes",
  "kilos": "kg",
  "kilograms": "kg",
  "pounds": "lb",
  "times": "days",
  "timing": "time",
  "days": "days",
  "meters": "mt",
  "feet": "ft",
  "wanna": "want"
};
exports.data = data;
const dataType = {
  "woman": "noun",
  "man": "noun",
  "buttocks": "noun",
  "weight": "noun",
  "height": "noun",
  "increment": "verb",
  "decrement": "verb",
  "area": "noun",
  "exercise": "noun",
  "diet": "noun",
  "pullup": "noun",
  "pushup": "noun",
  "crunch": "noun",
  "active": "noun",
  "time": "noun"
};
exports.dataType = dataType;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.general_improvement = exports.gain_strength = exports.loose_weight = void 0;
const loose_weight = [{
  "options": {
    "days": 4,
    "level": "intermediate"
  },
  "routine": [[{
    "language": 2,
    "name": "Crunches"
  }, {
    "language": 2,
    "name": "Crunches With Legs Up"
  }, {
    "language": 2,
    "name": "Plank"
  }, {
    "language": 2,
    "name": "Dumbbell Lunges Walking"
  }, {
    "language": 2,
    "name": "Glute Bridge"
  }, {
    "language": 2,
    "name": "Bent Over Barbell Row"
  }], [{
    "language": 2,
    "name": "Jogging"
  }], [{
    "language": 2,
    "name": "High Knees"
  }, {
    "language": 2,
    "name": "Plank"
  }, {
    "language": 2,
    "name": "Bent Over Barbell Row"
  }, {
    "language": 2,
    "name": "Arnold Shoulder Press"
  }, {
    "language": 2,
    "name": "Bent High Pulls"
  }], [{
    "language": 2,
    "name": "Jogging"
  }, {
    "language": 2,
    "name": "Crunches"
  }, {
    "language": 2,
    "name": "Plank"
  }, {
    "language": 2,
    "name": "Calf Raises"
  }]]
}, {
  "options": {
    "days": 3,
    "level": "beginner"
  },
  "routine": []
}];
exports.loose_weight = loose_weight;
const gain_strength = [{
  "options": {
    "days": 3,
    "level": "intermediate"
  },
  "routine": [[{
    "language": 2,
    "name": "Bench Press"
  }, {
    "language": 2,
    "name": "Back Squat"
  }, {
    "language": 2,
    "name": "Bent Over Barbell Row"
  }, {
    "language": 2,
    "name": "Bent-over Lateral Raises"
  }, {
    "language": 2,
    "name": "Biceps Curls With Barbell"
  }, {
    "language": 2,
    "name": "Dips"
  }], [{
    "language": 2,
    "name": "Bench Press"
  }, {
    "language": 2,
    "name": "Deadlifts"
  }, {
    "language": 2,
    "name": "Lat Pull Down (Leaning Back)"
  }, {
    "language": 2,
    "name": "Shoulder Press, Barbell"
  }, {
    "language": 2,
    "name": "Biceps Curls With Barbell"
  }, {
    "language": 2,
    "name": "Dumbbell Triceps Extension"
  }], [{
    "language": 2,
    "name": "Bench Press"
  }, {
    "language": 2,
    "name": "Back Squat"
  }, {
    "language": 2,
    "name": "Bent Over Barbell Row"
  }, {
    "language": 2,
    "name": "Bent-over Lateral Raises"
  }, {
    "language": 2,
    "name": "Biceps Curls With Barbell"
  }, {
    "language": 2,
    "name": "Dips"
  }]]
}, {
  "options": {
    "days": 4,
    "level": "intermediate"
  },
  "routine": []
}, {
  "options": {
    "days": 5,
    "level": "advanced"
  },
  "routine": []
}];
exports.gain_strength = gain_strength;
const general_improvement = [{
  "options": {
    "days": 3,
    "level": "intermediate"
  },
  "routine": [[{
    "language": 2,
    "name": "Dumbbell Lunges Walking"
  }, {
    "language": 2,
    "name": "Glute Bridge"
  }, {
    "language": 2,
    "name": "Bent Over Barbell Row"
  }, {
    "language": 2,
    "name": "Bench Press"
  }, {
    "language": 2,
    "name": "Plank"
  }, {
    "language": 2,
    "name": "Crunches"
  }, {
    "language": 2,
    "name": "Crunches With Legs Up"
  }], [{
    "language": 2,
    "name": "Jogging"
  }, {
    "language": 2,
    "name": "Plank"
  }, {
    "language": 2,
    "name": "Pushups"
  }, {
    "language": 2,
    "name": "Crunches With Legs Up"
  }, {
    "language": 2,
    "name": "Dips"
  }], [{
    "language": 2,
    "name": "Deadlifts"
  }, {
    "language": 2,
    "name": "Glute Bridge"
  }, {
    "language": 2,
    "name": "Chin-ups"
  }, {
    "language": 2,
    "name": "Pull-ups"
  }, {
    "language": 2,
    "name": "Plank"
  }, {
    "language": 2,
    "name": "High Knees"
  }]]
}];
exports.general_improvement = general_improvement;

},{}],3:[function(require,module,exports){
"use strict";

var _bot = require("./js/bot.js");

var _nlp = require("./js/src/nlp.js");

(0, _bot.initBot)(); //Adding a listener on 'enter' pressed

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input-msg");
  document.querySelector("#input-msg").addEventListener("keydown", e => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = '';
      console.log((0, _nlp.getNlpProcessedInput)(input));
      let botResponse = (0, _bot.getBotsResponse)((0, _nlp.getNlpProcessedInput)(input));
      addQuestionAndResponse(input, botResponse.text);
    }
  });
});

function addQuestionAndResponse(userInput, botResponse) {
  const mainDiv = document.getElementById("chat"); //Displaying user's response

  let userReply = userMsgElem(userInput);
  mainDiv.appendChild(userReply);
  userReply.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'end'
  }); //Displaying bot's answer

  let botReply = botMsgElem(botResponse);
  setTimeout(() => {
    mainDiv.appendChild(botReply);
    botReply.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'end'
    });
  }, 700);
}

function userMsgElem(msg) {
  let aux = document.createElement("div");
  aux.innerHTML = `<span class="msg-user">${msg}</span>`;
  return aux.firstChild;
}

function botMsgElem(msg) {
  let aux = document.createElement("div");
  aux.innerHTML = `<span class="msg-bot">${msg}</span>`;
  return aux.firstChild;
}

},{"./js/bot.js":5,"./js/src/nlp.js":7}],4:[function(require,module,exports){
'use strict';
/**
 * bot -> user
 * @class {Object} Answer
 * @param {String} text - Text answer.
 * @param {Boolean} specialInput - Specify whether or not this answer might receive a special input.
 * @param {Object} inquiries - A dictionary that maps every inquiry (from user) to an answer (from bot).
 * @param {function(String): Answer||undefined} _getResponse - Private function to obtain a response given an inquiry.
 * @param {function(): *} optional - Optional function to perform certain tasks linked to this Answer.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Answer = void 0;

class Answer {
  /**
   * @param text {String}
   * @param {Boolean} specialInput - Specify whether or not this answer might receive a special input.
   */
  constructor(text, specialInput = false) {
    this.text = text;
    this.inquiries = {};
    this.hasSpecialInput = specialInput;
    this.hasOptional = false;

    this.optional = () => void 0;
  }

  static clone(answer) {
    return new Answer(answer.text, answer.hasSpecialInput);
  }

  clone(answer) {
    return new Answer(answer.text, answer.hasSpecialInput);
  }

  addInquiry(inquiry, answer, opt = undefined) {
    let self = this;
    if (Array.isArray(inquiry)) inquiry.forEach(item => {
      self.inquiries[item.toLowerCase()] = {
        answer: answer,
        opt: opt
      };
    });else this.inquiries[inquiry.toLowerCase()] = {
      answer: answer,
      opt: opt
    }; // if(opt !== undefined && typeof opt === "function") {
    //     opt();
    // }
  }

  addOptional(funct) {
    this.optional = funct;
    this.hasOptional = true;
    return this;
  }

  _getResponse(inquiry) {
    if (this.hasSpecialInput) {
      this.optional(inquiry); // Do something to retrieve information from the inquiry (by using regex) and return the respective inquiry
      // given this inquiry + inquiry information (ie, user ask for 'x' exercise).

      return;
    }

    return this.inquiries[inquiry];
  }

}

exports.Answer = Answer;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initBot = initBot;
exports.getBotsResponse = getBotsResponse;
exports.addNewAnswers = addNewAnswers;

var _interpreter = require("./interpreter.js");

var _answer2 = require("./answer.js");

var _user = require("./user");

var routines = _interopRequireWildcard(require("../data/routines"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let interpreter;
const user = new _user.User();

function initBot() {
  // Greetings
  let hello_how_can_i_help_you = new _answer2.Answer("Hello! How can I help you?"); // Declaring answers

  let are_you_active = new _answer2.Answer("Are you an active person?");
  let how_many_times_per_week = new _answer2.Answer("How many times per week do you train?");
  let for_how_long = new _answer2.Answer("For how long?");
  let calculating = new _answer2.Answer("Calculating...");
  let exercises = new _answer2.Answer("Done! You should do these exercices: -Running: 5km, 3 times a week"); // Setting up the Chain of responsibilities

  hello_how_can_i_help_you.addInquiry(["want lose weight", "need lose weight"], are_you_active, () => {
    user.setGoal("lose weight");
  });
  hello_how_can_i_help_you.addInquiry(["want gain muscle", "need gain muscle", "want obtain muscle"], are_you_active, () => {
    user.setGoal("gain strength");
  });
  hello_how_can_i_help_you.addInquiry(["want general improvement", "want improve", "just want improve"], are_you_active, () => {
    user.setGoal("general improvement");
  });
  are_you_active.addInquiry(["yes", "affirmative", "active"], how_many_times_per_week, () => {
    user.setHighActive();
  });
  are_you_active.addInquiry(["not much", "medium", "intermediate"], how_many_times_per_week, () => {
    user.setMediumActive();
  });
  are_you_active.addInquiry(["no", "negative", "lazy", "no exercise"], how_many_times_per_week, () => {
    user.setLowActive();
  });
  how_many_times_per_week.addInquiry("3 days", calculating, () => {
    user.setDaysPerWeek(3);
    sendUserRoutine(user);
  });
  how_many_times_per_week.addInquiry("4 days", calculating, () => {
    user.setDaysPerWeek(4);
    sendUserRoutine(user);
  });
  how_many_times_per_week.addInquiry("5 days", calculating, () => {
    user.setDaysPerWeek(5);
    sendUserRoutine(user);
  });
  for_how_long.addInquiry("1 h", calculating, omg3);
  for_how_long.addInquiry("1 h", exercises); // adding to interpreter

  interpreter = new _interpreter.Interpreter(hello_how_can_i_help_you);
}

function getBotsResponse(nlpUserInput) {
  //Perform logic to find a correct response
  return interpreter.reply(nlpUserInput);
}

function addNewAnswers(answers) {
  answers.forEach(answer => {
    let _answer = new _answer2.Answer(answer.description); // Check this:


    interpreter.curr.hasSpecialInput = true;
    interpreter.curr.addInquiry(answer.name, _answer);
  });
}

function sendUserRoutine(user) {
  let routine = getRoutine(user);
  let msg = `This is your routine:\n\n LEVEL: ${user.activeness}\n DAYS PER WEEK: ${user.daysPerWeek}\n`;

  for (let day = 0; day < routine.length; day++) {
    msg = msg.concat(`\n\n<b>Day ${day + 1}:</b>`);

    for (let exercise = 0; exercise < routine[day].length; exercise++) {
      msg = msg.concat(`\n\t - ${routine[day][exercise].name}`);
      console.log(msg);
    }
  }

  setTimeout(() => {
    sendMessage(msg);
  }, 1500);
}

function sendMessage(msg) {
  const mainDiv = document.getElementById("chat"); //Displaying bot's answer

  let botReply = botMsgElem(msg);
  setTimeout(() => {
    mainDiv.appendChild(botReply);
    botReply.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'end'
    });
  }, 700);

  function botMsgElem(msg) {
    let aux = document.createElement("div");
    aux.innerHTML = `<span class="msg-bot">${msg}</span>`;
    return aux.firstChild;
  }
}

let omg = function () {
  console.log("omgthisdudeisamazing");
};

let omg2 = function () {
  console.log("jajafinopapi");
};

let omg3 = function () {
  console.log("ightdude");
};

function getRoutine(user) {
  // Decision tree based on user's specifications
  if (user.goal === "gain strength") {
    for (let i = 0; i < routines.gain_strength.length; i++) {
      let routine = routines.gain_strength[i];
      if (routine.options.days === user.daysPerWeek && routine.options.level === user.activeness) return routine.routine;
    }
  } else if (user.goal === "lose weight") {
    for (let i = 0; i < routines.loose_weight.length; i++) {
      let routine = routines.loose_weight[i];
      if (routine.options.days === user.daysPerWeek && routine.options.level === user.activeness) return routine.routine;
    }
  } else if (user.goal === "general improvement") {
    for (let i = 0; i < routines.general_improvement.length; i++) {
      let routine = routines.general_improvement[i];
      if (routine.options.days === user.daysPerWeek && routine.options.level === user.activeness) return routine.routine;
    }
  }

  return null;
}

},{"../data/routines":2,"./answer.js":4,"./interpreter.js":6,"./user":8}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interpreter = void 0;

var _answer = require("./answer.js");

/**
 *
 * @typedef {Object} Interpreter - Object that holds the state of the inquiry/answer with the user
 * @property  {Answer} interpreter._default - Default answer to reply on invalid inquiries.
 * @property  {Answer} _init - Initial answer. Usually a 'greetings' message.
 * @property  {Answer} curr - Current answer.
 * @property  {function(String): Answer} reply - Function to give a result answer from a given inquiry.
 */
class Interpreter {
  /**
   *
   * @param firstAnswer {Answer}
   */
  constructor(firstAnswer) {
    this._default = new _answer.Answer("I couldn't understand you ????. Please try again.");
    this.curr = {};
    this._init = new _answer.Answer("");

    this._init.addInquiry(["Hello Trainer", "Hi Trainer"], firstAnswer);

    this.curr = this._init;
  }

  reply(inquiry) {
    let response = this.curr._getResponse(inquiry);

    if (response !== undefined) {
      this.curr = response.answer;
      if (response.opt !== undefined) response.opt();
      return this.curr;
    } else return this._default;
  }

}

exports.Interpreter = Interpreter;

},{"./answer.js":4}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNlpProcessedInput = getNlpProcessedInput;

var lookup_data = _interopRequireWildcard(require("../../data/lemmatize/lookup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const nlp = require('wink-nlp-utils');

function getNlpProcessedInput(userInput) {
  const noPunctuations = nlp.string.removePunctuations(userInput);
  const noExtraSpace = nlp.string.removeExtraSpaces(noPunctuations);
  const lowerCase = nlp.string.lowerCase(noExtraSpace);
  const amplifiedNotEllision = nlp.string.amplifyNotElision(lowerCase); //const stemmed = nlp.string.stem(amplifiedNotEllision);

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
  console.log(lemmatized); //return the nlp analyzed input

  return final;
}

const stopWords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"];

function tokenize(userInputString) {
  let words = userInputString.split(/\W+/).filter(token => {
    token.toLowerCase();
    return token.length >= 1 && stopWords.indexOf(token) === -1;
  });
  return words;
}

function removePunctuation(stringArr) {
  let r = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  stringArr.forEach(string => {
    string = string.replace(r, '');
  });
  return stringArr;
} // ing ed es fucking or fucked


function stem(token) {
  token.toLowerCase();

  for (let i = 0; i < token.length; i++) {
    if (token.endsWith("ed")) {
      string.replace("ed", ""); //lookupTable[token]
    } else if (token.endsWith("ing")) {
      string.replace("ing", "");
    } else if (token.endsWith("es")) {
      string.replace("e", "");
    }
  }
}

function isVowel(letter) {
  let vowels;
  vowels = new Set(["a", "e", "i", "o", "u", "y"]);

  if (vowels.has(letter)) {
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
  input.forEach(word => {
    if (lookupTable[word] !== undefined) result.push(lookupTable[word]);else result.push(word);
  });
  return result;
}

},{"../../data/lemmatize/lookup":1,"wink-nlp-utils":53}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.activeLeveLs = void 0;
const activeLeveLs = {
  HIGH: "advanced",
  MEDIUM: "intermediate",
  LOW: "beginner"
};
exports.activeLeveLs = activeLeveLs;

class User {
  constructor() {
    this.activeness = -1;
    this.daysPerWeek = -1;
    this.goal = "";
  }

  setHighActive() {
    this.activeness = activeLeveLs.HIGH;
  }

  setMediumActive() {
    this.activeness = activeLeveLs.MEDIUM;
  }

  setLowActive() {
    this.activeness = activeLeveLs.LOW;
  }

  setDaysPerWeek(number) {
    this.daysPerWeek = number;
  }

  setGoal(goal) {
    this.goal = goal;
  }

}

exports.User = User;

},{}],9:[function(require,module,exports){
"use strict";

module.exports = function () {
  // https://mths.be/emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};

},{}],10:[function(require,module,exports){
//     wink-distance
//     Distance functions for Bag of Words, Strings,
//     Vectors and more.
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-distance???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
// Soundex Code for alphabets.
/* eslint-disable object-property-newline */
var soundexMap = {
  A: 0, E: 0, I: 0, O: 0, U: 0, Y: 0,
  B: 1, F: 1, P: 1, V: 1,
  C: 2, G: 2, J: 2, K: 2, Q: 2, S: 2, X: 2, Z: 2,
  D: 3, T: 3,
  L: 4,
  M: 5, N: 5,
  R: 6
};

// ## string

// ### soundex
/**
 *
 * Produces the soundex code from the input `word`.
 *
 * @private
 * @param {string} word the input word.
 * @param {number} [maxLength=4] of soundex code to be returned.
 * @return {string} soundex code of `word`.
 * @example
 * soundex( 'Burroughs' );
 * // -> 'B620'
 * soundex( 'Burrows' );
 * // -> 'B620'
 */
var soundex = function ( word, maxLength ) {
  // Upper case right in the begining.
  var s = ( word.length ) ? word.toUpperCase() : '?';
  var i,
      imax = s.length;
  // Soundex code builds here.
  var sound = [];
  // Helpers - `ch` is a char from `s` and `code/prevCode` are sondex codes
  // for consonants.
  var ch, code,
      prevCode = 9;
  // Use default of 4.
  var maxLen = maxLength || 4;
  // Iterate through every character.
  for ( i = 0; i < imax; i += 1 ) {
    ch = s[ i ];
    code = soundexMap[ ch ];
    if ( i ) {
      // Means i is > 0.
      // `code` is either (a) `undefined` if an unknown character is
      // encountered including `h & w`, or (b) `0` if it is vowel, or
      // (c) the soundex code for a consonant.
      if ( code && code !== prevCode ) {
        // Consonant and not adjecant duplicates!
        sound.push( code );
      } else if ( code !== 0 ) {
        // Means `h or w` or an unknown character: ensure `prevCode` is
        // remembered so that adjecant duplicates can be handled!
        code = prevCode;
      }
    } else {
      // Retain the first letter
      sound.push( ch );
    }
    prevCode = code;
  }
  s = sound.join( '' );
  // Always ensure minimum length of 4 characters for maxLength > 4.
  if ( s.length < 4 ) s += '000';
  // Return the required length.
  return s.substr( 0, maxLen );
}; // soundex()

module.exports = soundex;

},{}],11:[function(require,module,exports){
//     wink-helpers
//     Functions for cross validation, shuffle, cartesian product and more
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-helpers???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var helpers = Object.create( null );

// ### Private Functions

// #### Product Reducer (Callback)

// Callback function used by `reduce` inside the `product()` function.
// Follows the standard guidelines of `reduce()` callback function.
var productReducer = function ( prev, curr ) {
  var c,
      cmax = curr.length;
  var p,
      pmax = prev.length;
  var result = [];

  for ( p = 0; p < pmax; p += 1 ) {
    for ( c = 0; c < cmax; c += 1 ) {
      result.push( prev[ p ].concat( curr[ c ] ) );
    }
  }
  return ( result );
}; // productReducer()

// ### Public Function

// ### Array Helpers

helpers.array = Object.create( null);

// #### is Array

// Tests if argument `v` is a JS array; returns `true` if it is, otherwise returns `false`.
helpers.array.isArray = function ( v ) {
  return ( ( v !== undefined ) && ( v !== null ) && ( Object.prototype.toString.call( v ) === '[object Array]' ) );
}; // isArray()


// #### sorting helpers

// Set of helpers to sort either numbers or strings. For key/value pairs,
// the format for each element must be `[ key, value ]`.
// Sort helper to sort an array in ascending order.
helpers.array.ascending = function ( a, b ) {
  return ( a > b ) ? 1 :
            ( a === b ) ? 0 : -1;
}; // ascending()

// Sort helper to sort an array in descending order.
helpers.array.descending = function ( a, b ) {
  return ( b > a ) ? 1 :
            ( b === a ) ? 0 : -1;
}; // descending()

// Sort helper to sort an array of `[ key, value ]` in ascending order by **key**.
helpers.array.ascendingOnKey = function ( a, b ) {
  return ( a[ 0 ] > b[ 0 ] ) ? 1 :
            ( a[ 0 ] === b[ 0 ] ) ? 0 : -1;
}; // ascendingOnKey()

// Sort helper to sort an array of `[ key, value ]` in descending order by **key**.
helpers.array.descendingOnKey = function ( a, b ) {
  return ( b[ 0 ] > a[ 0 ] ) ? 1 :
            ( b[ 0 ] === a[ 0 ] ) ? 0 : -1;
}; // descendingOnKey()

// Sort helper to sort an array of `[ key, value ]` in ascending order by **value**.
helpers.array.ascendingOnValue = function ( a, b ) {
  return ( a[ 1 ] > b[ 1 ] ) ? 1 :
            ( a[ 1 ] === b[ 1 ] ) ? 0 : -1;
}; // ascendingOnValue()

// Sort helper to sort an array of `[ key, value ]` in descending order by **value**.
helpers.array.descendingOnValue = function ( a, b ) {
  return ( b[ 1 ] > a[ 1 ] ) ? 1 :
            ( b[ 1 ] === a[ 1 ] ) ? 0 : -1;
}; // descendingOnValue()

// The following two functions generate a suitable function for sorting on a single
// key or on a composite keys (max 2 only). Just a remider, the generated function
// does not sort on two keys; instead it will sort on a key composed of the two
// accessors.
// Sorts in ascending order on `accessor1` & `accessor2` (optional).
helpers.array.ascendingOn = function ( accessor1, accessor2 ) {
  if ( accessor2 ) {
    return ( function ( a, b ) {
      return ( a[ accessor1 ][ accessor2 ] > b[ accessor1 ][ accessor2 ] ) ? 1 :
              ( a[ accessor1 ][ accessor2 ] === b[ accessor1 ][ accessor2 ] ) ? 0 : -1;
    } );
  }
  return ( function ( a, b ) {
    return ( a[ accessor1 ] > b[ accessor1 ] ) ? 1 :
            ( a[ accessor1 ] === b[ accessor1 ] ) ? 0 : -1;
  } );
}; // ascendingOn()

// Sorts in descending order on `accessor1` & `accessor2` (optional).
helpers.array.descendingOn = function ( accessor1, accessor2 ) {
  if ( accessor2 ) {
    return ( function ( a, b ) {
      return ( b[ accessor1 ][ accessor2 ] > a[ accessor1 ][ accessor2 ] ) ? 1 :
              ( b[ accessor1 ][ accessor2 ] === a[ accessor1 ][ accessor2 ] ) ? 0 : -1;
    } );
  }
  return ( function ( a, b ) {
    return ( b[ accessor1 ] > a[ accessor1 ] ) ? 1 :
            ( b[ accessor1 ] === a[ accessor1 ] ) ? 0 : -1;
  } );
}; // descendingOn()

// #### pluck

// Plucks specified element from each element of an **array of array**, and
// returns the resultant array. The element is specified by `i` (default `0`) and
// number of elements to pluck are defined by `limit` (default `a.length`).
helpers.array.pluck = function ( a, key, limit ) {
  var k, plucked;
  k = a.length;
  var i = key || 0;
  var lim = limit || k;
  if ( lim > k ) lim = k;
  plucked = new Array( lim );
  for ( k = 0; k < lim; k += 1 ) plucked[ k ] = a[ k ][ i ];
  return plucked;
}; // pluck()

// #### product

// Finds the Cartesian Product of arrays present inside the array `a`. Therefore
// the array `a` must be an array of 1-dimensional arrays. For example,
// `product( [ [ 9, 8 ], [ 1, 2 ] ] )`
// will produce `[ [ 9, 1 ], [ 9, 2 ], [ 8, 1 ], [ 8, 2 ] ]`.
helpers.array.product = function ( a ) {
  return (
    a.reduce( productReducer, [ [] ] )
  );
};

// #### shuffle

// Randomly shuffles the elements of an array and returns the same.
// Reference: Chapter on Random Numbers/Shuffling in Seminumerical algorithms.
// The Art of Computer Programming Volume II by Donald E Kunth
helpers.array.shuffle = function ( array ) {
  var a = array;
  var balance = a.length;
  var candidate;
  var temp;

  while ( balance ) {
    candidate = Math.floor( Math.random() * balance );
    balance -= 1;

    temp = a[ balance ];
    a[ balance ] = a[ candidate ];
    a[ candidate ] = temp;
  }

  return ( a );
};


// ### Object Helpers

var objectKeys = Object.keys;
var objectCreate = Object.create;

helpers.object = Object.create( null );

// #### is Object

// Tests if argument `v` is a JS object; returns `true` if it is, otherwise returns `false`.
helpers.object.isObject = function ( v ) {
  return ( v && ( Object.prototype.toString.call( v ) === '[object Object]' ) ) ? true : false; // eslint-disable-line no-unneeded-ternary

}; // isObject()

// #### keys

// Returns keys of the `obj` in an array.
helpers.object.keys = function ( obj ) {
  return ( objectKeys( obj ) );
}; // keys()

// #### size

// Returns the number of keys of the `obj`.
helpers.object.size = function ( obj ) {
  return ( ( objectKeys( obj ) ).length );
}; // size()

// #### values

// Returns all values from each key/value pair of the `obj` in an array.
helpers.object.values = function ( obj ) {
  var keys = helpers.object.keys( obj );
  var length = keys.length;
  var values = new Array( length );
  for ( var i = 0; i < length; i += 1 ) {
    values[ i ] = obj[ keys[ i ] ];
  }
  return values;
}; // values()

// #### value Freq

// Returns the frequency of each unique value present in the `obj`, where the
// **key** is the *value* and **value** is the *frequency*.
helpers.object.valueFreq = function ( obj ) {
  var keys = helpers.object.keys( obj );
  var length = keys.length;
  var val;
  var vf = objectCreate( null );
  for ( var i = 0; i < length; i += 1 ) {
    val = obj[ keys[ i ] ];
    vf[ val ] = 1 + ( vf[ val ] || 0 );
  }
  return vf;
}; // valueFreq()

// #### table

// Converts the `obj` in to an array of `[ key, value ]` pairs in form of a table.
// Second argument - `f` is optional and it is a function, which is called with
// each `value`.
helpers.object.table = function ( obj, f ) {
  var keys = helpers.object.keys( obj );
  var length = keys.length;
  var pairs = new Array( length );
  var ak, av;
  for ( var i = 0; i < length; i += 1 ) {
    ak = keys[ i ];
    av = obj[ ak ];
    if ( typeof f === 'function' ) f( av );
    pairs[ i ] = [ ak, av ];
  }
  return pairs;
}; // table()

// ### Validation Helpers

helpers.validate = Object.create( null );

// Create aliases for isObject and isArray.
helpers.validate.isObject = helpers.object.isObject;
helpers.validate.isArray = helpers.array.isArray;

// #### isFiniteInteger

// Validates if `n` is a finite integer.
helpers.validate.isFiniteInteger = function ( n ) {
  return (
    ( typeof n === 'number' ) &&
    !isNaN( n ) &&
    isFinite( n ) &&
    ( n === Math.round( n ) )
  );
}; // isFiniteInteger()

// #### isFiniteNumber

// Validates if `n` is a valid number.
helpers.validate.isFiniteNumber = function ( n ) {
  return (
    ( typeof n === 'number' ) &&
    !isNaN( n ) &&
    isFinite( n )
  );
}; // isFiniteNumber()

// ### cross validation
/**
 *
 * Creates an instance of cross validator useful for machine learning tasks.
 *
 * @param {string[]} classLabels - array containing all the class labels.
 * @return {methods} object conatining set of API methods for tasks like evalutaion,
 * reset and metrics generation.
*/
helpers.validate.cross = function ( classLabels ) {
  // wink's const for unknown predictions!
  const unknown = 'unknown';
  // To ensure that metrics is not computed prior to evaluation.
  var evaluated = false;
  // The confusion matrix.
  var cm;
  var precision;
  var recall;
  var fmeasure;

  // The class labels is assigned to this variable.
  var labels;
  // The length of `labels` array.
  var labelCount;
  var labelsObj = Object.create( null );

  // Returned!
  var methods = Object.create( null );


  /**
   *
   * Resets the current instance for another round of evaluation; the class
   * labels defined at instance creation time are not touched.
   *
   * @return {undefined} nothing!
  */
  var reset = function ( ) {
    evaluated = false;
    cm = Object.create( null );
    precision = Object.create( null );
    recall = Object.create( null );
    fmeasure = Object.create( null );

    // Initialize confusion matrix and metrics.
    for ( let i = 0; i < labelCount; i += 1 ) {
      const row = labels[ i ];
      labelsObj[ row ] = true;
      cm[ row ] = Object.create( null );
      precision[ row ] = 0;
      recall[ row ] = 0;
      fmeasure[ row ] = 0;
      for ( let j = 0; j < labelCount; j += 1 ) {
        const col = labels[ j ];
        cm[ row ][ col ] = 0;
      }
    }
  }; // reset()

  /**
   *
   * Creates an instance of cross validator useful for machine learning tasks.
   *
   * @param {string} truth - the actual class label.
   * @param {string} guess - the predicted class label.
   * @return {boolean} returns true if the evaluation is successful. The evaluation
   * may fail if `truth` or `guess` is not in the array `classLabels` provided at
   * instance creation time; or if guess is equal to `unknown`.
  */
  var evaluate = function ( truth, guess ) {
    // If prediction failed then return false!
    if ( guess === unknown || !labelsObj[ truth ] || !labelsObj[ guess ] ) return false;
    // Update confusion matrix.
    if ( guess === truth ) {
      cm[ truth ][ guess ] += 1;
    } else {
      cm[ guess ][ truth ] += 1;
    }
    evaluated = true;
    return true;
  }; // evaluate()

  /**
   *
   * It computes a detailed metrics consisting of macro-averaged precision,
   * recall and f-measure along with their label-wise values and the confusion
   * matrix.
   *
   * @return {object} object containing macro-averaged `avgPrecision`, `avgRecall`,
   * `avgFMeasure` values along with other details such as label-wise values
   * and the confusion matrix. A value of `null` is returned if no evaluate()
   * has been called before.
  */
  var metrics = function ( ) {
    if ( !evaluated ) return null;
    // Numerators for every label; they are same for precision & recall both.
    var n = Object.create( null );
    // Only denominators differs for precision & recall
    var pd = Object.create( null );
    var rd = Object.create( null );
    // `row` and `col` of confusion matrix.
    var col, row;
    var i, j;
    // Macro average values for metrics.
    var avgPrecision = 0;
    var avgRecall = 0;
    var avgFMeasure = 0;

    // Compute label-wise numerators & denominators!
    for ( i = 0; i < labelCount; i += 1 ) {
      row = labels[ i ];
      for ( j = 0; j < labelCount; j += 1 ) {
        col = labels[ j ];
        if ( row === col ) {
          n[ row ] = cm[ row ][ col ];
        }
        pd[ row ] = cm[ row ][ col ] + ( pd[ row ] || 0 );
        rd[ row ] = cm[ col ][ row ] + ( rd[ row ] || 0 );
      }
    }
    // Ready to compute metrics.
    for ( i = 0; i < labelCount; i += 1 ) {
      row = labels[ i ];
      precision[ row ] = +( n[ row ] / pd[ row ] ).toFixed( 4 );
      // NaN can occur if a label has not been encountered.
      if ( isNaN( precision[ row ] ) ) precision[ row ] = 0;

      recall[ row ] = +( n[ row ] / rd[ row ] ).toFixed( 4 );
      if ( isNaN( recall[ row ] ) ) recall[ row ] = 0;

      fmeasure[ row ] = +( 2 * precision[ row ] * recall[ row ] / ( precision[ row ] + recall[ row ] ) ).toFixed( 4 );
      if ( isNaN( fmeasure[ row ] ) ) fmeasure[ row ] = 0;
    }
    // Compute thier averages, note they will be macro avegages.
    for ( i = 0; i < labelCount; i += 1 ) {
      avgPrecision += ( precision[ labels[ i ] ] / labelCount );
      avgRecall += ( recall[ labels[ i ] ] / labelCount );
      avgFMeasure += ( fmeasure[ labels[ i ] ] / labelCount );
    }
    // Return metrics.
    return (
      {
        // Macro-averaged metrics.
        avgPrecision: +avgPrecision.toFixed( 4 ),
        avgRecall: +avgRecall.toFixed( 4 ),
        avgFMeasure: +avgFMeasure.toFixed( 4 ),
        details: {
          // Confusion Matrix.
          confusionMatrix: cm,
          // Label wise metrics details, from those averages were computed.
          precision: precision,
          recall: recall,
          fmeasure: fmeasure
        }
      }
    );
  }; // metrics()

  if ( !helpers.validate.isArray( classLabels ) ) {
    throw Error( 'cross validate: class labels must be an array.' );
  }
  if ( classLabels.length < 2 ) {
    throw Error( 'cross validate: at least 2 class labels are required.' );
  }
  labels = classLabels;
  labelCount = labels.length;

  reset();

  methods.reset = reset;
  methods.evaluate = evaluate;
  methods.metrics = metrics;

  return methods;
}; // cross()

// ### Object Helpers

helpers.string = Object.create( null );

// Regex for [diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) removal.
var rgxDiacritical = /[\u0300-\u036f]/g;

/**
 *
 * Normalizes the token's value by converting it to lower case and stripping
 * the diacritical marks (if any).
 *
 * @param {string} str ??? that needs to be normalized.
 * @return {string} the normalized value.
 * @example
 * normalize( 'Nestl??' );
 * // -> nestle
*/
helpers.string.normalize = function ( str ) {
  return (
    str.toLowerCase().normalize( 'NFD' ).replace( rgxDiacritical, '' )
  );
}; // normalize()

module.exports = helpers;

},{}],12:[function(require,module,exports){
module.exports=[
  "i",
  "me",
  "my",
  "myself",
  "we",
  "our",
  "ours",
  "ourselves",
  "you",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "he",
  "him",
  "his",
  "himself",
  "she",
  "her",
  "hers",
  "herself",
  "it",
  "its",
  "itself",
  "they",
  "them",
  "their",
  "theirs",
  "themselves",
  "what",
  "which",
  "who",
  "whom",
  "this",
  "that",
  "these",
  "those",
  "am",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "having",
  "do",
  "does",
  "did",
  "doing",
  "would",
  "should",
  "could",
  "ought",
  "i'm",
  "you're",
  "he's",
  "she's",
  "it's",
  "we're",
  "they're",
  "i've",
  "you've",
  "we've",
  "they've",
  "i'd",
  "you'd",
  "he'd",
  "she'd",
  "we'd",
  "they'd",
  "i'll",
  "you'll",
  "he'll",
  "she'll",
  "we'll",
  "they'll",
  "let's",
  "that's",
  "who's",
  "what's",
  "here's",
  "there's",
  "when's",
  "where's",
  "why's",
  "how's",
  "a",
  "an",
  "the",
  "and",
  "but",
  "if",
  "or",
  "because",
  "as",
  "until",
  "while",
  "of",
  "at",
  "by",
  "for",
  "with",
  "about",
  "against",
  "between",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "to",
  "from",
  "up",
  "down",
  "in",
  "out",
  "on",
  "off",
  "over",
  "under",
  "again",
  "further",
  "then",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "any",
  "both",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "only",
  "own",
  "same",
  "so",
  "than",
  "too",
  "very"
]

},{}],13:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### returnIndexer

/**
 *
 * Returns an Indexer object that contains two functions. The first function `build()`
 * incrementally builds an index for each `element` using `itsIndex` ??? both passed as
 * parameters to it. The second function ??? `result()` allows accessing the index anytime.
 *
 * It is typically used with [string.soc](#stringsoc), [string.bong](#stringbong),
 * [string.song](#stringsong), and [tokens.sow](#tokenssow).
 *
 * @alias helper#returnIndexer
 * @return {indexer} used to build and access the index.
 * @example
 * var indexer = returnIndexer();
 * // -> { build: [function], result: [function] }
 */
var returnIndexer = function () {
  var theIndex = Object.create( null );
  var methods = Object.create( null );

  // Builds index by adding the `element` and `itsIndex`. The `itsIndex` should
  // be a valid JS array index; no validation checks are performed while building
  // index.
  var build = function ( element, itsIndex ) {
    theIndex[ element ] = theIndex[ element ] || [];
    theIndex[ element ].push( itsIndex );
    return true;
  }; // build()

  // Returns the index built so far.
  var result = function () {
    return theIndex;
  }; // result()

  methods.build = build;
  methods.result = result;

  return methods;
}; // index()

module.exports = returnIndexer;

},{}],14:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### returnQuotedTextExtractor

/**
 *
 * Returns a function that extracts all occurrences of every quoted text
 * between the `lq` and the `rq` characters from its argument. This argument
 * must be of type string.
 *
 * @alias helper#returnQuotedTextExtractor
 * @param {string} [lq='"'] the left quote character.
 * @param {string} [rq='"'] the right quote character.
 * @return {function} that will accept an input string argument and return an
 * array of all substrings that are quoted between `lq` and `rq`.
 * @example
 * var extractQuotedText = returnQuotedTextExtractor();
 * extractQuotedText( 'Raise 2 issues - "fix a bug" & "run tests"' );
 * // -> [ 'fix a bug', 'run tests' ]
 */
var returnQuotedTextExtractor = function ( lq, rq ) {
  var // Index variable for *for-loop*
      i,
      // Set defaults for left quote, if required.
      lq1 = ( ( lq && ( typeof lq === 'string' ) ) ? lq : '"' ),
      // Extracts its length
      lqLen = lq1.length,
      // The regular expression is created here.
      regex = null,
      // The string containing the regular expression builds here.
      rgxStr = '',
      // Set defaults for right quote, if required.
      rq1 = ( ( rq && ( typeof rq === 'string' ) ) ? rq : lq1 ),
      // Extract its length.
      rqLen = rq1.length;

  // Build `rgxStr`
  for ( i = 0; i < lqLen; i += 1 ) rgxStr += '\\' + lq1.charAt( i );
  rgxStr += '.*?';
  for ( i = 0; i < rqLen; i += 1 ) rgxStr += '\\' + rq1.charAt( i );
  // Create regular expression.
  regex = new RegExp( rgxStr, 'g' );
  // Return the extractor function.
  return ( function ( s ) {
    if ( !s || ( typeof s !== 'string' ) ) return null;
    var // Extracted elements are captured here.
        elements = [],
        // Extract matches with quotes
        matches = s.match( regex );
    if ( !matches || ( matches.length === 0 ) ) return null;
    // Collect elements after removing the quotes.
    for ( var k = 0, kmax = matches.length; k < kmax; k += 1 ) {
      elements.push( matches[ k ].substr( lqLen, matches[ k ].length - ( rqLen + lqLen ) ) );
    }
    return ( elements );
  } );
}; // returnQuotedTextExtractor()

module.exports = returnQuotedTextExtractor;

},{}],15:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### returnWordsFilter

/**
 *
 * Returns an object containing the following functions: (a) `set()`, which returns
 * a set of mapped words given in the input array `words`. (b) `exclude()` that
 * is suitable for array filtering operations.
 *
 * If the second argument `mappers` is provided as an array of maping functions
 * then these are applied on the input array before converting into a set. A
 * mapper function must accept a string as argument and return a string as the result.
 * Examples of mapper functions are typically **string** functionss of **`wink-nlp-utils`**
 * such as `string.lowerCase()`, `string.stem()` and
 * `string.soundex()`.
 *
 * @alias helper#returnWordsFilter
 * @param {string[]} words that can be filtered using the returned wordsFilter.
 * @param {function[]} [mappers=undefined] optionally used to map each word before creating
 * the wordsFilter.
 * @return {wordsFilter} object containg `set()` and `exclude()` functions for `words`.
 * @example
 * var stopWords = [ 'This', 'That', 'Are', 'Is', 'Was', 'Will', 'a' ];
 * var myFilter = returnWordsFilter( stopWords, [ string.lowerCase ] );
 * [ 'this', 'is', 'a', 'cat' ].filter( myFilter.exclude );
 * // -> [ 'cat' ]
 */
var returnWordsFilter = function ( words, mappers ) {
  var mappedWords = words;
  var givenMappers = mappers || [];
  givenMappers.forEach( function ( m ) {
    mappedWords = mappedWords.map( m );
  } );

  mappedWords = new Set( mappedWords );

  var exclude = function ( t ) {
    return ( !( mappedWords.has( t ) ) );
  }; // exclude()

  var set = function () {
    return mappedWords;
  }; // set()

  return {
    set: set,
    exclude: exclude
  };
}; // returnWordsFilter()

module.exports = returnWordsFilter;

},{}],16:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var degrees = [
  /\bm\.?\s*a\b/i,
  /\bb\.?\s*a\b/i,
  /\bb\.?\s*tech\b/i,
  /\bm\.?\s*tech\b/i,
  /\bb\.?\s*des\b/i,
  /\bm\.?\s*des\b/i,
  /\bm\.?\s*b\.?\s*a\b/i,
  /\bm\.?\s*c\.?\s*a\b/i,
  /\bb\.?\s*c\.?\s*a\b/i,
  /\bl\.?\s*l\.?\s*b\b/i,
  /\bl\.?\s*l\.?\s*m\b/i,
  /\bm\.?\s*b\.?\s*b\.?\s*s\b/i,
  /\bm\.?\s*d\b/i,
  /\bd\.?\s*m\b/i,
  /\bm\.?\s*s\b/i,
  /\bd\.?\s*n\.?\s*b\b/i,
  /\bd\.?\s*g\.?\s*o\b/i,
  /\bd\.?\s*l\.?\s*o\b/i,
  /\bb\.?\s*d\.?\s*s\b/i,
  /\bb\.?\s*h\.?\s*m\.?\s*s\b/i,
  /\bb\.?\s*a\.?\s*m\.?\s*s\b/i,
  /\bf\.?\s*i\.?\s*c\.?\s*s\b/i,
  /\bm\.?\s*n\.?\s*a\.?\s*m\.?\s*s\b/i,
  /\bb\.?\s*e\.?\s*m\.?\s*s\b/i,
  /\bd\.?\s*c\.?\s*h\b/i,
  /\bm\.?\s*c\.?\s*h\b/i,
  /\bf\.?\s*r\.?\s*c\.?\s*s\b/i,
  /\bm\.?\s*r\.?\s*c\.?\s*p\b/i,
  /\bf\.?\s*i\.?\s*a\.?\s*c\.?\s*m\b/i,
  /\bf\.?\s*i\.?\s*m\.?\s*s\.?\s*a\b/i,
  /\bp\.?\s*h\.?\s*d\b/i,
 ];

var titleNames = [ 'mr', 'mrs', 'miss', 'ms', 'master', 'er', 'dr', 'shri', 'shrimati', 'sir' ];

var titles = new RegExp( '^(?:' + titleNames.join( '|' ) + ')$', 'i' );

module.exports = {
  degrees: degrees,
  titles: titles
};

},{}],17:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
/* eslint no-underscore-dangle: "off" */
var rgx = Object.create( null );
// Remove repeating characters.
rgx.repeatingChars = /([^c])\1/g;
// Drop first character from character pairs, if found in the beginning.
rgx.kngnPairs = /^(kn|gn|pn|ae|wr)/;
// Drop vowels that are not found in the beginning.
rgx.__vowels = /(?!^)[aeiou]/g;
// Replaces `ough` in the end by 'f'
rgx.ough = /ough$/;
// Replace following 3 instances of `dg` by `j`.
rgx.dge = /dge/g;
rgx.dgi = /dgi/g;
rgx.dgy = /dgy/g;
// Replace `sch` by `sk`.
rgx.sch = /sch/g;
// Drop `c` in `sci, sce, scy`.
rgx.sci = /sci/g;
rgx.sce = /sce/g;
rgx.scy = /scy/g;
// Make 'sh' out of `tio & tia`.
rgx.tio = /tio/g;
rgx.tia = /tia/g;
// `t` is silent in `tch`.
rgx.tch = /tch/g;
// Drop `b` in the end if preceeded by `m`.
rgx.mb_ = /mb$/;
// These are pronounced as `k`.
rgx.cq = /cq/g;
rgx.ck = /ck/g;
// Here `c` sounds like `s`
rgx.ce = /ce/g;
rgx.ci = /ci/g;
rgx.cy = /cy/g;
// And this `f`.
rgx.ph = /ph/g;
// The `sh` finally replaced by `x`.
rgx.sh = /sh|sio|sia/g;
// This is open rgx - TODO: need to finalize.
rgx.vrnotvy = /([aeiou])(r)([^aeiouy])/g;
// `th` sounds like theta - make it 0.
rgx.th = /th/g;
// `c` sounds like `k` except when it is followed by `h`.
rgx.cnoth = /(c)([^h])/g;
// Even `q` sounds like `k`.
rgx.q = /q/g;
// The first `x` sounds like `s`.
rgx._x = /^x/;
// Otherwise `x` is more like `ks`.
rgx.x = /x/g;
// Drop `y` if not followed by a vowel or appears in the end.
rgx.ynotv = /(y)([^aeiou])/g;
rgx.y_ = /y$/;
// `z` is `s`.
rgx.z = /z/g;

// Export rgx.
module.exports = rgx;

},{}],18:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### amplifyNotElision
/**
 *
 * Amplifies the not elision by converting it into not; for example `isn't`
 * becomes `is not`.
 *
 * @alias string#amplifyNotElision
 * @param {string} str the input string.
 * @return {string} input string after not elision amplification.
 * @example
 * amplifyNotElision( "someone's wallet, isn't it?" );
 * // -> "someone's wallet, is not it?"
 */
var amplifyNotElision = function ( str ) {
  return str.replace( rgx.notElision, '$1 not' );
}; // amplifyNotElision()

module.exports = amplifyNotElision;

},{"./util_regexes.js":52}],19:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### bagOfNGrams
/**
 *
 * Generates the bag of ngrams of `size` from the input string. The
 * default size is 2, which means it will generate bag of bigrams by default. It
 * also has an alias **`bong()`**.
 *
 * @alias string#bagOfNGrams
 * @param {string} str the input string.
 * @param {number} [size=2] ngram size.
 * @param {function} [ifn=undefined] a function to build index; it is called for
 * every **unique occurrence of ngram** of `str`; and it receives the ngram and the `idx`
 * as input arguments. The `build()` function of [helper.returnIndexer](#helperreturnindexer)
 * may be used as `ifn`. If `undefined` then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {object} bag of ngrams of `size` from `str`.
 * @example
 * bagOfNGrams( 'mama' );
 * // -> { ma: 2, am: 1 }
 * bong( 'mamma' );
 * // -> { ma: 2, am: 1, mm: 1 }
 */
var bagOfNGrams = function ( str, size, ifn, idx ) {
  var ng = ( size || 2 ),
      ngBOW = Object.create( null ),
      tg;
  for ( var i = 0, imax = str.length; i < imax; i += 1 ) {
    tg = str.slice( i, i + ng );
    if ( tg.length === ng ) {
      // Call `ifn` iff its defined and `tg` is appearing for the first time;
      // this avoids multiple calls to `ifn`. Strategy applies to `song()`,
      // and `bow()`.
      if ( ( typeof ifn === 'function' ) && !ngBOW[ tg ] ) {
          ifn( tg, idx );
      }
      // Now define, if required and then update counts.
      ngBOW[ tg ] = 1 + ( ngBOW[ tg ] || 0 );
    }
  }
  return ( ngBOW );
}; // bong()

module.exports = bagOfNGrams;

},{}],20:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var helpers = require( 'wink-helpers' );
var returnQuotedTextExtractor = require( './helper-return-quoted-text-extractor.js' );
var extractQuotedText = returnQuotedTextExtractor( '[', ']' );
// ## string

// ### composeCorpus
/**
 *
 * Generates all possible sentences from the input argument string.
 * The string s must follow a special syntax as illustrated in the
 * example below:<br/>
 * `'[I] [am having|have] [a] [problem|question]'`<br/>
 *
 * Each phrase must be quoted between `[ ]` and each possible option of phrases
 * (if any) must be separated by a `|` character. The corpus is composed by
 * computing the cartesian product of all the phrases.
 *
 * @alias string#composeCorpus
 * @param {string} str the input string.
 * @return {string[]} of all possible sentences.
 * @example
 * composeCorpus( '[I] [am having|have] [a] [problem|question]' );
 * // -> [ 'I am having a problem',
 * //      'I am having a question',
 * //      'I have a problem',
 * //      'I have a question' ]
 */
var composeCorpus = function ( str ) {
  if ( !str || ( typeof str !== 'string' ) ) return [];

  var quotedTextElems = extractQuotedText( str );
  var corpus = [];
  var finalCorpus = [];

  if ( !quotedTextElems ) return [];
  quotedTextElems.forEach( function ( e ) {
    corpus.push( e.split( '|' ) );
  } );

  helpers.array.product( corpus ).forEach( function ( e ) {
    finalCorpus.push( e.join( ' ' ) );
  } );
  return ( finalCorpus );
}; // composeCorpus()

module.exports = composeCorpus;

},{"./helper-return-quoted-text-extractor.js":14,"wink-helpers":11}],21:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### edgeNGrams
/**
 *
 * Generates the edge ngrams from the input string.
 *
 * @alias string#edgeNGrams
 * @param {string} str the input string.
 * @param {number} [min=2] size of ngram generated.
 * @param {number} [max=8] size of ngram is generated.
 * @param {number} [delta=2] edge ngrams are generated in increments of this value.
 * @param {function} [ifn=undefined] a function to build index; it is called for
 * every edge ngram of `str`; and it receives the edge ngram and the `idx`
 * as input arguments. The `build()` function of [helper.returnIndexer](#helperreturnindexer)
 * may be used as `ifn`. If `undefined` then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {string[]} of edge ngrams.
 * @example
 * edgeNGrams( 'decisively' );
 * // -> [ 'de', 'deci', 'decisi', 'decisive' ]
 * edgeNGrams( 'decisively', 8, 10, 1 );
 * // -> [ 'decisive', 'decisivel', 'decisively' ]
 */
var edgeNGrams = function ( str, min, max, delta, ifn, idx ) {
  var dlta = ( delta || 2 ),
      eg,
      egs = [],
      imax = Math.min( ( max || 8 ), str.length ) + 1,
      start = ( min || 2 );

  // Generate edge ngrams
  for ( var i = start; i < imax; i += dlta ) {
    eg = str.slice( 0, i );
    egs.push( eg );
    if ( typeof ifn === 'function' ) {
        ifn( eg, idx );
    }
  }
  return ( egs );
}; // edgeNGrams()

module.exports = edgeNGrams;

},{}],22:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );
var ncrgx = require( './name_cleaner_regexes.js' );

// ## string

// ### extractPersonsName
/**
 *
 * Attempts to extract person's name from input string.
 * It assmues the following name format:<br/>
 * `[<salutations>] <name part as FN [MN] [LN]> [<degrees>]`<br/>
 * Entities in square brackets are optional.
 *
 * @alias string#extractPersonsName
 * @param {string} str the input string.
 * @return {string} extracted name.
 * @example
 * extractPersonsName( 'Dr. Sarah Connor M. Tech., PhD. - AI' );
 * // -> 'Sarah Connor'
 */
var extractPersonsName = function ( str ) {
  // Remove Degrees by making the list of indexes of each degree and subsequently
  // finding the minimum and slicing from there!
  var indexes = ncrgx.degrees.map( function ( r ) {
    var m = r.exec( str );
    return ( m ) ? m.index : 999999;
  } );
  var sp = Math.min.apply( null, indexes );

  // Generate an Array of Every Elelemnt of Name (e.g. title, first name,
  // sir name, honours, etc)
  var aeen = str.slice( 0, sp ).replace( rgx.notAlpha, ' ').replace( rgx.spaces, ' ').trim().split(' ');
  // Remove titles from the beginning.
  while ( aeen.length && ncrgx.titles.test( aeen[0] ) ) aeen.shift();
  return aeen.join(' ');
}; // extractPersonsName()

module.exports = extractPersonsName;

},{"./name_cleaner_regexes.js":16,"./util_regexes.js":52}],23:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );
var trim = require( './string-trim.js' );
// ## string

// ### extractRunOfCapitalWords
/**
 *
 * Extracts the array of text appearing as Title Case or in ALL CAPS from the
 * input string.
 *
 * @alias string#extractRunOfCapitalWords
 * @param {string} str the input string.
 * @return {string[]} of text appearing in Title Case or in ALL CAPS; if no such
 * text is found then `null` is returned.
 * @example
 * extractRunOfCapitalWords( 'In The Terminator, Sarah Connor is in Los Angeles' );
 * // -> [ 'In The Terminator', 'Sarah Connor', 'Los Angeles' ]
 */
var extractRunOfCapitalWords = function ( str ) {
  var m = str.match( rgx.rocWords );
  return ( ( m ) ? m.map( trim ) : m );
}; // extractRunOfCapitalWords()

module.exports = extractRunOfCapitalWords;

},{"./string-trim.js":41,"./util_regexes.js":52}],24:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### lowerCase
/**
 *
 * Converts the input string to lower case.
 *
 * @alias string#lowerCase
 * @param {string} str the input string.
 * @return {string} input string in lower case.
 * @example
 * lowerCase( 'Lower Case' );
 * // -> 'lower case'
 */
var lowerCase = function ( str ) {
  return ( str.toLowerCase() );
}; // lowerCase()

module.exports = lowerCase;

},{}],25:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### marker
/**
 *
 * Generates `marker` of the input string; it is defined as 1-gram, sorted
 * and joined back as a string again. Marker is a quick and aggressive way
 * to detect similarity between short strings. Its aggression may lead to more
 * false positives such as `Meter` and `Metre` or `no melon` and `no lemon`.
 *
 * @alias string#marker
 * @param {string} str the input string.
 * @return {string} the marker.
 * @example
 * marker( 'the quick brown fox jumps over the lazy dog' );
 * // -> ' abcdefghijklmnopqrstuvwxyz'
 */
var marker = function ( str ) {
  var uniqChars = Object.create( null );
  for ( var i = 0, imax = str.length; i < imax; i += 1 ) {
    uniqChars[ str[ i ] ] = true;
  }
  return ( Object.keys( uniqChars ).sort().join('') );
}; // marker()

module.exports = marker;

},{}],26:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### ngram
/**
 *
 * Generates an array of ngrams of a specified size from the input string. The
 * default size is 2, which means it will generate bigrams by default.
 *
 * @alias string#ngram
 * @param {string} str the input string.
 * @param {number} [size=2] ngram's size.
 * @return {string[]} ngrams of `size` from `str`.
 * @example
 * ngram( 'FRANCE' );
 * // -> [ 'FR', 'RA', 'AN', 'NC', 'CE' ]
 * ngram( 'FRENCH' );
 * // -> [ 'FR', 'RE', 'EN', 'NC', 'CH' ]
 * ngram( 'FRANCE', 3 );
 * // -> [ 'FRA', 'RAN', 'ANC', 'NCE' ]
 */
var ngram = function ( str, size ) {
  var ng = ( size || 2 ),
      ngramz = [],
      tg;
  for ( var i = 0, imax = str.length; i < imax; i += 1 ) {
    tg = str.slice( i, i + ng );
    if ( tg.length === ng ) ngramz.push( tg );
  }
  return ( ngramz );
}; // ngram()

module.exports = ngram;

},{}],27:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var phnrgx = require( './phonetize_regexes.js' );
/* eslint no-underscore-dangle: "off" */

// ## string

// ### phonetize
/**
 *
 * Phonetizes the input string using an algorithmic adaptation of Metaphone; It
 * is not an exact implementation of Metaphone.
 *
 * @alias string#phonetize
 * @param {string} word the input word.
 * @return {string} phonetic code of `word`.
 * @example
 * phonetize( 'perspective' );
 * // -> 'prspktv'
 * phonetize( 'phenomenon' );
 * // -> 'fnmnn'
 */
var phonetize = function ( word ) {
  var p = word.toLowerCase();
  // Remove repeating letters.
  p = p.replace( phnrgx.repeatingChars, '$1');
  // Drop first character of `kgknPairs`.
  if ( phnrgx.kngnPairs.test( p ) ) {
    p = p.substr( 1, p.length - 1 );
  }
  // Run Regex Express now!
  p = p
      // Change `ough` in the end as `f`,
      .replace( phnrgx.ough, 'f' )
      // Change `dg` to `j`, in `dge, dgi, dgy`.
      .replace( phnrgx.dge, 'je' )
      .replace( phnrgx.dgi, 'ji' )
      .replace( phnrgx.dgy, 'jy' )
      // Change `c` to `k` in `sch`
      .replace( phnrgx.sch, 'sk' )
      // Drop `c` in `sci, sce, scy`.
      .replace( phnrgx.sci, 'si' )
      .replace( phnrgx.sce, 'se' )
      .replace( phnrgx.scy, 'sy' )
      // Drop `t` if it appears as `tch`.
      .replace( phnrgx.tch, 'ch' )
      // Replace `tio & tia` by `sh`.
      .replace( phnrgx.tio, 'sh' )
      .replace( phnrgx.tia, 'sh' )
      // Drop `b` if it appears as `mb` in the end.
      .replace( phnrgx.mb_, 'm' )
      // Drop `r` if it preceeds a vowel and not followed by a vowel or `y`
      // .replace( rgx.vrnotvy, '$1$3' )
      // Replace `c` by `s` in `ce, ci, cy`.
      .replace( phnrgx.ce, 'se' )
      .replace( phnrgx.ci, 'si' )
      .replace( phnrgx.cy, 'sy' )
      // Replace `cq` by `q`.
      .replace( phnrgx.cq, 'q' )
      // Replace `ck` by `k`.
      .replace( phnrgx.ck, 'k' )
      // Replace `ph` by `f`.
      .replace( phnrgx.ph, 'f' )
      // Replace `th` by `0` (theta look alike!).
      .replace( phnrgx.th, '0' )
      // Replace `c` by `k` if it is not followed by `h`.
      .replace( phnrgx.cnoth, 'k$2' )
      // Replace `q` by `k`.
      .replace( phnrgx.q, 'k' )
      // Replace `x` by `s` if it appears in the beginning.
      .replace( phnrgx._x, 's' )
      // Other wise replace `x` by `ks`.
      .replace( phnrgx.x, 'ks' )
      // Replace `sh, sia, sio` by `x`. Needs to be done post `x` processing!
      .replace( phnrgx.sh, 'x' )
      // Drop `y` if it is now followed by a **vowel**.
      .replace( phnrgx.ynotv, '$2' )
      .replace( phnrgx.y_, '' )
      // Replace `z` by `s`.
      .replace( phnrgx.z, 's' )
      // Drop all **vowels** excluding the first one.
      .replace( phnrgx.__vowels, '' );

      return ( p );
}; // phonetize()

module.exports = phonetize;

},{"./phonetize_regexes.js":17}],28:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### removeElisions
/**
 *
 * Removes basic elisions found in the input string. Typical example of elisions
 * are `it's, let's, where's, I'd, I'm, I'll, I've, and Isn't` etc. Note it retains
 * apostrophe used to indicate possession.
 *
 * @alias string#removeElisions
 * @param {string} str the input string.
 * @return {string} input string after removal of elisions.
 * @example
 * removeElisions( "someone's wallet, isn't it?" );
 * // -> "someone's wallet, is it?"
 */
var removeElisions = function ( str ) {
  return ( str
            .replace( rgx.elisionsSpl, '$2' )
            .replace( rgx.elisions1, '$1' )
            .replace( rgx.elisions2, '$1' )
         );
}; // removeElisions()

module.exports = removeElisions;

},{"./util_regexes.js":52}],29:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### removeExtraSpaces
/**
 *
 * Removes leading, trailing and any extra in-between whitespaces from the input
 * string.
 *
 * @alias string#removeExtraSpaces
 * @param {string} str the input string.
 * @return {string} input string after removal of leading, trailing and extra
 * whitespaces.
 * @example
 * removeExtraSpaces( '   Padded   Text    ' );
 * // -> 'Padded Text'
 */
var removeExtraSpaces = function ( str ) {
  return ( str
            .trim()
            .replace( rgx.spaces, ' ')
         );
}; // removeExtraSpaces()

module.exports = removeExtraSpaces;

},{"./util_regexes.js":52}],30:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### removeHTMLTags
/**
 *
 * Removes each HTML tag by replacing it with a whitespace.
 *
 * Extra spaces, if required, may be removed using [string.removeExtraSpaces](#stringremoveextraspaces)
 * function.
 *
 * @alias string#removeHTMLTags
 * @param {string} str the input string.
 * @return {string} input string after removal of HTML tags.
 * @example
 * removeHTMLTags( '<p>Vive la France&nbsp;&#160;!</p>' );
 * // -> ' Vive la France  ! '
 */
var removeHTMLTags = function ( str ) {
  return ( str
            .replace( rgx.htmlTags, ' ' )
            .replace( rgx.htmlEscSeq1, ' ' )
            .replace( rgx.htmlEscSeq2, ' ' )
         );
}; // removeHTMLTags()

module.exports = removeHTMLTags;

},{"./util_regexes.js":52}],31:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### removePunctuations
/**
 *
 * Removes each punctuation mark by replacing it with a whitespace. It looks for
 * the following punctuations ??? `.,;!?:"!'... - () [] {}`.
 *
 * Extra spaces, if required, may be removed using [string.removeExtraSpaces](#stringremoveextraspaces)
 * function.
 *
 * @alias string#removePunctuations
 * @param {string} str the input string.
 * @return {string} input string after removal of punctuations.
 * @example
 * removePunctuations( 'Punctuations like "\'\',;!?:"!... are removed' );
 * // -> 'Punctuations like               are removed'
 */
var removePunctuations = function ( str ) {
  return str.replace( rgx.punctuations, ' ' );
}; // removePunctuations()

module.exports = removePunctuations;

},{"./util_regexes.js":52}],32:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### removeSplChars
/**
 *
 * Removes each special character by replacing it with a whitespace. It looks for
 * the following special characters ??? `~@#%^*+=`.
 *
 * Extra spaces, if required, may be removed using [string.removeExtraSpaces](#stringremoveextraspaces)
 * function.
 *
 * @alias string#removeSplChars
 * @param {string} str the input string.
 * @return {string} input string after removal of special characters.
 * @example
 * removeSplChars( '4 + 4*2 = 12' );
 * // -> '4   4 2   12'
 */
var removeSplChars = function ( str ) {
  return str.replace( rgx.splChars, ' ' );
}; // removeSplChars()

module.exports = removeSplChars;

},{"./util_regexes.js":52}],33:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### retainAlphaNums
/**
 *
 * Retains only apha, numerals, and removes all other characters from
 * the input string, including leading, trailing and extra in-between
 * whitespaces.
 *
 * @alias string#retainAlphaNums
 * @param {string} str the input string.
 * @return {string} input string after removal of non-alphanumeric characters,
 * leading, trailing and extra whitespaces.
 * @example
 * retainAlphaNums( ' This, text here, has  (other) chars_! ' );
 * // -> 'This text here has other chars'
 */
var retainAlphaNums = function ( str ) {
  return ( str
            .replace( rgx.notAlphaNumeric, ' ')
            .replace( rgx.spaces, ' ')
            .trim()
          );
}; // retainAlphaNums()

module.exports = retainAlphaNums;

},{"./util_regexes.js":52}],34:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
// Abbreviations with `.` but are never are EOS.
const abbrvNoEOS = Object.create( null );
abbrvNoEOS[ 'mr.' ] = true;
abbrvNoEOS[ 'mrs.' ] = true;
abbrvNoEOS[ 'ms.' ] = true;
abbrvNoEOS[ 'er.' ] = true;
abbrvNoEOS[ 'dr.' ] = true;
abbrvNoEOS[ 'miss.' ] = true;
abbrvNoEOS[ 'shri.' ] = true;
abbrvNoEOS[ 'smt.' ] = true;
abbrvNoEOS[ 'i.e.' ] = true;
abbrvNoEOS[ 'ie.' ] = true;
abbrvNoEOS[ 'e.g.' ] = true;
abbrvNoEOS[ 'eg.' ] = true;
abbrvNoEOS[ 'viz.' ] = true;
abbrvNoEOS[ 'pvt.' ] = true;
// et al.
abbrvNoEOS[ 'et.' ] = true;
abbrvNoEOS[ 'al.' ] = true;
// Mount Kailash!
abbrvNoEOS[ 'mt.' ] = true;
// Pages!
abbrvNoEOS[ 'pp.' ] = true;

const abbrvMayBeEOS = Object.create( null );
abbrvMayBeEOS[ 'inc.' ] = true;
abbrvMayBeEOS[ 'ltd.' ] = true;
abbrvMayBeEOS[ 'al.' ] = true;
// Regex to test potential End-Of-Sentence.
const rgxPotentialEOS = /\.$|\!$|\?$/;
// Regex to test special cases of "I" at eos.
const rgxSplI = /i\?$|i\!$/;
// Regex to test first char as alpha only
const rgxAlphaAt0 = /^[^a-z]/i;

// ## string

// ### sentences
/**
 *
 * Detects the sentence boundaries in the input `paragraph` and splits it into
 * an array of sentence(s).
 *
 * @alias string#sentences
 * @param {string} paragraph the input string.
 * @return {string[]} of sentences.
 * @example
 * sentences( 'AI Inc. is focussing on AI. I work for AI Inc. My mail is r2d2@yahoo.com' );
 * // -> [ 'AI Inc. is focussing on AI.',
 * //      'I work for AI Inc.',
 * //      'My mail is r2d2@yahoo.com' ]
 *
 * sentences( 'U.S.A is my birth place. I was born on 06.12.1924. I climbed Mt. Everest.' );
 * // -> [ 'U.S.A is my birth place.',
 * //      'I was born on 06.12.1924.',
 * //      'I climbed Mt. Everest.' ]
 */
var punkt = function ( paragraph ) {
  // The basic idea is to split the paragraph on `spaces` and thereafter
  // examine each word ending with an EOS punctuation for a possible EOS.

  // Split on **space** to obtain all the `tokens` in the `para`.
  const paraTokens = paragraph.split( ' ' );
  var sentenceTokens = [];
  var sentences = [];

  for ( let k = 0; k < paraTokens.length; k += 1 ) {
    // A para token.
    const pt = paraTokens[ k ];
    // A lower cased para token.
    const lcpt = pt.toLowerCase();
    if ( ( rgxPotentialEOS.test( pt ) ) && !abbrvNoEOS[ lcpt ] && ( pt.length !== 2 || rgxAlphaAt0.test( pt ) || rgxSplI.test( lcpt ) ) ) {
      // Next para token that is non-blank.
      let nextpt;
      // Append this token to the current sentence tokens.
      sentenceTokens.push( pt );
      // If the current token is one of the abbreviations that may also mean EOS.
      if ( abbrvMayBeEOS[ lcpt ] ) {
        for ( let j = k + 1; j < paraTokens.length && !nextpt; j += 1 ) {
          nextpt = paraTokens[ j ];
        }
      }
      // If no next para token or if present then starts from a Cap Letter then
      // only complete sentence and start a new one!
      if ( nextpt === undefined || ( /^[A-Z]/ ).test( nextpt ) ) {
        sentences.push( sentenceTokens.join( ' ' ) );
        sentenceTokens = [];
      }
    } else sentenceTokens.push( pt );
  }

  if ( sentenceTokens.length > 0 ) sentences.push( sentenceTokens.join( ' ' ) );

  return sentences;
}; // punkt()

module.exports = punkt;

},{}],35:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### setOfChars
/**
 *
 * Creates a set of chars from the input string `s`. This is useful
 * in even more aggressive string matching using Jaccard or Tversky compared to
 * `marker()`. It also has an alias **`soc()`**.
 *
 * @alias string#setOfChars
 * @param {string} str the input string.
 * @param {function} [ifn=undefined] a function to build index; it receives the first
 * character of `str` and the `idx` as input arguments. The `build()` function of
 * [helper.returnIndexer](#helperreturnindexer) may be used as `ifn`. If `undefined`
 * then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {string} the soc.
 * @example
 * setOfChars( 'the quick brown fox jumps over the lazy dog' );
 * // -> ' abcdefghijklmnopqrstuvwxyz'
 */
var setOfChars = function ( str, ifn, idx ) {
  var cset = new Set( str );
  if ( typeof ifn === 'function' ) {
      ifn( str[ 0 ], idx );
  }
  return ( cset );
}; // soc()

module.exports = setOfChars;

},{}],36:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### setOfNGrams
/**
 *
 * Generates the set of ngrams of `size` from the input string. The
 * default size is 2, which means it will generate set of bigrams by default.
 * It also has an alias **`song()`**.
 *
 * @alias string#setOfNGrams
 * @param {string} str the input string.
 * @param {number} [size=2] ngram size.
 * @param {function} [ifn=undefined] a function to build index; it is called for
 * every **unique occurrence of ngram** of `str`; and it receives the ngram and the `idx`
 * as input arguments. The `build()` function of [helper.returnIndexer](#helperreturnindexer)
 * may be used as `ifn`. If `undefined` then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {set} of ngrams of `size` of `str`.
 * @example
 * setOfNGrams( 'mama' );
 * // -> Set { 'ma', 'am' }
 * song( 'mamma' );
 * // -> Set { 'ma', 'am', 'mm' }
 */
var setOfNGrams = function ( str, size, ifn, idx ) {
  var ng = ( size || 2 ),
      ngSet = new Set(),
      tg;
  for ( var i = 0, imax = str.length; i < imax; i += 1 ) {
    tg = str.slice( i, i + ng );
    if ( tg.length === ng ) {
      if ( ( typeof ifn === 'function' ) && !ngSet.has( tg ) ) {
          ifn( tg, idx );
      }
      ngSet.add( tg );
    }
  }
  return ( ngSet );
}; // song()

module.exports = setOfNGrams;

},{}],37:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var sndx = require( 'wink-distance/src/soundex.js' );

// ## string

// ### soundex
/**
 *
 * Produces the soundex code from the input `word`.
 *
 * @alias string#soundex
 * @param {string} word the input word.
 * @param {number} [maxLength=4] of soundex code to be returned.
 * @return {string} soundex code of `word`.
 * @example
 * soundex( 'Burroughs' );
 * // -> 'B620'
 * soundex( 'Burrows' );
 * // -> 'B620'
 */
var soundex = function ( word, maxLength ) {
  return sndx( word, maxLength );
}; // soundex()

module.exports = soundex;

},{"wink-distance/src/soundex.js":10}],38:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### splitElisions
/**
 *
 * Splits basic elisions found in the input string. Typical example of elisions
 * are `it's, let's, where's, I'd, I'm, I'll, I've, and Isn't` etc. Note it does
 * not touch apostrophe used to indicate possession.
 *
 * @alias string#splitElisions
 * @param {string} str the input string.
 * @return {string} input string after splitting of elisions.
 * @example
 * splitElisions( "someone's wallet, isn't it?" );
 * // -> "someone's wallet, is n't it?"
 */
var splitElisions = function ( str ) {
  return ( str
            .replace( rgx.elisionsSpl, '$2 $3' )
            .replace( rgx.elisions1, '$1 $2' )
            .replace( rgx.elisions2, '$1 $2' )
         );
}; // splitElisions()

module.exports = splitElisions;

},{"./util_regexes.js":52}],39:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var winkTokenize = require( 'wink-tokenizer' )().tokenize;

// ## string

// ### tokenize
/**
 *
 * Tokenizes the input `sentence` according to the value of `detailed` flag.
 * Any occurance of `...` in the `sentence` is
 * converted to ellipses. In `detailed = true` mode, it
 * tags every token with its type; the supported tags are currency, email,
 * emoji, emoticon, hashtag, number, ordinal, punctuation, quoted_phrase, symbol,
 * time, mention, url, and word.
 *
 * @alias string#tokenize
 * @param {string} sentence the input string.
 * @param {boolean} [detailed=false] if true, each token is a object cotaining
 * `value` and `tag` of each token; otherwise each token is a string. It's default
 * value of **false** ensures compatibility with previous version.
 * @return {(string[]|object[])} an array of strings if `detailed` is false otherwise
 * an array of objects.
 * @example
 * tokenize( "someone's wallet, isn't it? I'll return!" );
 * // -> [ 'someone', '\'s', 'wallet', ',', 'is', 'n\'t', 'it', '?',
 * //      'I', '\'ll', 'return', '!' ]
 *
 * tokenize( 'For details on wink, check out http://winkjs.org/ URL!', true );
 * // -> [ { value: 'For', tag: 'word' },
 * //      { value: 'details', tag: 'word' },
 * //      { value: 'on', tag: 'word' },
 * //      { value: 'wink', tag: 'word' },
 * //      { value: ',', tag: 'punctuation' },
 * //      { value: 'check', tag: 'word' },
 * //      { value: 'out', tag: 'word' },
 * //      { value: 'http://winkjs.org/', tag: 'url' },
 * //      { value: 'URL', tag: 'word' },
 * //      { value: '!', tag: 'punctuation' } ]
 */
var tokenize = function ( sentence, detailed ) {
  var tokens = winkTokenize( sentence.replace( '...', '???' ) );
  var i;
  if ( !detailed ) {
    for ( i = 0; i < tokens.length; i += 1 ) tokens[ i ] = tokens[ i ].value;
  }

  return tokens;
}; // tokenize()

module.exports = tokenize;

},{"wink-tokenizer":56}],40:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var removeElisions = require( './string-remove-elisions.js' );
var amplifyNotElision = require( './string-amplify-not-elision.js' );
var rgx = require( './util_regexes.js' );

// ## string

// ### tokenize0
/**
 *
 * Tokenizes by splitting the input string on **non-words**. This means tokens would
 * consists of only alphas, numerals and underscores; all other characters will
 * be stripped as they are treated as separators. It also removes all elisions;
 * however negations are retained and amplified.
 *
 * @alias string#tokenize0
 * @param {string} str the input string.
 * @return {string[]} of tokens.
 * @example
 * tokenize0( "someone's wallet, isn't it?" );
 * // -> [ 'someone', 's', 'wallet', 'is', 'not', 'it' ]
 */
var tokenize0 = function ( str ) {
  var tokens = removeElisions( amplifyNotElision( str ) )
                .replace( rgx.cannot, '$1 $2' )
                .split( rgx.nonWords );
  // Check the 0th and last element of array for empty string because if
  // fisrt/last characters are non-words then these will be empty stings!
  if ( tokens[ 0 ] === '' ) tokens.shift();
  if ( tokens[ tokens.length - 1 ] === '' ) tokens.pop();
  return tokens;
}; // tokenize0()

module.exports = tokenize0;

},{"./string-amplify-not-elision.js":18,"./string-remove-elisions.js":28,"./util_regexes.js":52}],41:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### trim
/**
 *
 * Trims leading and trailing whitespaces from the input string.
 *
 * @alias string#trim
 * @param {string} str the input string.
 * @return {string} input string with leading & trailing whitespaces removed.
 * @example
 * trim( '  Padded   ' );
 * // -> 'Padded'
 */
var trim = function ( str ) {
  return ( str.trim() );
}; // trim()

module.exports = trim;

},{}],42:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### upperCase
/**
 *
 * Converts the input string to upper case.
 *
 * @alias string#upperCase
 * @param {string} str the input string.
 * @return {string} input string in upper case.
 * @example
 * upperCase( 'Upper Case' );
 * // -> 'UPPER CASE'
 */
var upperCase = function ( str ) {
  return ( str.toUpperCase() );
}; // upperCase()

module.exports = upperCase;

},{}],43:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## tokens

// ### appendBigrams
/**
 *
 * Generates bigrams from the input tokens and appends them to the input tokens.
 *
 * @alias tokens#appendBigrams
 * @param {string[]} tokens the input tokens.
 * @return {string[]} the input tokens appended with their bigrams.
 * @example
 * appendBigrams( [ 'he', 'acted', 'decisively', 'today' ] );
 * // -> [ 'he',
 * //      'acted',
 * //      'decisively',
 * //      'today',
 * //      'he_acted',
 * //      'acted_decisively',
 * //      'decisively_today' ]
 */
var appendBigrams = function ( tokens ) {
  var i, imax;
  for ( i = 0, imax = tokens.length - 1; i < imax; i += 1 ) {
    tokens.push( tokens[ i ] + '_' + tokens[ i + 1 ] );
  }
  return tokens;
}; // appendBigrams()

module.exports = appendBigrams;

},{}],44:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## tokens

// ### bigrams
/**
 *
 * Generates bigrams from the input tokens.
 *
 * @alias tokens#bigrams
 * @param {string[]} tokens the input tokens.
 * @return {string[]} the bigrams.
 * @example
 * bigrams( [ 'he', 'acted', 'decisively', 'today' ] );
 * // -> [ [ 'he', 'acted' ],
 * //      [ 'acted', 'decisively' ],
 * //      [ 'decisively', 'today' ] ]
 */
var bigrams = function ( tokens ) {
  // Bigrams will be stored here.
  var bgs = [];
  // Helper variables.
  var i, imax;
  // Create bigrams.
  for ( i = 0, imax = tokens.length - 1; i < imax; i += 1 ) {
    bgs.push( [ tokens[ i ], tokens[ i + 1 ] ] );
  }
  return bgs;
}; // bigrams()

module.exports = bigrams;

},{}],45:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### bagOfWords
/**
 *
 * Generates the bag of words from the input string. By default it
 * uses `word count` as it's frequency; but if `logCounts` parameter is set to true then
 * it will use `log2( word counts + 1 )` as it's frequency. It also has an alias **`bow()`**.
 *
 * @alias tokens#bagOfWords
 * @param {string[]} tokens the input tokens.
 * @param {number} [logCounts=false] a true value flags the use of `log2( word count + 1 )`
 * instead of just `word count` as frequency.
 * @param {function} [ifn=undefined] a function to build index; it is called for
 * every **unique occurrence of word** in `tokens`; and it receives the word and the `idx`
 * as input arguments. The `build()` function of [helper.returnIndexer](#helperreturnindexer)
 * may be used as `ifn`. If `undefined` then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {object} bag of words from tokens.
 * @example
 * bagOfWords( [ 'rain', 'rain', 'go', 'away' ] );
 * // -> { rain: 2, go: 1, away: 1 }
 * bow( [ 'rain', 'rain', 'go', 'away' ], true );
 * // -> { rain: 1.584962500721156, go: 1, away: 1 }
 */
var bagOfWords = function ( tokens, logCounts, ifn, idx ) {
  var bow1 = Object.create( null ),
      i, imax,
      token,
      words;
  for ( i = 0, imax = tokens.length; i < imax; i += 1 ) {
    token = tokens[ i ];
    if ( ( typeof ifn === 'function' ) && !bow1[ token ] ) {
        ifn( token, idx );
    }
    bow1[ token ] = 1 + ( bow1[ token ] || 0 );
  }
  if ( !logCounts ) return ( bow1 );
  words = Object.keys( bow1 );
  for ( i = 0, imax = words.length; i < imax; i += 1 ) {
    // Add `1` to ensure non-zero count! (Note: log2(1) is 0)
    bow1[ words[ i ] ] = Math.log2( bow1[ words[ i ] ] + 1 );
  }
  return ( bow1 );
}; // bow()

module.exports = bagOfWords;

},{}],46:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var stringPhonetize = require( './string-phonetize.js' );

// ## tokens

// ### phonetize
/**
 *
 * Phonetizes input tokens using using an algorithmic adaptation of Metaphone.
 *
 * @alias tokens#phonetize
 * @param {string[]} tokens the input tokens.
 * @return {string[]} phonetized tokens.
 * @example
 * phonetize( [ 'he', 'acted', 'decisively', 'today' ] );
 * // -> [ 'h', 'aktd', 'dssvl', 'td' ]
 */
var phonetize = function ( tokens ) {
  return tokens.map( stringPhonetize );
}; // phonetize()

module.exports = phonetize;

},{"./string-phonetize.js":27}],47:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### propagateNegations
/**
 *
 * It looks for negation tokens in the input array of tokens and propagates
 * negation to subsequent `upto` tokens by prefixing them by a `!`. It is useful
 * in handling text containing negations during tasks like similarity detection,
 * classification or search.
 *
 * @alias tokens#propagateNegations
 * @param {string[]} tokens the input tokens.
 * @param {number} [upto=2] number of tokens to be negated after the negation
 * token. Note, tokens are only negated either `upto` tokens or up to the token
 * preceeding the **`, . ; : ! ?`** punctuations.
 * @return {string[]} tokens with negation propagated.
 * @example
 * propagateNegations( [ 'mary', 'is', 'not', 'feeling', 'good', 'today' ] );
 * // -> [ 'mary', 'is', 'not', '!feeling', '!good', 'today' ]
 */
var propagateNegations = function ( tokens, upto ) {
  var i, imax, j, jmax;
  var tkns = tokens;
  var limit = upto || 2;
  for ( i = 0, imax = tkns.length; i < imax; i += 1 ) {
    if ( rgx.negations.test( tkns[ i ] ) ) {
      for ( j = i + 1, jmax = Math.min( imax, i + limit + 1 ); j < jmax; j += 1 ) {
        // Hit a punctuation mark, break out of the loop otherwise go *upto the limit*.
        // > TODO: promote to utilities regex, after test cases have been added.
        if ( ( /[\,\.\;\:\!\?]/ ).test( tkns[ j ] ) ) break;
        // Propoage negation: invert the token by prefixing a `!` to it.
        tkns[ j ] = '!' + tkns[ j ];
      }
      i = j;
    }
  }
  return tkns;
}; // propagateNegations()

module.exports = propagateNegations;

},{"./util_regexes.js":52}],48:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

var defaultStopWords = require( './dictionaries/stop_words.json' );
var words = require( './helper-return-words-filter.js' );
defaultStopWords = words( defaultStopWords );

// ## tokens

// ### removeWords
/**
 *
 * Removes the stop words from the input array of tokens.
 *
 * @alias tokens#removeWords
 * @param {string[]} tokens the input tokens.
 * @param {wordsFilter} [stopWords=defaultStopWords] default stop words are
 * loaded from `stop_words.json` located under the `src/dictionaries/` directory.
 * Custom stop words can be created using [helper.returnWordsFilter ](#helperreturnwordsfilter).
 * @return {string[]} balance tokens.
 * @example
 * removeWords( [ 'this', 'is', 'a', 'cat' ] );
 * // -> [ 'cat' ]
 */
var removeWords = function ( tokens, stopWords ) {
  var givenStopWords = ( stopWords || defaultStopWords );
  return tokens.filter( givenStopWords.exclude );
}; // removeWords()

module.exports = removeWords;

},{"./dictionaries/stop_words.json":12,"./helper-return-words-filter.js":15}],49:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var stringSoundex = require( './string-soundex.js' );

// ## tokens

// ### soundex
/**
 *
 * Generates the soundex coded tokens from the input tokens.
 *
 * @alias tokens#soundex
 * @param {string[]} tokens the input tokens.
 * @return {string[]} soundex coded tokens.
 * @example
 * soundex( [ 'he', 'acted', 'decisively', 'today' ] );
 * // -> [ 'H000', 'A233', 'D221', 'T300' ]
 */
var soundex = function ( tokens ) {
  // Need to send `maxLength` as `undefined`.
  return tokens.map( ( t ) => stringSoundex( t ) );
}; // soundex()

module.exports = soundex;

},{"./string-soundex.js":37}],50:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### setOfWords
/**
 *
 * Generates the set of words from the input string. It also has an alias **`sow()`**.
 *
 * @alias tokens#setOfWords
 * @param {string[]} tokens the input tokens.
 * @param {function} [ifn=undefined] a function to build index; it is called for
 * every **member word of the set **; and it receives the word and the `idx`
 * as input arguments. The `build()` function of [helper.returnIndexer](#helperreturnindexer)
 * may be used as `ifn`. If `undefined` then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {set} of words from tokens.
 * @example
 * setOfWords( [ 'rain', 'rain', 'go', 'away' ] );
 * // -> Set { 'rain', 'go', 'away' }
 */
var setOfWords = function ( tokens, ifn, idx ) {
  var tset = new Set( tokens );
  if ( typeof ifn === 'function' ) {
    tset.forEach( function ( m ) {
        ifn( m, idx );
    } );
  }
  return ( tset );
}; // bow()

module.exports = setOfWords;

},{}],51:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var porter2Stemmer = require( 'wink-porter2-stemmer' );

// ## tokens

// ### stem
/**
 *
 * Stems input tokens using Porter Stemming Algorithm Version 2.
 *
 * @alias tokens#stem
 * @param {string[]} tokens the input tokens.
 * @return {string[]} stemmed tokens.
 * @example
 * stem( [ 'he', 'acted', 'decisively', 'today' ] );
 * // -> [ 'he', 'act', 'decis', 'today' ]
 */
var stem = function ( tokens ) {
  return tokens.map( porter2Stemmer );
}; // stem()

module.exports = stem;

},{"wink-porter2-stemmer":54}],52:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = Object.create( null );

// Matches standard english punctuations in a text.
rgx.punctuations = /[\???\'\???\???\`\???\???\"\[\]\(\)\{\}\???\,\.\!\;\?\/\-\:]/ig;
// End Of Sentence Punctuations - useful for splitting text into sentences.
rgx.eosPunctuations = /([\.\?\!])\s*(?=[a-z]|\s+\d)/gi;

// Matches special characters: `* + % # @ ^ = ~ | \` in a text.
rgx.splChars = /[\*\+\%\#\@\^\=\~\|\\]/ig;

// Matches common english elisions including n't.
// These are special ones as 's otherwise may be apostrophe!
rgx.elisionsSpl = /(\b)(it|let|that|who|what|here|there|when|where|why|how)(\'s)\b/gi;
// Single (1) character elisions.
rgx.elisions1 = /([a-z])(\'d|\'m)\b/gi;
// Two (2) character elisions.
rgx.elisions2 = /([a-z])(\'ll|\'ve|\'re|n\'t)\b/gi;
// Sperate not elision 'nt.
rgx.notElision = /([a-z])(n\'t)\b/gi;
// Specially handle cannot
rgx.cannot = /\b(can)(not)\b/gi;

// Matches space, tab, or new line characters in text.
rgx.spaces = /\s+/ig;
// Matches anything other than space, tab, or new line characters.
rgx.notSpace = /\S/g;
// Matches alpha and space characters in a text.
rgx.alphaSpace = /[a-z\s]/ig;
// Matches alphanumerals and space characters in a text.
rgx.alphaNumericSpace = /[a-z0-9\s]/ig;
// Matches non alpha characters in a text.
rgx.notAlpha = /[^a-z]/ig;
// Matches non alphanumerals in a text.
rgx.notAlphaNumeric = /[^a-z0-9]/ig;
// Matches one or more non-words characters.
rgx.nonWords = /\W+/ig;
// Matches complete negation token
rgx.negations = /^(never|none|not|no)$/i;

// Matches run of capital words in a text.
rgx.rocWords = /(?:\b[A-Z][A-Za-z]*\s*){2,}/g;

// Matches integer, decimal, JS floating point numbers in a text.
rgx.number = /[0-9]*\.[0-9]+e[\+\-]{1}[0-9]+|[0-9]*\.[0-9]+|[0-9]+/ig;

// Matches time in 12 hour am/pm format in a text.
rgx.timeIn12HrAMPM = /(?:[0-9]|0[0-9]|1[0-2])((:?:[0-5][0-9])){0,1}\s?(?:[aApP][mM])/ig;

// Matches HTML tags - in fact any thing enclosed in angular brackets including
// the brackets.
rgx.htmlTags = /(?:<[^>]*>)/g;
// Matches the HTML Esc Sequences
// Esc Seq of type `&lt;` or `&nbsp;`
rgx.htmlEscSeq1 = /(?:&[a-z]{2,6};)/gi;
// Esc Seq of type `&#32;`
rgx.htmlEscSeq2 = /(?:&#[0-9]{2,4};)/gi;

// Tests if a given string is possibly in the Indian mobile telephone number format.
rgx.mobileIndian = /^(0|\+91)?[789]\d{9}$/;
// Tests if a given string is in the valid email format.
rgx.email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Extracts any number and text from a <number><text> format text.
// Useful in extracting value and UoM from strings like `2.7 Kgs`.
rgx.separateNumAndText = /([0-9]*\.[0-9]+e[\+\-]{1}[0-9]+|[0-9]*\.[0-9]+|[0-9]+)[\s]*(.*)/i;

// Crude date parser for a string containg date in a valid format.
// > TODO: Need to improve this one!
rgx.date = /(\d+)/ig;

// Following 3 regexes are specially coded for `tokenize()` in prepare_text.
// Matches punctuations that are not a part of a number.
rgx.nonNumPunctuations = /[\.\,\-](?=\D)/gi;
rgx.otherPunctuations = /[\???\'\???\???\`\???\???\"\[\]\(\)\{\}\???\!\;\?\/\:]/ig;
// > TODO: Add more currency symbols here.
rgx.currency = /[\$\??\??\???]/ig;

//
module.exports = rgx;

},{}],53:[function(require,module,exports){
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-nlp-utils???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var porter2Stemmer = require( 'wink-porter2-stemmer' );

// ### Prepare Name Space

// Create prepare name space.
var prepare = Object.create( null );

/**
 * Helper
 * @namespace helper
 */
prepare.helper = Object.create( null );

// Words
prepare.helper.returnWordsFilter = require( './helper-return-words-filter.js' );
prepare.helper.words = prepare.helper.returnWordsFilter;
// Make better **alias** name for the `word()` function.

// Index
prepare.helper.index = require( './helper-return-indexer.js' );
// Make better **alias** name for the `index()` function.
prepare.helper.returnIndexer = prepare.helper.index;

// Return Quoted Text Extractor
prepare.helper.returnQuotedTextExtractor = require( './helper-return-quoted-text-extractor.js' );

/**
 * String
 * @namespace string
 */
prepare.string = Object.create( null );

// Lower Case
prepare.string.lowerCase = require( './string-lower-case.js' );
// Upper Case
prepare.string.upperCase = require( './string-upper-case.js' );
// Trim
prepare.string.trim = require( './string-trim.js' );
// Remove Extra Spaces
prepare.string.removeExtraSpaces = require( './string-remove-extra-spaces.js' );
// Retain Alpha-numerics
prepare.string.retainAlphaNums = require( './string-retain-alpha-nums.js' );
// Extract Person's Name
prepare.string.extractPersonsName = require( './string-extract-persons-name.js' );
// Extract Run of Capital Words
prepare.string.extractRunOfCapitalWords = require( './string-extract-run-of-capital-words.js' );
// Remove Punctuations
prepare.string.removePunctuations = require( './string-remove-punctuations.js' );
// Remove Special Chars
prepare.string.removeSplChars = require( './string-remove-spl-chars.js' );
// Remove HTML Tags
prepare.string.removeHTMLTags = require( './string-remove-html-tags.js' );
// Remove Elisions
prepare.string.removeElisions = require( './string-remove-elisions.js' );
// Split Elisions
prepare.string.splitElisions = require( './string-split-elisions.js' );
// Amplify Not Elision
prepare.string.amplifyNotElision = require( './string-amplify-not-elision' );
// Marker
prepare.string.marker = require( './string-marker.js' );
// SOC
prepare.string.soc = require( './string-soc.js' );
prepare.string.setOfChars = require( './string-soc.js' );
// NGrams
prepare.string.ngram = require( './string-ngram.js' );
// Edge NGrams
prepare.string.edgeNGrams = require( './string-edge-ngrams.js' );
// BONG
prepare.string.bong = require( './string-bong.js' );
prepare.string.bagOfNGrams = require( './string-bong.js' );
// SONG
prepare.string.song = require( './string-song.js' );
prepare.string.setOfNGrams = require( './string-song.js' );
// Sentences
prepare.string.sentences = require( './string-sentences.js' );
// Compose Corpus
prepare.string.composeCorpus = require( './string-compose-corpus.js' );
// Tokenize0
prepare.string.tokenize0 = require( './string-tokenize0.js' );
// Tokenize
prepare.string.tokenize = require( './string-tokenize.js' );
// #### Stem
prepare.string.stem = porter2Stemmer;
// Phonetize
prepare.string.phonetize = require( './string-phonetize.js' );
// Soundex
prepare.string.soundex = require( './string-soundex.js' );

/**
 * Tokens
 * @namespace tokens
 */
prepare.tokens = Object.create( null );

// Stem
prepare.tokens.stem = require( './tokens-stem.js' );
// Phonetize
prepare.tokens.phonetize = require( './tokens-phonetize.js' );
// Soundex
prepare.tokens.soundex = require( './tokens-soundex.js' );
// Remove Words
prepare.tokens.removeWords = require( './tokens-remove-words.js' );
// BOW
prepare.tokens.bow = require( './tokens-bow.js' );
prepare.tokens.bagOfWords = require( './tokens-bow.js' );
// SOW
prepare.tokens.sow = require( './tokens-sow.js' );
prepare.tokens.setOfWords = require( './tokens-sow.js' );
// Propagate Negations
prepare.tokens.propagateNegations = require( './tokens-propagate-negations.js' );
// Bigrams
prepare.tokens.bigrams = require( './tokens-bigrams.js' );
// Append Bigrams
prepare.tokens.appendBigrams = require( './tokens-append-bigrams.js' );

// Export prepare.
module.exports = prepare;

},{"./helper-return-indexer.js":13,"./helper-return-quoted-text-extractor.js":14,"./helper-return-words-filter.js":15,"./string-amplify-not-elision":18,"./string-bong.js":19,"./string-compose-corpus.js":20,"./string-edge-ngrams.js":21,"./string-extract-persons-name.js":22,"./string-extract-run-of-capital-words.js":23,"./string-lower-case.js":24,"./string-marker.js":25,"./string-ngram.js":26,"./string-phonetize.js":27,"./string-remove-elisions.js":28,"./string-remove-extra-spaces.js":29,"./string-remove-html-tags.js":30,"./string-remove-punctuations.js":31,"./string-remove-spl-chars.js":32,"./string-retain-alpha-nums.js":33,"./string-sentences.js":34,"./string-soc.js":35,"./string-song.js":36,"./string-soundex.js":37,"./string-split-elisions.js":38,"./string-tokenize.js":39,"./string-tokenize0.js":40,"./string-trim.js":41,"./string-upper-case.js":42,"./tokens-append-bigrams.js":43,"./tokens-bigrams.js":44,"./tokens-bow.js":45,"./tokens-phonetize.js":46,"./tokens-propagate-negations.js":47,"./tokens-remove-words.js":48,"./tokens-soundex.js":49,"./tokens-sow.js":50,"./tokens-stem.js":51,"wink-porter2-stemmer":54}],54:[function(require,module,exports){
//     wink-porter2-stemmer
//     Implementation of Porter Stemmer Algorithm V2 by Dr Martin F Porter
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-porter2-stemmer???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

// Implements the Porter Stemmer Algorithm V2 by Dr Martin F Porter.
// Reference: https://snowballstem.org/algorithms/english/stemmer.html

// ## Regex Definitions

// Regex definition of `double`.
var rgxDouble = /(bb|dd|ff|gg|mm|nn|pp|rr|tt)$/;
// Definition for Step Ia suffixes.
var rgxSFXsses = /(.+)(sses)$/;
var rgxSFXiedORies2 = /(.{2,})(ied|ies)$/;
var rgxSFXiedORies1 = /(.{1})(ied|ies)$/;
var rgxSFXusORss = /(.+)(us|ss)$/;
var rgxSFXs = /(.+)(s)$/;
// Definition for Step Ib suffixes.
var rgxSFXeedlyOReed = /(.*)(eedly|eed)$/;
var rgxSFXedORedlyORinglyORing = /([aeiouy].*)(ed|edly|ingly|ing)$/;
var rgxSFXatORblORiz = /(at|bl|iz)$/;
// Definition for Step Ic suffixes.
var rgxSFXyOR3 = /(.+[^aeiouy])([y3])$/;
// Definition for Step II suffixes; note we have spot the longest suffix.
var rgxSFXstep2 = /(ization|ational|fulness|ousness|iveness|tional|biliti|lessli|entli|ation|alism|aliti|ousli|iviti|fulli|enci|anci|abli|izer|ator|alli|bli|ogi|li)$/;
var rgxSFXstep2WithReplacements = [
  // Length 7.
  { rgx: /ational$/, replacement: 'ate' },
  { rgx: /ization$/, replacement: 'ize' },
  { rgx: /fulness$/, replacement: 'ful' },
  { rgx: /ousness$/, replacement: 'ous' },
  { rgx: /iveness$/, replacement: 'ive' },
  // Length 6.
  { rgx: /tional$/, replacement: 'tion' },
  { rgx: /biliti$/, replacement: 'ble' },
  { rgx: /lessli$/, replacement: 'less' },
  // Length 5.
  { rgx: /iviti$/, replacement: 'ive' },
  { rgx: /ousli$/, replacement: 'ous' },
  { rgx: /ation$/, replacement: 'ate' },
  { rgx: /entli$/, replacement: 'ent' },
  { rgx: /(.*)(alism|aliti)$/, replacement: '$1al' },
  { rgx: /fulli$/, replacement: 'ful' },
  // Length 4.
  { rgx: /alli$/, replacement: 'al' },
  { rgx: /ator$/, replacement: 'ate' },
  { rgx: /izer$/, replacement: 'ize' },
  { rgx: /enci$/, replacement: 'ence' },
  { rgx: /anci$/, replacement: 'ance' },
  { rgx: /abli$/, replacement: 'able' },
  // Length 3.
  { rgx: /bli$/, replacement: 'ble' },
  { rgx: /(.*)(l)(ogi)$/, replacement: '$1$2og' },
  // Length 2.
  { rgx: /(.*)([cdeghkmnrt])(li)$/, replacement: '$1$2' }
];
// Definition for Step III suffixes; once again spot the longest one first!
var rgxSFXstep3 = /(ational|tional|alize|icate|iciti|ative|ical|ness|ful)$/;
var rgxSFXstep3WithReplacements = [
  { rgx: /ational$/, replacement: 'ate' },
  { rgx: /tional$/, replacement: 'tion' },
  { rgx: /alize$/, replacement: 'al' },
  { rgx: /(.*)(icate|iciti|ical)$/, replacement: '$1ic' },
  { rgx: /(ness|ful)$/, replacement: '' },
];
// Definition for Step IV suffixes.
var rgxSFXstep4 = /(ement|ance|ence|able|ible|ment|ant|ent|ism|ate|iti|ous|ive|ize|al|er|ic)$/;
var rgxSFXstep4Full = /(ement|ance|ence|able|ible|ment|ant|ent|ism|ate|iti|ous|ive|ize|ion|al|er|ic)$/;
var rgxSFXstep4ion = /(.*)(s|t)(ion)$/;
// Exceptions Set I.
var exceptions1 = Object.create( null );
// Mapped!
exceptions1.skis = 'ski';
exceptions1.skies = 'sky';
exceptions1.dying = 'die';
exceptions1.lying = 'lie';
exceptions1.tying = 'tie';
exceptions1.idly = 'idl';
exceptions1.gently = 'gentl';
exceptions1.ugly = 'ugli';
exceptions1.early = 'earli';
exceptions1.only = 'onli';
exceptions1.singly = 'singl';
// Invariants!
exceptions1.sky = 'sky';
exceptions1.news = 'news';
exceptions1.atlas = 'atlas';
exceptions1.cosmos = 'cosmos';
exceptions1.bias = 'bias';
exceptions1.andes = 'andes';

// Exceptions Set II.
// Note, these are to be treated as full words.
var rgxException2 = /^(inning|outing|canning|herring|proceed|exceed|succeed|earring)$/;

// ## Private functions

// ### prelude
/**
 * Performs initial pre-processing by transforming the input string `s` as
 * per the replacements.
 *
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var prelude = function ( s ) {
  return ( s
            // Handle `y`'s.
            .replace( /^y/, '3' )
            .replace( /([aeiou])y/, '$13' )
            // Handle apostrophe.
            .replace( /\???s$|\'s$/, '' )
            .replace( /s\???$|s\'$/, '' )
            .replace( /[\???\']$/, '' )
         );
}; // prelude()

// ### isShort
/**
 * @param {String} s Input string
 * @return {Boolean} `true` if `s` is a short syllable, `false` otherwise
 * @private
 */
var isShort = function ( s ) {
  // (a) a vowel followed by a non-vowel other than w, x or 3 and
  // preceded by a non-vowel, **or** (b) a vowel at the beginning of the word
  // followed by a non-vowel.
  return (
    (
      (
        ( /[^aeiouy][aeiouy][^aeiouywx3]$/ ).test( s ) ||
        ( /^[aeiouy][^aeiouy]{0,1}$/ ).test( s ) // Removed this new changed??
      )
    )
  );
}; // isShort()

// ### markRegions
/**
 * @param {String} s Input string
 * @return {Object} the `R1` and `R2` regions as an object from the input string `s`.
 * @private
 */
var markRegions = function ( s ) {
  // Matches of `R1` and `R2`.
  var m1, m2;
  // To detect regions i.e. `R1` and `R2`.
  var rgxRegions = /[aeiouy]+([^aeiouy]{1}.+)/;
  m1 = rgxRegions.exec( s );
  if ( !m1 ) return ( { r1: '', r2: '' } );
  m1 = m1[ 1 ].slice( 1 );
  // Handle exceptions here to prevent over stemming.
  m1 = ( ( /^(gener|commun|arsen)/ ).test( s ) ) ? s.replace( /^(gener|commun|arsen)(.*)/, '$2') : m1;
  m2 = rgxRegions.exec( m1 );
  if ( !m2 ) return ( { r1: m1, r2: '' } );
  m2 = m2[ 1 ].slice( 1 );
  return ( { r1: m1, r2: m2 } );
}; // markRegions()

// ### step1a
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step1a = function ( s ) {
  var wordPart;
  if ( rgxSFXsses.test( s ) ) return ( s.replace( rgxSFXsses, '$1ss' ) );
  if ( rgxSFXiedORies2.test( s ) ) return ( s.replace( rgxSFXiedORies2, '$1i' ) );
  if ( rgxSFXiedORies1.test( s ) ) return ( s.replace( rgxSFXiedORies1, '$1ie' ) );
  if ( rgxSFXusORss.test( s ) ) return ( s );
  wordPart = s.replace( rgxSFXs, '$1' );
  if ( ( /[aeiuouy](.+)$/ ).test( wordPart ) ) return ( s.replace( rgxSFXs, '$1' ) );
  return ( s );
}; // step1a()

// ### step1b
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step1b = function ( s ) {
  var rgn = markRegions( s ),
  sd;
  // Search for the longest among the `eedly|eed` suffixes.
  if ( rgxSFXeedlyOReed.test( s ) )
    // Replace by ee if in R1.
    return ( rgxSFXeedlyOReed.test( rgn.r1 ) ? s.replace( rgxSFXeedlyOReed, '$1ee' ) : s );
  // Delete `ed|edly|ingly|ing` if the preceding word part contains a vowel.
  if ( rgxSFXedORedlyORinglyORing.test( s ) ) {
    sd = s.replace( rgxSFXedORedlyORinglyORing, '$1' );
    rgn = markRegions( sd );
    // And after deletion, return either
    return ( rgxSFXatORblORiz.test( sd ) ) ? ( sd + 'e' ) :
            // or
            ( rgxDouble.test( sd ) ) ? ( sd.replace( /.$/, '' ) ) :
              // or
              ( ( isShort( sd ) ) && ( rgn.r1 === '' ) ) ? ( sd + 'e' ) :
                // or
                sd;
  }
  return ( s );
}; // step1b()

// ### step1c
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step1c = function ( s ) {
  return ( s.replace( rgxSFXyOR3, '$1i') );
}; // step1c()

// ### step2
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step2 = function ( s ) {
  var i, imax,
      rgn = markRegions( s ),
      us; // updated s.
  var match = s.match( rgxSFXstep2 );
  match = ( match === null ) ? '$$$$$' : match[ 1 ];
  if ( rgn.r1.indexOf( match ) !== -1 ) {
    for ( i = 0, imax = rgxSFXstep2WithReplacements.length; i < imax; i += 1 ) {
      us = s.replace( rgxSFXstep2WithReplacements[ i ].rgx, rgxSFXstep2WithReplacements[ i ].replacement );
      if ( s !== us ) return ( us );
    }
  }
  return ( s );
}; // step2()

// ### step3
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step3 = function ( s ) {
  var i, imax,
      rgn = markRegions( s ),
      us; // updated s.
  var match = s.match( rgxSFXstep3 );
  match = ( match === null ) ? '$$$$$' : match[ 1 ];

  if ( rgn.r1.indexOf( match ) !== -1 ) {
    for ( i = 0, imax = rgxSFXstep3WithReplacements.length; i < imax; i += 1 ) {
      us = s.replace( rgxSFXstep3WithReplacements[ i ].rgx, rgxSFXstep3WithReplacements[ i ].replacement );
      if ( s !== us ) return ( us );
    }
    if ( ( /ative/ ).test( rgn.r2 ) ) return s.replace( /ative$/, '' );
  }
  return ( s );
}; // step3()

// ### step4
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step4 = function ( s ) {
  var rgn = markRegions( s );
  var match = s.match( rgxSFXstep4Full );
  match = ( match === null ) ? '$$$$$' : match[ 1 ];
  if ( rgxSFXstep4Full.test( s ) &&  rgn.r2.indexOf( match ) !== -1 ) {
    return rgxSFXstep4.test( s ) ? s.replace( rgxSFXstep4, '' ) :
    (
      rgxSFXstep4ion.test( s ) ?
      s.replace( rgxSFXstep4ion, '$1$2') :
      s
    );
  }
  return ( s );
}; // step4()

// ### step5
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step5 = function ( s ) {
  var preceding, rgn;
  // Search for the `e` suffixes.
  rgn = markRegions( s );
  if ( ( /e$/i ).test( s ) ) {
    preceding = s.replace( /e$/, '' );
    return (
              // Found: delete if in R2, or in R1 and not preceded by a short syllable
              ( /e/ ).test( rgn.r2 ) || ( ( /e/ ).test( rgn.r1 ) && !isShort( preceding ) ) ?
              preceding : s
           );
  }
  // Search for the `l` suffixes.
  if ( ( /l$/ ).test( s ) ) {
    rgn = markRegions( s );
    // Found: delete if in R2
    return ( rgn.r2 && ( /l$/ ).test( rgn.r2 ) ? s.replace( ( /ll$/ ), 'l' ) : s );
  }
  // If nothing happens, must return the string!
  return ( s );
}; // step5()

// ## Public functions
// ### stem
/**
 *
 * Stems an inflected `word` using Porter2 stemming algorithm.
 *
 * @param {string} word ??? word to be stemmed.
 * @return {string} ??? the stemmed word.
 *
 * @example
 * stem( 'consisting' );
 * // -> consist
 */
var stem = function ( word ) {
  var str = word.toLowerCase();
  if ( str.length < 3 ) return ( str );
  if ( exceptions1[ str ] ) return ( exceptions1[ str ] );
  str = prelude( str );
  str = step1a( str );

  if ( !rgxException2.test( str ) ) {
    str = step1b( str );
    str = step1c( str );
    str = step2( str );
    str = step3( str );
    str = step4( str );
    str = step5( str );
  }

  str = str.replace( /3/g , 'y' );
  return ( str );
}; // stem()

// Export stem function.
module.exports = stem;

},{}],55:[function(require,module,exports){
//     wink-tokenizer
//     Multilingual tokenizer that automatically tags each token with its type.
//
//     Copyright (C) 2017-20  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-tokenizer???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

var contractions = Object.create( null );

// Tag - word.
var word = 'word';
// Verbs.
contractions[ 'can\'t' ] = [ { value: 'ca', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'CAN\'T' ] = [ { value: 'CA', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Can\'t' ] = [ { value: 'Ca', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'Couldn\'t' ] = [ { value: 'could', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'COULDN\'T' ] = [ { value: 'COULD', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Couldn\'t' ] = [ { value: 'Could', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'don\'t' ] = [ { value: 'do', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'DON\'T' ] = [ { value: 'DO', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Don\'t' ] = [ { value: 'Do', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'doesn\'t' ] = [ { value: 'does', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'DOESN\'T' ] = [ { value: 'DOES', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Doesn\'t' ] = [ { value: 'Does', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'didn\'t' ] = [ { value: 'did', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'DIDN\'T' ] = [ { value: 'DID', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Didn\'t' ] = [ { value: 'Did', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'hadn\'t' ] = [ { value: 'had', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'HADN\'T' ] = [ { value: 'HAD', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Hadn\'t' ] = [ { value: 'Had', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'mayn\'t' ] = [ { value: 'may', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'MAYN\'T' ] = [ { value: 'MAY', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Mayn\'t' ] = [ { value: 'May', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'mightn\'t' ] = [ { value: 'might', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'MIGHTN\'T' ] = [ { value: 'MIGHT', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Mightn\'t' ] = [ { value: 'Might', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'mustn\'t' ] = [ { value: 'must', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'MUSTN\'T' ] = [ { value: 'MUST', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Mustn\'t' ] = [ { value: 'Must', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'needn\'t' ] = [ { value: 'need', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'NEEDN\'T' ] = [ { value: 'NEED', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Needn\'t' ] = [ { value: 'Need', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'oughtn\'t' ] = [ { value: 'ought', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'OUGHTN\'T' ] = [ { value: 'OUGHT', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Oughtn\'t' ] = [ { value: 'Ought', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'shan\'t' ] = [ { value: 'sha', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'SHAN\'T' ] = [ { value: 'SHA', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Shan\'t' ] = [ { value: 'Sha', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'shouldn\'t' ] = [ { value: 'should', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'SHOULDN\'T' ] = [ { value: 'SHOULD', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Shouldn\'t' ] = [ { value: 'Should', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'won\'t' ] = [ { value: 'wo', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'WON\'T' ] = [ { value: 'WO', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Won\'t' ] = [ { value: 'Wo', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'wouldn\'t' ] = [ { value: 'would', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'WOULDN\'T' ] = [ { value: 'WOULD', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Wouldn\'t' ] = [ { value: 'Would', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'ain\'t' ] = [ { value: 'ai', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'AIN\'T' ] = [ { value: 'AI', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Ain\'t' ] = [ { value: 'Ai', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'aren\'t' ] = [ { value: 'are', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'AREN\'T' ] = [ { value: 'ARE', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Aren\'t' ] = [ { value: 'Are', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'isn\'t' ] = [ { value: 'is', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'ISN\'T' ] = [ { value: 'IS', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Isn\'t' ] = [ { value: 'Is', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'wasn\'t' ] = [ { value: 'was', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'WASN\'T' ] = [ { value: 'WAS', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Wasn\'t' ] = [ { value: 'Was', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'weren\'t' ] = [ { value: 'were', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'WEREN\'T' ] = [ { value: 'WERE', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Weren\'t' ] = [ { value: 'Were', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'haven\'t' ] = [ { value: 'have', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'HAVEN\'T' ] = [ { value: 'HAVE', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Haven\'t' ] = [ { value: 'Have', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'hasn\'t' ] = [ { value: 'has', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'HASN\'T' ] = [ { value: 'HAS', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Hasn\'t' ] = [ { value: 'Has', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'daren\'t' ] = [ { value: 'dare', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'DAREN\'T' ] = [ { value: 'DARE', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Daren\'t' ] = [ { value: 'Dare', tag: word }, { value: 'n\'t', tag: word } ];


// Pronouns like I, you, they, we, she, and he.
contractions[ 'i\'m' ] = [ { value: 'i', tag: word }, { value: '\'m', tag: word } ];
contractions[ 'I\'M' ] = [ { value: 'I', tag: word }, { value: '\'M', tag: word } ];
contractions[ 'I\'m' ] = [ { value: 'I', tag: word }, { value: '\'m', tag: word } ];

contractions[ 'i\'ve' ] = [ { value: 'i', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'I\'VE' ] = [ { value: 'I', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'I\'ve' ] = [ { value: 'I', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'i\'d' ] = [ { value: 'i', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'I\'D' ] = [ { value: 'I', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'I\'d' ] = [ { value: 'I', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'i\'ll' ] = [ { value: 'i', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'I\'LL' ] = [ { value: 'I', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'I\'ll' ] = [ { value: 'I', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'you\'ve' ] = [ { value: 'you', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'YOU\'VE' ] = [ { value: 'YOU', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'You\'ve' ] = [ { value: 'You', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'you\'d' ] = [ { value: 'you', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'YOU\'D' ] = [ { value: 'YOU', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'You\'d' ] = [ { value: 'You', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'you\'ll' ] = [ { value: 'you', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'YOU\'LL' ] = [ { value: 'YOU', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'You\'ll' ] = [ { value: 'You', tag: word }, { value: '\'ll', tag: word } ];

// they - 've, 'd, 'll, 're
contractions[ 'they\'ve' ] = [ { value: 'they', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THEY\'VE' ] = [ { value: 'THEY', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'They\'ve' ] = [ { value: 'They', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'they\'d' ] = [ { value: 'they', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'THEY\'D' ] = [ { value: 'THEY', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'They\'d' ] = [ { value: 'They', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'they\'ll' ] = [ { value: 'they', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'THEY\'LL' ] = [ { value: 'THEY', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'They\'ll' ] = [ { value: 'They', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'they\'re' ] = [ { value: 'they', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'THEY\'RE' ] = [ { value: 'THEY', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'They\'re' ] = [ { value: 'They', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'we\'ve' ] = [ { value: 'we', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WE\'VE' ] = [ { value: 'WE', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'We\'ve' ] = [ { value: 'We', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'we\'d' ] = [ { value: 'we', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WE\'D' ] = [ { value: 'WE', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'We\'d' ] = [ { value: 'We', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'we\'ll' ] = [ { value: 'we', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WE\'LL' ] = [ { value: 'WE', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'We\'ll' ] = [ { value: 'We', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'we\'re' ] = [ { value: 'we', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WE\'RE' ] = [ { value: 'WE', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'We\'re' ] = [ { value: 'We', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'she\'d' ] = [ { value: 'she', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'SHE\'D' ] = [ { value: 'SHE', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'She\'d' ] = [ { value: 'She', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'she\'ll' ] = [ { value: 'she', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'SHE\'LL' ] = [ { value: 'SHE', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'She\'ll' ] = [ { value: 'She', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'she\'s' ] = [ { value: 'she', tag: word }, { value: '\'s', tag: word } ];
contractions[ 'SHE\'S' ] = [ { value: 'SHE', tag: word }, { value: '\'S', tag: word } ];
contractions[ 'She\'s' ] = [ { value: 'She', tag: word }, { value: '\'s', tag: word } ];

contractions[ 'he\'d' ] = [ { value: 'he', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'HE\'D' ] = [ { value: 'HE', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'He\'d' ] = [ { value: 'He', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'he\'ll' ] = [ { value: 'he', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'HE\'LL' ] = [ { value: 'HE', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'He\'ll' ] = [ { value: 'He', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'he\'s' ] = [ { value: 'he', tag: word }, { value: '\'s', tag: word } ];
contractions[ 'HE\'S' ] = [ { value: 'HE', tag: word }, { value: '\'S', tag: word } ];
contractions[ 'He\'s' ] = [ { value: 'He', tag: word }, { value: '\'s', tag: word } ];

contractions[ 'it\'d' ] = [ { value: 'it', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'IT\'D' ] = [ { value: 'IT', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'It\'d' ] = [ { value: 'It', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'it\'ll' ] = [ { value: 'it', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'IT\'LL' ] = [ { value: 'IT', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'It\'ll' ] = [ { value: 'It', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'it\'s' ] = [ { value: 'it', tag: word }, { value: '\'s', tag: word } ];
contractions[ 'IT\'S' ] = [ { value: 'IT', tag: word }, { value: '\'S', tag: word } ];
contractions[ 'It\'s' ] = [ { value: 'It', tag: word }, { value: '\'s', tag: word } ];

// Wh Pronouns - what, who, when, where, why, how, there, that
contractions[ 'what\'ve' ] = [ { value: 'what', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WHAT\'VE' ] = [ { value: 'WHAT', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'What\'ve' ] = [ { value: 'What', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'what\'d' ] = [ { value: 'what', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WHAT\'D' ] = [ { value: 'WHAT', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'What\'d' ] = [ { value: 'What', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'what\'ll' ] = [ { value: 'what', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WHAT\'LL' ] = [ { value: 'WHAT', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'What\'ll' ] = [ { value: 'What', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'what\'re' ] = [ { value: 'what', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WHAT\'RE' ] = [ { value: 'WHAT', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'What\'re' ] = [ { value: 'What', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'who\'ve' ] = [ { value: 'who', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WHO\'VE' ] = [ { value: 'WHO', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Who\'ve' ] = [ { value: 'Who', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'who\'d' ] = [ { value: 'who', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WHO\'D' ] = [ { value: 'WHO', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'Who\'d' ] = [ { value: 'Who', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'who\'ll' ] = [ { value: 'who', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WHO\'LL' ] = [ { value: 'WHO', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'Who\'ll' ] = [ { value: 'Who', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'who\'re' ] = [ { value: 'who', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WHO\'RE' ] = [ { value: 'WHO', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'Who\'re' ] = [ { value: 'Who', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'when\'ve' ] = [ { value: 'when', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WHEN\'VE' ] = [ { value: 'WHEN', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'When\'ve' ] = [ { value: 'When', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'when\'d' ] = [ { value: 'when', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WHEN\'D' ] = [ { value: 'WHEN', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'When\'d' ] = [ { value: 'When', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'when\'ll' ] = [ { value: 'when', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WHEN\'LL' ] = [ { value: 'WHEN', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'When\'ll' ] = [ { value: 'When', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'when\'re' ] = [ { value: 'when', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WHEN\'RE' ] = [ { value: 'WHEN', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'When\'re' ] = [ { value: 'When', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'where\'ve' ] = [ { value: 'where', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WHERE\'VE' ] = [ { value: 'WHERE', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Where\'ve' ] = [ { value: 'Where', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'where\'d' ] = [ { value: 'where', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WHERE\'D' ] = [ { value: 'WHERE', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'Where\'d' ] = [ { value: 'Where', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'where\'ll' ] = [ { value: 'where', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WHERE\'LL' ] = [ { value: 'WHERE', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'Where\'ll' ] = [ { value: 'Where', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'where\'re' ] = [ { value: 'where', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WHERE\'RE' ] = [ { value: 'WHERE', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'Where\'re' ] = [ { value: 'Where', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'why\'ve' ] = [ { value: 'why', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WHY\'VE' ] = [ { value: 'WHY', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Why\'ve' ] = [ { value: 'Why', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'why\'d' ] = [ { value: 'why', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WHY\'D' ] = [ { value: 'WHY', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'Why\'d' ] = [ { value: 'Why', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'why\'ll' ] = [ { value: 'why', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WHY\'LL' ] = [ { value: 'WHY', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'Why\'ll' ] = [ { value: 'Why', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'why\'re' ] = [ { value: 'why', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WHY\'RE' ] = [ { value: 'WHY', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'Why\'re' ] = [ { value: 'Why', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'how\'ve' ] = [ { value: 'how', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'HOW\'VE' ] = [ { value: 'HOW', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'How\'ve' ] = [ { value: 'How', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'how\'d' ] = [ { value: 'how', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'HOW\'D' ] = [ { value: 'HOW', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'How\'d' ] = [ { value: 'How', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'how\'ll' ] = [ { value: 'how', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'HOW\'LL' ] = [ { value: 'HOW', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'How\'ll' ] = [ { value: 'How', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'how\'re' ] = [ { value: 'how', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'HOW\'RE' ] = [ { value: 'HOW', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'How\'re' ] = [ { value: 'How', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'there\'ve' ] = [ { value: 'there', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THERE\'VE' ] = [ { value: 'THERE', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'There\'ve' ] = [ { value: 'There', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'there\'d' ] = [ { value: 'there', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'THERE\'D' ] = [ { value: 'THERE', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'There\'d' ] = [ { value: 'There', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'there\'ll' ] = [ { value: 'there', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'THERE\'LL' ] = [ { value: 'THERE', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'There\'ll' ] = [ { value: 'There', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'there\'re' ] = [ { value: 'there', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'THERE\'RE' ] = [ { value: 'THERE', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'There\'re' ] = [ { value: 'There', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'that\'ve' ] = [ { value: 'that', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THAT\'VE' ] = [ { value: 'THAT', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'That\'ve' ] = [ { value: 'That', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'that\'d' ] = [ { value: 'that', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'THAT\'D' ] = [ { value: 'THAT', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'That\'d' ] = [ { value: 'That', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'that\'ll' ] = [ { value: 'that', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'THAT\'LL' ] = [ { value: 'THAT', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'That\'ll' ] = [ { value: 'That', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'that\'re' ] = [ { value: 'that', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'THAT\'RE' ] = [ { value: 'THAT', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'That\'re' ] = [ { value: 'That', tag: word }, { value: '\'re', tag: word } ];

// Let us!
contractions[ 'let\'s' ] = [ { value: 'let', tag: word }, { value: '\'s', tag: word } ];
contractions[ 'LET\'S' ] = [ { value: 'THAT', tag: word }, { value: '\'S', tag: word } ];
contractions[ 'Let\'s' ] = [ { value: 'Let', tag: word }, { value: '\'s', tag: word } ];

contractions[ 'could\'ve' ] = [ { value: 'could', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'COULD\'VE' ] = [ { value: 'COULD', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Could\'ve' ] = [ { value: 'Could', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'should\'ve' ] = [ { value: 'should', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'SHOULD\'VE' ] = [ { value: 'SHOULD', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Should\'ve' ] = [ { value: 'Should', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'would\'ve' ] = [ { value: 'would', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WOULD\'VE' ] = [ { value: 'WOULD', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Would\'ve' ] = [ { value: 'Would', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'i\'ll\'ve' ] = [ { value: 'i', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'I\'LL\'VE' ] = [ { value: 'I', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'I\'ll\'ve' ] = [ { value: 'I', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'you\'ll\'ve' ] = [ { value: 'you', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'YOU\'LL\'VE' ] = [ { value: 'YOU', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'You\'ll\'ve' ] = [ { value: 'You', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'they\'ll\'ve' ] = [ { value: 'they', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THEY\'LL\'VE' ] = [ { value: 'THEY', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'They\'ll\'ve' ] = [ { value: 'They', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'it\'ll\'ve' ] = [ { value: 'it', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'IT\'LL\'VE' ] = [ { value: 'IT', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'It\'ll\'ve' ] = [ { value: 'It', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'he\'ll\'ve' ] = [ { value: 'he', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'HE\'LL\'VE' ] = [ { value: 'HE', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'He\'ll\'ve' ] = [ { value: 'He', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'she\'ll\'ve' ] = [ { value: 'she', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'SHE\'LL\'VE' ] = [ { value: 'SHE', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'She\'ll\'ve' ] = [ { value: 'She', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'shouldn\'t\'ve' ] = [ { value: 'should', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'SHOULDN\'T\'VE' ] = [ { value: 'SHOULD', tag: word }, { value: 'N\'T', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Shouldn\'t\'ve' ] = [ { value: 'Should', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'couldn\'t\'ve' ] = [ { value: 'could', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'COULDN\'T\'VE' ] = [ { value: 'COULD', tag: word }, { value: 'N\'T', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Couldn\'t\'ve' ] = [ { value: 'Could', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'wouldn\'t\'ve' ] = [ { value: 'would', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WOULDN\'T\'VE' ] = [ { value: 'WOULD', tag: word }, { value: 'N\'T', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Wouldn\'t\'ve' ] = [ { value: 'Would', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'i\'d\'ve' ] = [ { value: 'i', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'I\'D\'VE' ] = [ { value: 'I', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'I\'d\'ve' ] = [ { value: 'I', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'you\'d\'ve' ] = [ { value: 'you', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'YOU\'D\'VE' ] = [ { value: 'YOU', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'You\'d\'ve' ] = [ { value: 'You', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'he\'d\'ve' ] = [ { value: 'he', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'HE\'D\'VE' ] = [ { value: 'HE', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'He\'d\'ve' ] = [ { value: 'He', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'she\'d\'ve' ] = [ { value: 'she', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'SHE\'D\'VE' ] = [ { value: 'SHE', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'She\'d\'ve' ] = [ { value: 'She', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'you\'d\'ve' ] = [ { value: 'you', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'YOU\'D\'VE' ] = [ { value: 'YOU', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'You\'d\'ve' ] = [ { value: 'You', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'they\'d\'ve' ] = [ { value: 'they', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THEY\'D\'VE' ] = [ { value: 'THEY', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'They\'d\'ve' ] = [ { value: 'They', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'there\'d\'ve' ] = [ { value: 'there', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THERE\'D\'VE' ] = [ { value: 'THERE', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'There\'d\'ve' ] = [ { value: 'There', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'it\'d\'ve' ] = [ { value: 'it', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'IT\'D\'VE' ] = [ { value: 'IT', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'It\'d\'ve' ] = [ { value: 'It', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

module.exports = contractions;

},{}],56:[function(require,module,exports){
//     wink-tokenizer
//     Multilingual tokenizer that automatically tags each token with its type.
//
//     Copyright (C) 2017-20  GRAYPE Systems Private Limited
//
//     This file is part of ???wink-tokenizer???.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var emojiRegex = require( 'emoji-regex' );
var contractions = require( './eng-contractions.js' );
var rgxSpaces = /\s+/g;
// Ordinals only for Latin like 1st, 2nd or 12th or 33rd.
var rgxOrdinalL1 = /1\dth|[04-9]th|1st|2nd|3rd|[02-9]1st|[02-9]2nd|[02-9]3rd|[02-9][04-9]th|\d+\d[04-9]th|\d+\d1st|\d+\d2nd|\d+\d3rd/g;
// Apart from detecting pure integers or decimals, also detect numbers containing
// `. - / ,` so that dates, ip address, fractions and things like codes or part
// numbers are also detected as numbers only. These regex will therefore detected
// 8.8.8.8 or 12-12-1924 or 1,1,1,1.00 or 1/4 or 1/4/66/777 as numbers.
// Latin-1 Numbers.
var rgxNumberL1 = /\d+\/\d+|\d(?:[\.,-\/]?\d)*(?:\.\d+)?/g;
// Devanagari Numbers.
var rgxNumberDV = /[\u0966-\u096F]+\/[\u0966-\u096F]+|[\u0966-\u096F](?:[\.,-\/]?[\u0966-\u096F])*(?:\.[\u0966-\u096F]+)?/g;
var rgxMention = /@\w+/g;
// Latin-1 Hashtags.
var rgxHashtagL1 = /#[a-z][a-z0-9]*/gi;
// Devanagari Hashtags; include Latin-1 as well.
var rgxHashtagDV = /#[\u0900-\u0963\u0970-\u097F][\u0900-\u0963\u0970-\u097F\u0966-\u096F0-9]*/gi;
// EMail is EN character set.
var rgxEmail = /[-!#$%&'*+\/=?^\w{|}~](?:\.?[-!#$%&'*+\/=?^\w`{|}~])*@[a-z0-9](?:-?\.?[a-z0-9])*(?:\.[a-z](?:-?[a-z0-9])*)+/gi;
// Bitcoin, Ruble, Indian Rupee, Other Rupee, Dollar, Pound, Yen, Euro, Wong.
var rgxCurrency = /[????????????$??????????]/g;
// These include both the punctuations: Latin-1 & Devanagari.
var rgxPunctuation = /[???'??????`??????"\[\]\(\){}???,\.!;\?\-:\u0964\u0965]/g;
var rgxQuotedPhrase = /"[^"]*"/g;
// NOTE: URL will support only EN character set for now.
var rgxURL = /(?:https?:\/\/)(?:[\da-z\.-]+)\.(?:[a-z\.]{2,6})(?:[\/\w\.\-\?#=]*)*\/?/gi;
var rgxEmoji = emojiRegex();
var rgxEmoticon = /:-?[dps\*\/\[\]{}\(\)]|;-?[/(/)d]|<3/gi;
var rgxTime = /(?:\d|[01]\d|2[0-3]):?(?:[0-5][0-9])?\s?(?:[ap]\.?m\.?|hours|hrs)/gi;
// Inlcude [Latin-1 Supplement Unicode Block](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block))
var rgxWordL1 = /[a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF']*/gi;
// Define [Devanagari Unicode Block](https://unicode.org/charts/PDF/U0900.pdf)
var rgxWordDV = /[\u0900-\u094F\u0951-\u0963\u0970-\u097F]+/gi;
// Symbols go here; including Om.
var rgxSymbol = /[\u0950~@#%\^\+=\*\|\/<>&]/g;
// For detecting if the word is a potential contraction.
var rgxContraction = /'/;
// Singular & Plural possessive
var rgxPosSingular = /([a-z]+)('s)$/i;
var rgxPosPlural = /([a-z]+s)(')$/i;
// Regexes and their categories; used for tokenizing via match/split. The
// sequence is *critical* for correct tokenization.
var rgxsMaster = [
  { regex: rgxQuotedPhrase, category: 'quoted_phrase' },
  { regex: rgxURL, category: 'url' },
  { regex: rgxEmail, category: 'email' },
  { regex: rgxMention, category: 'mention' },
  { regex: rgxHashtagL1, category: 'hashtag' },
  { regex: rgxHashtagDV, category: 'hashtag' },
  { regex: rgxEmoji, category: 'emoji' },
  { regex: rgxEmoticon, category: 'emoticon' },
  { regex: rgxTime, category: 'time' },
  { regex: rgxOrdinalL1, category: 'ordinal' },
  { regex: rgxNumberL1, category: 'number' },
  { regex: rgxNumberDV, category: 'number' },
  { regex: rgxCurrency, category: 'currency' },
  { regex: rgxWordL1, category: 'word' },
  { regex: rgxWordDV, category: 'word' },
  { regex: rgxPunctuation, category: 'punctuation' },
  { regex: rgxSymbol, category: 'symbol' }
];

// Used to generate finger print from the tokens.
// NOTE: this variable is being reset in `defineConfig()`.
var fingerPrintCodes = {
  emoticon: 'c',
  email: 'e',
  emoji: 'j',
  hashtag: 'h',
  mention: 'm',
  number: 'n',
  ordinal: 'o',
  quoted_phrase: 'q', // eslint-disable-line camelcase
  currency: 'r',
  // symbol: 's',
  time: 't',
  url: 'u',
  word: 'w',
  alien: 'z'
};

// ### tokenizer
/**
 *
 * Creates an instance of {@link Tokenizer}.
 *
 * @return {Tokenizer} object conatining set of API methods for tokenizing a sentence
 * and defining configuration, plugin etc.
 * @example
 * // Load wink tokenizer.
 * var tokenizer = require( 'wink-tokenizer' );
 * // Create your instance of wink tokenizer.
 * var myTokenizer = tokenizer();
*/
var tokenizer = function () {
  // Default configuration: most comprehensive tokenization. Make deep copy!
  var rgxs = rgxsMaster.slice( 0 );
  // The result of last call to `tokenize()` is retained here.
  var finalTokens = [];
  // Returned!

  /**
   * @classdesc Tokenizer class
   * @class Tokenizer
   * @hideconstructor
   */
  var methods = Object.create( null );

  // ### manageContraction
  /**
   *
   * Splits a contractions into words by first trying a lookup in strandard
   * `contractions`; if the lookup fails, it checks for possessive in `'s` or
   * `s'` forms and separates the possesive part from the word. Otherwise the
   * contraction is treated as a normal word and no splitting occurs.
   *
   * @param {string} word that could be a potential conraction.
   * @param {object[]} tokens where the outcome is pushed.
   * @return {object[]} updated tokens according to the `word.`
   * @private
  */
  var manageContraction = function ( word, tokens ) {
    var ct = contractions[ word ];
    var matches;
    if ( ct === undefined ) {
      // Try possesive of sigular & plural forms
      matches = word.match( rgxPosSingular );
      if ( matches ) {
        tokens.push( { value: matches[ 1 ], tag: 'word' } );
        tokens.push( { value: matches[ 2 ], tag: 'word' } );
      } else {
        matches = word.match( rgxPosPlural );
        if ( matches ) {
          tokens.push( { value: matches[ 1 ], tag: 'word' } );
          tokens.push( { value: matches[ 2 ], tag: 'word' } );
        } else tokens.push( { value: word, tag: 'word' } );
      }
    } else {
      // Manage via lookup; ensure cloning!
      tokens.push( Object.assign( {}, ct[ 0 ] ) );
      tokens.push( Object.assign( {}, ct[ 1 ] ) );
      if ( ct[ 2 ] ) tokens.push( Object.assign( {}, ct[ 2 ] ) );
    }
    return tokens;
  }; // manageContraction()

  // ### tokenizeTextUnit
  /**
   *
   * Attempts to tokenize the input `text` using the `rgxSplit`. The tokenization
   * is carried out by combining the regex matches and splits in the right sequence.
   * The matches are the *real tokens*, whereas splits are text units that are
   * tokenized in later rounds! The real tokens (i.e. matches) are pushed as
   * `object` and splits as `string`.
   *
   * @param {string} text unit that is to be tokenized.
   * @param {object} rgxSplit object containing the regex and it's category.
   * @return {array} of tokens.
   * @private
  */
  var tokenizeTextUnit = function ( text, rgxSplit ) {
    // Regex matches go here; note each match is a token and has the same tag
    // as of regex's category.
    var matches = text.match( rgxSplit.regex );
    // Balance is "what needs to be tokenized".
    var balance = text.split( rgxSplit.regex );
    // The result, in form of combination of tokens & matches, is captured here.
    var tokens = [];
    // The tag;
    var tag = rgxSplit.category;
    // Helper variables.
    var aword,
        i,
        imax,
        k = 0,
        t;

    // Combine tokens & matches in the following pattern [ b0 m0 b1 m1 ... ]
    matches = ( matches ) ? matches : [];
    for ( i = 0, imax = balance.length; i < imax; i += 1 ) {
      t = balance[ i ];
      t = t.trim();
      if ( t ) tokens.push( t );
      if ( k < matches.length ) {
        if ( tag === 'word' ) {
          // Tag type `word` token may have a contraction.
          aword = matches[ k ];
          if ( rgxContraction.test( aword ) ) {
            tokens = manageContraction( aword, tokens );
          } else {
            // Means there is no contraction.
            tokens.push( { value: aword, tag: tag } );
          }
        } else tokens.push( { value: matches[ k ], tag: tag } );
      }
      k += 1;
    }

    return ( tokens );
  }; // tokenizeTextUnit()

  // ### tokenizeTextRecursively
  /**
   *
   * Tokenizes the input text recursively using the array of `regexes` and then
   * the `tokenizeTextUnit()` function. If (or whenever) the `regexes` becomes
   * empty, it simply splits the text on non-word characters instead of using
   * the `tokenizeTextUnit()` function.
   *
   * @param {string} text unit that is to be tokenized.
   * @param {object} regexes object containing the regex and it's category.
   * @return {undefined} nothing!
   * @private
  */
  var tokenizeTextRecursively = function ( text, regexes ) {
    var sentence = text.trim();
    var tokens = [];
    var i, imax;

    if ( !regexes.length ) {
      // No regex left, split on `spaces` and tag every token as **alien**.
      text.split( rgxSpaces ).forEach( function ( tkn ) {
        finalTokens.push( { value: tkn.trim(), tag: 'alien' } );
      } );
      return;
    }

    var rgx = regexes[ 0 ];
    tokens = tokenizeTextUnit( sentence, rgx );

    for ( i = 0, imax = tokens.length; i < imax; i += 1 ) {
      if ( typeof tokens[ i ] === 'string' ) {
        // Strings become candidates for further tokenization.
        tokenizeTextRecursively( tokens[ i ], regexes.slice( 1 ) );
      } else {
        finalTokens.push( tokens[ i ] );
      }
    }
  }; // tokenizeTextRecursively()

  // ### defineConfig
  /**
   *
   * Defines the configuration in terms of the types of token that will be
   * extracted by [`tokenize()`](#tokenize) method. Note by default, all types
   * of tokens will be detected and tagged automatically.
   *
   * @method Tokenizer#defineConfig
   * @param {object} config It defines 0 or more properties from the list of
   * **14** properties. A true value for a property ensures tokenization
   * for that type of text; whereas false value will mean that the tokenization of that
   * type of text will not be attempted. It also **resets** the effect of any previous
   * call(s) to the [`addRegex()`](#addregex) API.
   *
   * *An empty config object is equivalent to splitting on spaces. Whatever tokens
   * are created like this are tagged as **alien** and **`z`** is the
   * [finger print](#gettokensfp) code of this token type.*
   *
   * The table below gives the name of each property and it's description including
   * examples. The character with in paranthesis is the [finger print](#gettokensfp) code for the
   * token of that type.
   * @param {boolean} [config.currency=true] such as **$** or **??** symbols (**`r`**)
   * @param {boolean} [config.email=true] for example **john@acme.com** or **superman1@gmail.com** (**`e`**)
   * @param {boolean} [config.emoji=true] any standard unicode emojis e.g. ???? or ???? or ???? (**`j`**)
   * @param {boolean} [config.emoticon=true] common emoticons such as **`:-)`** or **`:D`** (**`c`**)
   * @param {boolean} [config.hashtag=true] hash tags such as **`#happy`** or **`#followme`** (**`h`**)
   * @param {boolean} [config.number=true] any integer, decimal number, fractions such as **19**, **2.718**
   * or **1/4** and numerals containing "**`, - / .`**", for example 12-12-1924 (**`n`**)
   * @param {boolean} [config.ordinal=true] ordinals like **1st**, **2nd**, **3rd**, **4th** or **12th** or **91st** (**`o`**)
   * @param {boolean} [config.punctuation=true] common punctuation such as **`?`** or **`,`**
   * ( token becomes fingerprint )
   * @param {boolean} [config.quoted_phrase=false] any **"quoted text"** in the sentence. _Note: its default value is **false**._ (**`q`**)
   * @param {boolean} [config.symbol=true] for example **`~`** or **`+`** or **`&`** or **`%`** or **`/`** ( token becomes fingerprint )
   * @param {boolean} [config.time=true] common representation of time such as **4pm** or **16:00 hours** (**`t`**)
   * @param {boolean} [config.mention=true] **@mention**  as in github or twitter (**`m`**)
   * @param {boolean} [config.url=true] URL such as **https://github.com** (**`u`**)
   * @param {boolean} [config.word=true] word such as **faster** or **r??sum??** or **pr??venir** (**`w`**)
   * @return {number} number of properties set to true from the list of above 13.
   * @example
   * // Do not tokenize & tag @mentions.
   * var myTokenizer.defineConfig( { mention: false } );
   * // -> 13
   * // Only tokenize words as defined above.
   * var myTokenizer.defineConfig( {} );
   * // -> 0
  */
  var defineConfig = function ( config ) {
    if ( typeof config === 'object' && Object.keys( config ).length ) {
      rgxs = rgxsMaster.filter( function ( rgx ) {
        // Config for the Category of `rgx`.
        var cc = config[ rgx.category ];
        // Means `undefined` & `null` values are taken as true; otherwise
        // standard **truthy** and **falsy** interpretation applies!!
        return ( cc === undefined || cc === null || !!cc );
      } );
    } else rgxs = [];
    // Count normalized length i.e. ignore multi-script entries.
    const uniqueCats = Object.create( null );
    rgxs.forEach( function ( rgx ) {
      uniqueCats[ rgx.category ] = true;
    } );
    // Reset the `fingerPrintCodes` variable.
    fingerPrintCodes = {
      emoticon: 'c',
      email: 'e',
      emoji: 'j',
      hashtag: 'h',
      mention: 'm',
      number: 'n',
      ordinal: 'o',
      quoted_phrase: 'q', // eslint-disable-line camelcase
      currency: 'r',
      // symbol: 's',
      time: 't',
      url: 'u',
      word: 'w',
      alien: 'z'
    };
    return ( ( Object.keys( uniqueCats ) ).length );
  }; // defineConfig()

  // ### tokenize
  /**
   *
   * Tokenizes the input `sentence` using the configuration specified via
   * [`defineConfig()`](#defineconfig).
   * Common contractions and possessive nouns are split into 2 separate tokens;
   * for example **I'll** splits as `'I'` and `'\'ll'` or **won't** splits as
   * `'wo'` and `'n\'t'`.
   *
   * @method Tokenizer#tokenize
   * @param {string} sentence the input sentence.
   * @return {object[]} of tokens; each one of them is an object with 2-keys viz.
   * `value` and its `tag` identifying the type of the token.
   * @example
   * var s = 'For detailed API docs, check out http://winkjs.org/wink-regression-tree/ URL!';
   * myTokenizer.tokenize( s );
   * // -> [ { value: 'For', tag: 'word' },
   * //      { value: 'detailed', tag: 'word' },
   * //      { value: 'API', tag: 'word' },
   * //      { value: 'docs', tag: 'word' },
   * //      { value: ',', tag: 'punctuation' },
   * //      { value: 'check', tag: 'word' },
   * //      { value: 'out', tag: 'word' },
   * //      { value: 'http://winkjs.org/wink-regression-tree/', tag: 'url' },
   * //      { value: 'URL', tag: 'word' },
   * //      { value: '!', tag: 'punctuation' } ]
  */
  var tokenize = function ( sentence ) {
    finalTokens = [];
    tokenizeTextRecursively( sentence, rgxs );
    return finalTokens;
  }; // tokenize()

  // ### getTokensFP
  /**
   *
   * Returns the finger print of the tokens generated by the last call to
   * [`tokenize()`](#tokenize). A finger print is a string created by sequentially
   * joining the unique code of each token's type. Refer to table given under
   * [`defineConfig()`](#defineconfig) for values of these codes.
   *
   * A finger print is extremely useful in spotting patterns present in the sentence
   * using `regexes`, which is otherwise a complex and time consuming task.
   *
   * @method Tokenizer#getTokensFP
   * @return {string} finger print of tokens generated by the last call to `tokenize()`.
   * @example
   * // Generate finger print of sentence given in the previous example
   * // under tokenize().
   * myTokenizer.getTokensFP();
   * // -> 'wwww,wwuw!'
  */
  var getTokensFP = function () {
    var fp = [];
    finalTokens.forEach( function ( t ) {
      fp.push( ( fingerPrintCodes[ t.tag ] ) ? fingerPrintCodes[ t.tag ] : t.value );
    } );
    return fp.join( '' );
  }; // getFingerprint()

  // ### addTag
  var addTag = function (name, fingerprintCode) {
    if (fingerPrintCodes[name]) {
      throw new Error( 'Tag ' + name + ' already exists' );
    }

    fingerPrintCodes[name] = fingerprintCode;
  }; // addTag()

  // ### addRegex
  /**
   * Adds a regex for parsing a new type of token. This regex can either be mapped
   * to an existing tag or it allows creation of a new tag along with its finger print.
   * The uniqueness of the [finger prints](#defineconfig) have to ensured by the user.
   *
   * *The added regex(s) will supersede the internal parsing.*
   *
   * @method Tokenizer#addRegex
   * @param {RegExp} regex the new regular expression.
   * @param {string} tag tokens matching the `regex` will be assigned this tag.
   * @param {string} [fingerprintCode=undefined] required if adding a new
   * tag; ignored if using an existing tag.
   * @return {void} nothing!
   * @example
   * // Adding a regex for an existing tag
   * myTokenizer.addRegex( /\(oo\)/gi, 'emoticon' );
   * myTokenizer.tokenize( '(oo) Hi!' )
   * // -> [ { value: '(oo)', tag: 'emoticon' },
   * //      { value: 'Hi', tag: 'word' },
   * //      { value: '!', tag: 'punctuation' } ]
   *
   * // Adding a regex to parse a new token type
   * myTokenizer.addRegex( /hello/gi, 'greeting', 'g' );
   * myTokenizer.tokenize( 'hello, how are you?' );
   * // -> [ { value: 'hello', tag: 'greeting' },
   * //      { value: ',', tag: 'punctuation' },
   * //      { value: 'how', tag: 'word' },
   * //      { value: 'are', tag: 'word' },
   * //      { value: 'you', tag: 'word' },
   * //      { value: '?', tag: 'punctuation' } ]
   * // Notice how "hello" is now tagged as "greeting" and not as "word".
   *
   * // Using definConfig will reset the above!
   * myTokenizer.defineConfig( { word: true } );
   * myTokenizer.tokenize( 'hello, how are you?' );
   * // -> [ { value: 'hello', tag: 'word' },
   * //      { value: ',', tag: 'punctuation' },
   * //      { value: 'how', tag: 'word' },
   * //      { value: 'are', tag: 'word' },
   * //      { value: 'you', tag: 'word' },
   * //      { value: '?', tag: 'punctuation' } ]
  */

  var addRegex = function (regex, tag, fingerprintCode) {
    if (!fingerPrintCodes[tag] && !fingerprintCode) {
      throw new Error( 'Tag ' + tag + ' doesn\'t exist; Provide a \'fingerprintCode\' to add it as a tag.' );
    } else if (!fingerPrintCodes[tag]) {
      addTag(tag, fingerprintCode);
    }

    rgxs.unshift( { regex: regex, category: tag } );
  }; // addRegex()

  // Set quoted_phrase as false becuase mostly it is not required.
  defineConfig( { quoted_phrase: false } ); // eslint-disable-line camelcase
  methods.defineConfig = defineConfig;
  methods.tokenize = tokenize;
  methods.getTokensFP = getTokensFP;
  methods.addTag = addTag;
  methods.addRegex = addRegex;
  return methods;
};

module.exports = tokenizer;

},{"./eng-contractions.js":55,"emoji-regex":9}]},{},[3]);
