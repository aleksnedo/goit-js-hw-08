import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframeRef);

player.on('eventName', function () {
  console.log(`Played the video`);
});
