let userScore =0;
let computerScore =0;

const allone = document.querySelectorAll(".suball");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#us");
const compScorePara = document.querySelector("#cs");


const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "blue";
}

const showwinner = (userwin, userChoice, computerchoice) => {
    if (userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You lost. ${ computerchoice} beats you ${userChoice}`;
        msg.style.backgroundColor = "red";
}
};


const playGame = (userChoice) => {
    console.log("User choice", userChoice);
    const computerchoice = genCompchoice();
console.log("Computer Choice", computerchoice);
                                                //conditional statements
    if (userChoice ===computerchoice){
    //draw game
drawGame();
}
else{
    let userwin = true;
    if (userChoice =="rock"){   //computer choice paper or scissor not rock because rock will draw the match.
    userwin = computerchoice === "paper" ? false : true;
    }
    else if (userChoice =="paper"){
        userwin= computerchoice ==="scissors" ? false :true;
    }
    else{
        userwin = computerchoice === "scissors" ? false : true;
    }
    showwinner(userwin, userChoice, computerchoice);
}

};

// generate computer choice
const genCompchoice =() => {
    const options = [ "rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}


allone.forEach((suball) => {
    console.log(suball);
    suball.addEventListener("click" , () => {       
        const userChoice =suball.getAttribute("id");
     playGame(userChoice)           // call the comp. and userchoice to playgame, 
    
        });
});
