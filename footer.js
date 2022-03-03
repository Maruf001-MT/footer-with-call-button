var trigger = document.querySelector('.trigger');
var plus = document.querySelector('.plus');
var container = document.querySelector('.container');

trigger.onclick = function(){
    plus.classList.toggle('active');
    container.classList.toggle('active');
}


