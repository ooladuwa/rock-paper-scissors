
// create element
// create text content
// add class
// grab parent(.app) and append

const headline = document.createElement("h1");
headline.textContent = "Human vs. CPU";
headline.classList.add("headline");
console.log(headline);
const container = document.querySelector(".app").append(headline);

const byline = document.createElement("h6")
byline.textContent = "It's time to choose!"
byline.classList.add("byline")
const bylineContainer = document.querySelector(".headline").append(byline)


// on click the game function should run
// user(rock,paper,scissor) input depending upon the button click
// cpu input depending upon the definition of the cpu variable

function rockIt() {
  console.log("Rocked it!")
}
function cutIt() {
  console.log("Ouch!");
}
function coverIt() {
  console.log("Yo!");
}

// create element
// create text content
// add class
// add event listener - click event
// grab parent(.app) and append

let rockButton = document.createElement("button");
console.log(rockButton);
rockButton.className = "rock";
rockButton.innerHTML = "Rock";
rockButton.addEventListener("click", rockIt);
const rock = document.body.appendChild(rockButton);

let paperButton = document.createElement("button");
console.log(paperButton);
paperButton.className = "paper";
paperButton.innerHTML = "Paper";
paperButton.addEventListener("click", coverIt);
document.body.appendChild(paperButton);

let scissorsButton = document.createElement("button");
console.log(scissorsButton);
scissorsButton.className = "scissors";
scissorsButton.innerHTML = "Scissors";
scissorsButton.addEventListener("click", cutIt);
document.body.appendChild(scissorsButton)


// declare a cpu variable
// make choices(rock, scissors, paper) based on random number
// 1=rock 2=scissor 3=paper

//create game function with two parameters(cpu, user)
// define tie conditions
// define user win conditions
// define all other conditions as user lose

// test along the way with console.log()
let random = Math.floor(Math.random() * 3);


// setTimeout(() => {
  //   let sign = prompt("What's your weapon?");
  //     if (sign.toLowerCase() === /rock/i) {
    //       user = "rock"
    //   } if (sign.toLowerCase() === /scissors/i) {
      //     user = "scissors"
      //   } if (sign.toLowerCase() === /paper/i) {
        //   user = "paper"
        //   } 
        // }, 1000);
        
        function playRound(user, cpu) {
          cpu = random;
          switch (random) {
            case 0:
              cpu = "rock";
              break;
            case 1:
              cpu = "scissors";
              break;
            case 2:
              cpu = "paper";
              break;}
          
  if (user === cpu) {
    return "That's a tie! Try again.";
  }
  else if (user === "rock" && cpu === "scissors") {
    console.log("Excellent. You win!");
  }
  else if (user === "scissors" && cpu === "paper") {
    console.log("Convincing. You prevail!");
  }
  else if (user === "paper" && cpu === "rock") {
    console.log ("Most Fierce. You triumph!");
  } else {
    console.log("My kung-fu is stronger than yours. You lose!");
  }
}
console.log(playRound(user, cpu));






function game(rounds) {
  rounds.forEach(round)  
    return
  }