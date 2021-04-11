/**
 * bot -> user
 * @typedef {Object} Answer
 * @param {String} text - Text answer.
 * @param {Object} inquiries - A dictionary that maps every inquiry (from user) to an answer (from bot).
 * @param {function(String): Answer||undefined} _getResponse - Private function to obtain a response given an inquiry.
 * @param {function(): *} optional - Optional function to perform certain tasks linked to this Answer.
 */

/**
 *
 * @typedef {Object} Interpreter - Object that holds the state of the inquiry/answer with the user
 * @property  {Answer} interpreter._default - Default answer to reply on invalid inquiries.
 * @property  {Answer} _init - Initial answer. Usually a 'greetings' message.
 * @property  {Answer} curr - Current answer.
 * @property  {function(String): Answer} reply - Function to give a result answer from a given inquiry.
 */
/** @type {Interpreter} */
export let interpreter = {
    _default: answerFactory("I couldn't understand you 😢. Please try again."),
    _init: {},
    curr: {},
    init: function(firstAnswer) {
        this._init = answerFactory("");
        this._init.addInquiry("Hello Trainer", firstAnswer);
        this.curr = this._init;
    },
    reply: function(inquiry) {
        let response = this.curr._getResponse(inquiry);
        if(response !== undefined){
            this.curr = response;
            return response;
        } else
            return this._default;
    }
}

/**
 *
 * @param {String} text
 * @return {Answer}
 */
export function answerFactory(text){
    return {
        text: text,
        inquiries: {},
        optional: () => void 0, // lambda empty function
        addInquiry: function(inquiry, answer) {
            this.inquiries[inquiry.toLowerCase()] = answer;
        },
        _getResponse : function(inquiry) {
            return this.inquiries[inquiry];
        }
    }
}
