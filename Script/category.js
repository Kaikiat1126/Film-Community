let showAll = document.getElementById("all");
let showSciFi = document.getElementById("sci-fi");
let showHistory = document.getElementById("history");
let showDramatic = document.getElementById("dramatic");
let showComedy = document.getElementById("comedy");

var currentShowCatogery = 'all';

showAll.onclick = function(){
    resetFunctionBarColor();
    clearContent();

    // showAllCategory
    for (let index = 1; index < 74; index++) {
        const element = allFilmPoster[index.toString()];
        createAllFilmCard(element);
    }

    currentShowCatogery = 'all';
    showAll.style.color = '#b5179e';
}

showSciFi.onclick = function(){
    resetFunctionBarColor();
    clearContent();
    getListFromDict("type","Sci-Fi");
    currentShowCatogery = 'Sci-Fi';
    showSciFi.style.color = '#b5179e';
}

showHistory.onclick = function(){
    resetFunctionBarColor();
    clearContent();
    getListFromDict("type","History");
    currentShowCatogery = 'History';
    showHistory.style.color = '#b5179e';
}

showDramatic.onclick = function(){
    resetFunctionBarColor();
    clearContent();
    getListFromDict("type","Dramatic");
    currentShowCatogery = 'Dramatic';
    showDramatic.style.color = '#b5179e';
}

showComedy.onclick = function(){
    resetFunctionBarColor();
    clearContent();
    getListFromDict("type","Comedy");
    currentShowCatogery = 'Comedy';
    showComedy.style.color = '#b5179e';
}

function clearContent(){
    celebrityContainer.innerHTML = '';
}

function resetFunctionBarColor(){
    showAll.style.color = "#6B705C"
    showSciFi.style.color = "#6B705C"
    showHistory.style.color = "#6B705C"
    showDramatic.style.color = "#6B705C"
    showComedy.style.color = "#6B705C"
}

var allFilmPoster = {
    "1": {
        "filmName": "The Shawshank Redemption",
        "year": "1994",
        "director": "Frank Darabont",
        "actor": "Tim Robbins, Morgan Freeman",
        "type": "Dramatic",
        "url": "Shawshank.png",
        "description": "Hope sets people free."
    },
    "2": {
        "filmName": "Farewell My Concubine",
        "year": "1993",
        "director": "Kaige Chen",
        "actor": "Leslie Cheung, Fengyi Zhange",
        "type": "Dramatic",
        "url": "bawangbieji.png",
        "description": "Magnificent."
    },
    "3": {
        "filmName": "Forrest Gump ",
        "year": "1994",
        "director": "Robert Zemeckis",
        "actor": "TIM ROBBINS, MORGAN FREEMAN",
        "type": "Dramatic",
        "url": "forrestgump.png",
        "description": "A Modern History of the United States."
    },
    "4": {
        "filmName": "Titanic",
        "year": "1997",
        "director": "James Cameron",
        "actor": "Leonardo DiCaprio",
        "type": "Dramatic",
        "url": "titanic.png",
        "description": "What is lost is eternal."
    },
    "5": {
        "filmName": "Leon",
        "year": "1994",
        "director": "Luc Besson",
        "actor": "Jean Reno",
        "type": "Dramatic",
        "url": "leon.png",
        "description": "The story of the killer and the little girl."
    },
    "6": {
        "filmName": "Life is Beautiful",
        "year": "1997",
        "director": "Roberto Benigni",
        "actor": "Roberto Benigni",
        "type": "Dramatic",
        "url": "lifeisbeautiful.png",
        "description": "The most beautiful lie."
    },
    "7": {
        "filmName": "Spirited Away",
        "year": "2001",
        "director": "Hayao Miyazaki",
        "actor": "Rumi Hiragi",
        "type": "Dramatic",
        "url": "spiritedaway.png",
        "description": "The best Hayao Miyazaki, the best Jean Hisaishi."
    },
    "8": {
        "filmName": "Schindler's List",
        "year": "1993",
        "director": "Steven Spielberg",
        "actor": "Liam Neeson",
        "type": "History",
        "url": "SchindlersList.png",
        "description": "Save one person is to save the whole world."
    },
    "9": {
        "filmName": "Inception",
        "year": "2010",
        "director": "Christopher Nolan",
        "actor": "Leonardo DiCaprio",
        "type": "Sci-Fi",
        "url": "Inception.png",
        "description": "Nolan gave us a dream that cannot be stolen."
    },
    "10": {
        "filmName": "Hachi: A Dog's Tale",
        "year": "2009",
        "director": "Lasse Hallstrom",
        "actor": "Richard Gere",
        "type": "Dramatic",
        "url": "hachi.png",
        "description": "Never forget the people you love."
    },
    "11": {
        "filmName": "Interstellar",
        "year": "2014",
        "director": "Christopher Nolan",
        "actor": "Matthew McConaughey",
        "type": "Sci-Fi",
        "url": "Interstellar.png",
        "description": "Love is a power that allows us to perceive its presence beyond time and space."
    },
    "12": {
        "filmName": "The Truman Show",
        "year": "1998",
        "director": "Peter Weir",
        "actor": "Jim Carrey",
        "type": "Dramatic",
        "url": "truman.png",
        "description": "If I can never see you again, good morning, good afternoon and good night."
    },
    "13": {
        "filmName": "The Legend of 1900",
        "year": "1998",
        "director": "Giuseppe Tornatore",
        "actor": "Tim Roth",
        "type": "Dramatic",
        "url": "thelegendof1900.png",
        "description": "Everyone has to walk a path that he or she is determined to follow, even if it is in pieces."
    },
    "14": {
        "filmName": "3 Idiots",
        "year": "2009",
        "director": "Rajkumar Hirani",
        "actor": "Aamir Khan",
        "type": "Comedy",
        "url": "threeidiots.png",
        "description": "Handsome version of Bean, high intelligence version of Shea ears."
    },
    "15": {
        "filmName": "Zootopia",
        "year": "2016",
        "director": "Byron Howard",
        "actor": "Rich Moore",
        "type": "Comedy",
        "url": "zootopia.png",
        "description": "Disney gives us the creation of utopia is this, always kind and brave, always unexpected."
    },
    "16": {
        "filmName": "The Godfather",
        "year": "1972",
        "director": "Francis Ford Coppola",
        "actor": "Marlon Brando",
        "type": "Dramatic",
        "url": "godfather.png",
        "description": "Never hold a grudge against your opponent, it will make you lose your mind."
    },
    "17": {
        "filmName": "The Pursuit of Happiness",
        "year": "2006",
        "director": "Gabriele Muccino",
        "actor": "Will Smith",
        "type": "Comedy",
        "url": "pursuit.png",
        "description": "Civilian inspirational film."
    },
    "18": {
        "filmName": "Intouchables",
        "year": "2011",
        "director": "Olivier Nakache",
        "actor": "Eric Toledano",
        "type": "Comedy",
        "url": "intouchables.png",
        "description": "An elegant comedy full of warmth."
    },
    "19": {
        "filmName": "Flipped",
        "year": "2010",
        "director": "Rob Reiner",
        "actor": "Madeline Carroll",
        "type": "Comedy",
        "url": "flipped.png",
        "description": "True happiness comes from deep within."
    },
    "20": {
        "filmName": "The Last Emperor",
        "year": "1987",
        "director": "Bernardo Bertolucci",
        "actor": "John Lone",
        "type": "History",
        "url": "TheLastEmperor.png",
        "description": "Don't compare with me, I'm worse than you."
    },
    "21": {
        "filmName": "Coco",
        "year": "2017",
        "director": "Lee Unkrich",
        "actor": "Anthony Gonzalez",
        "type": "Comedy",
        "url": "coco.png",
        "description": "Death is not really passing away, forgetting is the eternal demise."
    },
    "22": {
        "filmName": "The Dark Knight",
        "year": "2008",
        "director": "Christopher Nolan",
        "actor": "Christian Bale",
        "type": "Sci-Fi",
        "url": "darkknight.png",
        "description": "Endless darkness."
    },
    "23": {
        "filmName": "Up",
        "year": "2009",
        "director": "Pete Doctor",
        "actor": "Edward Asner",
        "type": "Comedy",
        "url": "up.png",
        "description": "In the end those most boring things are the ones that are most missed."
    },
    "24": {
        "filmName": "Dangal",
        "year": "2016",
        "director": "Nitesh Tiwari",
        "actor": "Aamir Khan",
        "type": "Dramatic",
        "url": "dangal.png",
        "description": "You are not fighting for you alone, you have to show millions of women that girls are not just for husbands and wives."
    },
    "25": {
        "filmName": "Catch Me If You Can",
        "year": "2002",
        "director": "Steven Spielberg",
        "actor": "Leonardo DiCaprio",
        "type": "Dramatic",
        "url": "catchmeifyoucan.png",
        "description": "Master crooks and persistent police detectives of the story of you chase me."
    },
    "26": {
        "filmName": "The Pianist",
        "year": "2002",
        "director": "Roman Polanski",
        "actor": "Adrien Brody",
        "type": "History",
        "url": "ThePianist.png",
        "description": "Music can dissolve hatred."
    },
    "27": {
        "filmName": "Let the Bullets Fly ",
        "year": "2010",
        "director": "Wen Jiang",
        "actor": "Adrien Brody",
        "type": "Comedy",
        "url": "bulletfly.png",
        "description": "You translate for me, what is called a surprise."
    },
    "28": {
        "filmName": "The Matrix",
        "year": "1999",
        "director": "Andy Wachowski",
        "actor": "Lana Wachowski",
        "type": "Sci-Fi",
        "url": "matrix.png",
        "description": "Visual Revolution."
    },
    "29": {
        "filmName": "Green book",
        "year": "2018",
        "director": "Peter Farrelly",
        "actor": "Viggo Mortensen",
        "type": "Comedy",
        "url": "greenbook.png",
        "description": "Removing stereotypes takes courage."
    },
    "30": {
        "filmName": "Saving Private Ryan",
        "year": "1998",
        "director": "Steven Spielberg",
        "actor": "Tom Hanks",
        "type": "History",
        "url": "SavingPrivateRyan.png",
        "description": "The story of infection in World War II."
    },
    "31": {
        "filmName": "Avatar",
        "year": "2009",
        "director": "James Cameron",
        "actor": "Sam Worthington",
        "type": "Sci-Fi",
        "url": "avatar.png",
        "description": "Absolutely beautiful in every sense of the word."
    },
    "32": {
        "filmName": "Shutter Island",
        "year": "2010",
        "director": "Martin Scorsese",
        "actor": "Leonardo DiCaprio",
        "type": "Dramatic",
        "url": "shutterisland.png",
        "description": "The young man of the past is now full of knowledge."
    },
    "33": {
        "filmName": "The Grand Budapest Hotel",
        "year": "2014",
        "director": "Wes Anderson",
        "actor": "Ralph Fiennes",
        "type": "Comedy",
        "url": "grandbudapesthotel.png",
        "description": "A small fresh story infused with the sentiment of big history."
    },
    "34": {
        "filmName": "King of Comedy",
        "year": "1999",
        "director": "Stephen Chow",
        "actor": "Man Tat Ng",
        "type": "Comedy",
        "url": "xijuzhiwang.png",
        "description": "I am an actor."
    },
    "35": {
        "filmName": "Kung Fu",
        "year": "2004",
        "director": "Stephen Chow",
        "actor": "Yuan Qiu",
        "type": "Comedy",
        "url": "kungfu.png",
        "description": "The task of policing evil and punishing evil and maintaining world peace is left to you, okay?"
    },
    "36": {
        "filmName": "Django Unchained",
        "year": "2012",
        "director": "Quentin Tarantino",
        "actor": "Jamie Foxx",
        "type": "Dramatic",
        "url": "django.png",
        "description": "Hot damn, that cheesy, sexy, shameless bastard is at it again."
    },
    "37": {
        "filmName": "Hacksaw Ridge",
        "year": "2016",
        "director": "Mel Gibson",
        "actor": "Andrew Garfield",
        "type": "History",
        "url": "xijuzhiwang.png",
        "description": "A good war film will not glorify the battlefield, will not whitewash death, will not dwarf the enemy, will not ignore common sense, and most importantly, will not promote war."
    },
    "38": {
        "filmName": "Ready Player One",
        "year": "2018",
        "director": "Steven Spielberg",
        "actor": "Tye Sheridan",
        "type": "Sci-Fi",
        "url": "readyplayerone.png",
        "description": "Write a love letter to the fans, anime fans and game fans."
    },
    "39": {
        "filmName": "Inside Out",
        "year": "2015",
        "director": "Pete Doctor",
        "actor": "Amy Poehler",
        "type": "Comedy",
        "url": "insideout.png",
        "description": "May none of us have to grow up, and every castle can exist forever."
    },
    "40": {
        "filmName": "Hotel Rwanda",
        "year": "2004",
        "director": "Terry George",
        "actor": "Don Cheadle",
        "type": "History",
        "url": "HotelRwanda.png",
        "description": "When the world closes its eyes, he opens his arms."
    },
    "41": {
        "filmName": "The Green Mile",
        "year": "1999",
        "director": "Frank Darabont",
        "actor": "Tom Hanks",
        "type": "Dramatic",
        "url": "thegreenmile.png",
        "description": "Angel temporarily left."
    },
    "42": {
        "filmName": "Joker",
        "year": "2019",
        "director": "Todd Philips",
        "actor": "Joaquin Phoenix",
        "type": "Dramatic",
        "url": "joker.png",
        "description": "Behind the smiling face lies a heartbreaking experience."
    },
    "43": {
        "filmName": "Blood Diamond",
        "year": "2006",
        "director": "Edward Zwick",
        "actor": "Leonardo DiCaprio",
        "type": "Dramatic",
        "url": "blooddiamond.png",
        "description": "Behind every beautiful thing is the reality of dripping blood."
    },
    "44": {
        "filmName": "Lord of War",
        "year": "2005",
        "director": "Andrew Niccol",
        "actor": "Nicolas Cage",
        "type": "Dramatic",
        "url": "lordofwar.png",
        "description": "Be a pawn that makes others need you."
    },
    "45": {
        "filmName": "The Martain",
        "year": "2015",
        "director": "Ridley Scott",
        "actor": "Matt Damon",
        "type": "Sci-Fi",
        "url": "martian.png",
        "description": "Trying to live and survive in desperate times."
    },
    "46": {
        "filmName": "Like Stars on Earth",
        "year": "2007",
        "director": "Aamir Khan",
        "actor": "Darsheel Safary",
        "type": "Dramatic",
        "url": "likestarsonearth.png",
        "description": "The beginning and end of the angel protection incident."
    },
    "47": {
        "filmName": "Tenet",
        "year": "2020",
        "director": "Christopher Nolan",
        "actor": "John David Washington",
        "type": "Sci-Fi",
        "url": "Tenet.png",
        "description": "A new way of looking at the world."
    },
    "48": {
        "filmName": "Avengers: Endgame",
        "year": "2019",
        "director": "Anthony Russo",
        "actor": "Robert Downey, Chris Evans, Chris Hemsworth, Mark Ruffalo",
        "type": "Sci-Fi",
        "url": "avenger4.png",
        "description": "The story that talk about how the Avengers stop against the thanos's blip event."
    },
    "49": {
        "filmName": "Avengers: Infinity War",
        "year": "2018",
        "director": "Anthony Russo",
        "actor": "Robert Downey, Chris Evans, Chris Hemsworth, Mark Ruffalo",
        "type": "Sci-Fi",
        "url": "avengers3.png",
        "description": "The story that talk about how the Avengers stop against the thanos's blip event."
    },
    "50": {
        "filmName": "Avengers: Age of Ultron",
        "year": "2015",
        "director": "Joss Wheldon",
        "actor": "Robert Downey, Chris Evans, Chris Hemsworth, Mark Ruffalo",
        "type": "Sci-Fi",
        "url": "avengers2.png",
        "description": "The story that talk about how the Avengers stop against the thanos's blip event."
    },
    "51": {
        "filmName": "Everything Everywhere All at Once",
        "year": "2022",
        "director": "Daniel Kwan",
        "actor": "Michelle Yeoh",
        "type": "Comedy",
        "url": "everythingeverywhere.png",
        "description": "It would be nice to stop at the rock."
    },
    "52": {
        "filmName": "Bad Genius",
        "year": "2017",
        "director": "Nattawut Poonpiriya",
        "actor": "Chutimon Chuengcharoensukying",
        "type": "Dramatic",
        "url": "badgenius.png",
        "description": "Highly intelligent examination room cheating for profiteering."
    },
    "53": {
        "filmName": "The Flowers of War",
        "year": "2011",
        "director": "Yimou Zhang",
        "actor": "Christian Bale",
        "type": "History",
        "url": "theflowers.png",
        "description": "A touch of warmth in the coldness of war"
    },
    "54": {
        "filmName": "Brother Bajrangi",
        "year": "2015",
        "director": "Kabir Khan",
        "actor": "Salman Khan",
        "type": "Comedy",
        "url": "bajrangi.png",
        "description": "The theme is love, through racial religious national disputes"
    },
    "55": {
        "filmName": "Dunkirk",
        "year": "2017",
        "director": "Christopher Nolan",
        "actor": "Fionn Whitehead",
        "type": "History",
        "url": "dunkirk.png",
        "description": "I do not care, anyway, Nolan is the best director in my mind."
    },
    "56": {
        "filmName": "12 Strong",
        "year": "2018",
        "director": "Nicolai Fuglsig",
        "actor": "Chris Hemsworth",
        "type": "History",
        "url": "twelvestrong.png",
        "description": "Warriors on horseback are the heroes who protect the country."
    },
    "57": {
        "filmName": "Apollo 11",
        "year": "2019",
        "director": "Todd Douglas Miller",
        "actor": "Neil Armstrong",
        "type": "History",
        "url": "apollo.png",
        "description": "A major step forward in the history of documentary filmmaking!"
    },
    "58": {
        "filmName": "Midway",
        "year": "2019",
        "director": "Roland Emmerich",
        "actor": "Ed Skrein",
        "type": "History",
        "url": "midway.png",
        "description": "The incredible battle near Midway in the Pacific."
    },
    "59": {
        "filmName": "Warriors of the Rainbow: Seediq Bale",
        "year": "2012",
        "director": "Te-Sheng wei",
        "actor": "Ching-tai Lin",
        "type": "History",
        "url": "saidekebalai.png",
        "description": "Take back the hunting ground that belongs to them."
    },
    "60": {
        "filmName": "Underwater",
        "year": "2020",
        "director": "William Eubank",
        "actor": "Kristen Stewart",
        "type": "Sci-Fi",
        "url": "underwater.png",
        "description": "A distant unknown space, a closed cabin, a monster from nowhere."
    },
    "61": {
        "filmName": "Band of Brothers",
        "year": "2001",
        "director": "David Frankel",
        "actor": "Damian Lewis",
        "type": "History",
        "url": "bandofbrothers.png",
        "description": "An anthem and requiem for ordinary soldiers."
    },
    "62": {
        "filmName": "Battleship Island",
        "year": "2017",
        "director": "Seung-wan Ryoo",
        "actor": "Jeong-min Hwang",
        "type": "History",
        "url": "battleshipisland.png",
        "description": "A great man of his generation indeed."
    },
    "63": {
        "filmName": "Gandhi",
        "year": "1982",
        "director": "Richard Attenborough",
        "actor": "Ben Kingsley",
        "type": "History",
        "url": "gandhi.png",
        "description": "A great man of his generation indeed."
    },
    "64": {
        "filmName": "Pearl Harbor",
        "year": "2001",
        "director": "Michael Bay",
        "actor": "Ben Affleck",
        "type": "History",
        "url": "pearlharbor.png",
        "description": "How many years ago, that song is still around the beam three feet."
    },
    "65": {
        "filmName": "Generation War",
        "year": "2013",
        "director": "Philipp Kalmbach",
        "actor": "Volker Bruch",
        "type": "History",
        "url": "GenerationWar.png",
        "description": "War can reveal the worst in us."
    },
    "66": {
        "filmName": "The Wolf of Wall Street",
        "year": "2013",
        "director": "Martin Scorsese",
        "actor": "Leonardo DiCaprio",
        "type": "Dramatic",
        "url": "thewolfofwallstreet.png",
        "description": "The new gangster classic of the twenty-first century."
    },
    "67": {
        "filmName": "The Blind Melody",
        "year": "2018",
        "director": "Siram Raghavan",
        "actor": "Ayushmann Khurrana",
        "type": "Comedy",
        "url": "andhadhun.png",
        "description": "What is life? It depends on the liver."
    },
    "68": {
        "filmName": "Hello Mr. Billionaire",
        "year": "2018",
        "director": "Yan Fei",
        "actor": "Shen Teng",
        "type": "Comedy",
        "url": "tomato.png",
        "description": "The power of comedy more advanced."
    },
    "69": {
        "filmName": "Spider-Man: No Way Home",
        "year": "2021",
        "director": "Jon Watts",
        "actor": "Tom Holland",
        "type": "Sci-Fi",
        "url": "spiderman.png",
        "description": "It's not a good movie, but it's a perfect Spider-Man movie."
    },
    "70": {
        "filmName": "Godzilla vs Kong",
        "year": "2021",
        "director": "Adam Wingard",
        "actor": "Alexander Skarsgard",
        "type": "Sci-Fi",
        "url": "godzilla.png",
        "description": "The dust has settled, the real evil forces have been eliminated again."
    },
    "71": {
        "filmName": "Moonfall",
        "year": "2022",
        "director": "Roland Emmerich",
        "actor": "Halle Berry",
        "type": "Sci-Fi",
        "url": "moonfall.jpg",
        "description": "People generally have pessimistic expectations about the future of the world with a finished look."
    },
    "72": {
        "filmName": "Doctor Strange in the Multiverse of Madness  ",
        "year": "2022",
        "director": "Sam Raimi",
        "actor": "Benedict Cumberbatch",
        "type": "Sci-fi",
        "url": "doctorstrange.jpg",
        "description": "A crazy multiverse full of infinite unknowns is about to unfold, and anything is possible."
    },
    "73": {
        "filmName": "The Imitation Game ",
        "year": "2014",
        "director": "Morten Tyldum",
        "actor": "Benedict Cumberbatch",
        "type": "Dramatic",
        "url": "imitationgame.png",
        "description": "The machine can't think, but all the heart and emotions that the genius poured into it are perhaps the only valuable treasures of his lonely and short life."
    }
}

let celebrityContainer = document.getElementsByClassName("film-poster-container")[0];

for (let index = 1; index < 74; index++) {
    const element = allFilmPoster[index.toString()];
    createAllFilmCard(element);
}

function createAllFilmCard(obj){
    let name = obj["filmName"];
    let year = obj["year"];
    let director = obj["director"];
    let actor = obj["actor"];
    let url = obj["url"];
    let description = obj["description"];

    let filmCard = document.createElement("div");
    filmCard.className = 'container';
    filmCard.innerHTML = `
    <div class="left-image">
                        <img src="../Image/${url}" alt="${name}">
                    </div>
                    <div class="right-content">
                        <div class="info">
                            <div class="name">${name}</div>
                            <div class="year">(${year})</div><br/>
                            <div class="label">Director:</div>
                            <div class="director-name">${director}</div>
                            <br/>
                            <div class="label">Actor:</div>
                            <div class="actor-name">${actor}</div>
                        </div>
                        <div class="movie-contents">
                            ${description}
                        </div>
                    </div>
    `
    celebrityContainer.append(filmCard);
}


function getListFromDict(key, value){

    let res = []
    let length = Object.keys(allFilmPoster).length;

    for (let index = 1; index <= length; index++) {
        const element = allFilmPoster[index.toString()];
        if(element[key] == value){
            res.push(element);
            createAllFilmCard(element);
        }
    }
    return res;
}

//random card container

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
window.onload = function () {
    move(img3).scale(1.5, 1.5).end();
    move(img1).y(random()).end();
    move(img2).y(random()).end();
    move(img4).y(random()).end();
    move(img5).y(random()).end();
}

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

            //Side to middle
            move(element)
                .set("left", positionDict["3"])
                .scale(1.5, 1.5)
                .end();

            //Middle to side
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
