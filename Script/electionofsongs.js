let muscisIDsList = ["music1", "music2", "music3", "music4", "music5", "music6", "music7", "music8", "music9", "music10","music11", "music12", "music13", "music14"]

let musicCards = document.getElementsByClassName("music-card");
if (musicCards) {
    for (let index = 0; index < musicCards.length; index++) {
        const element = musicCards[index];
        element.onmouseover = function () {
            stopAllMusic();
            let musicELe = document.getElementById(muscisIDsList[index])
            musicELe.loop = false;
            musicELe.play();
        }

        element.onmouseout = function () {
            stopAllMusic();
        }
    }
}

function stopAllMusic() {
    for (let index = 0; index < muscisIDsList.length; index++) {
        const element = document.getElementById(muscisIDsList[index]);
        element.load();
    }
}