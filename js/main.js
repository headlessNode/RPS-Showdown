// GLOBAL VARIABLES
    var playerSelection = ' ';
    const computerChoices = ['paper', 'rock', 'scissors'];
    var computerSelection = ' ';
    var playerScore = 0;
    var computerScore = 0;
    var round = 0;

// ADD SELECTORS

    var playerChoiceSelector = document.querySelector('.player-choice');
    var computerChoiceSelector = document.querySelector('.computers-choice');

    var choiceText1 = document.querySelector('#choice-txt-1');
    var choiceText2 = document.querySelector('#choice-txt-2');
    var roundSelector = document.querySelector('#round-txt');
    var finalResult = document.querySelector('.result-txt');

    var btns = document.querySelectorAll('button');

// FUNCTION FOR GETTING COMPUTER SELECTION

    function getComputerSelection(computerChoices){
        return computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

// FUNCTION FOR GETTING PLAYER SELECTION

    function choicesEventlistener(){
        for(var i=0;i<btns.length;i++){
            btns[i].addEventListener('click', game);
        }    
    }
    
    choicesEventlistener();

// FUNCTION FOR SHOWING PLAYER SELECTION ON THE MAIN BOARD
    function showPlayerSelection(){
        if(playerSelection == 'paper'){
            playerChoiceSelector.innerHTML = '<i class="fa-solid fa-hand fa-10x fa-flip-horizontal"></i>';
        }
        else if(playerSelection == 'rock'){
            playerChoiceSelector.innerHTML = '<i class="fa-solid fa-hand-rock fa-10x fa-flip-horizontal"></i>';
        }
        if(playerSelection == 'scissors'){
            playerChoiceSelector.innerHTML = '<i class="fa-solid fa-hand-scissors fa-10x fa-rotate-90"></i>';
        }
    }

// FUNCTION FOR SHOWING COMPUTER SELECTION ON THE MAIN BORAD
    function showComputerSelection(){
        if(computerSelection == 'paper'){
            computerChoiceSelector.innerHTML = '<i class="fa-solid fa-hand fa-10x fa-flip-horizontal"></i>';
        }
        else if(computerSelection == 'rock'){
            computerChoiceSelector.innerHTML = '<i class="fa-solid fa-hand-rock fa-10x fa-flip-horizontal"></i>';
        }
        if(computerSelection == 'scissors'){
            computerChoiceSelector.innerHTML = '<i class="fa-solid fa-hand-scissors fa-10x fa-rotate-90"></i>';
        }
    }

// FUNCTION FOR MAIN GAME LOGIC
    function game(e){
        

        playerSelection = e.target.id;
        console.log(playerSelection);
        showPlayerSelection();
        computerSelection = getComputerSelection(computerChoices);
        showComputerSelection();
    
        playRound();
        
        if(round == 5){
            for(var i=0;i<btns.length;i++){
                btns[i].removeEventListener('click', game);
            }
            if(playerScore > computerScore){
                finalResult.classList.add('result-style');
                finalResult.innerHTML = 'You win! <i class="fa-solid fa-face-smile fa-4x"></i>';
            }
            else if(playerScore < computerScore){
                finalResult.classList.add('result-style');
                finalResult.innerHTML = 'You lose! <i class="fa-solid fa-face-frown fa-4x"></i>';
            }
            else{
                finalResult.classList.add('result-style');
                finalResult.innerHTML = 'It\'s a tie!';
            }
            endGame();
        }

    }

// FUNCTION FOR DECIDING WINNER AND UPDATING SCORE ON THE MAIN BOARD

    function playRound(){

        //rock beats scissors//scissors beats paper//paper beats rock
        if(playerSelection == 'rock' && computerSelection == 'scissors' ||
            playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock'){
                   playerScore++;
        }
       
        else if(computerSelection == 'rock' && playerSelection == 'scissors' ||
            computerSelection == 'scissors' && playerSelection == 'paper' || computerSelection == 'paper' && playerSelection == 'rock'){
                   computerScore++;
        }
       
        choiceText1.textContent = 'Player: ' + playerScore;
        choiceText2.textContent = 'Computer: ' + computerScore;
        round++;
        // roundSelector.classList.add('board-txt');
        roundSelector.textContent = 'Round: ' + round;

    }


// FUNCTION FOR RESETTING THE GAME

    function endGame(){
        round = 0;
        playerScore = 0;
        computerScore = 0;
        

        var tryagain = document.querySelector('.try-again');
        var tryagainBtn = document.createElement('BUTTON');
        tryagainBtn.classList.add('try-again-btn');
        tryagainBtn.textContent = 'Play again?';
        tryagain.appendChild(tryagainBtn);

        tryagainBtn.addEventListener('click', () => {
            choiceText1.textContent = 'Player: ' + playerScore;
            choiceText2.textContent = 'Computer: ' + computerScore;
            roundSelector.textContent = 'Round: ' + round;
            tryagainBtn.remove();
            finalResult.innerHTML = '';
            computerChoiceSelector.innerHTML = '';
            playerChoiceSelector.innerHTML = '';
            playerChoiceSelector.innerHTML = '<i class="fa-solid fa-question fa-10x"></i>';
            computerChoiceSelector.innerHTML = '<i class="fa-solid fa-question fa-10x"></i>';

            choicesEventlistener();
        });
    
    
    

    

    return;
            
}

