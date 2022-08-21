var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var URL = "https://api.funtranslations.com/translate/valyrian.json";

function translateURL(text) {
  return URL + "?" + "text=" + text;
}

try {
  function clickHandler() {
    var inputText = txtInput.value;

    fetch(translateURL(inputText))
      .then((response) => response.json())
      .then((json) => (outputDiv.innerHTML = json.contents.translated));
  }
} catch (err) {
  console.log("error occured");
}

btnTranslate.addEventListener("click", clickHandler);
