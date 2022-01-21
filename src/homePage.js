
export default function getHome() {
    const mainNode = document.createElement('main');
    const homeImg = document.createElement('img');
    homeImg.classList.add('main-res-icon');
    homeImg.src = './img/icon.png';
    homeImg.alt =  'restaurant icon';

    const welcomeHeader = document.createElement('h3');
    welcomeHeader.classList.add('welcome');
    welcomeHeader.textContent = 'Welcome to';

    const resName = document.createElement('h2');
    resName.classList.add('res-name');
    resName.textContent = "Captain's Choice Restaurant";

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = 'Best Captain, Goods food';

    const bookTableBtn = document.createElement('button');
    bookTableBtn.classList.add('book-table-btn');
    bookTableBtn.textContent = 'Book Your Table Now';

    mainNode.append(homeImg, welcomeHeader, resName, description, bookTableBtn);
    return mainNode
}