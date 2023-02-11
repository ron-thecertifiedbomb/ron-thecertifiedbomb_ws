// custom script
// alert('Welcome to JS')


// Selecting an Element
// 1. document.getElementById('id');
// 2. document.getElementsByClassName('class-name');
// 3. document.getElementsByName('name');
// 4. document.getElementsByTagName('h1');

// 1. 
const header = document.getElementById('header');
console.log(header);
console.log(typeof header);
console.dir(header);

// 2.
const items = document.getElementsByClassName('list-item');
console.log(items);
console.log(items[0]);
console.log(items.length);
// collection to array
const arrItems = Array.from(items);
console.log(arrItems);

const excludedItems = document.getElementsByClassName('excluded-item');
console.log(excludedItems)

const nonExistentItem = document.getElementsByClassName('non-existent-item');
console.log(nonExistentItem);


// 3. 
const ulItems = document.getElementsByName('listItems');
console.log(ulItems);


// 4.
const liItems = document.getElementsByTagName('li');
console.log(liItems);


// 5. 
// document.querySelector(), document.querySelectorAll();
let header1 = document.querySelector('#header');
console.dir(header1);
let header2 = document.querySelectorAll('#header');
console.log(header2);

let listItems1 = document.querySelector('.list-item');
console.log(listItems1);
let listItems2 = document.querySelectorAll('.list-item');
console.log(listItems2);
console.log(listItems2[0]);

let firstItem = document.querySelectorAll('li[data-bs-tag="excluded"]');
console.log(firstItem);


console.log("======================================")

// document.createElement()
let div = document.createElement('div');
div.id = 'newDiv';
div.innerHTML = `<p class="bg-success text-white">Newly created paragraph</p>`;
document.body.appendChild(div);

console.log("======================================")

// creating and appending
const createMenu = name => {
    let li = document.createElement('li');
    li.classList.add('list-item');
    li.classList.add('new-item');
    li.textContent = name;
    return li;
}

const menu = document.querySelector('#listItems');
console.log(menu);

menu.appendChild(createMenu('New Item #1'));
menu.appendChild(createMenu('Home'))

// insert before
const createSubHead = text => {
    let subhead = document.createElement('h3');
    subhead.classList.add('text-danger');
    subhead.textContent = text;
    return subhead;
}

document.body.insertBefore(createSubHead('User Options:'), menu);
menu.insertBefore(createMenu('Flash Sale'), document.querySelector('li.list-item'));
menu.insertBefore(createMenu('Zuki Deals'), menu.firstElementChild);
menu.insertBefore(createMenu('About'), menu.lastElementChild);

menu.parentElement.append(createSubHead(':::Warning:::'));

// removeChild
document.body.removeChild(document.body.lastElementChild);

const userOptions = document.querySelector('#listItems');
const home = userOptions.lastElementChild;
console.log(home);
userOptions.removeChild(home);

// textContext
const about = userOptions.lastElementChild;
console.log(about.textContent);
about.textContent = "Modified About";

// textContent
// innerText
// innerHtml
about.innerHTML = `<span class="text-white bg-primary">Modified</span><b> About</b>`;

console.log(about.textContent);
console.log(about.innerText);
console.log(about.innerHTML);
console.log(about.outerHTML);

// insertAdjacentHTML ===> pos: beforebegin, afterbegin, beforeend, afterend

// replaceChild();
// cloneNode(true|false)
let backUpAbout = about.cloneNode(true);
userOptions.replaceChild(createMenu('Contact Us'), about);
console.log(about);

document.body.appendChild(backUpAbout);

// .setAttribute(attName, attValue);
const contactUs = document.querySelectorAll('.list-item.new-item')[3];
contactUs.setAttribute('name', 'contactUs');
contactUs.setAttribute('class', 'text-info bg-black hidden');
contactUs.setAttribute('id', 'contactUs');
contactUs.setAttribute('style', 'border: 3px solid red;');

contactUs.style.border = "5px solid green";

// css: background-color: red;
// js: .style.backgroundColor = 'red';

// <img src="..." class="visible|hidden">
// contactUs.classList.replace('hidden', 'visible');

//<video disabled enabled autoplay />
contactUs.setAttribute('disabled', 'true');
contactUs.setAttribute('autoplay', '1');

// .removeAttribute(name);
contactUs.removeAttribute('id');
contactUs.removeAttribute('autoplays');

// .getAttribute(name);
let contactName = contactUs.getAttribute('name'); // not found: null
console.log(contactName);


console.log('================================')

// traversing -- from a node, go to some other place relatively
// .parentNode

let sideMenu = contactUs.parentNode; // ul which the parent of contactUs
console.log(sideMenu);

// .firstChild
console.log(sideMenu.firstChild);

// .firstElementChild
console.log(sideMenu.firstElementChild);

// .lastChild
console.log(sideMenu.lastChild)

// .laastElementChild
console.log(sideMenu.lastElementChild)

// .childElementCount
console.log(sideMenu.childElementCount);

let flashSale = document.querySelectorAll('.list-item.new-item')[1];

// .nextElementSibling
console.log(flashSale.nextElementSibling.textContent)

// .previousElementSibling
console.log(flashSale.previousElementSibling.textContent)

// .children
console.log(sideMenu.children);

// .childrenNode
console.log(sideMenu.childNodes);