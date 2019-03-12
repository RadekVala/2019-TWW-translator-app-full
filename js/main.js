// select the button using ID
var button = document.querySelector('#translateBtn');
var userInput = document.querySelector('#userInput');

button.onclick = function () {
    console.log(userInput.value);
}