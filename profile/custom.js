var headerText = document.querySelector('.header__text');


var text ="Subcribe for daily video";


for (let i = 0 ; i <text.length ; i++) {
    let span = document.createElement('span');
    span.textContent = text[i];
    headerText.appendChild(span);
}

// get all span tag 

var listSpan = document.querySelectorAll('.header__text span');
console.log(listSpan)
var index = 0 
setInterval (() => {
    listSpan[index].style.fontSize = '100px';
    index++;
    if (index ==listSpan.length){
        index = 0;
        // reset size of text 
        resetFontSize();
    }
},200)

const resetFontSize  = () => {
    listSpan.forEach((span) => {
        span.style.fontSize = '0px';
    })
}