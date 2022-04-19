var inputUI = document.querySelector('#game-input');

var submitUI = document.querySelector('#game-submit');

var resultUI = document.querySelector('#game-result');
var resultUI2 = document.querySelector('#game-result2');

var playagainUI = document.querySelector('#replaybtn');

var min = 1;
var max = 10;
var randomNo = Math.floor(Math.random() * (max-min + 1)) + min;
var guessesLeft = 3;

main();

function main(){



    

    console.log('Random number is : ' + randomNo)

    submitUI.addEventListener('click', test);

    playagainUI.addEventListener('click', resetGame)
}


function test(e){

    console.log(inputUI.value);

    // inputUI.value = '';

    if (inputUI.value >= min && inputUI.value <= max && inputUI.value != ''){
            console.log("Input Valid");
            message('Processing','','white');
            setTimeout(guess, 1000);
            
            
            // guess();
    }
    else{
        alert('Enter a Number between 1-10');
    }

    e.preventDefault();
}

function guess(){

    if(inputUI.value == randomNo){
        console.log('You win the game. the correct no. was ' + randomNo);
        // resultUI.innerHTML = 'You win';
        message('Congratulations you Won...!', 'The correct no. was  ' + randomNo, '#00cc00');

        inputUI.disabled = true;
        inputUI.style.borderColor = 'green';
        submitUI.disabled = true;

        playagainUI.style.borderColor = 'red';
        playagainUI.style.visibility = 'visible';


    }
    else{
        guessesLeft -= 1;
        message('Wrong Guess...!' ,'No.of Guesses remaining: ' + guessesLeft, '#800000');
        // message('No.of Guesses remaining: ' + guessesLeft);

        inputUI.style.borderColor = 'red';
        inputUI.value = '';

        if (guessesLeft == 0){
            console.log('Game Over');
            message('GAME OVER....','The Correct No, was.' + randomNo,'#ffcc00');
            inputUI.disabled = true;
            submitUI.disabled = true;

            //enabling Play Again button
            console.log(playagainUI);
            // playagainUI.style.display = '';
            playagainUI.style.borderColor = 'red';
            playagainUI.style.visibility = 'visible';
            
            // console.log(playagainUI);
        }
    }

}

function resetGame(){

    randomNo = Math.floor(Math.random() * (max-min + 1)) + min;
    console.log('New Random No.' + randomNo);
    submitUI.disabled = false;
    inputUI.disabled = false;

    inputUI.value = '';
    guessesLeft = 3

    message('','','');

    playagainUI.style.visibility = 'hidden';
}

function message(msg,msg2,color){
    resultUI.innerHTML = msg;
    resultUI.style.color = color;
    

    resultUI2.innerHTML = msg2;
    resultUI2.style.color = color;
}
