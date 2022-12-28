import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

const passedTime = localStorage.getItem(STORAGE_KEY);

if (passedTime) {
    player.setCurrentTime(passedTime);
};

function onTimeUpdate(event) {
    const currentTime = event.seconds;
    localStorage.setItem(STORAGE_KEY, currentTime);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));