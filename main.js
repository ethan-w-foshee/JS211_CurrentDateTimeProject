// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}


// Write a JavaScript program to convert a number to a string.

const numToString = () => {
  let num = document.getElementById("numberToString").value;
  let text = num.toString();
  console.log(num, text, "test")
  document.getElementById("numTextified").innerHTML = text;
}

// Write a JavaScript program to convert a string to the number.

const stringToNum = () => {
  let text = document.getElementById("stringToNumber").value;
  let num = parseFloat(text);

  console.log(text, num, "test")

  if (isNaN(num)){
    console.log("It no work!")
    document.getElementById("textNumified").innerHTML = "Invalid.";
  }
  else {
    console.log("It work!")
    document.getElementById("textNumified").innerHTML = num;
  }
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

const objectTypeTest = () => {
  let testVar = document.getElementById("objectTest").value
  
  // Number
  if (!isNaN(parseFloat(testVar))) {
    testVar = parseFloat(testVar)
  }
  // Boolean
  else if (testVar.toLowerCase() == "true" || testVar.toLowerCase() == "false") {
    testVar = true
  }
  // Object (?)
  else if (testVar == "") {
    testVar = null
  }
  // String
  else {
    
  }

  switch (typeof testVar) {
    case "string":
      console.log("This is a string");
      document.getElementById("testedObject").innerHTML = "This is a " + typeof testVar;
      break;
    case "number":
      console.log("This is a number");
      document.getElementById("testedObject").innerHTML = "This is a " + typeof testVar;
      break;
    case "boolean":
      console.log("This is a boolean");
      document.getElementById("testedObject").innerHTML = "This is a " + typeof testVar;
      break;
    case "undefined":
      console.log("This is undefined");
      document.getElementById("testedObject").innerHTML = "This is a " + typeof testVar;
      break;
    case "object":
      console.log("This is null");
      document.getElementById("testedObject").innerHTML = "This is a " + typeof testVar;
      break;
  }
}

// Write a JavaScript program that adds 2 numbers together.

const addTwo = () => {
  let num1 = parseFloat(document.getElementById("number1").value)
  let num2 = parseFloat(document.getElementById("number2").value)
  document.getElementById("equalsBox").innerHTML = num1 + num2
}

// Write a JavaScript program that runs only when 2 things are true.

const bothTrue = () => {
  let firstTrue = document.getElementById("doubleT1")
  let secondTrue = document.getElementById("doubleT2")
  if (firstTrue.checked == true && secondTrue.checked == true) {
    console.log("It's TRUE!")
    document.getElementById("bothTrue").innerHTML = "They are both true!"
  }
  else{
    document.getElementById("bothTrue").innerHTML = "One of them is not true!"
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const eitherTrue = () => {
  let firstTrue = document.getElementById("eitherT1")
  let secondTrue = document.getElementById("eitherT2")
  if (firstTrue.checked == true || secondTrue.checked == true) {
    console.log("It's TRUE!")
    document.getElementById("eitherTrue").innerHTML = "At least one of them is true!"
  }
  else{
    document.getElementById("eitherTrue").innerHTML = "Neither of them are true!"
  }
}

// Write a JavaScript program that runs when both things are not true.  

const neitherTrue = () => {
  let firstTrue = document.getElementById("neitherT1")
  let secondTrue = document.getElementById("neitherT2")
  if (firstTrue.checked == false && secondTrue.checked == false) {
    console.log("Neither of them are TRUE!")
    document.getElementById("neitherTrue").innerHTML = "Neither of them are true!"
  }
  else {
    document.getElementById("neitherTrue").innerHTML = "At least one of them is true!"
  }
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
