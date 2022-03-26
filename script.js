console.log("hola script");

// HOW TO MANIPULATE THE DOM

// 1. create elements ----------------------------------------------

const coolButton = document.createElement("button");
const niceButton = document.createElement("button");
const sweetButton = document.createElement("button");

//1.1 Add properties to your elements (innerText, classess, etc)

coolButton.innerText = "Cool Button";
niceButton.innerText = "Nice Button";
sweetButton.innerText = "Sweet Button";

// 2. now we need to attach them somewhere in the dom --------------

// step 2.1: get the element you want to use to attach the buttons
// in this case is the body but it can be ANY element

const body = document.querySelector("body");

// step 2.2: get the element you want to use to attach the buttons

body.appendChild(coolButton);
body.appendChild(niceButton);
body.appendChild(sweetButton);

// 3. Add event listeners ------------------------------------------

// version 1 (unnamed callback arrow function).
// Looks like this: () => {}

coolButton.addEventListener("click", () => {
  console.log("Im button 1!");
});

// version 2 (unnamed callback function 2)
// Looks like this: function(){}

niceButton.addEventListener("click", function (event) {
  console.log("Im button 2!", event);
});

// version 3 (named callback function)
// Looks like this: function whatever(){}

function whatever() {
  console.log("whatever!");
}
sweetButton.addEventListener("click", whatever);

// version 4 (named callback arrow function)
// Looks like this: const whatever2 = () => {}

const whatever2 = () => {
  console.log("whatever2!");
};
sweetButton.addEventListener("click", whatever);
