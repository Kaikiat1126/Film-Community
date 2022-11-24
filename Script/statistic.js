let changePageCelebrity = document.getElementById('learn-more');
let changePageAllFilm1 = document.getElementById('view-more1');
let changePageAllFilm2 = document.getElementById('view-more2');
let changePageAllFilm3 = document.getElementById('filmpage');


changePageCelebrity.onclick = function(){
    location.href = './forum.html';
}

changePageAllFilm1.onclick = function(){
    location.href = './movie.html';
}

changePageAllFilm2.onclick = function(){
    location.href = './movie.html';
}

changePageAllFilm3.onclick = function(){
    location.href = './movie.html';
}


let popular_page1_imgs_url = ["./Image/Tenet.png", "./Image/Inception.png",
"./Image/GenerationWar.png", "./Image/Shawshank.png"];

let popular_page2_imgs_url = ["./Image/forrestgump.png", "./Image/titanic.png",
"./Image/HacksawRidgeposter.png", "./Image/truman.png"];

let top_rate_page1_imgs_url = ["./Image/Shawshank.png", "./Image/avenger4.png",
 "./Image/thelegendof1900.png", "./Image/doctorstrange.jpg"];

let top_rate_page2_imgs_url = ["./Image/ThePianist.png", "./Image/SchindlersList.png",
 "./Image/SavingPrivateRyan.png", "./Image/intouchables.png"];

let most_review_page1_imgs_url = ["./Image/Tenet.png", "./Image/leon.png",
 "./Image/darkknight.png", "./Image/likestarsonearth.png"];

 let most_review_page2_imgs_url = ["./Image/catchmeifyoucan.png", "./Image/bulletfly.png",
 "./Image/shutterisland.png", "./Image/HotelRwanda.png"];

//

let sci_fi_page1_imgs_url = ["./Image/Tenet.png","./Image/Inception.png",
"./Image/avenger4.png","./Image/doctorstrange.jpg",
"./Image/Interstellar.png","./Image/underwater.png",
"./Image/spiderman.png","./Image/godzilla.png"];

let sci_fi_page2_imgs_url = ["./Image/avengers1.png","./Image/avengers2.png",
"./Image/avengers3.png","./Image/readyplayerone.png",
"./Image/avatar.png","./Image/moonfall.jpg",
"./Image/matrix.png","./Image/darkknight.png"];

let history_page1_imgs_url = ["./Image/generationwar.png","./Image/ThePianist.png",
"./Image/TheLastEmperor.png","./Image/midway.png",
"./Image/SavingPrivateRyan.png","./Image/SchindlersList.png",
"./Image/HotelRwanda.png","./Image/saidekebalai.png"];

let history_page2_imgs_url = ["./Image/HacksawRidgeposter.png","./Image/bandofbrothers.png",
"./Image/battleshipisland.png","./Image/dunkirk.png",
"./Image/gandhi.png","./Image/pearlharbor.png",
"./Image/theflowers.png","./Image/twelvestrong.png"];

let dramatic_page1_imgs_url = ["./Image/Shawshank.png","./Image/leon.png",
"./Image/badgenius.png","./Image/titanic.png",
"./Image/forrestgump.png","./Image/catchmeifyoucan.png",
"./Image/dangal.png","./Image/hachi.png"];

let dramatic_page2_imgs_url = ["./Image/godfather.png","./Image/martian.png",
"./Image/django.png","./Image/blooddiamond.png",
"./Image/shutterisland.png","./Image/spiritedaway.png",
"./Image/thewolfofwallstreet.png","./Image/bawangbieji.png"];

let comedy_page1_imgs_url = ["./Image/bulletfly.png","./Image/threeidiots.png",
"./Image/flipped.png","./Image/zootopia.png",
"./Image/everythingeverywhere.png","./Image/tomato.png",
"./Image/grandbudapesthotel.png","./Image/insideout.png"];

let comedy_page2_imgs_url = ["./Image/coco.png","./Image/up.png",
"./Image/xijuzhiwang.png","./Image/kungfu.png",
"./Image/andhadhun.png","./Image/greenbook.png",
"./Image/intouchables.png","./Image/lifeisbeautiful.png"];


let popular = document.getElementById('popular');
let top_rate = document.getElementById('top-rate');
let most_review = document.getElementById('most-review');
let switch_first_circle1 = document.getElementById('first-page1')
let switch_second_circle2 = document.getElementById('second-page1')

let sci_fi = document.getElementById('sci_fi');
let history = document.getElementById('history');
let dramatic = document.getElementById('dramatic');
let comedy = document.getElementById('comedy');
let switch_first_btn1 = document.getElementById('first-page2');
let switch_second_btn2 = document.getElementById('second-page2');


//Browse Container

let movie_popular_imgs = document.getElementsByClassName("popular");
function changeTrendingImages(url_list){
   for (let index = 0; index < url_list.length; index++) {
       const element = movie_popular_imgs[index];
       const url = url_list[index];
       element.src = url;
   }
}


var currentTrendingPage = "popular";

switch_first_circle1.onclick = function(){
    
    switch_first_circle1.style.backgroundColor = "#FFEE32";
    switch_second_circle2.style.backgroundColor = "#D9D9D9";

    if(currentTrendingPage == "popular"){
        changeTrendingImages(popular_page1_imgs_url);
    }
    else  if(currentTrendingPage == "top_rate"){
        changeTrendingImages(top_rate_page1_imgs_url);
    }
    else  if(currentTrendingPage == "most_review"){
        changeTrendingImages(most_review_page1_imgs_url)
    }
}

switch_second_circle2.onclick = function(){
    
    switch_second_circle2.style.backgroundColor = "#FFEE32";
    switch_first_circle1.style.backgroundColor = "#D9D9D9";

    if(currentTrendingPage == "popular"){
        changeTrendingImages(popular_page2_imgs_url);
        //console.log('Hi');
    }
    else  if(currentTrendingPage == "top_rate"){
        changeTrendingImages(top_rate_page2_imgs_url);
    }
    else  if(currentTrendingPage == "most_review"){
        changeTrendingImages(most_review_page2_imgs_url)
    }
}

popular.onclick = function(){
    resetTrendingFunctionBarColor()
    changeTrendingImages(popular_page1_imgs_url);
    popular.style.color = "#FB8500";
    currentTrendingPage = "popular";
    resetSwitchCircle();
}

top_rate.onclick = function(){
    resetTrendingFunctionBarColor()
    changeTrendingImages(top_rate_page1_imgs_url);
    top_rate.style.color = "#FB8500";
    currentTrendingPage = "top_rate";
    resetSwitchCircle();
}

most_review.onclick = function(){
    resetTrendingFunctionBarColor()
    changeTrendingImages(most_review_page1_imgs_url);
    most_review.style.color = "#FB8500";
    currentTrendingPage = "most_review";
    resetSwitchCircle();
}

function resetSwitchCircle(){
    switch_first_circle1.style.backgroundColor = "#FFEE32";
    switch_second_circle2.style.backgroundColor = "#D9D9D9";
}

function resetTrendingFunctionBarColor(){
    popular.style.color = "#8a897c"
    top_rate.style.color = "#8a897c"
    most_review.style.color = "#8a897c"
}


//Rating Container

let movie_sci_fi_imgs = document.getElementsByClassName("sci_fi");
function changeRatingImages(url_list){
   for (let index = 0; index < url_list.length; index++) {
       const element = movie_sci_fi_imgs[index];
       const url = url_list[index];
       element.src = url;
   }
}

var currentfilmPage = "sci_fi";

switch_first_btn1.onclick = function(){
    
    switch_first_btn1.style.backgroundColor = "#FFEE32";
    switch_second_btn2.style.backgroundColor = "#D9D9D9";

    if(currentfilmPage == "sci_fi"){
        changeRatingImages(sci_fi_page1_imgs_url);
    }
    else  if(currentfilmPage == "history"){
        changeRatingImages(history_page1_imgs_url);
    }
    else  if(currentfilmPage == "dramatic"){
        changeRatingImages(dramatic_page1_imgs_url)
    }
    else  if(currentfilmPage == "comedy"){
        changeRatingImages(comedy_page1_imgs_url)
    }
}

switch_second_btn2.onclick = function(){
    
    switch_first_btn1.style.backgroundColor ="#D9D9D9";
    switch_second_btn2.style.backgroundColor =  "#FFEE32";

    if(currentfilmPage == "sci_fi"){
        changeRatingImages(sci_fi_page2_imgs_url);
    }
    else  if(currentfilmPage == "history"){
        changeRatingImages(history_page2_imgs_url);
    }
    else  if(currentfilmPage == "dramatic"){
        changeRatingImages(dramatic_page2_imgs_url)
    }
    else  if(currentfilmPage == "comedy"){
        changeRatingImages(comedy_page2_imgs_url)
    }
}

sci_fi.onclick = function(){
    resetFilmFunctionBarColor()
    changeRatingImages(sci_fi_page1_imgs_url);
    sci_fi.style.color = "#FB8500";
    currentfilmPage = "sci_fi";
    resetSwitchBtn();
}

history.onclick = function(){
    resetFilmFunctionBarColor()
    changeRatingImages(history_page1_imgs_url);
    history.style.color = "#FB8500";
    currentfilmPage = "history";
    resetSwitchBtn();
}

dramatic.onclick = function(){
    resetFilmFunctionBarColor()
    changeRatingImages(dramatic_page1_imgs_url);
    dramatic.style.color = "#FB8500";
    currentfilmPage = "dramatic";
    resetSwitchBtn();
}

comedy.onclick = function(){
    resetFilmFunctionBarColor()
    changeRatingImages(comedy_page1_imgs_url)
    comedy.style.color = "#FB8500";
    currentfilmPage = "comedy";
    resetSwitchBtn();
}

function resetSwitchBtn(){
    switch_first_btn1.style.backgroundColor = "#FFEE32";
    switch_second_btn2.style.backgroundColor = "#D9D9D9";
}

// refresh #function-bar color

function resetFilmFunctionBarColor(){
    sci_fi.style.color = "#8a897c"
    history.style.color = "#8a897c"
    dramatic.style.color = "#8a897c"
    comedy.style.color = "#8a897c"
}

// Side Ads Filter
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


// Random Card Container
let container = document.getElementById("random-card-container")
let btn = document.getElementById("btn")

var img1, img2, img3, img4, img5, middleELe;
if (container) {
    let imgs = container.children;
    img1 = imgs[0];
    img2 = imgs[1];
    img3 = imgs[2];
    img4 = imgs[3];
    img5 = imgs[4];

    middleELe = imgs[2];
}

window.addEventListener("DOMContentLoaded",function(){
    move(img3).scale(1.5, 1.5).end();
    move(img1).y(random()).end();
    move(img2).y(random()).end();
    move(img4).y(random()).end();
    move(img5).y(random()).end();
})

let positionDict = {
    "1": "0px",
    "2": "230px",
    "3": "485px",
    "4": "740px",
    "5": "970px"
}

if (container) {
    list = [img1, img2, img3, img4, img5];
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        element.onclick = function () {
            if (this == middleELe) {
                return false;
            }

            //side to middle
            move(element)
                .set("left", positionDict["3"])
                .scale(1.5, 1.5)
                .end();

            //middle to side
            let post = element.getAttribute("position")
            move(middleELe)
                .set("left", positionDict[post])
                .scale(1, 1)
                .y(random())
                .end();

            element.setAttribute("position", "3")
            middleELe.setAttribute("position", post)
            middleELe = element;
        }
    }
}


function random(min = 0, max = 150) {
    let random = Math.floor(Math.random() * (max - min)) + min
    if (Math.random() < 0.5) {
        return -1 * random;
    }
    return random;

}

// ViewPager

let V_container = document.getElementById("viewPager-card-container");
let btn_left = document.getElementById("viewPager-left").children[0];
let btn_right = document.getElementById("viewPager-right").children[0];

var V_img1, V_img2, V_img3, V_img4, V_img5, V_middleELe;
var V_post1, V_post2, V_post3, V_post4, V_post5;
if (V_container) {
    let imgs = V_container.children;
    V_img1 = imgs[1];
    V_img2 = imgs[2];
    V_img3 = imgs[3];
    V_img4 = imgs[4];
    V_img5 = imgs[5];

    V_middleELe = imgs[3];
}


window.addEventListener("DOMContentLoaded",function(){
    move(V_img3).scale(1.5, 1.5).end();
    move(V_img2).scale(1.2, 1.2).end();
    move(V_img4).scale(1.2, 1.2).end();
    V_post1 = V_img1;
    V_post2 = V_img2;
    V_post3 = V_img3;
    V_post4 = V_img4;
    V_post5 = V_img5;
})

let V_positionDict = {
    "1": "60px",
    "2": "240px",
    "3": "460px",
    "4": "710px",
    "5": "890px"
}

if (V_container) {
    btn_left.onclick = function () {
        moveLeft();
        let temp = V_post1;
        V_post1 = V_post2;
        V_post2 = V_post3;
        V_post3 = V_post4;
        V_post4 = V_post5;
        V_post5 = temp;
    }

    btn_right.onclick = function () {
        moveRight();
        let temp = V_post5;
        V_post5 = V_post4;
        V_post4 = V_post3;
        V_post3 = V_post2;
        V_post2 = V_post1;
        V_post1 = temp;
    }
}

function moveLeft() {
    moveEle(V_post1, V_positionDict["5"], 1)
    V_post1.style.zIndex = "700";
    moveEle(V_post2, V_positionDict["1"], 1)
    V_post2.style.zIndex = "700";
    moveEle(V_post3, V_positionDict["2"], 1.2)
    V_post3.style.zIndex = "800";
    moveEle(V_post4, V_positionDict["3"], 1.5)
    V_post4.style.zIndex = "900";
    moveEle(V_post5, V_positionDict["4"], 1.2)
    V_post5.style.zIndex = "800";
}

function moveRight() {
    moveEle(V_post1, V_positionDict["2"], 1.2)
    V_post1.style.zIndex = "800";
    moveEle(V_post2, V_positionDict["3"], 1.5)
    V_post2.style.zIndex = "900";
    moveEle(V_post3, V_positionDict["4"], 1.2)
    V_post3.style.zIndex = "800";
    moveEle(V_post4, V_positionDict["5"], 1)
    V_post4.style.zIndex = "700";
    moveEle(V_post5, V_positionDict["1"], 1)
    V_post5.style.zIndex = "700";
}

function moveEle(obj, direction_value, zoom) {
    move(obj)
        .set("left", direction_value)
        .scale(zoom, zoom)
        .end();
}
