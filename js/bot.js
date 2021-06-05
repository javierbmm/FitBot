import {interpreter, answerFactory} from "./interpreter.js";

export function initBot(){
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
    let for_how_long = answerFactory("For how long?");
    how_many_times_per_week.addInquiry("3 days", for_how_long);
    let tell_me_your_weight = answerFactory("Great! Tell me what is your weight");
    for_how_long.addInquiry("1h", tell_me_your_weight);
    let tell_me_your_height = answerFactory("What is your height?");
    tell_me_your_weight.addInquiry("75kg", tell_me_your_height);
    let what_is_your_fat_percentage = answerFactory("What is your fat percentage?");
    tell_me_your_height.addInquiry("180cm", what_is_your_fat_percentage);
    let calculating = answerFactory("Calculating...");
    let exercises = answerFactory("Done! You should do these exercices: -Running: 5km, 3 times a week");
    what_is_your_fat_percentage.addInquiry("15", calculating);
    what_is_your_fat_percentage.addInquiry("15", exercises);

    // adding to interpreter
    interpreter.init(hello_how_can_i_help_you);
}

export function getBotsResponse(nlpUserInput) {
    //Perform logic to find a correct response
    return interpreter.reply(nlpUserInput);
}