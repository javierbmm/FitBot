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
    //import { data } from 'data/data'; ??
    return 'go to the gym, yo';
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