import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframeRef);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('LOCALSTORAGE_KEY', seconds);
}

function initPage() {
  try {
    let currentTime = player.setCurrentTime(
      localStorage.getItem('LOCALSTORAGE_KEY')
    );
  } catch (error) {}
}

initPage();
