let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');
let container = document.getElementById('container');

// document.getElementById('signUp').style.backgroundColor = ''
// document.getElementById('signIn').style.backgroundColor = ''
/* from{background-color: linear-gradient(180deg, #B5179E 0%, #F72585 100%);}
	to {background-color: linear-gradient(180deg, #360D95 0%, #4662E2 100%);} */

let overlay  = document.getElementsByClassName("overlay")[0];

let goBackHome = document.getElementById('goback-Home');

goBackHome.onclick = function(){
	location.href = '../Index.html'
}

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	overlay.style.backgroundColor ="linear-gradient(180deg, #B5179E 0%, #F72585 100%)";
	}
);

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	overlay.style.backgroundColor ="linear-gradient(180deg, #360D95 0%, #4662E2 100%)";
	}
);