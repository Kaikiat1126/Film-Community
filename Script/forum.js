let actor_page = document.getElementById('more-actor');
let actress_page = document.getElementById('more-actress');
let director_page = document.getElementById('more-director');

actor_page.onclick = function(){
    location.href = 'https://www.imdb.com/list/ls050274118/';
}

actress_page.onclick = function(){
    location.href = 'https://www.imdb.com/list/ls004660971/';
}

director_page.onclick = function(){
    location.href = 'https://www.imdb.com/list/ls056848274/';
}


var celebrityJsonData = {
    "1": {
        "name": "JENNIFER LAWRENCE",
        "week": "Next Week",
        "country": "USA",
        "movie": "X-Men: Days of Future Past",
        "url": "actress3.png",
        "description": "Jennifer lawrence is a well-known American actress. She won the Best Newcomer Award at the Venice Film Festival in 2008 for her film Burning Plains, and later won the Best Actress Award at the 85th Academy Awards for her roles in the Hunger Games, The X-Men Prequel, Winter's Bones and other film and television works. She is a very graceful beauty."
    },
    "2": {
        "name": "SCARLETT JOHANSSON",
        "week": "Next Week",
        "country": "USA",
        "movie": "American Rhapsody",
        "url": "actress6.png",
        "description": "Scarlett Johansson is a famous American singer and model. She has appeared in many film and television works, such as American Rhapsody, iron man 2, The Avengers, She, etc. She has won the Best Actress Award at the Rome Film Festival, the winner of the Rome Film Festival and many other awards. In 2016, Forbes ranked third among the top ten highest-paid actresses in the world."
    },
    "3": {
        "name": "JACKIE CHAN",
        "week": "This Week",
        "country": "China",
        "movie": "Drunken Boxing",
        "url": "actor6.png",
        "description": "The reason why Jackie Chan can be listed among the top ten international superstars in the world is due to his many excellent works, which have made him extremely popular at home and abroad. Drunken Boxing has also become the beginning of Chinese drama Kung Fu School. In 2017, he also won the Lifetime Achievement Award of the 89th Academy Awards, thus establishing his position in the global entertainment industry."
    },
    "4": {
        "name": "ANGELINA JOLIE",
        "week": "Next Week",
        "country": "USA",
        "movie": "Tomb Raider",
        "url": "actress2.png",
        "description": "Angelina Jolie is a famous American actress and philanthropist. Is a powerful actress who has won many 72nd Academy Awards for Best Supporting Actress. She has acted in films such as 'Poker Misleads Me for 30 Years', 'Ghost Girl', 'Electronic Man 2' and 'Tomb Raider', etc. She is beautiful and attractive, and can skillfully blend the screen image with her true self."
    },
    "5": {
        "name": "ROBERT DOWNEY JR",
        "week": "This Week",
        "country": "USA",
        "movie": "Sherlock Holmes",
        "url": "actor8.jpg",
        "description": "Robert Downey Jr. is an American actor and singer who was nominated for an Oscar and won the Golden Globe Award. From the late 1980s to the early 1990s, he gradually became famous for his acting skills."
    },
    "6": {
        "name": "SYLVESTER STALLONE",
        "week": "This Week",
        "country": "USA",
        "movie": "Death Squad",
        "url": "actor4.jpg",
        "description": "Sylvester Stallone is a famous action movie actor in the United States, and enjoys a high popularity all over the world. The Death Squad Series has also created many box office records. Now Stallone is not only involved in film production as an actor, but also as a screenwriter, director and producer, thus establishing his position among the top ten international superstars in the world."
    },
    "7": {
        "name": "KATHARLINE HEPBURN",
        "week": "Next Week",
        "country": "USA",
        "movie": "Little Women",
        "url": "actress1.png",
        "description": "Katharine hepburn is a well-known American film actress, a legend in Hollywood. She won the Best Actress Oscar four times and was named the greatest actress in American film history. She is an international superstar loved by the audience because of her delicate facial features, beautiful appearance and elegant manners."
    },
    "8": {
        "name": "ELVIS PRESLEY",
        "week": "This Week",
        "country": "Paradise, Hawaiian Style",
        "movie": "USA",
        "url": "actor2.jpg",
        "description": "Elvis Presley is known as the representative figure of rock music and the symbol of immortality. It has created countless classic works for the world by transcending race and culture, and has become the idol of countless people."
    },
    "9": {
        "name": "MARILYN MONROE",
        "week": "Next Week",
        "country": "USA",
        "movie": "Passionate",
        "url": "actress5.png",
        "description": "Marilyn Monroe was born in Los Angeles, California. Is a very beautiful woman. Among the top ten international female superstars, she is a famous American actress. His film and television works, such as 'It's still in the dead of night', 'misfits' and 'Passionate', have won the Best Actress Award."
    },
    "10": {
        "name": "LEONARDO DICAPRIO",
        "week": "This Week",
        "country": "USA",
        "movie": "Titanic",
        "url": "actor7.png",
        "description": "Leonardo DiCaprio, a famous American actor, made his debut in Growing Pains in 1990, and became famous all over the world in 1997 for his role as Jack in Titanic. In the following 20 years, dozens of classic works appeared, such as revenant, The Wolf of Wall Street, Inception, Shutter Island and so on."
    },
    "11": {
        "name": "AUDREY HEPBURN",
        "week": "Next Week",
        "country": "Belgium",
        "movie": "Breakfast at Tiffany's",
        "url": "actress4.png",
        "description": "Born in Brussels, Belgium, Audrey Hepburn is a beautiful woman with noble temperament, and the image of princess in Roman Holiday wins the love of many people. His representative film and television works include My Fair Lady, Forever, and Breakfast at Tiffany's, which won the Oscar for Humanitarian Award. At the same time, he is a representative of UNICEF Goodwill Ambassador and a caring international superstar."
    },
    "12": {
        "name": "BRUCE LEE",
        "week": "This Week",
        "country": "China",
        "movie": "Fist of Fury",
        "url": "actor3.jpg",
        "description": "Bruce Lee is the most influential Chinese actor in the world. He brought Chinese traditional martial arts to the whole world, became the founder of martial arts and philosophy, and was called 'forbidden kingdom' by the United States. In Time Magazine in 1999, Bruce Lee and President Kennedy were listed on the list of heroes and idols in the 20th century."
    },
    "13": {
        "name": "CHARLIE CHAPLIN",
        "week": "This Week",
        "country": "British",
        "movie": "Modern Times",
        "url": "actor1.png",
        "description": "Charlie Chaplin is a famous British actor and the most representative figure among comedians. Many of his films have become masterpieces. Chaplin devoted his whole life to the film industry, devoted himself to bringing laughter to the audience, and thus won many international awards, such as the Honorary Award of the Academy Award and the Golden Lion Award for Lifelong Achievement of Venice Film Festival."
    },
    "14": {
        "name": "ROWAN ATKINSON",
        "week": "This Week",
        "country": "British",
        "movie": "Mr. Bean",
        "url": "actor5.jpg",
        "description": "The audience is most familiar with the role of Mr. Bean, Rowan Sebastian Atkinson CBE. He became popular with his unique humorous performance and became one of the most representative figures among comedians. At the 2012 Olympic Garden in London, England, it also performed in the opening ceremony at that time."
    }
}

let celebrityContainer = document.getElementsByClassName("celebrities-container")[0];

for (let index = 1; index < 15; index++) {
    const element = celebrityJsonData[index.toString()];
    createCelebrtyCard(element);
}

function createCelebrtyCard(obj) {
    let name = obj["name"];
    let week = obj["week"];
    let country = obj["country"];
    let movie = obj["movie"];
    let url = obj["url"];
    let description = obj["description"];

    let celebrityCard = document.createElement("div");
    celebrityCard.className = "container";
    celebrityCard.innerHTML = `
    <div class="left-image">
                        <img src="../Image/${url}" alt="${name}">
                    </div>
                    <div class="right-content">
                        <div class="info">
                            <div class="name">${name}</div>
                            <div class="week">${week}</div>
                            <br/>
                            <div class="small-info">${country}</div>
                            <div class="famous-movie">${movie}</div>
                        </div>
                        <div class="celebritycontents">
                            ${description}
                        </div>
                    </div>
`
    celebrityContainer.append(celebrityCard);
}