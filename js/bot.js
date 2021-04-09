import {data} from "../data/data.js";

let importData = document.createElement('script');
importData.src = '../data/data.js';
document.head.appendChild(importData);

export function getBotsResponse(nlpUserInput){
    //Perform logic to find a correct response
    return data.response[0];
}