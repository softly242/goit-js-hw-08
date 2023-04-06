import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const localTime = localStorage.getItem('videoplayer-current-time');

console.log(localTime);

player.setCurrentTime(Number(localTime));
player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const saveTime = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log('DELAET');
};

player.on('timeupdate', throttle(saveTime, 1000));
