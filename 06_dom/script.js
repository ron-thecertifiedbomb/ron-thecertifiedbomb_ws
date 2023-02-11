// custom script
// alert('Welcome to JS')
// document.write('<h1>Hello DOM</h1>')

// setting html child/content
const hello = document.getElementById('hello');
if(hello) {
    // hello.innerHTML = `<span>Hello</span> <b>DOM</b>`;
    hello.innerText = `Hello DOM Text Only`;
}

console.log(hello);
console.log(typeof hello);
console.dir(hello);
console.log(hello.tagName);

// tag specific
const pic = document.getElementById('hello-pic');
if(pic) {
    // pic.src = 'imgx/02.jpg'; // bad, non existing path
    // pic.src = 'img/03.jpg'; // implied start director "./"
    // pic.src = './imag/04.jpg'; // relative directory explicit
    pic.src = 'https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'; // from external url/dns
}
console.dir(pic);

const byId = id => document.getElementById(id);
const alink = byId('hello-link');
alink ? alink.href = 'https://google.com' : null;
// if(alink) {alink.href = 'https://google.com'} else null;
console.dir(alink);

// change style
const header = byId('hello');
// header ? {(header.style.color = 'red' && header.style.borderBottomColor = 'Green' && header.style.borderBottomWidth = '10x')} : null;
if(header) {
    header.style.color = 'red';
    // SYNTAX 1: Javascript Object
    // header.style.borderBottomColor = 'green';
    // header.style.borderBottomWidth = '10px';
    // header.style.borderBottomStyle = 'solid';
    // header.style.borderBottom = '10px solid blue !important';

    // SYNTAX 2: As CSS Text
    // header.style.cssText = 'border-bottom: 10px solid blue !important';
    // header.style.cssText = 'border-top: 20px dotted green';

    // SYNTAX 3: Javascript Style Object Method setProperty
    // header.style.setProperty('border-bottom', '10px dotted green', 'important');
}
console.dir(header);