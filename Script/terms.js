let imageDiv0 = document.getElementsByClassName("adv-image")[0];
let imageDiv1 = document.getElementsByClassName("adv-image")[1];
let imageDiv2 = document.getElementsByClassName("adv-image")[2];

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

if(imageDiv2){
    imageDiv2.onmouseover = function(){
        let image_text  = document.createElement("div");
        image_text.innerHTML = "Enterprise";
        image_text.className= "adv-image-text";
        imageDiv2.appendChild(image_text);
    }

    imageDiv2.onmouseout = function(){
        document.getElementsByClassName("adv-image-text")[0].remove();
    } 
}