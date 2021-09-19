var audioPlayer = function (_Tracks, basePath) {
  "use strict";

  // Private variables
  var _currentTrack = 1;
  var _elements = {
    audio: document.getElementById("audio"),
    playerButtons: {
      largeToggleBtn: document.querySelector(".ToggleButton"),
      nextTrackBtn: document.querySelector(".NextButton"),
      previousTrackBtn: document.querySelector(".PrevButton"),
      smallToggleBtn: document.getElementsByClassName("Container__PlaylistItemIcon"),
    },
    progressBar: document.querySelector(".ProgressBar"),
    playListRows: document.getElementsByClassName("PlaylistItem__Component"),

    trackInfoBox: document.querySelector(".Container__Progress .Player__Time"),
  };
  var _playAHead = false;
  // var _progressCounter = 0;
  var _progressIndicator =
    _elements.progressBar.querySelector('.ProgressBar > .ProgressBar__Indicator');
  var _trackLoaded = false;

  /**
   * Determines the buffer progress.
   *
   * @param audio The audio element on the page.
   **/
  var _updateProgress = function (audio) {
    var newPlayedWidth = parseFloat(audio.currentTime) * 100 / audio.duration;

    var progressPlayed = _elements.progressBar.children[1];

    progressPlayed.style.width = newPlayedWidth + "%";
  };

  /**
   * A utility function for getting the event cordinates based on browser type.
   *
   * @param e The JavaScript event.
   **/
  var _getXY = function (e) {
    var containerX = _elements.progressBar.offsetLeft;
    var containerY = _elements.progressBar.offsetTop;

    var coords = {
      x: null,
      y: null,
    };

    var isTouchSupported = "ontouchstart" in window;

    if (isTouchSupported) {
      //For touch devices
      coords.x = e.clientX - containerX;
      coords.y = e.clientY - containerY;

      return coords;
    } else if (e.offsetX || e.offsetX === 0) {
      // For webkit browsers
      coords.x = e.offsetX;
      coords.y = e.offsetY;

      return coords;
    } else if (e.layerX || e.layerX === 0) {
      // For Mozilla firefox
      coords.x = e.layerX;
      coords.y = e.layerY;

      return coords;
    }
  };

  var _handleProgressIndicatorClick = function (e) {
    var progressBar = document.querySelector(".ProgressBar");
    // console.log(progressBar);
    var xCoords = _getXY(e).x;

    return (
      xCoords / progressBar.offsetWidth
    )
  };

  /**
   * Initializes the html5 audio player and the playlist.
   *
   **/
  var initPlayer = function () {
    if (_currentTrack === 1 || _currentTrack === null) {
      // console.log(_elements)
      _elements.playerButtons.previousTrackBtn.classList.add("disabled");
    }

    //Adding event listeners to playlist clickable elements.
    for (var i = 0; i < _elements.playListRows.length; i++) {
      var playListLink = _elements.playListRows[i];

      //Playlist link clicked.
      playListLink.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          var selectedTrack = parseInt(
            this.getAttribute("data-track-row")
          );

          // console.log(selectedTrack, _currentTrack);

          if (selectedTrack !== _currentTrack) {
            // _resetPlayStatus();
            _currentTrack = null;
            _trackLoaded = false;
          }

          if (_trackLoaded === false) {
            _currentTrack = parseInt(selectedTrack);
            _setTrack();
          } else {
            _playBack(this);
          }
          // console.log(selectedTrack, _currentTrack);

        },
        false
      );

    }

    //Audio time has changed so update it.
    _elements.audio.addEventListener("timeupdate", _trackTimeChanged, false);

    //Audio buffer has changed so update it.
    _elements.audio.addEventListener("progress", function (e) {
      // console.log('progress', e, 'buf', this.buffered.length);
      if (this.buffered.length > 0) {
        _bufferProgress(this);
      }
    })

    //Audio track has ended playing.
    _elements.audio.addEventListener(
      "ended",
      function (e) {
        _trackHasEnded();
      },
      false
    );

    _elements.audio.addEventListener("loadstart", function (e) {
      // console.log('loadstart', e);
      _elements.trackInfoBox.classList.add("Not__Loaded");

    })

    _elements.audio.addEventListener("loadeddata", function (e) {
      // console.log('loadeddata', e);
      setTimeout(function () {
        _elements.trackInfoBox.classList.remove("Not__Loaded");

      }, 600)

    })

    //Audio error.
    _elements.audio.addEventListener(
      "error",
      function (e) {
        switch (e.target.error.code) {
          case e.target.error.MEDIA_ERR_ABORTED:
            alert("You aborted the video playback.");
            break;
          case e.target.error.MEDIA_ERR_NETWORK:
            alert("A network error caused the audio download to fail.");
            break;
          case e.target.error.MEDIA_ERR_DECODE:
            alert(
              "The audio playback was aborted due to a corruption problem or because the video used features your browser did not support."
            );
            break;
          case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            alert(
              "The video audio not be loaded, either because the server or network failed or because the format is not supported."
            );
            break;
          default:
            alert("An unknown error occurred.");
            break;
        }
        _trackLoaded = false;
        // _resetPlayStatus();
      },
      false
    );

    //Large toggle button clicked.
    _elements.playerButtons.largeToggleBtn.addEventListener(
      "click",
      function (e) {
        if (_trackLoaded === false) {
          _currentTrack = parseInt(1);
          _setTrack();
        } else {
          _playBack();
        }
      },
      false
    );

    //Next track button clicked.
    _elements.playerButtons.nextTrackBtn.addEventListener(
      "click",
      function (e) {
        if (this.classList.contains("disabled") !== true) {
          _currentTrack++;
          _trackLoaded = false;
          // _resetPlayStatus();
          _setTrack();
        }
      },
      false
    );

    //Previous track button clicked.
    _elements.playerButtons.previousTrackBtn.addEventListener(
      "click",
      function (e) {
        if (this.classList.contains("disabled") !== true) {
          _currentTrack--;
          _trackLoaded = false;
          // _resetPlayStatus();
          _setTrack();
        }
      },
      false
    );

    // User is moving progress indicator.
    _elements.progressBar.addEventListener("click", _mouseClick, false);
    // console.log(_progressIndicator);
    _progressIndicator.addEventListener("mousedown", _mouseDown, false);

    // //User stops moving progress indicator.
    window.addEventListener("mouseup", _mouseUp, false);

    // _setTrack();
    // _playBack();
    _setTrackTitle(_currentTrack, _Tracks);
    _setActiveItem(_currentTrack, _elements.playListRows);
    };

  var _mouseClick = function (e) {

    // _moveProgressIndicator(e);

    var duration = parseFloat(audio.duration);
    var newPositionPercent = parseFloat(_handleProgressIndicatorClick(e));

    audio.currentTime = duration * newPositionPercent;
  }

  /**
   * Handles the mousedown event by a user and determines if the mouse is being moved.
   *
   * @param e The event object.
   **/
  var _mouseDown = function (e) {
    console.log("mouse down");
    window.addEventListener("mousemove", _moveProgressIndicator, true);
    audio.removeEventListener("timeupdate", _trackTimeChanged, false);

    _playAHead = true;
  };

  /**
   * Handles the mouseup event by a user.
   *
   * @param e The event object.
   **/
  var _mouseUp = function (e) {
    console.log("mouse up");

    if (_playAHead === true) {
      var duration = parseFloat(audio.duration);
      var positionNewPercent = parseFloat(_handleProgressIndicatorClick(e));
      window.removeEventListener("mousemove", _moveProgressIndicator, true);

      audio.currentTime = duration * positionNewPercent;
      audio.addEventListener("timeupdate", _trackTimeChanged, false);
      _playAHead = false;
    }
  };

  /**
   * Moves the progress indicator to a new point in the audio.
   *
   * @param e The event object.
   **/
  var _moveProgressIndicator = function (e) {
    console.log("move progress bar");
    var newPosition = 0;
    var progressBarOffsetLeft = _elements.progressBar.offsetLeft;
    var progressBarWidth = _elements.progressBar.offsetWidth;
    var progressPlayed = _elements.progressBar.children[1];
    // var progressIndicatorWidth = _progressIndicator.offsetWidth;
    var xCoords = _getXY(e).x;


    // progressBarWidth = 
    // - progressIndicatorWidth;
    newPosition = parseFloat((xCoords / progressBarWidth) * 100)
    // - progressBarOffsetLeft;

    // console.log('click', xCoords, 'pos', progressPlayed.style.width, 'new', newPosition, 'W', progressBarWidth);

    if (xCoords > 0 && xCoords < progressBarWidth) {
      progressPlayed.style.width = `${newPosition}%`;
    } else if (xCoords <= 0) {
      progressPlayed.style.width = "0%";
    } else if (xCoords >= progressBarWidth) {
      progressPlayed.style.width = '100%';
    }
  };

  /**
   * Controls playback of the audio element.
   *
   **/
  var _playBack = function () {
    if (_elements.audio.paused) {
      _elements.audio.play();
      _updatePlayStatus(true);
      // document.title = "\u25B6 " + document.title;
    } else {
      _elements.audio.pause();
      _updatePlayStatus(false);
      // document.title = document.title.substr(2);
    }

    // _elements.trackInfoBox.classList.remove("Not__Loaded");

  };

  /**
   * Sets the track if it hasn't already been loaded yet.
   *
   **/
  var _setTrack = function () {
    document.querySelector(".ProgressBar__Played").style.width = "0%";

    var songURL = basePath + _Tracks[_currentTrack - 1].src;

    _elements.audio.setAttribute("src", songURL);
    _elements.audio.load();

    _trackLoaded = true;

    _setTrackTitle(_currentTrack, _Tracks);
    _setActiveItem(_currentTrack, _elements.playListRows);

    _playBack();
  };

  /**
   * Sets the activly playing item within the playlist.
   *
   * @param currentTrack The current track number being played.
   * @param playListRows The playlist object.
   **/
  var _setActiveItem = function (currentTrack, playListRows) {
    for (var i = 0; i < playListRows.length; i++) {
      playListRows[i].classList.remove('Active__Track');
    }

    playListRows[currentTrack - 1].classList.add('Active__Track');
  };

  /**
   * Sets the text for the currently playing song.
   *
   * @param currentTrack The current track number being played.
   * @param playListRows The playlist object.
   **/
  var _setTrackTitle = function (currentTrack, trackList) {
    var trackTitleBox = document.querySelectorAll(
      "#Playlist .Track__Title"
    );
    var trackTitle = trackList[currentTrack - 1].title;
    trackTitleBox[0].innerHTML = trackTitle;
    trackTitleBox[1].innerHTML = trackTitle;
  };

  /**
   * Plays the next track when a track has ended playing.
   *
   **/
  var _trackHasEnded = function () {
    parseInt(_currentTrack);
    _currentTrack =
      _currentTrack === _Tracks.length ? 1 : _currentTrack + 1;
    _trackLoaded = false;

    // _resetPlayStatus();

    _setTrack();
  };

  /**
   * Updates the time for the song being played.
   *
   **/
  var _trackTimeChanged = function () {
    var currentTimeBox = document.querySelector(
      "#Playlist .Container__Progress .Player__Time .Current"
    );
    var currentTime = _elements.audio.currentTime;
    var duration = _elements.audio.duration;
    var durationBox = document.querySelector(
      "#Playlist .Container__Progress .Player__Time .Duration"
    );
    var trackCurrentTime = _trackTime(currentTime);
    var trackDuration = duration ? _trackTime(duration) : "00:00";

    currentTimeBox.innerHTML = trackCurrentTime;
    durationBox.innerHTML = trackDuration;

    _updateProgress(_elements.audio);
    _updateProgressIndicator();

  };

  /**
   * A utility function for converting a time in miliseconds to a readable time of minutes and seconds.
   *
   * @param seconds The time in seconds.
   *
   * @return time The time in minutes and/or seconds.
   **/
  var _trackTime = function (seconds) {
    var min = 0;
    var sec = Math.floor(seconds);
    var time = 0;

    min = Math.floor(sec / 60);

    min = min >= 10 ? min : "0" + min;

    sec = Math.floor(sec % 60);

    sec = sec >= 10 ? sec : "0" + sec;

    time = min + ":" + sec;

    return time;
  };

  /**
   * Updates downloaded bar
   *
   **/
  var _bufferProgress = function (audio) {
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    var l = audio.buffered.length
    // console.log(l);
    // console.log(audio.buffered.start(0));
    // console.log(currentTime);

    // console.log(audio.buffered.end(0));
    // console.log(audio.buffered.end(0) / duration *100);

    if (duration > 0) {
      for (var i = 0; i < l; i++) {
        // if (audio.buffered.start(l - 1 - i) <= currentTime) {
        if (audio.buffered.end(l - 1 - i) > currentTime) {
          _elements.progressBar.children[0].style.width = (audio.buffered.end(l - 1 - i) / duration) * 100 + "%";
          break;
        }
      }
    }
  }


  /**
   * Updates both the large and small toggle buttons accordingly.
   *
   * @param audioPlaying A booean value indicating if audio is playing or paused.
   **/
  var _updatePlayStatus = function (audioPlaying) {
    if (audioPlaying) {
      _elements.playerButtons.largeToggleBtn.querySelector('.PlayIcon').style = "display:none;";
      _elements.playerButtons.largeToggleBtn.querySelector('.PauseIcon').style = "";

      //   _elements.playerButtons.smallToggleBtn[
      //     _currentTrack - 1
      //   ].querySelector('i.fas').className = "fas fa-pause-circle";
    } else {
      _elements.playerButtons.largeToggleBtn.querySelector('.PauseIcon').style = "display:none;";
      _elements.playerButtons.largeToggleBtn.querySelector('.PlayIcon').style = "";

      //   _elements.playerButtons.smallToggleBtn[
      //     _currentTrack - 1
      //   ].querySelector('i.fas').className = "fas fa-play-circle";
    }
    // console.log('check:', _currentTrack);
    //Update next and previous buttons accordingly
    if (_currentTrack === 1) {
      _elements.playerButtons.previousTrackBtn.classList.add("disabled");
      _elements.playerButtons.nextTrackBtn.classList.remove("disabled");
    } else if (
      _currentTrack > 1 &&
      _currentTrack !== _Tracks.length
    ) {
      _elements.playerButtons.previousTrackBtn.classList.remove("disabled");
      _elements.playerButtons.nextTrackBtn.classList.remove("disabled");
    } else if (_currentTrack === _Tracks.length) {
      _elements.playerButtons.previousTrackBtn.classList.remove("disabled");
      _elements.playerButtons.nextTrackBtn.classList.add("disabled");
    }
  };

  /**
   * Updates the location of the progress indicator according to how much time left in audio.
   *
   **/
  var _updateProgressIndicator = function () {
    // var currentTime = parseFloat(audio.currentTime);
    // var duration = parseFloat(audio.duration);
    // var indicatorLocation = 0;
    // var indicatorLocation = parseFloat(_elements.progressBar.children[1].offsetWidth);
    // var progressIndicatorWidth = parseFloat(_progressIndicator.offsetWidth);
    // var progressIndicatorWidth = progressBarWidth 
    //- progressIndicatorWidth;

    // indicatorLocation = loadedWidth * (currentTime / duration);

    var indicatorLocation = parseFloat(_elements.progressBar.children[1].offsetWidth);
    _progressIndicator.style.left = indicatorLocation + "px";
  };

  /**
   * Resets all toggle buttons to be play buttons.
   *
   **/
  var _resetPlayStatus = function () {

    // var smallToggleBtn = _elements.playerButtons.smallToggleBtn;

    // _elements.playerButtons.largeToggleBtn.querySelector('i.fas').className = "fas fa-play";

    // for (var i = 0; i < smallToggleBtn.length; i++) {
    //     if (smallToggleBtn[i].querySelector('i.fas').className === "fas fa-pause-circle") {
    //         smallToggleBtn[i].querySelector('i.fas').className = "fas fa-play-circle";
    //     }
    // }
  };


  return {
    initPlayer: initPlayer,
  };
};

// (function () {
//   var player = new audioPlayer();

//   player.initPlayer();
//   // window.songs = player.songs;
// })();

export default audioPlayer;
