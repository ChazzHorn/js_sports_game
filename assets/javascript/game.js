const resetButton = document.querySelector("#reset-button");
const numOfResets = document.querySelector("#num-resets");

// let shotsTaken = document.querySelector("#teamone-numshots")
let teamOneShots = document.querySelector("#teamone-numshots");
let numOfGoals1 = document.querySelector("#teamone-numgoals")
const shoots1 = document.querySelector("#teamone-shoot-button");

let teamTwoShots = document.querySelector("#teamtwo-numshots");
let numOfGoals2 = document.querySelector("#teamtwo-numgoals");
const shoots2 = document.querySelector("#teamtwo-shoot-button");

const swish = document.getElementById('myAudioSwish');
const resetSound = document.getElementById('myAudioReset');
// const muteButton = document.getElementById('mute');
// const backGroundMusic = document.querySelector('#bgdmusic')

let shootsFired = 0
let boom1 = 0
shoots1.addEventListener("click", function(){
    
    shootsFired++
    teamOneShots.innerText = shootsFired
    // console.log(Math.round(Math.random()*1))
     
    if( Math.round(Math.random()*1) === 1){
       boom1++
       numOfGoals1.innerText= boom1;
    }
    swish.play();
})


let shootsFired2 = 0
let boom2 = 0
shoots2.addEventListener("click", function(){
        
    shootsFired2++

    teamTwoShots.innerText = shootsFired2

    if( Math.round(Math.random()*1) === 1){
        boom2++
        numOfGoals2.innerText= boom2;
    }
    swish.play();
})

let resets = 0
resetButton.addEventListener("click", function(){
    if (shootsFired > shootsFired2){
        alert('Team 1 WINS!')
    }else if (shootsFired < shootsFired2){
        alert('Team 2 WINS!')
    };
    resets++
    numOfResets.innerText = resets;
    // teamOneShots.reload();

    teamOneShots.innerText = 0;
    shootsFired = 0
    numOfGoals1.innerText = 0;
    boom1 = 0

    teamTwoShots.innerText = 0;
    shootsFired2 = 0
    numOfGoals2.innerText = 0;
    boom2 = 0

    resetSound.play()

    
    
})
mute.addEventListener('click', function(){
    mute.innerText = "Doesn't work, sorry...🏀 "
})
// // // if (mute == 'click'){
// // //  console.log('root')
// // // }

//I gave up on trying to mute the background. :{