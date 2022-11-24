let header = document.getElementById("header");
let footer = document.getElementById("footer-container");

if(header){
    header.innerHTML  = `
    <div id="header-logo"><img src="../Image/logo.png" alt="logo" class="logo"></div>
    <div id="navigation">
        <div class="navigation-item"><a href="../Index.html">HOME</a></div>
        <div class="navigation-item"><a href="./html/AboutUs.html">ABOUT US</a></div>
        <div class="navigation-item"><a href="./event.html">OUR EVENT</a></div>
        <div class="navigation-item"><a href="./community.html">COMMUNITY</a></div>
        <div id="ni-ABF" class="navigation-item"><a href="#">WEEKLY EVENT</a>
            <div class="dropdown-menu-container">
                <div class="dropdown-menu">
                    <ul>
                        <li><a href="./forum.html">CELEBRITY FORUM</a></li>
                        <li><a href="./movie.html">MOVIE NIGHT</a></li>
                        <li><a href="./electionofsongs.html">ELECTION OF FILM's SONGs</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="navigation-item"><a href="./article.html">ARTICLE</a></div>
        <div class="navigation-item"><a href="./ContactUs.html">CONTACT US</a></div>
    </div>
`
}

if(footer){
    footer.innerHTML = `<div class="footer-container">
    <div class="upper-blue-container">
        <div class="blue-rectangle">
            <div id="first-column">
                <div class="footer-title">PRODUCT</div>
                <a href="./movie.html" class="pages">Movie Night</a>
                <a href="./event.html" class="pages">Our Event</a>
                <a href="./statistic.html" class="pages">Our Statistics</a>
                <a href="./electionofsongs.html" class="pages">Election of Film Songs</a>
            </div>
            <div id="second-column">
                <div class="footer-title">FDDKAKI</div>
                <a href="./AboutUs.html" class="pages">About Us</a>
                <a href="./ContactUs.html" class="pages">Contact Us</a>
                <a href="./community.html" class="pages">Community</a>
                <a href="./404error.html" class="pages">Our Goals</a>
            </div>
            <div id="third-column">
                <div class="footer-title">LEARN MORE</div>
                <a href="./forum.html" class="pages">Celebrity Forum</a>
                <a href="./article.html" class="pages">Club's Articles</a>
                <a href="./opinion.html" class="pages">Club's Opinion</a>
            </div>
            <div class="yellow-triangle"></div>
        </div>
        <div class="footer-logo-container">
            <img src="../Image/logo.png" alt="">
        </div>
    </div>
    <div class="bottom-purple-container">
        <div class="footer-copyright">Copyright © 2019-2022 by APU FILM x COMMUNITY.</div>
        <div class="green-triangle"></div>
        <div class="purple-rectangle">
            <div class="footer-contact">CONNECT WITH US</div>
            <div class="footer-social-icons">
                <div><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-square"></i></a></div>
                <div><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></div>
                <div><a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a></div>
                <div><a href="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a></div>
                <div><a href="https://www.snapchat.com/"><i class="fa-brands fa-snapchat"></i></a></div>
                <div><a href="https://discord.com/"><i class="fa-brands fa-discord"></i></a></div>
            </div>
            <div class="footer-button"><button id="login">LOGIN / SIGN UP</button></div>
            <div class="footer-text">
                <span><a href="./html/terms&conditions.html">Terms & Conditions    |</a></span>
                <span><a href="./html/privacy&policy.html">Privacy and Cookies Policy    |</a></span>
                <span>Powered by FILM x COMMUNITY</span>
            </div>
            <div class="purple-triangle"></div>
        </div>
    </div>
</div>
`
}

document.getElementById('login').onclick = function(){
    location.href = './login.html';
};

