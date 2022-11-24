let sidebar = document.getElementById('sidebar-container');

if(sidebar){
    sidebar.innerHTML = ` <div id="sidebar">
        <div class="show">
            <div id="changeTheme"><i class="fa-solid fa-circle-half-stroke"></i></div>
            <div id="partner"><i class="fa-brands fa-gg"></i></div>
            <div id="more-content"><i class="fa-solid fa-ellipsis"></i></div>
        </div>
        <div class="hide">
            <div id="hide-content">
                <div class="welcome-container">
                    <div class="upper-bar" id="close"><i class="fa-solid fa-xmark"></i></div>
                </div>
                <div class="center-image">
                    <div id="image-shown"><img src="./Image/image-asset.png" alt="image-asset" id="condition1"></div>
                    <div id="image-hide"><img src="https://utoolsfigurebed.oss-cn-hangzhou.aliyuncs.com/Assignment-image.jpeg" alt="image-asset" id="condition2"></div>
                </div>
                <div class="center-content">
                    <div class="sidebar-title">Hey!</div>
                    <div class="welcome-content">Welcome to our website. Here we share all of our club's information and event as well as other goodies like club's member opinion and statistics content.</div>
                </div>
                <div class="bottom-bar">
                    <div><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-square"></i></a></div>
                    <div><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></div>
                    <div><a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a></div>
                    <div><a href="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a></div>
                    <div><a href="https://www.snapchat.com/"><i class="fa-brands fa-snapchat"></i></a></div>
                    <div><a href="https://discord.com/"><i class="fa-brands fa-discord"></i></a></div>
                    <div id="mover"><i class="fa-solid fa-magnifying-glass" ></i></div>
                </div>
            </div>
        </div>
        <div class="hide">
            <div id="hide-partner">
                <div class="welcome-container">
                    <div class="upper-bar" id="closeThis"><i class="fa-solid fa-xmark"></i></div>
                </div>
                <div class="center-image">
                    <div id="ourLogo"><img src="../Image/logo.png" alt="logo"></div>
                </div>
                <div class="center-content">
                    <div class="title1">Meet Our Partners!</div>
                    <div class="logo-container">
                        <div id="imdb"><i class="fa-brands fa-imdb"></i></div>
                        <div id="behance"><i class="fa-brands fa-behance-square"></i></div>
                        <div id="word-logo">NFTarts</div>
                    </div>
                    <div class="logo-container">
                        <div id="school-logo"><img src="../Image/APUlogo.png" alt="APUlogo"></div>
                    </div>
                </div>
                <div class="bottom-bar">
                    <div class="small-contents">FDDKAKI All right reserved</div>
                </div>
            </div>
        </div>
    </div>
`
}


let showContainerButton = document.getElementById('more-content');
let hideContainer = document.getElementById('hide-content');
let closeExtra = document.getElementById('close');

var showContainerStauts = 0;

if(showContainerButton){
    showContainerButton.onclick = function(){
        if(showContainerStauts == 0){
            hideContainer.style.display = 'block';
            showContainerStauts = 1;
    
            
            hidePartner.style.display = 'none';
            showPartnerStatus = 0;
            
        }
        else if(showContainerStauts == 1){
            hideContainer.style.display = 'none';
    
            showContainerStauts = 0;
        }
    }
}

if(closeExtra){
    closeExtra.onclick = function(){
        hideContainer.style.display = 'none';
    
        showContainerStauts = 0;
    }
}

let showPartnerButton = document.getElementById('partner');
let hidePartner = document.getElementById('hide-partner');
let closeThis = document.getElementById('closeThis');


var showPartnerStatus = 0;

//localStorage.setItem("showPartnerStatus",0);

if(showPartnerButton){
    showPartnerButton.onclick = function(){
        if(showPartnerStatus == 0){
           //localStorage.getItem("showPartnerStatus")
    
            hidePartner.style.display = 'block';
            showPartnerStatus = 1;
            //localStorage.setItem("showPartnerStatus",1);
    
            hideContainer.style.display = 'none';
            showContainerStauts = 0;
        }
        else if(showPartnerStatus == 1){
            hidePartner.style.display = 'none';
    
            showPartnerStatus= 0;
        }
    }
}

if(closeThis){
    closeThis.onclick = function(){
        hidePartner.style.display = 'none';
    
        showPartnerStatus = 0;
    }
}

let CampusLocation = document.getElementById('school-logo');

if(CampusLocation){
    CampusLocation.onclick = function(){
        location.href = 'https://www.apu.edu.my/';
    }
}

let IMDBLocation = document.getElementById('imdb');
let BehanceLocation = document.getElementById('behance');

if(IMDBLocation){
    IMDBLocation.onclick = function(){
        location.href = 'https://www.imdb.com/';
    }
}

if(BehanceLocation){
    BehanceLocation.onclick = function(){
        location.href = 'https://www.behance.net/';
    }
}

let found_action = document.getElementById('mover');
let showcondition1 = document.getElementById('image-shown')
let showThis1 = document.getElementById('condition2')
let currentShowImage1 = null

if(found_action){
    found_action.onmousedown = function(action){
    
        let shiftX = action.clientX - found_action.getBoundingClientRect().left;
        let shiftY = action.clientY - found_action.getBoundingClientRect().top;
    
        found_action.style.position = 'absolute';
        found_action.style.zIndex = 1000;
        document.body.append(found_action);
    
        moveAt(action.pageX, action.pageY);
    
        function moveAt(pageX, pageY){
            found_action.style.left = pageX - shiftX + 'px';
            found_action.style.top = pageY - shiftY + 'px';
        }
        
        function onMouseMove(action){
            moveAt(action.pageX, action.pageY);
        
            found_action.hidden = true;
            let elementBelow = document.elementFromPoint(action.clientX, action.clientY);
            found_action.hidden = false;
        
            if(!elementBelow){
                return;
            }
        
            let showImage1 = elementBelow.closest('#condition1');
            if(currentShowImage1 != showImage1){
                if(currentShowImage1){
                    leaveCurrent(currentShowImage1);
                }
                currentShowImage1 = showImage1;
                if(currentShowImage1){
                    enterCurrent(currentShowImage1);
                }
            }
        }
    
        document.addEventListener('mousemove', onMouseMove);
    
        found_action.onmouseup = function(){
            document.removeEventListener('mousemove', onMouseMove);
            found_action.onmouseup = null;
        }
    
    }
}

function enterCurrent(){
    showcondition1.style.display = 'none';
    showThis1.style.display = 'block';
}

function leaveCurrent(){
    showcondition1.style.display = 'block';
    showThis1.style.display = 'none';
}

if(found_action){
    found_action.ondragstart = function(){
        return false;
    }
}


//Theme switch

let changeThemeButton = document.getElementById("changeTheme");

//localStorage.setItem("themeStatus", "dark");

//Fisrt Time Open
window.onload = function(){
    let themeLocal = localStorage.getItem('themeStatus');
    if(!themeLocal){
        localStorage.setItem("themeStatus", "light");
    }else if(themeLocal == "dark"){
        darkTheme();
    }else if(themeLocal == "light"){
        lightTheme();
    }
    // init theme
}



changeThemeButton.onclick = function(){
    let themeStatus = localStorage.getItem("themeStatus");
    if(themeStatus== "dark"){
        switchTheme();
        localStorage.setItem("themeStatus", "light");
    }
    else if(themeStatus== "light"){
        switchTheme();
        localStorage.setItem("themeStatus", "dark");
    }
}


let aboutus_HistoryTitle = document.getElementById('history-title');
let aboutus_VMTitle = document.getElementsByClassName('vm-title');
let aboutus_CommiteeTitle = document.getElementById('commitee-title');
let aboutus_QuoteWord = document.getElementById('quote-word-container');
let aboutus_GifContainer = document.querySelectorAll('.gif-container img');

let aboutFilm_FilmIntro = document.getElementById('film-intro');
let aboutFilm_MainContent = document.getElementsByClassName('main-content');
let aboutFilm_AboutContent = document.getElementById('about-content');
let aboutFilm_AboutPurpose = document.getElementById('about-content-purpose');

let article_MainContent = document.getElementsByClassName('article-main-content');
let article_Views = document.getElementById('article-views');

let celebrityForumTitle = document.getElementById('event-forum-content');
let celebrity_SmallTitle = document.getElementById('celebrity-small-title');
let celebrity_BigTitle = document.getElementById('celebrity-big-title');
let celebrity_card_contents = document.getElementsByClassName("celebritycontents");

let contactus_Greeting = document.getElementById('greeting-word');
let contactus_CommentTitle = document.getElementById('comment-form');
let contactus_JoinUs = document.getElementById('join-us');

let community_SmallTitle = document.getElementById('community-small-title');
let community_BigTitle = document.getElementById('community-big-title');

let event_SmallTitleOne = document.getElementById('event-small-title1');
let event_SmallTitleTwo = document.getElementById('event-small-title2');
let event_Content = document.getElementsByClassName('content');

let home_WelcomeTitle = document.getElementById('home-title1');
let home_JoinUs = document.getElementById('Join-Us-Portion');
let home_ExploreTitle = document.getElementById('home-title2');
let home_PinkBoxText = document.getElementById('pinkbox-text');
let home_BlueBoxText = document.getElementById('bluebox-text');
let home_RecommendTitle = document.getElementById('recommend-title');
let home_NewsTitle = document.getElementById('news-title');

let login_WelcomeSlogan = document.getElementById('login-welcome');

let movie_SmallTitle = document.getElementById('movie-small-title');
let movie_BigTitle = document.getElementById('movie-big-title');
let movie_Discription = document.getElementsByClassName('movie-contents');

let privacyIntro = document.getElementById('privacy-intro');

let rateTitle = document.getElementsByClassName('rate-title');
let rateDirectorTitle = document.getElementById('director-title');
let rateFeedbackContent = document.getElementsByClassName('movie-night-feedback-content');

let recommendPageTitle = document.getElementById('page-title');
let recommendMHTitle = document.getElementById('mh-title');
let recommendCategoryTitle = document.getElementsByClassName('catagory-title');

let shareElementTrending = document.getElementsByClassName('trending');
let shareElementContentTrending = document.getElementsByClassName('content-trending');
let shareNotice = document.getElementById('notice');
let shareNoteUpdate = document.getElementById('note-update');
let shareDirectorName = document.getElementsByClassName('director-name');
let sharePTContents = document.getElementsByClassName('pt-contents');
let shareNumberTrending = document.getElementsByClassName('number-trending');

function switchTheme(){
    let themeStatus = localStorage.getItem("themeStatus");
    console.log(themeStatus);
    if(themeStatus == "light"){
        darkTheme();      
    }
    else if(themeStatus == "dark"){
        lightTheme();  
    }
}

function darkTheme(){

    document.body.style.backgroundColor = "black";
    //About Us Page
    let aboutUS = [aboutus_HistoryTitle, aboutus_VMTitle, 
                        aboutus_CommiteeTitle, aboutus_QuoteWord];
    changeFontColor(aboutUS,"white")

    if(aboutus_GifContainer){
        for (let index = 0; index < aboutus_GifContainer.length; index++) {
            const element = aboutus_GifContainer[index];
            element.style.filter = 'invert(0%)'
        }
    }

    //About Film
    let aboutFilm = [aboutFilm_FilmIntro, aboutFilm_MainContent, aboutFilm_AboutContent, aboutFilm_AboutPurpose];
    changeFontColor(aboutFilm, 'white');

    //Article Page
    if(article_MainContent){
        for (let index = 0; index < article_MainContent.length; index++) {
            const element = article_MainContent[index];
            element.style.color = "white";
        }
    }

    if(article_Views){
        article_Views.style.color = 'white'
    }

    //Celebrity Page
    if(celebrity_SmallTitle){
        celebrity_SmallTitle.style.color = '#b5179e'
    }
        
    if(celebrity_BigTitle){
        celebrity_BigTitle.style.color = 'white'
    }
        
    if(celebrity_card_contents){
        for (let index = 0; index < celebrity_card_contents.length; index++) {
            const element = celebrity_card_contents[index];
            element.style.color = "#D6CCC2";
        }
    }

    if(celebrityForumTitle){
        celebrityForumTitle.style.color = 'white';
    }

    //Contact Us Page
    let contactUsPage = [contactus_Greeting, contactus_CommentTitle, contactus_JoinUs];
    changeFontColor(contactUsPage, 'white');

    //Community Page
    if(community_SmallTitle){
        community_SmallTitle.style.color = '#b5179e';
    }
    if(community_BigTitle){
        community_BigTitle.style.color = 'white';
    }

    //Event Page
    let eventPage = [event_SmallTitleOne, event_SmallTitleTwo, event_Content];
    changeFontColor(eventPage, 'white');

    //Home Page
    let homePage = [home_WelcomeTitle, home_JoinUs, home_ExploreTitle, home_PinkBoxText,
                home_BlueBoxText, home_RecommendTitle, home_NewsTitle]
    changeFontColor(homePage,'white');

    //Login Page
    if(login_WelcomeSlogan){
        login_WelcomeSlogan.style.color = 'white'
    }

    //Movie Page
    if(movie_SmallTitle){
        movie_SmallTitle.style.color = '#b5179e';
    }
    
    let moviePage = [movie_BigTitle, movie_Discription];
    changeFontColor(moviePage,'white');

    //Privacy
    if(privacyIntro){
        privacyIntro.style.color = 'white';
    }

    //Rate Page
    let ratePage = [rateTitle, rateDirectorTitle, rateFeedbackContent];
    changeFontColor(ratePage,'white');

    //RecommendFilm Songs Page
    let recommendSongPage = [recommendPageTitle, recommendMHTitle, recommendCategoryTitle];
    changeFontColor(recommendSongPage, 'white');

    //Share Element
    let shareElement = [shareElementTrending, shareElementContentTrending, 
                shareNotice, shareNoteUpdate, shareDirectorName, shareNumberTrending];
    changeFontColor(shareElement,"white");

    if(sharePTContents){
        for (let index = 0; index < sharePTContents.length; index++) {
            const element = sharePTContents[index];
            element.style.color = "white";
        }
    }
}

function lightTheme(){

    document.body.style.backgroundColor = "white";

    //About Us Page
    let aboutUS = [aboutus_HistoryTitle, aboutus_VMTitle, 
                    aboutus_CommiteeTitle, aboutus_QuoteWord];
    changeFontColor(aboutUS,"black")

    if(aboutus_GifContainer){
        for (let index = 0; index < aboutus_GifContainer.length; index++) {
            const element = aboutus_GifContainer[index];
            element.style.filter = 'invert(100%)'
        }
    }

    //About Film
    let aboutFilm = [aboutFilm_FilmIntro, aboutFilm_MainContent, aboutFilm_AboutContent, aboutFilm_AboutPurpose];
    changeFontColor(aboutFilm, 'black');

    //Article Page
    if(article_MainContent){
        for (let index = 0; index < article_MainContent.length; index++) {
            const element = article_MainContent[index];
            element.style.color = "black";
        }
    }
    if(article_Views){
        article_Views.style.color = 'black'
    }

    //Celebrity Page
    let celebrityPage = [celebrity_SmallTitle, celebrity_BigTitle, celebrity_card_contents, celebrityForumTitle];
    changeFontColor(celebrityPage, 'black');

    //Contact Us Page
    let contactUsPage = [contactus_Greeting, contactus_CommentTitle, contactus_JoinUs];
    changeFontColor(contactUsPage, 'black');

    //Community Page
    if(community_SmallTitle){
        community_SmallTitle.style.color = 'black';
    }
    if(community_BigTitle){
        community_BigTitle.style.color = 'black';
    }

    //Event Page
    if(event_SmallTitleOne){
        event_SmallTitleOne.style.color = 'black';
    }
    if(event_SmallTitleTwo){
        event_SmallTitleTwo.style.color = 'black';
    }
    if(event_Content){
        for (let index = 0; index < event_Content.length; index++) {
            const element = event_Content[index];
            element.style.color = "#8A817C";
        }
    }

    //Home Page
    let homePage = [home_WelcomeTitle, home_JoinUs, home_ExploreTitle, home_PinkBoxText,
                    home_BlueBoxText, home_RecommendTitle, home_NewsTitle]
    changeFontColor(homePage,'black');

    //Login Page
    if(login_WelcomeSlogan){
        login_WelcomeSlogan.style.color = 'black'
    }

    //Movie Page
    let moviePage = [movie_SmallTitle, movie_BigTitle];
    changeFontColor(moviePage,'black');

    if(movie_Discription){
        for (let index = 0; index < movie_Discription.length; index++) {
            const element = movie_Discription[index];
            element.style.color = "black";
        }
    }

    //Privacy
    if(privacyIntro){
        privacyIntro.style.color = 'black';
    }

    //Rate Page
    let ratePage = [rateTitle, rateDirectorTitle, rateFeedbackContent];
    changeFontColor(ratePage,'black');

    //RecommendFilm Songs Page
    let recommendSongPage = [recommendPageTitle, recommendMHTitle, recommendCategoryTitle];
    changeFontColor(recommendSongPage, 'black');

    //Share Element
    let shareElement = [shareElementTrending, shareElementContentTrending, 
        shareNotice, shareNoteUpdate, shareDirectorName, shareNumberTrending]
    changeFontColor(shareElement,"black");

    if(sharePTContents){
        for (let index = 0; index < sharePTContents.length; index++) {
            const element = sharePTContents[index];
            element.style.color = "black";
        }
    }
}


function changeFontColor(objOrList, fontColor) {
    if (Array.isArray(objOrList)) {
        for (let index = 0; index < objOrList.length; index++) {
            const element = objOrList[index];
            if (ifHtmlCollection(element)) {
                changeListFontColor(element, fontColor);
            } 
            else {
                changeObjFontColor(element, fontColor);
            }
        }
    }
    else {
        changeObjFontColor(objOrList, fontColor);
    }
}

function ifHtmlCollection(element) {
    let res = Object.prototype.toString.call(element)
    if (res === '[object HTMLCollection]') {
        return true
    }
    else {
        return false
    }
}

function changeObjFontColor(obj, fontColor) {
    //console.log(obj);
    try{
        if (obj) {
            obj.style.color = fontColor;
        }
    }
    catch{
        //pass
    }
}

function changeListFontColor(objsList, fontColor) {
    for (let index = 0; index < objsList.length; index++) {
        const element = objsList[index];
        if (element) {
            element.style.color = fontColor;
        }
    }
}