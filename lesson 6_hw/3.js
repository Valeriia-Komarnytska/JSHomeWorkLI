let choiceBoxes = document.querySelectorAll(".box"); 

for (let i = 0; i < choiceBoxes.length; i++) {
    choiceBoxes[i].addEventListener('click', changeBI); 
};

function changeBI(e){
    const element =  e.target;
    let img = "url("+prompt('write url image')+")";
    element.style.backgroundImage = img;
};



