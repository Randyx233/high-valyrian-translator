var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("The server is rate limit. Try again after some time.");
    
}

function btnClick() {
    var inputText = txtInput.value; 

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText
        })
        .catch(errorHandler)
}

//点击按钮把输出文本翻译回输入文本
function reverseTranslate() {
    var inputText = output.value;
    fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json => {
            var translatedText = json.contents.translated
            txtInput.innerText = translatedText
        })
     .catch(errorHandler)
}

btnTranslate.addEventListener("click", btnClick);