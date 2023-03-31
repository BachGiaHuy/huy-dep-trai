var headerText  = document.querySelector('.header__content');
console.log(headerText)
var text = "anh Huy và đồng bọn "

for (let i = 0 ; i <text.length ; i++) {
    let span = document.createElement('span');
    span.textContent = text[i];
    headerText.appendChild(span)
}


// get all span tag 
var listSpan = document.querySelectorAll('.header__content span');
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