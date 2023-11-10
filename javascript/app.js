/***********************
 *  Global Variables
 **********************/

let isHidden = false;
let isFaceUp = false;
let isDarkModeOn = false;
let isGameActive = false;

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
    document.body.style.backgroundImage = "linear-gradient(rgb(0, 250, 255), rgb(0, 150, 255),rgb(0, 205, 50), rgb(0, 155, 39))";
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

/**********Board Size Functions*********/

// 3 x 4
threeByFour.addEventListener("click", () => {
    if (isGameActive === false) {
        for (let row = 1; row <= 3; row++) {
            for (let column = 1; column <= 4; column++) {
                let card = document.createElement("div");
                card.style.height = "100px";
                card.style.width = "100px";
                card.style.backgroundColor = "darkgrey";
                card.style.zIndex = "1000";
                card.style.margin = "3vh 1.3vw";
                gameBoard.appendChild(card);
                isGameActive = true;
            }
        }
    }
});

// 4 x 4
fourByFour.addEventListener("click", () => {
    if (isGameActive === false) {
        for (let row = 1; row <= 4; row++) {
            for (let column = 1; column <= 4; column++) {
                let card = document.createElement("div");
                card.style.height = "90px";
                card.style.width = "90px";
                card.style.backgroundColor = "darkgrey";
                card.style.zIndex = "1000";
                card.style.margin = "1.2vh 1.5vw";
                gameBoard.appendChild(card);
                isGameActive = true;
            }
        }
    }
});

// 4 x 5
fourByFive.addEventListener("click", () => {
    if (isGameActive === false) {
        for (let row = 1; row <= 4; row++) {
            for (let column = 1; column <= 5; column++) {
                let card = document.createElement("div");
                card.style.height = "80px";
                card.style.width = "80px";
                card.style.backgroundColor = "darkgrey";
                card.style.zIndex = "1000";
                card.style.margin = "1.1vh 1.8vw";
                gameBoard.appendChild(card);
                isGameActive = true;
            }
        }
    }
});

// 5 x 6
fiveBySix.addEventListener("click", () => {
    if (isGameActive === false) {
        for (let row = 1; row <= 5; row++) {
            for (let column = 1; column <= 6; column++) {
                let card = document.createElement("div");
                card.style.height = "65px";
                card.style.width = "65px";
                card.style.backgroundColor = "darkgrey";
                card.style.zIndex = "1000";
                card.style.margin = "1vh 1.4vw";
                gameBoard.appendChild(card);
                isGameActive = true;
            }
        }
    }
});

// 6 x 6
sixBySix.addEventListener("click", () => {
    if (isGameActive === false) {
        for (let row = 1; row <= 6; row++) {
            for (let column = 1; column <= 6; column++) {
                let card = document.createElement("div");
                card.style.height = "55px";
                card.style.width = "55px";
                card.style.backgroundColor = "darkgrey";
                card.style.zIndex = "1000";
                card.style.margin = "1.4vh 1.15vw";
                gameBoard.appendChild(card);
                isGameActive = true;
            }
        }
    }
});

/************************
 *    Game Options
 ***********************/

/*******Reset Game Button*******/

resetButton.addEventListener("click", () => {
    gameBoard.innerHTML = "";
    isGameActive = false;
});