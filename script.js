'use strict';

const LANGUAGES = ["cs","de","en","es","eu","fr","gl","hu","it","lt","pl","sv"]
const LANG_CODES = {
    "cs": "Czech",
    "de": "German",
    "en": "English",
    "es": "Spanish",
    "eu": "Basque",
    "fr": "French",
    "gl": "Galician",
    "hu": "Hungarian",
    "it": "Italian",
    "lt": "Lithuanian",
    "pl": "Polish",
    "sv": "Swedish",
}
const CATEGORIES = ["neutral","chuck","all"]
const NUMBERS = [1,2,3,4,5,6,7,8,9,"all"]
//let BASE_URL = "https://kurtlebakken.pythonanywhere.com/api/v1/jokes/"
let BASE_URL = "http://127.0.0.1:5000/api/v1/jokes/";



window.onload = function () {
    populateSelect("#selLang", LANGUAGES);
    populateSelect("#selCat", CATEGORIES);
    populateSelect("#selNum", NUMBERS);
}


function populateSelect(selectElementId, options) {
    let selectElement = document.querySelector(selectElementId);
    for (let opt of options) {
        let optElem = document.createElement("option");
        optElem.setAttribute("value", opt);
        optElem.innerHTML = opt;
        selectElement.appendChild(optElem);
    }
}
async function getJson(url){
    let data = await fetch(url, {
        method: "GET",
        mode: "cors"})
    .then(response => response.json())
    .catch(error => console.error(error));
        
}
async function getJokes(){
    console.log("begin fetch fn")
    
    let input = [
        document.querySelector("#selLang").value ,
        document.querySelector("#selCat").value , 
        document.querySelector("#selNum").value , 
        document.querySelector("#selId").value
    ]

    let url = `${BASE_URL}/${input[0]}/${input[1]}/${input[2]}`;
    let data = await(getJson(url));
    for (joke of data["jokes"]){
        let article = document.createElement("article");
        article.setAttribute("id","joke")
        article.innerHTML = joke; 
        table.appendChild(article);
    }
    //console.log(data);

    /*
    fetch(url).then((response) => {
        if(!response.ok){
            //console.log(response.status);
            throw new Error("API error");
        }
        return response.json()
    })
    .then( (json) => {
        let table = doucment.querySelector("#jokes");
        for (joke of json["jokes"]){
            let article = document.createElement("article");
            article.setAttribute("id","joke")
            article.innerHTML = joke; 
            table.appendChild(article)
        }
        

    })
        */

}