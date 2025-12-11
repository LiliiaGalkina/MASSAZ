let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');

burger.addEventListener('click', func);

function func() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}

//-------------------------------------------

let blocks = document.querySelectorAll('.block');
let buttons = document.querySelectorAll('.btn');



for(let i = 0; i < buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		blocks[i].classList.toggle('open');
	})
}
