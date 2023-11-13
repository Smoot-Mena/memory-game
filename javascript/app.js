/*******************
 *   Image Links
 ******************/

let images = ["/images/creamcheese.png", "/images/greenbellpepper.png", "/images/jam.png", "/images/ketchup.png", "/images/lettuce.png", "/images/marmalade.png", "/images/mayonnaise.png", "/images/mustard.png", "/images/oliveoil.png", "/images/onion.png", "/images/peanutbutter.png", "/images/pepper.png", "/images/pickle.png", "/images/redbellpepper.png", "/images/redonion.png", "/images/salt.png", "/images/tomato.png", "/images/vinegar.png", "/images/yellowbellpepper.png", "/images/yogurt.png"];

/***********************
 *  Global Variables
 **********************/

/******Booleans******/
let isHidden = false;
let isFlipping = false;
let cardTurnedUp = 0;
let isGameActive = false;
let isDarkModeOn = false;

/***********Elements**********/
let cards = null;
let imgs = null;
let sun = document.querySelector("#sun");
let clouds = document.querySelectorAll(".cloud");
let pageTitle = document.querySelector("#page-title");
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
    gameBoard.innerHTML = "";
    isGameActive = false;
});

/******************
 *    Functions
 *****************/

function createCards(row, column) {
    for (let x = 1; x <= row; x++) {
        for (let y = 1; y <= column; y++) {
            let _card = document.createElement("div");
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
            _card.setAttribute("is-face-up", false);
            _card.appendChild(_image);
            gameBoard.appendChild(_card);

            isGameActive = true;
            cards = document.querySelectorAll(".card");
        }
    }
}

function setImages(row, column) {
    let _cardAmount = row * column;
    let _imagesNeeded = _cardAmount / 2;
    let _imageSpotsUsed = 0;
    let _imageGroup = [];
    let _imageGroup2 = [];
    let _cardImages = document.querySelectorAll("img");


    for (let x = 0; x < _imagesNeeded; x++) {
        _imageGroup.push(images[x]);
        _cardImages[x].src = _imageGroup[x];
        _imageSpotsUsed++;
    }

    for (let x = _imageSpotsUsed; x < _cardAmount; x++) {
        _imageGroup2 = _imageGroup;
        _cardImages[x].src = _imageGroup2[_cardAmount - (x + 1)];
        _imageSpotsUsed++;
    }
    
    if (row == 3 && column == 4) {
        _cardImages.forEach(img => {
            img.style.width = "100px";
            img.classList.add("hidden");
        });
    }

    if (row == 4 && column == 4) {
        _cardImages.forEach(img => {
            img.style.width = "90px";
            img.classList.add("hidden");
        });
    }

    if (row == 4 && column == 5) {
        _cardImages.forEach(img => {
            img.style.width = "80px";
            img.classList.add("hidden");
        });
    }

    if (row == 5 && column == 6) {
        _cardImages.forEach(img => {
            img.style.width = "65px";
            img.classList.add("hidden");
        });
    }

    if (row == 6 && column == 6) {
        _cardImages.forEach(img => {
            img.style.width = "55px";
            img.classList.add("hidden");
        });
    }

    imgs = document.querySelectorAll("img");
}

function cardFlipper () {
    
    cards.forEach(card => card.style.cursor = "pointer");

    cards.forEach(card => {
        card.addEventListener("click", (event) => {

            cardFaceUp();
            cardTurnedUp++;
            console.log(cardTurnedUp);
            if (cardTurnedUp >= 2) {
                setTimeout(cardFaceDown, 1200);
            }

        });
    });
}

function cardFaceUp() {
    if (this.event.target.classList.contains("visible")) {
        this.event.target.classList.remove("visible");
        this.event.target.classList.add("hidden");
        this.event.target.firstChild.classList.remove("hidden");
        this.event.target.firstChild.classList.add("visible");
    }
}

function cardFaceDown() {
    cards.forEach(card => {
        card.classList.remove("hidden");
        card.classList.add("visible");
    });

    imgs.forEach(img => {
        img.classList.remove("visible");
        img.classList.add("hidden");
    });

    cardTurnedUp = 0;
}