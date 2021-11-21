let choiceColor = document.querySelectorAll("li"); 

for (let i = 0; i <  choiceColor.length; i++) {
    choiceColor[i].addEventListener('click', changeColor); 
};

function changeColor(e){
    const element =  e.target;
    let textColor = element.textContent;
    element.style.color = textColor;
};