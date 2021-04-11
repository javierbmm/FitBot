import {getBotsResponse, initBot} from "./js/bot.js";
import {getNlpProcessedInput} from "./js/nlp.js";

initBot();

//Adding a listener on 'enter' pressed
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input-msg")
    document.querySelector("#input-msg").addEventListener("keydown",e => {
        if(e.code === "Enter"){
            let input = inputField.value;
            inputField.value = '';
            let botResponse = getBotsResponse(getNlpProcessedInput(input));
            addQuestionAndResponse(input, botResponse.text);
        }
    })
})

function addQuestionAndResponse(userInput, botResponse){
    const mainDiv = document.getElementById("chat")

    //Displaying user's response
    mainDiv.appendChild(userMsg(userInput));

    //Displaying bot's answer
    setTimeout(()=>{
        mainDiv.appendChild(botMsg(botResponse));
    }, 700);

}

function userMsg(msg) {
    let aux = document.createElement("div");
    aux.innerHTML = `<span class="msg-user">${msg}</span>`;
    return aux.firstChild;
}

function botMsg(msg) {
    let aux = document.createElement("div");
    aux.innerHTML = `<span class="msg-bot">${msg}</span>`;
    return aux.firstChild;
}