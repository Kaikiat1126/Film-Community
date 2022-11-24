let switch_first_btn1 = document.getElementById('page1');
let switch_second_btn2 = document.getElementById('page2');
let switch_third_btn3 = document.getElementById('page3');
let switch_fourth_btn4 = document.getElementById('page4');
let switch_fifth_btn5 = document.getElementById('page5');

let container1 = document.getElementById('previous-container1')
let container2 = document.getElementById('previous-container2')
let container3 = document.getElementById('previous-container3')
let container4 = document.getElementById('previous-container4')
let container5 = document.getElementById('previous-container5')

var  num  = 0;

switch_first_btn1.onclick = function(){
    resetSwitchBtnOne();
    resetContainerDisplayOne();

    num = 1;
}

switch_second_btn2.onclick = function(){
    resetSwicthBtnTwo();
    resetContainerDisplayTwo();

    num = 2;
}

switch_third_btn3.onclick = function(){
    resetSwitchBtnThree();
    resetContainerDisplayThree();

    num = 3;
}

switch_fourth_btn4.onclick = function(){
    resetSwitchBtnFour();
    resetContainerDisplayFour();

    num = 4;
}

switch_fifth_btn5.onclick = function(){
    resetSwitchBtnFive();
    resetContainerDisplayFive();

    num = 0;
}

function timer(){
    if(num ==0){
        
        resetSwitchBtnOne()
        resetContainerDisplayOne()

        num =1
    }
    else if(num==1){

        resetSwicthBtnTwo()
        resetContainerDisplayTwo()

        num = 2
    }
    else if(num==2){

        resetSwitchBtnThree()
        resetContainerDisplayThree()

        num = 3
    }
    else if(num==3){

        resetSwitchBtnFour()
        resetContainerDisplayFour()

        num = 4
    }
    else if(num==4){

        resetSwitchBtnFive()
        resetContainerDisplayFive()

        num = 0
    }
}

var myTimer = setInterval(timer,2000)

container1.onmouseover = function(){
    breakTimer();
}

container2.onmouseover = function(){
    breakTimer();
}

container3.onmouseover = function(){
    breakTimer();
}

container4.onmouseover = function(){
    breakTimer();
}

container5.onmouseover = function(){
    breakTimer();
}

container1.onmouseleave = function(){
    resetTimer();
}

container2.onmouseleave = function(){
    resetTimer();
}

container3.onmouseleave = function(){
    resetTimer();
}

container4.onmouseleave = function(){
    resetTimer();
}

container5.onmouseleave = function(){
    resetTimer();
}

function breakTimer(){
    clearInterval(myTimer);
}

function resetTimer(){
    myTimer = setInterval(timer,2000);
}

function resetContainerDisplayOne(){
    container1.style.display = "block";
    container2.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";
}

function resetContainerDisplayTwo(){
    container2.style.display = "block";
    container1.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";
}

function resetContainerDisplayThree(){
    container3.style.display = "block";
    container1.style.display = "none";
    container2.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";
}

function resetContainerDisplayFour(){
    container4.style.display = "block";
    container1.style.display = "none";
    container2.style.display = "none";
    container3.style.display = "none";
    container5.style.display = "none";
}

function resetContainerDisplayFive(){
    container5.style.display = "block";
    container1.style.display = "none";
    container2.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
}


function resetSwitchBtnOne(){
    switch_first_btn1.style.backgroundColor = "#FFEE32";
    switch_second_btn2.style.backgroundColor = "#D9D9D9";
    switch_third_btn3.style.backgroundColor = "#D9D9D9";
    switch_fourth_btn4.style.backgroundColor = "#D9D9D9";
    switch_fifth_btn5.style.backgroundColor = "#D9D9D9";
}

function resetSwicthBtnTwo(){
    switch_second_btn2.style.backgroundColor = "#FFEE32";
    switch_first_btn1.style.backgroundColor = "#D9D9D9";
    switch_third_btn3.style.backgroundColor = "#D9D9D9";
    switch_fourth_btn4.style.backgroundColor = "#D9D9D9";
    switch_fifth_btn5.style.backgroundColor = "#D9D9D9";
}

function resetSwitchBtnThree(){
    switch_third_btn3.style.backgroundColor = "#FFEE32";
    switch_first_btn1.style.backgroundColor = "#D9D9D9";
    switch_second_btn2.style.backgroundColor = "#D9D9D9";
    switch_fourth_btn4.style.backgroundColor = "#D9D9D9";
    switch_fifth_btn5.style.backgroundColor = "#D9D9D9";
}

function resetSwitchBtnFour(){
    switch_fourth_btn4.style.backgroundColor = "#FFEE32";
    switch_first_btn1.style.backgroundColor = "#D9D9D9";
    switch_second_btn2.style.backgroundColor = "#D9D9D9";
    switch_third_btn3.style.backgroundColor = "#D9D9D9";
    switch_fifth_btn5.style.backgroundColor = "#D9D9D9";
}

function resetSwitchBtnFive(){
    switch_fifth_btn5.style.backgroundColor = "#FFEE32";
    switch_first_btn1.style.backgroundColor = "#D9D9D9";
    switch_second_btn2.style.backgroundColor = "#D9D9D9";
    switch_third_btn3.style.backgroundColor = "#D9D9D9";
    switch_fourth_btn4.style.backgroundColor = "#D9D9D9";
}

let gotoPageWeekly = document.getElementsByClassName('weekly-button');

for (let index = 0; index < gotoPageWeekly.length; index++) {
    const element = gotoPageWeekly[index];
    element.onclick = function(){
        location.href = './movie.html';
    }
}