import {data} from "../data/data.js";
import {Interpreter} from "./interpreter.js";
import {Answer} from "./answer.js";

let interpreter;
const activeLeveLs = {
    HIGH: 3,
    MEDIUM: 2,
    LOW: 1
}
var activeness = {};
activeness.setHigh = () => { activeness = activeLeveLs.HIGH }
activeness.setMedium = () => { activeness = activeLeveLs.MEDIUM }
activeness.setLow = () => { activeness = activeLeveLs.LOW }

export function initBot() {
    // Greetings
    let hello_how_can_i_help_you = new Answer("Hello! How can I help you?");

    // Declaring answers
    let whats_your_gender = new Answer("What’s your gender (male/female)?");
    let are_you_active = new Answer("Are you an active person?");
    let how_many_times_per_week = new Answer("How many times per week do you train?");
    let for_how_long = new Answer("For how long?");
    let tell_me_your_weight = new Answer("Great! Tell me what is your weight");
    let tell_me_your_height = new Answer("What is your height?");
    let what_is_your_fat_percentage = new Answer("What is your fat percentage?");
    let calculating = new Answer("Calculating...");
    let exercises = new Answer("Done! You should do these exercices: -Running: 5km, 3 times a week");

    // Setting up the Chain of responsibilities
    hello_how_can_i_help_you.addInquiry(["want lose weight", "need lose weight"], whats_your_gender);
    whats_your_gender.addInquiry(["male", "female"], are_you_active);
    are_you_active.addInquiry(["yes", "affirmative"], how_many_times_per_week);
    are_you_active.addInquiry(["yes", "affirmative"], how_many_times_per_week);
    are_you_active.addInquiry(["no", "negative"], how_many_times_per_week);
    how_many_times_per_week.addInquiry("3 days", for_how_long);
    for_how_long.addInquiry("1 h", calculating);
    for_how_long.addInquiry("1 h", exercises);

    // adding to interpreter
    interpreter = new Interpreter(hello_how_can_i_help_you);
}

export function getBotsResponse(nlpUserInput) {
    //Perform logic to find a correct response
    return interpreter.reply(nlpUserInput);
}