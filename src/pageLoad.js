import getHome from "./homePage";
import getAbout from "./about";
import getMenu from "./menu";
export default function pageLoad() {
    const body = document.querySelector('body');
    body.appendChild(getHome())
    const content = document.querySelector('main');
    const header = getHeader();
    const footer = getFooter();
    body.insertBefore(header, content);
    body.appendChild(footer);
    initButtonEvents()

}
function initButtonEvents() {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach((button) => {
        button.addEventListener('click', switchContent)
    })
}

function switchContent(event) {
    const body = document.querySelector('body');
    const footer = document.querySelector('footer');
    const mainNode = document.querySelector('main');
    if(event.target.classList.contains('active')){return};
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach((button) => {
        if (button.classList.contains('active')) {button.classList.remove('active')}
    })
    event.target.classList.add('active');
    if (event.target.textContent === 'Home'){
        mainNode.remove();
        const newMain = getHome();
        body.insertBefore(newMain, footer);
        if (body.classList.contains('menu-main')) {
            body.classList.remove('menu-main');
        }
    }
    else if (event.target.textContent === 'About Us'){
        mainNode.remove();
        const newMain = getAbout();
        body.insertBefore(newMain, footer);
        if (body.classList.contains('menu-main')) {
            body.classList.remove('menu-main');
        }
    }
    else {mainNode.remove();
    const newMain = getMenu();
    body.insertBefore(newMain, footer);
    if (!body.classList.contains('menu-main')) {
        body.classList.add('menu-main');
    }
}
}
function getFooter() {
    const footerNode = document.createElement('footer');
    const gitHubImgLink = document.createElement('a');
    const gitHubNameLink = document.createElement('a');
    gitHubImgLink.href = 'https://github.com/IlyaEru';
    const gitHubIcon = document.createElement('img');
    gitHubIcon.src = 'img/github.png';
    gitHubIcon.alt = 'github Icon';
    gitHubImgLink.appendChild(gitHubIcon);
    gitHubNameLink.classList.add('gitHub-name');
    gitHubNameLink.href = 'https://github.com/IlyaEru';
    gitHubNameLink.textContent = 'IlyaEru';
    footerNode.append(gitHubImgLink, gitHubNameLink);
    return footerNode;
}

function getHeader() {
    const headerNode = document.createElement('header');
    const headerDivLeft = document.createElement('div');
    headerDivLeft.classList.add('header-div');
    const headerNavCenter = document.createElement('nav');
    headerNavCenter.classList.add('header-div');
    const headerDivRight = headerDivLeft.cloneNode();
    headerDivLeft.setAttribute('id', 'sub-header-left');
    const leftDivImg = document.createElement('img');
    leftDivImg.classList.add('res-icon');
    leftDivImg.src = 'img/icon.png';
    leftDivImg.alt = 'restaurant-icon';
    const leftDivHero = document.createElement('h1');
    leftDivHero.textContent = "Captain's Choice";
    headerDivLeft.append(leftDivImg, leftDivHero);

    headerNavCenter.setAttribute('id', 'sub-header-center');
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('active');
    const manuButton = document.createElement('button');
    manuButton.textContent = 'Menu';
    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'About Us';
    headerNavCenter.append(homeButton, manuButton, aboutButton)

    headerDivRight.setAttribute('id', 'sub-header-right');
    const facebookIcon = document.createElement('img');
    facebookIcon.classList.add('icon');
    const instagramIcon = facebookIcon.cloneNode();
    facebookIcon.src = 'img/facebook.png'
    facebookIcon.alt = 'facebook icon';
    instagramIcon.src = 'img/instagram.png'
    instagramIcon.alt = 'instagram icon';
    headerDivRight.append(facebookIcon, instagramIcon);

    headerNode.append(headerDivLeft, headerNavCenter, headerDivRight)


    return headerNode
}
