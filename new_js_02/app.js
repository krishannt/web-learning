let cardsArray = [
    {
        'name': 'CSS',
        'img': 'https://e7.pngegg.com/pngimages/686/669/png-clipart-blue-and-white-logo-web-development-responsive-web-design-cascading-style-sheets-html-css-blue-angle-thumbnail.png',
    },
    {
        'name': 'HTML',
        'img': 'https://e7.pngegg.com/pngimages/913/851/png-clipart-responsive-web-design-html-world-wide-web-consortium-world-wide-web-angle-text-thumbnail.png',
    },
    {
        'name': 'jQuery',
        'img': 'https://w7.pngwing.com/pngs/720/46/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png',
    },
    {
        'name': 'JS',
        'img': 'https://e7.pngegg.com/pngimages/4/186/png-clipart-javascript-node-js-logo-computer-programming-programmer-others-miscellaneous-angle-thumbnail.png',
    },
    {
        'name': 'Node',
        'img': 'https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text.png',
    },
    {
        'name': 'Python',
        'img': 'https://banner2.cleanpng.com/20180402/ioq/kisspng-python-logo-clojure-javascript-9-5ac25c2686ca38.9179638515226870145521.jpg',
    }
];


const parentDiv = document.querySelector('#card-section')

const gamecard = cardsArray.concat(cardsArray)

let SuffledChild = Array.from(gamecard).sort(() => 0.5 - Math.random())

function checkGameCompletion() {
    const matchedCards = document.querySelectorAll('.card_match');
    if (matchedCards.length === SuffledChild.length) {
        setTimeout(() => {
            resetGame();
            SuffledChild = Array.from(gamecard).sort(() => 0.5 - Math.random()); // Shuffle cards again
            displayCards(); // Re-render the cards with the shuffled order
        }, 1500); // Delay restart for 1.5 seconds for visual feedback
    }
}

function displayCards() {
    parentDiv.innerHTML = ''; // Clear the parent container
    for (let i = 0; i < SuffledChild.length; i++) {
        const childDiv = document.createElement('div');
        childDiv.classList.add('card');
        childDiv.dataset.name = SuffledChild[i].name;

        const frontDiv = document.createElement('div');
        frontDiv.classList.add('front-card'); 

        const backDiv = document.createElement('div');
        backDiv.classList.add('back-card');
        backDiv.style.backgroundImage = `url(${SuffledChild[i].img})`; 

        parentDiv.appendChild(childDiv);
        childDiv.appendChild(frontDiv);
        childDiv.appendChild(backDiv);
    }
}

let firstCard = "";
let secoCard = "";
let clickCount = 0;

const card_match = () => {
    let card_selected = document.querySelectorAll('.card_selected')

    card_selected.forEach((currele) => {
        currele.classList.add("card_match")
    })
    checkGameCompletion();
}

const resetGame = () => {
    clickCount = 0;
    secoCard = ""
    firstCard = ""

    let card_selected = document.querySelectorAll('.card_selected')

    card_selected.forEach((currele) => {
        currele.classList.remove("card_selected")
    })
}

parentDiv.addEventListener('click', (event) => {
    let curCard = event.target

    if (curCard.id === "card-section") return false
    clickCount++

    if (clickCount < 3) {
        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name
            curCard.parentNode.classList.add('card_selected')
        } else {
            secoCard = curCard.parentNode.dataset.name
            curCard.parentNode.classList.add('card_selected')
        }
        if (firstCard !== "" && secoCard !== "") {

            if (firstCard === secoCard) {
                setTimeout(() => {
                    card_match()
                    resetGame()
                }, 1000)

            } else {
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }
    }

})

displayCards();
