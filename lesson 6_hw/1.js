document.querySelector('.box').addEventListener('mouseover', changeColor);
document.querySelector('.box').addEventListener('mouseout', setBaseColor);
function changeColor(e){
    const colorList = ['red', 'yellow', 'green'];
    const elemment =  e.target;
    const currentColor= elemment.dataset.lastColor;
    let index = 0;
    if(currentColor !== undefined && currentColor != 2) {
        index = (currentColor*1) + 1;
    }
    elemment.style.backgroundColor = colorList[index]
    elemment.dataset.lastColor = index+"";
}
function setBaseColor(e){
    const elemment =  e.target;
    elemment.style.backgroundColor = 'rgb(121, 13, 121)';
}