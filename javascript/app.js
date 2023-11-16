/*******************
 *   Image Links
 ******************/

let images = ["./images/chilisauce.png","./images/bread.png","./images/butter.png","./images/bacon.png","./images/creamcheese.png", "./images/greenbellpepper.png", "./images/jam.png", "./images/ketchup.png", "./images/lettuce.png", "./images/marmalade.png", "./images/mayonnaise.png", "./images/mustard.png", "./images/oliveoil.png", "./images/onion.png", "./images/peanutbutter.png", "./images/pepper.png", "./images/pickle.png", "./images/redbellpepper.png", "./images/redonion.png", "./images/salt.png", "./images/tomato.png", "./images/vinegar.png", "./images/yellowbellpepper.png", "./images/yogurt.png"];


/***************
 *    Sounds
 **************/

let buzzer = "./sounds/Buzzer1.ogg";
let win = "./sounds/Refresh.ogg";

/***********************
 *  Global Variables
 **********************/

/******Booleans******/
let isHidden = false;
let isFlipping = false;
let isGameActive = false;
let isVersusComputer = false;
let isDarkModeOn = false;

/******Empty Variables*******/
let savedCards = [];
let cardTurnedUp = 0;
let playerScore = 0;
let computerScore = 0;
let cards = null;
let imgs = null;
let currentGameCardCount = 0;
let computerGameChoice = 0;

/***********Elements**********/

let sun = document.querySelector("#sun");
let sky = document.querySelector("#sky");
let clouds = document.querySelectorAll(".cloud");
let pageTitle = document.querySelector("#page-title");
let viewPlayerScore = document.querySelector("#player-score");
let viewComputerScore = document.querySelector("#computer-score");
let threeByFour = document.querySelector("#three-by-four");
let fourByFour = document.querySelector("#four-by-four");
let fourByFive = document.querySelector("#four-by-five");
let fiveBySix = document.querySelector("#five-by-six");
let sixBySix = document.querySelector("#six-by-six");
let redButton = document.querySelector("#red");
let greenButton = document.querySelector("#green");
let blueButton = document.querySelector("#blue");
let purpleButton = document.querySelector("#purple");
let defaultButton = document.querySelector("#default");
let resetButton = document.querySelector("#reset-button");
let gameBoard = document.querySelector("#gameboard-container");
let darkModeButton = document.querySelector("#dark-mode-button");
let opponent = document.querySelector("#versus-button");
// let saveSettings = localStorage;



/*******************
 *  Dark Mode
 *******************/
darkModeButton.addEventListener("click", () => {
    
    if (isDarkModeOn === false) {
        darkMode();
        isDarkModeOn = !isDarkModeOn;
        document.body.classList.toggle("dark-mode-active");
        isHidden = !isHidden;
        clouds.forEach(cloud => cloud.classList.toggle("hidden"));
    } else {
        lightMode();
        isDarkModeOn = !isDarkModeOn;
        document.body.classList.toggle("dark-mode-active");
        isHidden = !isHidden;
        clouds.forEach(cloud => cloud.classList.toggle("hidden"));
    }
});

/********Handles dark mode********/
function darkMode() {
    document.body.style.backgroundImage = "linear-gradient(rgb(99, 104, 255),rgb(0, 89, 148), rgb(59, 50, 55))";
    darkModeButton.innerText = "Light Mode";
    darkModeButton.style.backgroundColor = "rgb(238, 238, 238)";
    darkModeButton.style.borderColor = "darkgrey";
    sun.style.backgroundImage = "radial-gradient(rgb(248, 248, 248), rgb(248, 248, 248), darkgrey, darkgrey)";
    pageTitle.style.color = "snow";
    clouds.forEach(cloud => cloud.style.visibility = "hidden");
    // createStars();
}

/********Handles light mode********/
function lightMode() {
    document.body.style.backgroundImage = "linear-gradient(rgb(0, 250, 255), rgb(0, 150, 255), rgb(0, 155, 39), rgb(146, 94, 63))";
    darkModeButton.innerText = "Dark Mode";
    darkModeButton.style.backgroundColor = "yellow";
    darkModeButton.style.borderColor = "goldenrod";
    sun.style.backgroundImage = "radial-gradient(yellow, yellow, yellow, orange, orange)";
    pageTitle.style.color = "rgb(56, 56, 56)";
    clouds.forEach(cloud => cloud.style.visibility = "visible");
    removeStars();
}

/*********END OF DARK MODE******* */


/*******************
 *  Game Board
 ******************/

/**********Board Size Event Listeners*********/

// 3 x 4
threeByFour.addEventListener("click", () => {
    if (isGameActive === false) {
        createCards(3, 4);
        setImages(3, 4);
        cardFlipper();
    }
});

// 4 x 4
fourByFour.addEventListener("click", () => {
    if (isGameActive === false) {
        createCards(4, 4);
        setImages(4, 4);
        cardFlipper();
    }
});

// 4 x 5
fourByFive.addEventListener("click", () => {
    if (isGameActive === false) {
        createCards(4, 5);
        setImages(4, 5);
        cardFlipper();
    }
});

// 5 x 6
fiveBySix.addEventListener("click", () => {
    if (isGameActive === false) {
        createCards(5, 6);
        setImages(5, 6);
        cardFlipper();
    }
});

// 6 x 6
sixBySix.addEventListener("click", () => {
    if (isGameActive === false) {
        createCards(6, 6);
        setImages(6, 6);
        cardFlipper();
    }
});


/**********Board Color Event Listeners*********/
redButton.addEventListener("click", () => {
    gameBoard.style.borderColor = "red";
    gameBoard.style.backgroundColor = "rgb(255, 185, 185)";
});

greenButton.addEventListener("click", () => {
    gameBoard.style.borderColor = "green";
    gameBoard.style.backgroundColor = "rgb(178, 252, 159)";
});

blueButton.addEventListener("click", () => {
    gameBoard.style.borderColor = "blue";
    gameBoard.style.backgroundColor = "rgb(159, 215, 252)";
});

purpleButton.addEventListener("click", () => {
    gameBoard.style.borderColor = "purple";
    gameBoard.style.backgroundColor = "rgb(219, 189, 254)";
});

defaultButton.addEventListener("click", () => {
    gameBoard.style.borderColor = "darkgrey";
    gameBoard.style.backgroundColor = "rgb(244, 244, 244)";
});


/************************
 *    Game Options
 ***********************/

/*******Reset Game Button*******/
resetButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset the game?")) {
        resetEverything();
    }
});

/****Versus computer Button****/
opponent.addEventListener("click", () => {
    if (confirm("Start game vs computer?")) {
        vsComputer();
    }
});

/************************
 *  Game  Functions
 ***********************/

/********Creates the stars for Dark Mode********/
function createStars() {
    let _starAmount = Math.floor(Math.random() * (30 - 10) + 10);

    for (let x = 1; x <= _starAmount; x++) {
        let _star = document.createElement("section");

        _star.style.height = "3px";
        _star.style.width = "3px";
        _star.style.borderRadius = "5px";
        _star.style.backgroundColor = "snow";
        _star.style.alignItems = "space-between";
        _star.style.justifyItems = "center";
        _star.style.animation = "breathe 3s infinite, color-change 5s infinite";
        _star.style.margin = "1px 2px";
        _star.classList.add("star");

        sky.appendChild(_star);
    }
}

/*****Removes the stars in Dark Mode*****/
function removeStars() {
    let _stars = document.querySelectorAll(".star");
    for (let star of _stars) {
        sky.removeChild(star);
    }
}

/***********Creates the cards************/
function createCards(row, column) {
    for (let x = 1; x <= row; x++) {
        for (let y = 1; y <= column; y++) {
            let _card = document.createElement("section");
            let _image = document.createElement("img");

            if (row == 3 && column == 4) {
				_card.style.height = "100px";
				_card.style.width = "100px";
				_card.style.zIndex = "1000";
				_card.style.margin = "3vh 1.3vw";
			}
            if (row == 4 && column == 4) {
				_card.style.height = "90px";
                _card.style.width = "90px";
                _card.style.zIndex = "1000";
                _card.style.margin = "1.2vh 1.5vw";
			}
            if (row == 4 && column == 5) {
				_card.style.height = "80px";
                _card.style.width = "80px";
                _card.style.zIndex = "1000";
                _card.style.margin = "1.1vh 1.8vw";
			}
            if (row == 5 && column == 6) {
				_card.style.height = "65px";
                _card.style.width = "65px";
                _card.style.zIndex = "1000";
                _card.style.margin = "1vh 1.4vw";
			}
            if (row == 6 && column == 6) {
				_card.style.height = "55px";
                _card.style.width = "55px";
                _card.style.zIndex = "1000";
                _card.style.margin = "1.4vh 1.15vw";
			}
            _card.style.backgroundColor = "rgb(56, 56, 56)";
            _card.style.backgroundImage = "url('/images/card-back-alt.jpg')";
            _card.style.backgroundSize = "cover";
            _card.style.backgroundPositionY = "bottom -15px";
            _card.classList.add("card", "visible");
            _card.appendChild(_image);
            gameBoard.appendChild(_card);

            isGameActive = true;
            cards = document.querySelectorAll(".card");
        }
    }
    currentGameCardCount = cards.length;
}

/**********Creates the images************/
function setImages(row, column) {
    let _cardAmount = row * column;
    let _imagesNeeded = _cardAmount / 2;
    let _imageSpotsUsed = 0;
    let _imageGroup = [];
    let _imageGroup2 = [];
    let _cardImages = document.querySelectorAll("img");

/*****Grabs the amount of images needed for the puzzle size*****/
    for (let x = 0; x < _imagesNeeded; x++) {
        _imageCopy = images.slice(0);
        shuffleImages(_imageCopy);
        _imageGroup.push(_imageCopy[x]);
        _cardImages[x].src = _imageGroup[x];
        _imageSpotsUsed++;
    }

    shuffleImages(_imageGroup);

    for (let x = _imageSpotsUsed; x < _cardAmount; x++) {
        _imageGroup2 = _imageGroup;
        _cardImages[x].src = _imageGroup2[_cardAmount - (x + 1)];
        _imageSpotsUsed++;
    }
    
    if (row == 3 && column == 4) {
        _cardImages.forEach(img => {
            img.style.width = "100px";
            img.classList.add("card-image", "hidden");
        });
    }

    if (row == 4 && column == 4) {
        _cardImages.forEach(img => {
            img.style.width = "90px";
            img.classList.add("card-image", "hidden");
        });
    }

    if (row == 4 && column == 5) {
        _cardImages.forEach(img => {
            img.style.width = "80px";
            img.classList.add("card-image", "hidden");
        });
    }

    if (row == 5 && column == 6) {
        _cardImages.forEach(img => {
            img.style.width = "65px";
            img.classList.add("card-image", "hidden");
        });
    }

    if (row == 6 && column == 6) {
        _cardImages.forEach(img => {
            img.style.width = "55px";
            img.classList.add("card-image", "hidden");
        });
    }

    imgs = document.querySelectorAll(".card-image");
}

/*********Manages the card flips**********/
function cardFlipper () {
    cards.forEach(card => card.style.cursor = "pointer");

    cards.forEach(card => {
        card.addEventListener("click", (event) => {

            cardFaceUp();
            cardTurnedUp++;
            if (cardTurnedUp === 2) {
                setTimeout(cardFaceDown, 850);
            } 
        });
    });
}

/********Handles the card flipping face up********/
function cardFaceUp() {
    if (this.event.target.classList.contains("visible")) {
        this.event.target.classList.remove("visible");
        this.event.target.classList.add("hidden");
        this.event.target.firstChild.classList.remove("hidden");
        this.event.target.firstChild.classList.add("visible");
        let _parent = this.event.target;
        let _firstChildCopy = this.event.target.firstChild;
        savedCards.push(_parent, _firstChildCopy);
    }
}

/******Handles the card flipping face down*******/
function cardFaceDown() {
    // let _audio  = document.createElement("audio");
    //     _audio.src = buzzer;
    //     document.querySelector("nav").appendChild(_audio);
    //     _audio.volume = .45;
    //     _audio.load();
    //     _audio.play();

    if (savedCards[1].src === savedCards[3].src) {
        savedCards.forEach(card => {
            card.classList.remove("card", "card-image")
        });
        keepPlayerScore(); 
    } else {
        cards.forEach(card => {
            card.classList.remove("hidden");
            card.classList.add("visible");
        });
    
        imgs.forEach(img => {
            img.classList.remove("visible");
            img.classList.add("hidden");
        });
    }

    savedCards = [];
    cardTurnedUp = 0;
    cards = document.querySelectorAll(".card");
    imgs = document.querySelectorAll(".card-image");
}

/*******Randomizes the images array********/
// (Fisher-Yates ish shuffle)
function shuffleImages(array) {
    for (let x = 0; x < array.length; x++) {
        let randomIndex = Math.floor(Math.random() * (x));

        [array[x], array[randomIndex]] = [array[randomIndex], array[x]];
    }
}

/****Sets up game versus computer****/
function vsComputer() {
    if (isGameActive === false) {
        let _randomGameChoice = Math.floor(Math.random() * 5);
        setupScoreboard();
        if (_randomGameChoice === 1) {
            createCards(3, 4);
            setImages(3, 4);
            cardFlipper();
        } else if (_randomGameChoice === 2) {
            createCards(4, 4);
            setImages(4, 4);
            cardFlipper();
        } else if (_randomGameChoice === 3) {
            createCards(4, 5);
            setImages(4, 5);
            cardFlipper();
        } else if (_randomGameChoice === 4) {
            createCards(5, 6);
            setImages(5, 6);
            cardFlipper();
        } else if (_randomGameChoice === 5) {
            createCards(6, 6);
            setImages(6, 6);
            cardFlipper();
        }
        isVersusComputer = true;
        computerGameChoice = _randomGameChoice;
        computerTurn();
    }
}

/****Handles the computer's turn****/
function computerTurn() {
    let _randomNumberGenerator = null;

    if (computerGameChoice === 1) {
        _randomNumberGenerator = Math.floor(Math.random() * 12);
    } else if (computerGameChoice === 2) {
        _randomNumberGenerator = Math.floor(Math.random() * 16);
    } else if (computerGameChoice === 3) {
        _randomNumberGenerator = Math.floor(Math.random() * 20);
    } else if (computerGameChoice === 4) {
        _randomNumberGenerator = Math.floor(Math.random() * 30);
    } else if (computerGameChoice === 6) {
        _randomNumberGenerator = Math.floor(Math.random() * 36);
    }

    //push all available spots into an array, randomize the array, then have
    //computer choose spots depending on the array. Spots disappear
    //based on which cards are available/used.

}

/*****Sets up scoreboard for versus computer game*****/
function setupScoreboard() {
    viewPlayerScore.innerHTML = `<h3>You</h3>${playerScore}`;
    viewComputerScore.innerHTML = `<h3>AI</h3>${computerScore}`;
}

/**************************
 *  Clear GameBoard
 *************************/

/***Clears the game board and renders the game inactive***/
function clearGameBoard() {
    gameBoard.innerHTML = ``;
    isGameActive = false;
}

/*******Resets Everything********/
function resetEverything() {
    clearGameBoard();
    clearScores();
}


/**********************
 *  Keeping Scores
 *********************/

/*****Keeps player score*****/
function keepPlayerScore() {
    playerScore++;
    viewPlayerScore.innerHTML = `<h3>You</h3>${playerScore}`;
    if (playerScore >= currentGameCardCount / 2) {
        // let _audio  = document.createElement("audio");
        // _audio.src = win;
        // document.querySelector("nav").appendChild(_audio);
        // _audio.volume = .55;
        // _audio.load();
        // _audio.play();
        alert("CONGRATULATIONS! You Win!");
        resetEverything();
    }
}

/*****Keeps computer score*****/
function keepComputerScore() {
    computerScore++;
    viewComputerScore.innerHTML = `<h3>AI</h3>${computerScore}`;
    if (computerScore >= currentGameCardCount / 2) {
        alert("Sorry, You Lose!");
        resetEverything();
    }
}

/*****Clears all scores when game is reset*****/
function clearScores() {
    playerScore = 0;
    computerScore = 0;
    viewPlayerScore.innerHTML = ``;
    viewComputerScore.innerHTML = ``;
}

/*****************END OF FILE!!!******************/