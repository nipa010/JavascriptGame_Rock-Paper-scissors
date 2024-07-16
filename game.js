let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");


const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText ="Draw game. Play Again";
    msg.style.backgroundColor ="#17153B";
    
}

const showWinner = (userWin,UserChoiceId, comChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you are win!  your ${UserChoiceId} beats ${comChoice}`;
        msg.style.backgroundColor ="green";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`you lose! ${comChoice} beats your ${UserChoiceId}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (UserChoiceId) => {
    console.log("user chocie =", UserChoiceId);
    //generate computer chocie

    const comChoice = genComChoice();
    console.log("computer choice =", comChoice);

    if(UserChoiceId === comChoice){
        //draw game
        drawGame();

    }else{
        let userWin = true;
        if(UserChoiceId === "rock"){
            //scissor or paper
            userWin = comChoice === "paper" ? false : true;

        }else if(UserChoiceId === "paper"){
            // rock or scissor
             userWin = comChoice === "scissor" ? false:true;

        }else if(UserChoiceId === "scissor"){
            //rock or paper
             userWin = comChoice === "rock" ? false:true;
        }
        showWinner(userWin, UserChoiceId, comChoice);
    }

}

choices.forEach((choice) =>{
choice.addEventListener("click", () => {
const UserChoiceId = choice.getAttribute("id");
//console.log("choice was clicked", UserChoiceId);

playGame(UserChoiceId);

})
})