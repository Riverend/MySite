let listLi = document.querySelector('.grid .itemList');
let itemsLi = document.querySelectorAll('.grid .itemList li');



let prevList = document.getElementById('prevList');
let nextList = document.getElementById('nextList');

let activeLi = 0;
let lengthItemsLi = itemsLi.length - 5;

console.log(lengthItemsLi);

nextList.onclick = function() {
    if (activeLi + 1 > lengthItemsLi) {
        activeLi = 0;

    }else {
        activeLi = activeLi + 1;
    }
    console.log(activeLi);
    
    reloadSliderLi();
}

prevList.onclick = function() {
    if (activeLi - 1 < 0) {
        activeLi = lengthItemsLi;

    }else {
        activeLi = activeLi - 1;
    }
    
    reloadSliderLi();
}

let refreshSliderLi = setInterval(() => {nextList.click()}, 3000);

function reloadSliderLi() {
    let checkLeft = (itemsLi[0].offsetWidth + 40)*activeLi;
    listLi.style.transform =  'translate3d(-' + checkLeft + 'px, 0px, 0px)';

    clearInterval(refreshSliderLi);
    refreshSliderLi = setInterval(() => {nextList.click()}, 3000);
}

