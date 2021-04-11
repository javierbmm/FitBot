import {data} from "../data/data.js";
import {interpreter, answerFactory} from "./interpreter.js";

export function initBot(){
    // Greetings
    let hello_how_can_i_help_you = answerFactory("Hello! How can I help you?");
    // Declaring answers
    let whats_your_gender = answerFactory("What’s your gender (male/female)?");
    hello_how_can_i_help_you.addInquiry("want lose weight", whats_your_gender);

    // adding to interpreter
    interpreter.init(hello_how_can_i_help_you);
}

export function getBotsResponse(nlpUserInput) {
    //Perform logic to find a correct response
    return interpreter.reply(nlpUserInput);
}