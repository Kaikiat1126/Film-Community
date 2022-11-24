let imageDiv0 = document.getElementsByClassName("adv-image")[0];
let imageDiv1 = document.getElementsByClassName("adv-image")[1];

if(imageDiv0){
    imageDiv0.onmouseover = function(){
        let image_text  = document.createElement("div");
        image_text.innerHTML = "NFTARTS";
        image_text.className= "adv-image-text";
        imageDiv0.appendChild(image_text);
    }

    imageDiv0.onmouseout = function(){
        document.getElementsByClassName("adv-image-text")[0].remove();
    } 
}


if(imageDiv1){
    imageDiv1.onmouseover = function(){
        let image_text  = document.createElement("div");
        image_text.innerHTML = "Venture Day";
        image_text.className= "adv-image-text";
        imageDiv1.appendChild(image_text);
    }

    imageDiv1.onmouseout = function(){
        document.getElementsByClassName("adv-image-text")[0].remove();
    } 
}


let like_button1 = document.getElementById('like1');

var isLiked1 = 0;

like_button1.onclick = function(){
    if(isLiked1 == 0){
        like_button1.style.color = '#c1121f';
        isLiked1 = 1;
    }
    else if(isLiked1 == 1){
        like_button1.style.color = '#D9D9D9';
        isLiked1 = 0;
    }
}

let like_button2 = document.getElementById('like2');

var isLiked2 = 0;

like_button2.onclick = function(){

    if(isLiked2 == 0){
        like_button2.style.color = '#c1121f';
        isLiked2 = 1;
    }
    else if(isLiked2 == 1){
        like_button2.style.color = '#D9D9D9';
        isLiked2 = 0;
    }
}

let like_button3 = document.getElementById('like3');

var isLiked3 = 0;

like_button3.onclick = function(){

    if(isLiked3 == 0){
        like_button3.style.color = '#c1121f';
        isLiked3 = 1;
    }
    else if(isLiked3 == 1){
        like_button3.style.color = '#D9D9D9';
        isLiked3 = 0;
    }
}

let like_button4 = document.getElementById('like4');

var isLiked4 = 0;

like_button4.onclick = function(){

    if(isLiked4 == 0){
        like_button4.style.color = '#c1121f';
        isLiked4 = 1;
    }
    else if(isLiked4 == 1){
        like_button4.style.color = '#8a817c';
        isLiked4 = 0;
    }
}

let like_button5 = document.getElementById('like5');

var isLiked5 = 0;

like_button5.onclick = function(){

    if(isLiked5 == 0){
        like_button5.style.color = '#c1121f';
        isLiked5 = 1;
    }
    else if(isLiked5 == 1){
        like_button5.style.color = '#8a817c';
        isLiked5 = 0;
    }
}

let like_button6 = document.getElementById('like6');

var isLiked6 = 0;

like_button6.onclick = function(){

    if(isLiked6 == 0){
        like_button6.style.color = '#c1121f';
        isLiked6 = 1;
    }
    else if(isLiked6 == 1){
        like_button6.style.color = '#8a817c';
        isLiked6 = 0;
    }
}

let sharingWindowButton = document.getElementsByClassName('sharing');
let hideWindowSharing = document.getElementById('share-container');
let closeSharing = document.getElementById('closeShare');

var showSharingWindowStauts = 0;

if(sharingWindowButton){
    for (let index = 0; index < sharingWindowButton.length; index++) {
        const element = sharingWindowButton[index];
        element.onclick = function(){

            if(showSharingWindowStauts == 0){
                hideWindowSharing.style.display = 'block';
                showSharingWindowStauts = 1;
            }
            else if(showSharingWindowStauts == 1){
                hideWindowSharing.style.display = 'none';
                showSharingWindowStauts = 0;
            }
        }
    }
}

if(closeSharing){
    closeSharing.onclick = function(){
        hideWindowSharing.style.display = 'none';
        showSharingWindowStauts = 0;
    }
}

let found_icon = document.getElementById('share-mover');
let showMyAdvatar = document.getElementById('my-show-advatar');
let showHideAdvatar = document.getElementById('hideAdvatar');

let currentShowHideAdvatar = null;

if(found_icon){
    found_icon.onmousedown = function(myaction){
    
        let shiftX = myaction.clientX - found_icon.getBoundingClientRect().left;
        let shiftY = myaction.clientY - found_icon.getBoundingClientRect().top;
    
        found_icon.style.position = 'absolute';
        found_icon.style.zIndex = 1000;
        document.body.append(found_icon);
    
        movingAt(myaction.pageX, myaction.pageY);
    
        function movingAt(pageX, pageY){
            found_icon.style.left = pageX - shiftX + 'px';
            found_icon.style.top = pageY - shiftY + 'px';
        }
        
        function onMouseMoving(myaction){
            movingAt(myaction.pageX, myaction.pageY);
        
            found_icon.hidden = true;
            let elementCurrent = document.elementFromPoint(myaction.clientX, myaction.clientY);
            found_icon.hidden = false;
        
            if(!elementCurrent){
                return;
            }
        
            let showMyImage = elementCurrent.closest('#currentAdvatar');
            if(currentShowHideAdvatar != showMyImage){
                if(currentShowHideAdvatar){
                    leavingCurrent(currentShowHideAdvatar);
                }
                currentShowHideAdvatar = showMyImage;
                if(currentShowHideAdvatar){
                    enteringCurrent(currentShowHideAdvatar);
                }
            }
        }
    
        document.addEventListener('mousemove', onMouseMoving);
    
        found_icon.onmouseup = function(){
            document.removeEventListener('mousemove', onMouseMoving);
            found_icon.onmouseup = null;
        }
    }
}

function enteringCurrent(){
    showMyAdvatar.style.display = 'none';
    showHideAdvatar.style.display = 'block';
}

function leavingCurrent(){
    showMyAdvatar.style.display = 'block';
    showHideAdvatar.style.display = 'none';
}

if(found_icon){
    found_icon.ondragstart = function(){
        return false;
    }
}