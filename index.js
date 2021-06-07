import {getBotsResponse, initBot} from "./js/bot.js";
import {getNlpProcessedInput} from "./js/src/nlp.js";

initBot();

//Adding a listener on 'enter' pressed
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input-msg")
    document.querySelector("#input-msg").addEventListener("keydown",e => {
        if(e.code === "Enter"){
            let input = inputField.value;
            inputField.value = '';
            console.log(getNlpProcessedInput(input));
            let botResponse = getBotsResponse(getNlpProcessedInput(input));
            addQuestionAndResponse(input, botResponse.text);
        }
    })
})

function addQuestionAndResponse(userInput, botResponse){
    const mainDiv = document.getElementById("chat")

    //Displaying user's response
    let userReply = userMsgElem(userInput)
    mainDiv.appendChild(userReply);
    userReply.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });

    //Displaying bot's answer
    let botReply = botMsgElem(botResponse);
    setTimeout(()=>{
        mainDiv.appendChild(botReply);
        botReply.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
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