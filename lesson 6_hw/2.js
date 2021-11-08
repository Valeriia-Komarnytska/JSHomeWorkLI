document.querySelector('.box').addEventListener('mouseover', changeColorOne);
document.querySelector('.box').addEventListener('mouseout', setBaseColorOne);
document.querySelector('.box').addEventListener('mousedown', changeColorTwo);
document.querySelector('.box').addEventListener('mouseup', setBaseColorTwo);

function changeColorOne(e){
    const element =  e.target;
    element.style.backgroundColor = 'yellow';
    element.innerHTML = "Хочеш знати яки?";
}

function changeColorTwo(e){
    const element =  e.target;
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
    element.innerHTML = "А я не скажу!";
}

function setBaseColorTwo(e){
    const element =  e.target;
    element.style.backgroundColor = 'yellow';
    element.style.color = 'black';
    element.innerHTML = "Хочеш знати яки?";
}

function setBaseColorOne(e){
    const element =  e.target;
    element.style.backgroundColor = 'rgb(121, 13, 121)';
    element.innerHTML = "У мене є секрет!";
}