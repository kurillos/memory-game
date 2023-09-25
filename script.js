
/* Tableau d'URL des cartes */

const cards = [

    'https://picsum.photos/id/237/100/100', 

    'https://picsum.photos/id/238/100/100',

    'https://picsum.photos/id/239/100/100',

    'https://picsum.photos/id/240/100/100',

    'https://picsum.photos/id/241/100/100',

    'https://picsum.photos/id/242/100/100',

    'https://picsum.photos/id/243/100/100',

    'https://picsum.photos/id/244/100/100'

  ];

const gameBoard = document.getElementById('game-board');

/* Fonction de création de carte dans la Div game-board */

function createCard(CardUrl) {

    const card = document.createElement('div');

    card.classList.add('card');

    card.dataset.value = CardUrl;

  

    const cardContent = document.createElement('img');

    cardContent.classList.add('card-content');

    cardContent.src = `${CardUrl}`;

    card.appendChild(cardContent);

    return card;

  }

  function duplicateArray(arraySimple) {

    let arrayDouble = [];

    arrayDouble.push(...arraySimple);

    arrayDouble.push(...arraySimple);

      return arrayDouble;

  }


  const allCards = duplicateArray(cards);

  allCards.forEach(card => {

    const cardHtml = createCard(card);

    gameBoard.appendChild(cardHtml);

})


