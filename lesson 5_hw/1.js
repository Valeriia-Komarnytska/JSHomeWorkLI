let bodyEl = document.querySelector('body');
let bodyElColor = prompt('будь ласка, введіть колір фону')
bodyEl.style.background = bodyElColor;

let fontTxtFamily = prompt('будь ласка, введіть тип шрифта на сторінці ')
bodyEl.style.fontFamily = fontTxtFamily;

let h1El = document.querySelector('h1');
let h1ElAlign = prompt('будь ласка, введіть тип вирівнювання для заголовка h1 ')
h1El.style.textAlign = h1ElAlign;

let pEl = document.querySelector('p');
let pElColor = prompt('будь ласка, введіт колір фону для параграфа з посиланням')
pEl.style.background = pElColor;

let pElTxtColor = prompt('будь ласка, введіт колір тексту у параграфі з посиланням')
pEl.style.color = pElTxtColor;

let aEls = pEl.getElementsByTagName("a");
for (let i=0; i<aEls.length; i++){
    let aElsColor = prompt(`будь ласка, введіть колір посилання №${i+1}`);
    aEls[i].style.color = aElsColor;
};

let divEl = document.querySelector('div');
let divElColor = prompt('будь ласка, введіт колір тексту у елементі div');
divEl.style.color = divElColor;

let divElFontSize = prompt('будь ласка, розмір тексту у елементі div');
divEl.style.fontSize = divElFontSize;

let divElFontWeight = prompt('будь ласка, введіт товщину тексту у елементі div');
divEl.style.fontWeight = divElFontWeight;

let liEls = document.getElementsByTagName("li");
for (let i=0; i<liEls.length; i++){
    let liElsListStyle = prompt(`тип маркера для маркованого списку на сторінці №${i+1}`);
    liEls[i].style.listStyle = liElsListStyle;
};

for (let i=0; i<aEls.length; i++){
    let aElsLink = prompt(`будь ласка, введіть улюблений сайт №${i+1} `);
    aEls[i].textContent = aElsLink;
    aEls[i].href = 'https://'+aElsLink;
};




