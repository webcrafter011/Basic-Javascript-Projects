let body = document.getElementsByTagName('body')[0];

function backgroundColor(color) {
    body.style.backgroundColor = color
}

// declaring buttons
let greenBtn = document.getElementById('green');
let redBtn = document.getElementById('red');
let blueBtn = document.getElementById('blue');
let randomBtn = document.getElementById('random');

// adding event listeners
greenBtn.addEventListener('click', function() {
    backgroundColor('green');
});

redBtn.addEventListener('click', function() {
    backgroundColor('red');
});

blueBtn.addEventListener('click', function() {    
    backgroundColor('blue');
});

randomBtn.addEventListener('click', function(){
    let randomColor = '#' + Math.floor(Math.random() * 16723415).toString(16);
    backgroundColor(randomColor);
});