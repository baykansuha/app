
const menuOpen = document.getElementById('resMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('openMenu')

menuOpen.addEventListener("click", function () {
    menu.style.display = 'block'
    closeMenu.style.display = 'block'
    menuOpen.style.display = 'none'
})

closeMenu.addEventListener("click", function () {
    menu.style.display = 'none'
    closeMenu.style.display = 'none'
    menuOpen.style.display = 'block'
})


$ = function (id) {
    return document.getElementById(id);
}

var show = function (id) {
    $(id).style.display = 'flex';
}
var hide = function (id) {
    $(id).style.display = 'none';
}

const videoId = 'kBDOcB75CVI'; // Replace with your YouTube video ID


const openButton = document.getElementById('openButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

let player; // Declare the player variable

closeButton.addEventListener('click', function () {
    popup.style.display = 'none';
    stopVideo(); // Stop the video when the popup is closed
});

openButton.addEventListener('click', function () {
    popup.style.display = 'flex';
    createPlayer();
});

closeButton.addEventListener('click', function () {
    popup.style.display = 'none';
    stopVideo(); // Stop the video when the popup is closed
});

window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none';
        stopVideo(); // Stop the video when clicking outside the popup
    }
});

function createPlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: videoId,
        });
    };
}

function stopVideo() {
    if (player && player.stopVideo) {
        player.stopVideo();
    }
}


