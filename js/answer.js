'use strict'

/**
 * bot -> user
 * @class {Object} Answer
 * @param {String} text - Text answer.
 * @param {Boolean} specialInput - Specify whether or not this answer might receive a special input.
 * @param {Object} inquiries - A dictionary that maps every inquiry (from user) to an answer (from bot).
 * @param {function(String): Answer||undefined} _getResponse - Private function to obtain a response given an inquiry.
 * @param {function(): *} optional - Optional function to perform certain tasks linked to this Answer.
 */
export class Answer {
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
        if(Array.isArray(inquiry))
            inquiry.forEach(item => {
                self.inquiries[item.toLowerCase()] = {answer: answer, opt: opt};
            })
        else
            this.inquiries[inquiry.toLowerCase()] = {answer: answer, opt: opt};

        // if(opt !== undefined && typeof opt === "function") {
        //     opt();
        // }
    }

    addOptional(funct) {
        this.optional = funct;
        this.hasOptional = true;
        return this;
    }

    _getResponse(inquiry) {
        if(this.hasSpecialInput) {
                this.optional(inquiry);
            // Do something to retrieve information from the inquiry (by using regex) and return the respective inquiry
            // given this inquiry + inquiry information (ie, user ask for 'x' exercise).
            return;
        }
        return this.inquiries[inquiry]
    }
}