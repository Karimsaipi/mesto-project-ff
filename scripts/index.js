// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template");
const cardsContainer = document.querySelector('.places__list');
// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard(cardData, deleteCallback) {
    const baseTemplate = cardTemplate.content.cloneNode(true);
    const cardTitleNode = baseTemplate.querySelector('.card__title');
    const cardImageNode = baseTemplate.querySelector('.card__image');
    const cardDeleteButtonNode = baseTemplate.querySelector('.card__delete-button');
    cardTitleNode.textContent = cardData.name;
    cardImageNode.alt = cardData.name;
    cardImageNode.src = cardData.link;
    cardDeleteButtonNode.addEventListener('click', deleteCallback);
    return baseTemplate;
}

// @todo: Функция удаления карточки
// function getDeleteCardCallback(cardName) {
//     return function deleteCard() {
//         const cards = document.querySelectorAll('.card');
//         [...cards].find((card) => {
//             return card.querySelector('.card__title').textContent === cardName;
//         }).remove();
//     }
// }

function deleteCard(event) {
    event.target.closest('.card').remove();
}


// @todo: Вывести карточки на страницу

for (let index = 0; index < initialCards.length; index++) {
    const cardElement = createCard(initialCards[index], deleteCard);
    // const cardElement = createCard(initialCards[index], getDeleteCardCallback(initialCards[index].name));

    cardsContainer.append(cardElement);
}
