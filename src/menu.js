export default function getMenu(params) {
    const menuNode = document.createElement('main');
    menuNode.classList.add('no-background');

    const menuHeaderNode = document.createElement('h1');
    menuHeaderNode.classList.add('menu-header');
    menuHeaderNode.textContent = 'Menu';

    const menuContentNode = document.createElement('div');
    menuContentNode.classList.add('menu-content');

    const fishContainer = document.createElement('div');
    fishContainer.classList.add('menu-div');
    const elseContainer = fishContainer.cloneNode();

    const fishHeader = document.createElement('h2');
    fishHeader.textContent = '-----Fish-----';
    const fishContentDiv = document.createElement('div');
    const fishDishNames = document.createElement('div');
    fishDishNames.setAttribute('style', 'white-space: pre;');
    fishDishNames.textContent = `    Fish Strew 
    \r\n \r\n
    Fish Soup
    \r\n \r\n
    Red Tuna`

    const fishDishPrices = document.createElement('div');
    fishDishPrices.classList.add('prices');
    fishDishPrices.setAttribute('style', 'white-space: pre;');
    fishDishPrices.textContent = `    9.99$
    \r\n \r\n
    11.99$
    \r\n \r\n
    15.99$`
    fishContentDiv.append(fishDishNames, fishDishPrices);
    fishContainer.append(fishHeader, fishContentDiv)

    const elseContentDiv = document.createElement('div');
    const elseHeader = document.createElement('h2');
    elseHeader.textContent = '-----Anything else-----';
    const elseNames = document.createElement('div');
    elseNames.textContent = 'Water';
    const elsePrices = document.createElement('div');
    elsePrices.classList.add('prices');
    elsePrices.textContent = 'Free';
    elseContentDiv.append(elseNames, elsePrices);
    elseContainer.append(elseHeader, elseContentDiv);

    menuContentNode.append(fishContainer, elseContainer)
    menuNode.append(menuHeaderNode, menuContentNode);
    return menuNode

}