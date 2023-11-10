/***********************
 *  Global Variables
 **********************/

/******Booleans******/
let isHidden = false;
let isFaceUp = false;
let isDarkModeOn = false;
let isGameActive = false;

/***********Elements**********/
let cards = document.querySelectorAll("div");
let darkModeButton = document.querySelector("#dark-mode-button");
let sun = document.querySelector("#sun");
let clouds = document.querySelectorAll(".cloud");
let pageTitle = document.querySelector("#page-title");
let threeByFour = document.querySelector("#three-by-four");
let fourByFour = document.querySelector("#four-by-four");
let fourByFive = document.querySelector("#four-by-five");
let fiveBySix = document.querySelector("#five-by-six");
let sixBySix = document.querySelector("#six-by-six");
let gameBoard = document.querySelector("#gameboard-container");
let redButton = document.querySelector("#red");
let greenButton = document.querySelector("#green");
let blueButton = document.querySelector("#blue");
let purpleButton = document.querySelector("#purple");
let defaultButton = document.querySelector("#default");
let resetButton = document.querySelector("#reset-button");
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

function darkMode() {
    document.body.style.backgroundImage = "linear-gradient(rgb(99, 104, 255),rgb(0, 89, 148), rgb(59, 50, 55))";
    darkModeButton.style.backgroundColor = "rgb(238, 238, 238)";
    darkModeButton.style.borderColor = "darkgrey";
    sun.style.backgroundImage = "radial-gradient(rgb(248, 248, 248), rgb(248, 248, 248), darkgrey, darkgrey)";
    pageTitle.style.color = "snow";
    clouds.forEach(cloud => cloud.style.visibility = "hidden");
}

function lightMode() {
    document.body.style.backgroundImage = "linear-gradient(rgb(0, 250, 255), rgb(0, 150, 255), rgb(0, 155, 39), rgb(146, 94, 63))";
    darkModeButton.style.backgroundColor = "yellow";
    darkModeButton.style.borderColor = "goldenrod";
    sun.style.backgroundImage = "radial-gradient(yellow, yellow, yellow, orange, orange)";
    pageTitle.style.color = "rgb(56, 56, 56)";
    clouds.forEach(cloud => cloud.style.visibility = "visible");
    
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
    }
});

// 4 x 4
fourByFour.addEventListener("click", () => {
    if (isGameActive === false) {
        createCards(4, 4);
    }
});

// 4 x 5
fourByFive.addEventListener("click", () => {
    if (isGameActive === false) {
        createCards(4, 5);
    }
});

// 5 x 6
fiveBySix.addEventListener("click", () => {
    if (isGameActive === false) {
        createCards(5, 6);
    }
});

// 6 x 6
sixBySix.addEventListener("click", () => {
    if (isGameActive === false) {
        createCards(6, 6);
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
    gameBoard.innerHTML = "";
    isGameActive = false;
});

/******************
 *    Functions
 *****************/

function createCards(row, column) {
    for (let x = 1; x <= row; x++) {
        for (let y = 1; y <= column; y++) {
            let card = document.createElement("div");
            if (row == 3 && column == 4) {
				card.style.height = "100px";
				card.style.width = "100px";
				card.style.zIndex = "1000";
				card.style.margin = "3vh 1.3vw";
			}
            if (row == 4 && column == 4) {
				card.style.height = "90px";
                card.style.width = "90px";
                card.style.zIndex = "1000";
                card.style.margin = "1.2vh 1.5vw";
			}
            if (row == 4 && column == 5) {
				card.style.height = "80px";
                card.style.width = "80px";
                card.style.zIndex = "1000";
                card.style.margin = "1.1vh 1.8vw";
			}
            if (row == 5 && column == 6) {
				card.style.height = "65px";
                card.style.width = "65px";
                card.style.zIndex = "1000";
                card.style.margin = "1vh 1.4vw";
			}
            if (row == 6 && column == 6) {
				card.style.height = "55px";
                card.style.width = "55px";
                card.style.zIndex = "1000";
                card.style.margin = "1.4vh 1.15vw";
			}
            card.style.backgroundColor = "rgb(56, 56, 56)";
            gameBoard.appendChild(card);
            isGameActive = true;
        }
    }
}