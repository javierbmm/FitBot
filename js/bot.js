import {Interpreter} from "./interpreter.js";
import {Answer} from "./answer.js";
import {User, activeLeveLs} from "./user";
import * as routines from '../data/routines';

let interpreter;
const user = new User();

export function initBot() {
    // Greetings
    let hello_how_can_i_help_you = new Answer("Hello! How can I help you?");

    // Declaring answers
    let are_you_active = new Answer("Are you an active person?");
    let how_many_times_per_week = new Answer("How many times per week do you train?");
    let for_how_long = new Answer("For how long?");
    let calculating = new Answer("Calculating...");
    let exercises = new Answer("Done! You should do these exercices: -Running: 5km, 3 times a week");

    // Setting up the Chain of responsibilities
    hello_how_can_i_help_you.addInquiry(["want lose weight", "need lose weight"], are_you_active,
                                    ()=> { user.setGoal("lose weight")});
    hello_how_can_i_help_you.addInquiry(["want gain muscle", "need gain muscle", "want obtain muscle"], are_you_active,
                                    ()=>{ user.setGoal("gain strength")});
    hello_how_can_i_help_you.addInquiry(["want general improvement", "want improve", "just want improve"], are_you_active,
                                ()=>{ user.setGoal("general improvement")});

    are_you_active.addInquiry(["yes", "affirmative", "active"], how_many_times_per_week, ()=> { user.setHighActive();});
    are_you_active.addInquiry(["not much", "medium", "intermediate"], how_many_times_per_week, ()=> { user.setMediumActive();});
    are_you_active.addInquiry(["no", "negative", "lazy", "no exercise"], how_many_times_per_week, ()=> { user.setLowActive();});
    how_many_times_per_week.addInquiry("3 days", calculating,
                                    ()=>{user.setDaysPerWeek(3); sendUserRoutine(user);});
    how_many_times_per_week.addInquiry("4 days", calculating,
                                    ()=>{user.setDaysPerWeek(4); sendUserRoutine(user);});
    how_many_times_per_week.addInquiry("5 days", calculating,
                                    ()=>{user.setDaysPerWeek(5); sendUserRoutine(user);});
    for_how_long.addInquiry("1 h", calculating, omg3);
    for_how_long.addInquiry("1 h", exercises);

    // adding to interpreter
    interpreter = new Interpreter(hello_how_can_i_help_you);
}

export function getBotsResponse(nlpUserInput) {
    //Perform logic to find a correct response
    return interpreter.reply(nlpUserInput);
}

export function addNewAnswers(answers) {
    answers.forEach(answer => {
        let _answer = new Answer(answer.description);
        // Check this:
        interpreter.curr.hasSpecialInput = true;
        interpreter.curr.addInquiry(answer.name, _answer);
    })
}

function sendUserRoutine(user) {
    let routine = getRoutine(user);
    let msg = `This is your routine:\n\n LEVEL: ${user.activeness}\n DAYS PER WEEK: ${user.daysPerWeek}\n`;

    for(let day = 0; day<routine.length; day++){
        msg = msg.concat(`\n\n<b>Day ${day+1}:</b>`)
        for(let exercise = 0; exercise<routine[day].length; exercise++){
            msg = msg.concat(`\n\t - ${routine[day][exercise].name}`);
            console.log(msg);
        }
    }

    setTimeout(()=>{
        sendMessage(msg);
    }, 1500);
}


function sendMessage(msg) {
    const mainDiv = document.getElementById("chat");
    //Displaying bot's answer
    let botReply = botMsgElem(msg);
    setTimeout(()=>{
        mainDiv.appendChild(botReply);
        botReply.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
    }, 700);

    function botMsgElem(msg) {
        let aux = document.createElement("div");
        aux.innerHTML = `<span class="msg-bot">${msg}</span>`;
        return aux.firstChild;
    }
}

let omg = function() { console.log("omgthisdudeisamazing"); }
let omg2 = function() { console.log("jajafinopapi"); }
let omg3 = function() { console.log("ightdude"); }

function getRoutine(user) {
    // Decision tree based on user's specifications
    if(user.goal === "gain strength") {
        for(let i = 0; i<routines.gain_strength.length; i++){
            let routine = routines.gain_strength[i];
            if(routine.options.days === user.daysPerWeek && routine.options.level === user.activeness)
                return routine.routine;
        }
    } else if(user.goal === "lose weight") {
        for(let i = 0; i<routines.loose_weight.length; i++){
            let routine = routines.loose_weight[i];
            if(routine.options.days === user.daysPerWeek && routine.options.level === user.activeness)
                return routine.routine;
        }
    } else if(user.goal === "general improvement") {
        for(let i = 0; i<routines.general_improvement.length; i++){
            let routine = routines.general_improvement[i];
            if(routine.options.days === user.daysPerWeek && routine.options.level === user.activeness)
                return routine.routine;
        }
    }

    return null;
}