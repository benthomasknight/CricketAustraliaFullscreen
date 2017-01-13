var _playerName = 'video-player_html5_api';

var _player;
function getPlayer() {
  if(!_player) {
    _player = window.videojs(_playerName);
  }
  return _player;
}


window.setTimeout(runFullscreenExtension, 1000);

function runFullscreenExtension() {
    if(typeof window.videojs == 'undefined') {
        window.setTimeout(runFullscreenExtension, 1000);
        return;
    }
    var player = getPlayer();
    if(!player) {
        window.setTimeout(runFullscreenExtension, 1000);
        return;
    }

    // the player exists so add the button
    createFullscreenButton();
}

function createFullscreenButton() {
  var nav = document.getElementsByClassName('vjs-control-bar');
  var button = document.createElement('button');
  button.setAttribute('class', 'vjs-live-controls vjs-control');
  button.setAttribute('type', 'button');
  button.setAttribute('aria-live', 'polite');

  var button2 = document.createElement('button');
  button2.setAttribute('class', 'vjs-live-display');
  button2.setAttribute('aria-live', 'off');

  var textnode = document.createTextNode('Full');
  button.appendChild(button2);
  button2.appendChild(textnode);
  nav[0].appendChild(button);

  // toggle fullscreen when the new button is clicked
  button.addEventListener('click', toggleFullscreen, false);
}

function toggleFullscreen(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var player = getPlayer();

    if (player.isFullscreen()) {
        player.exitFullscreen();
    } else {
        player.requestFullscreen();
    }
}