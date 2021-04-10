import {getBotsResponse} from "./js/bot.js";
import {getNlpProcessedInput} from "./js/nlp.js";

/*let importNlp = document.createElement('script');
importNlp.src = './js/nlp.js';
document.head.appendChild(importNlp);

let importBot = document.createElement('script');
importBot.src = './js/bot.js';
document.head.appendChild(importBot);*/

//Adding a listener on 'enter' pressed
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input-msg")
    document.querySelector("#input-msg").addEventListener("keydown",e => {
        if(e.code === "Enter"){
            let input = inputField.value;
            addQuestionAndResponse(input, botResponse(input));
        }
    })
})

function botResponse(userInput){
    //Here we should call the function to get a response
    return getBotsResponse(getNlpProcessedInput(userInput));
}

function addQuestionAndResponse(userInput, botResponse){
    const mainDiv = document.getElementById("chat")

    //Displaying user's response
    let userDiv = document.createElement("div")
    userDiv.className = "msg-user-div"
    userDiv.innerHTML = `<span class="msg-user">${userInput}</span>`;
    mainDiv.appendChild(userDiv);

    //Displaying bot's answer
    let botDiv = document.createElement("div")
    botDiv.className = "msg-bot-div"
    botDiv.innerHTML = `<span class="msg-bot">${botResponse}</span>`;
    mainDiv.appendChild(botDiv);
}