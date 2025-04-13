function pintar(elementoId, colorDefecto = 'green') {
    elementoId.style.backgroundColor = colorDefecto;
}

const ele = document.querySelector('#ele1');
ele.addEventListener("click", function(){
    pintar(ele, 'yellow');
});