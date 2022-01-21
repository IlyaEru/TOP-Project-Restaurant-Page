export default function getAbout() {
    const aboutNode = document.createElement('main');
    const aboutHeader = document.createElement('div');
    aboutHeader.classList.add('about-header');
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details-div');

    const aboutHeaderImg = document.createElement('img');
    aboutHeaderImg.classList.add('pirate-img');
    aboutHeaderImg.src = './img/pirate.png';
    aboutHeaderImg.alt = 'pirate-image';
    const aboutHeaderHero = document.createElement('h1');
    aboutHeaderHero.classList.add('about-hero');
    aboutHeaderHero.textContent = 'About Us';
    const aboutHeaderPlaceTaker = document.createElement('div');
    aboutHeaderPlaceTaker.classList.add('place-taker');
    aboutHeader.append(aboutHeaderImg, aboutHeaderHero, aboutHeaderPlaceTaker);

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('address');
    const addressHeader = document.createElement('h4');
    addressHeader.textContent = 'Address';
    const addressPara = document.createElement('p');
    addressPara.classList.add('para', 'address-para');
    addressPara.textContent = 'Port Royal, jamaica';
    const addressIframe = document.createElement('iframe');
    addressIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7591.798906777109!2d-76.83737882464747!3d17.936843001006075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb6af4c43b5eab%3A0x49fe08a8cad21a0f!2z16TXldeo15gg16jXldeZ15DXnCwg15In157XmdeZ16fXlA!5e0!3m2!1siw!2sil!4v1642690511544!5m2!1siw!2sil';
    addressDiv.append(addressHeader, addressPara, addressIframe);

    const openingDiv = document.createElement('div');
    openingDiv.classList.add('opening');
    const openingHeader = document.createElement('h4');
    openingHeader.textContent = 'Opening hours';
    const openingPara = document.createElement('p');
    openingPara.classList.add('para', 'hours-para');
    openingPara.setAttribute('style', 'white-space: pre;');
    openingPara.textContent = `    Mon. 8 a.m.-9 p.m.
    \r\n
    Tues. 8 a.m. - 9 p.m.
    \r\n
    Wed. 8 a.m. - 9 p.m.
    \r\n
    Thurs. 8 a.m. - 9 p.m.
    \r\n
    Frid. 8 a.m. - 9 p.m.
    \r\n
    Sat. 8 a.m. - 6 p.m.
    \r\n
    Sun. 11 a.m. - 7 p.m.`;
    openingDiv.append(openingHeader, openingPara);

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');
    const aboutDivHeader = document.createElement('h4');
    aboutDivHeader.textContent = 'About';
    const aboutPara = document.createElement('p');
    aboutPara.classList.add('para');
    aboutPara.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam eget risus
    viverra consectetur ac sit amet dui. Fusce varius quis libero non bibendum. Integer sed orci non
    tellus molestie auctor eu ac nunc. Nulla non viverra felis. In malesuada massa ac euismod fringilla.
    Morbi aliquet enim quis risus laoreet dignissim. Quisque eleifend non ligula eget blandit. Proin et
    dolor nec nisl ultrices malesuada. Proin auctor quam a fringilla rutrum.`
    aboutDiv.append(aboutDivHeader, aboutPara);

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    const contactHeader = document.createElement('h4');
    contactHeader.textContent = 'Contact us';
    const contactPara = document.createElement('p');
    contactPara.classList.add('para');
    contactPara.setAttribute('style', 'white-space: pre;');
    contactPara.textContent = `📞 876-123-4567 \r\n
    ✉ example@mail.com`;
    contactDiv.append(contactHeader, contactPara)

    detailsDiv.append(addressDiv, openingDiv, aboutDiv, contactDiv);
    aboutNode.append(aboutHeader, detailsDiv);
    return aboutNode
}