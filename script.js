// aliens array
let aliens = []

// attack button

let attackButton = document.getElementById("attackButton");

// play again

let playButton = document.getElementById("playAgain");

playButton.addEventListener("click", function() {
  location.reload();
});

// retreat button

let retreatButton = document.getElementById("retreatButton");

retreatButton.addEventListener("click", function() {
    alert('What a shame!')
  location.reload();
});


// moving left and right

let movingButtonLeft = document.getElementById("moveleftbutton");
let movingButtonRight = document.getElementById("moverightbutton");

function moveLeft() {
    let shipBox = document.getElementById("ship")
    let leftValue = window.getComputedStyle(shipBox).getPropertyValue("left");
    let leftNumber = parseInt(leftValue);
    if (leftNumber > 0) {    
        let newPosition = leftNumber -= 100
        return shipBox.style.left = `${newPosition}px`;}
  }
  
function moveRight() {
    let shipBox = document.getElementById("ship")
    let leftValue = window.getComputedStyle(shipBox).getPropertyValue("left");
    let leftNumber = parseInt(leftValue);
    if(leftNumber < 500) {    
        let newPosition = leftNumber += 100
        return shipBox.style.left = `${newPosition}px`;}

  }

  movingButtonRight.addEventListener('click', moveRight);
  movingButtonLeft.addEventListener('click', moveLeft);

// postion determination

let shipBox = document.getElementById("ship")
function Position() {
    let yourPositionValue = window.getComputedStyle(shipBox).getPropertyValue("left");
    let yourPosition = parseInt(yourPositionValue);
    let fightingAlien = 0
    if (yourPosition === 0) {
        fightingAlien = 0
    }
    else if (yourPosition === 100) {
        fightingAlien = 1
    }
    else if (yourPosition === 200) {
        fightingAlien = 2
    }
    else if (yourPosition === 300) {
        fightingAlien = 3
    }
    else if (yourPosition === 400) {
        fightingAlien = 4
    }
    else {
        fightingAlien = 5
    }
    return fightingAlien
}


// aliens characteristics

  let alienOneLife = Math.floor(Math.random() * 4) + 3;
  let alienTwoLife = Math.floor(Math.random() * 4) + 3;
  let alienThreeLife = Math.floor(Math.random() * 4) + 3;
  let alienFourLife = Math.floor(Math.random() * 4) + 3;
  let alienFiveLife = Math.floor(Math.random() * 4) + 3;
  let alienSixLife = Math.floor(Math.random() * 4) + 3;

  let alienOneLifeField = document.getElementById('alien1-life')
  let alienTwoLifeField = document.getElementById('alien2-life')
  let alienThreeLifeField = document.getElementById('alien3-life')
  let alienFourLifeField = document.getElementById('alien4-life')
  let alienFiveLifeField = document.getElementById('alien5-life')
  let alienSixLifeField = document.getElementById('alien6-life')

  alienOneLifeField.innerText = Math.floor(alienOneLife)
  alienTwoLifeField.innerText = Math.floor(alienTwoLife)
  alienThreeLifeField.innerText = Math.floor(alienThreeLife)
  alienFourLifeField.innerText = Math.floor(alienFourLife)
  alienFiveLifeField.innerText = Math.floor(alienFiveLife)
  alienSixLifeField.innerText = Math.floor(alienSixLife)


  let alienOneAcc = Math.random() * (0.8 - 0.6) + 0.6;
  let alienTwoAcc= Math.random() * (0.8 - 0.6) + 0.6;
  let alienThreeAcc = Math.random() * (0.8 - 0.6) + 0.6;
  let alienFourAcc = Math.random() * (0.8 - 0.6) + 0.6;
  let alienFiveAcc = Math.random() * (0.8 - 0.6) + 0.6;
  let alienSixAcc = Math.random() * (0.8 - 0.6) + 0.6;

  let alienOneAccField = document.getElementById('alien1-acc')
  let alienTwoAccField = document.getElementById('alien2-acc')
  let alienThreeAccField = document.getElementById('alien3-acc')
  let alienFourAccField = document.getElementById('alien4-acc')
  let alienFiveAccField = document.getElementById('alien5-acc')
  let alienSixAccField = document.getElementById('alien6-acc')

  alienOneAccField.innerText = alienOneAcc.toFixed(2)
  alienTwoAccField.innerText = alienTwoAcc.toFixed(2)
  alienThreeAccField.innerText = alienThreeAcc.toFixed(2)
  alienFourAccField.innerText = alienFourAcc.toFixed(2)
  alienFiveAccField.innerText = alienFiveAcc.toFixed(2)
  alienSixAccField.innerText = alienSixAcc.toFixed(2)

  let alienOnePower = Math.floor(Math.random() * (4 - 2) + 2);
  let alienTwoPower = Math.floor(Math.random() * (4 - 2) + 2);
  let alienThreePower = Math.floor(Math.random() * (4 - 2) + 2);
  let alienFourPower = Math.floor(Math.random() * (4 - 2) + 2);
  let alienFivePower = Math.floor(Math.random() * (4 - 2) + 2);
  let alienSixPower= Math.floor(Math.random() * (4 - 2) + 2);

  let alienOnePowerField = document.getElementById('alien1-power')
  let alienTwoPowerField = document.getElementById('alien2-power')
  let alienThreePowerField = document.getElementById('alien3-power')
  let alienFourPowerField = document.getElementById('alien4-power')
  let alienFivePowerField = document.getElementById('alien5-power')
  let alienSixPowerField = document.getElementById('alien6-power')

  alienOnePowerField.innerText = alienOnePower
  alienTwoPowerField.innerText = alienTwoPower
  alienThreePowerField.innerText = alienThreePower
  alienFourPowerField.innerText = alienFourPower
  alienFivePowerField.innerText = alienFivePower
  alienSixPowerField.innerText = alienSixPower

// Alien class

  class Alien {
    constructor(life, accuracy, power, name) {
        this.life = life;
        this.accuracy = accuracy;
        this.power = power;
        this.name = name;
        this.alive = true
        this.abiliity = true
    }
    attack() {
        if (Math.random() < this.accuracy && this.abiliity === true) {
            myShip.life = Math.floor(myShip.life -= (this.power))
            this.abiliity = false
        }

    }
    getHit() {
        let alien = document.getElementById(this.name)
        this.life -= 5
        if (this.life > 0) { 
            alien.innerText = this.life }
        else {
            alien.innerText = 0
        }
 

    }

       
    killed() {
        if (this.alive = false) 
        this.killed.style.visibility = "hidden";
    }
  }


// Alien 1
let Alien_01 = new Alien(alienOneLife, alienOneAcc, alienOnePower, 'alien1-life')
aliens.push(Alien_01)
// Alien 2
let Alien_02 = new Alien(alienTwoLife, alienTwoAcc, alienTwoPower, 'alien2-life')
aliens.push(Alien_02)
// Alien 3
let Alien_03 = new Alien(alienThreeLife, alienThreeAcc, alienThreePower, 'alien3-life')
aliens.push(Alien_03)
// Alien 4
let Alien_04 = new Alien(alienFourLife, alienFourAcc, alienFourPower, 'alien4-life')
aliens.push(Alien_04)
// Alien 5
let Alien_05 = new Alien(alienFiveLife, alienFiveAcc, alienFivePower, 'alien5-life')
aliens.push(Alien_05)
// Alien 6
let Alien_06 = new Alien(alienSixLife, alienSixAcc, alienSixPower, 'alien6-life')
aliens.push(Alien_06)


// Ship class

  class Ship {
    constructor() {
        this.life = 20;
        this.accuracy = 0.7;
        this.power = 5;
        this.alive = true
    }

    attack() {
        if (Math.random() < this.accuracy) {
            return true;
        }
        else { return false}

    }
    getHit() {
        if (this.life <= 0) {
            alienOneLifeField.innerText = '0'
            this.alive = false
            this.killed()
        }
        else {
            alienOneLifeField.innerText = 0
        }
    }
       
    killed() {
        if (this.alive = false) 
        alienOneLifeField.style.visibility = "hidden";
    }
  }

  // ship
 let myShip = new Ship()
  //

  // attack function
  function mainAttack() {
    let buttlePosition = Position()
    let alienYouFight = aliens[buttlePosition]
    let gotAlien = false
    let message = ''
    if (Math.random() < myShip.accuracy) {
        alienYouFight.getHit()
        message = 'You hit!'
        gotAlien = true

    }
    else {
        gotAlien = false
        message = 'Missed'
        
    }
    alienYouFight.attack()
    return message

  }
 

  attackButton.addEventListener('click', function(evt) {
    // mainAttack()
    
    let console1 = document.getElementById('console')
    console1.innerText = mainAttack()
    let lifeCounter = document.getElementById('yourLife')
    lifeCounter.innerText = myShip.life
    console.log(myShip.life)
    if (  alienOneLifeField.innerText === '0' &&
    alienTwoLifeField.innerText === '0' &&
    alienThreeLifeField.innerText === '0' &&
    alienFourLifeField.innerText === '0' &&
    alienFiveLifeField.innerText === '0' &&
    alienSixLifeField.innerText === '0' &&
    lifeCounter.innerText !== '0') {
        alert('You win!')
        location.reload();

    };
    if (lifeCounter.innerText === '0') {
        alert('Defeated')
        location.reload();
    };

    if ( alienOneLifeField.innerText === '0') {
        document.getElementById('alien-11').style.visibility = 'hidden'
        document.getElementById('afire01').style.visibility = 'hidden'
        document.getElementById('afire01-1').style.visibility = 'hidden'
    }
    if ( alienTwoLifeField.innerText === '0') {
        document.getElementById('alien-22').style.visibility = 'hidden'
        document.getElementById('afire02').style.visibility = 'hidden'
        document.getElementById('afire02-1').style.visibility = 'hidden'

    }
    if ( alienThreeLifeField.innerText === '0') {
        document.getElementById('alien-33').style.visibility = 'hidden'
        document.getElementById('afire03').style.visibility = 'hidden'
        document.getElementById('afire03-1').style.visibility = 'hidden'
    }
    if ( alienFourLifeField.innerText === '0') {
        document.getElementById('alien-44').style.visibility = 'hidden'
        document.getElementById('afire04').style.visibility = 'hidden'
        document.getElementById('afire04-1').style.visibility = 'hidden'
    }
    if ( alienFiveLifeField.innerText === '0') {
        document.getElementById('alien-55').style.visibility = 'hidden'
        document.getElementById('afire05').style.visibility = 'hidden'
        document.getElementById('afire05-1').style.visibility = 'hidden'
    }
    if ( alienSixLifeField.innerText === '0') {
        document.getElementById('alien-66').style.visibility = 'hidden'
        document.getElementById('afire06').style.visibility = 'hidden'
        document.getElementById('afire06-1').style.visibility = 'hidden'
    }


    if (Position() === 0 ) {
        let fireBlast = document.getElementById("fire1");
        function blink() {
            fireBlast.style.visibility = (fireBlast.style.visibility === "visible") ? "hidden" : "visible";
        }
        let interval = setInterval(blink, 100, 500);
        setTimeout(function() {
            clearInterval(interval);
          }, 1000);
    }
    
    if (Position() === 1 ) {
        let fireBlast = document.getElementById("fire2");
        function blink() {
            fireBlast.style.visibility = (fireBlast.style.visibility === "visible") ? "hidden" : "visible";
        }
        let interval = setInterval(blink, 100, 500);
        setTimeout(function() {
            clearInterval(interval);
          }, 1000);
    }
    
    
    if (Position() === 2 ) {
        let fireBlast = document.getElementById("fire3");
        function blink() {
            fireBlast.style.visibility = (fireBlast.style.visibility === "visible") ? "hidden" : "visible";
        }
        let interval = setInterval(blink, 100, 500);
        setTimeout(function() {
            clearInterval(interval);
          }, 1000);
    }
    
    if (Position() === 3 ) {
        let fireBlast = document.getElementById("fire4");
        function blink() {
            fireBlast.style.visibility = (fireBlast.style.visibility === "visible") ? "hidden" : "visible";
        }
        let interval = setInterval(blink, 100, 500);
        setTimeout(function() {
            clearInterval(interval);
          }, 1000);
    }
    
    if (Position() === 4 ) {
        let fireBlast = document.getElementById("fire5");
        function blink() {
            fireBlast.style.visibility = (fireBlast.style.visibility === "visible") ? "hidden" : "visible";
        }
        let interval = setInterval(blink, 100, 500);
        setTimeout(function() {
            clearInterval(interval);
          }, 1000);
    }
    
    if (Position() === 5 ) {
        let fireBlast = document.getElementById("fire6");
        function blink() {
            fireBlast.style.visibility = (fireBlast.style.visibility === "visible") ? "hidden" : "visible";
        }
        let interval = setInterval(blink, 100, 500);
        setTimeout(function() {
            clearInterval(interval);
          }, 1000);
    }
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.volume = 0.2;
    clickSound.play();

  });



