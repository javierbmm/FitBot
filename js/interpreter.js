import {Answer} from './answer.js'

/**
 *
 * @typedef {Object} Interpreter - Object that holds the state of the inquiry/answer with the user
 * @property  {Answer} interpreter._default - Default answer to reply on invalid inquiries.
 * @property  {Answer} _init - Initial answer. Usually a 'greetings' message.
 * @property  {Answer} curr - Current answer.
 * @property  {function(String): Answer} reply - Function to give a result answer from a given inquiry.
 */
export class Interpreter {
    /**
     *
     * @param firstAnswer {Answer}
     */
    constructor(firstAnswer) {
        this._default = new Answer("I couldn't understand you 😢. Please try again.");
        this.curr = {};
        this._init = new Answer("");
        this._init.addInquiry(["Hello Trainer", "Hi Trainer"], firstAnswer);
        this.curr = this._init;
    }

    reply(inquiry) {
        let response = this.curr._getResponse(inquiry);
        if(response !== undefined) {
            this.curr = response.answer;
            if(response.opt !== undefined)
                response.opt();
            return this.curr;
        } else
            return this._default;
    }
}
