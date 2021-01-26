//Lesson Task 4 Question
/*Using the HTML provided write code that does the following:

when the button is pressed and held down start a counter that increments by 1 every second
When the button is released stop the counter and create an amount of text boxes equal to 
the counter value
when the counter is pressed and held down again set the counter to 0, clear the text inputs 
and repeat the previous step */

const button = document.querySelector("button");
const counterContainer = document.querySelector(".counter");
const inputContainer = document.querySelector(".inputs");

button.addEventListener("mousedown", handleMouseDown);
button.addEventListener("mouseup", handleMouseUp);

let intervalId;
let count;

function handleMouseDown() {
    count = 0;
    this.textContent = "Release to stop counting";
    counterContainer.innerHTML = count;
    inputContainer.innerHTML ="";

    intervalId = setInterval(function () {
        count ++;
        counterContainer.innerHTML = count;
    }, 1000);
}

function handleMouseUp () {
    clearInterval(intervalId);
    this.textContent = "Press and hold to count";

    for(let i = 1; i <= count; i++) {
        inputContainer.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`;
    }
}



