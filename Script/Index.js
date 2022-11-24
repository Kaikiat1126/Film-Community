// buttion onclick
let btn = document.getElementsByClassName("button");
let btn2 = document.getElementsByClassName("bigbtn")

btn[0].onclick = function(){
    location.href="./html/AboutUs.html";
}

btn[1].onclick = function () {
    location.href="./html/ContactUs.html";
}

btn[2].onclick = function () {
    location.href="./html/movie.html";
}

btn[3].onclick = function () {
    location.href="./html/community.html";
}

btn2[0].onclick = function () {
    location.href="./html/event.html"
}

btn2[1].onclick = function () {
    location.href="./html/article.html"
}

// view pager
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