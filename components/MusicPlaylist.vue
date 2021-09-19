<template>
  <div id="Playlist">
    <audio id="audio" preload="metadata" tabindex="0">
      Your browser does not support HTML5 audio.
    </audio>
    <div class="Container__BgOut w-full ">
      <div class="Container__BgIn w-full">
        <div class="Container__Full mx-auto">
          <div class="Container__Top p-4 sm:px-0 sm:flex">
            <div class="Container__Info flex sm:w-auto sm:h-auto">
              <div
                class="Container__TrackImage w-14 h-14 mr-4 rounded-lg overflow-hidden sm:w-40 sm:h-40 sm:rounded-xl sm:mr-6 shadow-inner"
              >
                <img
                  :src="require('@/static/images/'+album_thumbs.lg)"
                  alt=""
                  class="h-full mx-auto"
                />
              </div>
              <div class="Track__Info w-auto sm:hidden">
                <div class="Track__Title font-semibold">-</div>
                <div class="Track__Author font-normal text-sm">Neil Seidel</div>
              </div>
            </div>
            <div class="sm:flex-1">
              <div class="Track__Info hidden sm:block">
                <div class="Track__Title font-semibold text-lg">-</div>
                <div class="Track__Author font-normal text-sm opacity-80">
                  Neil Seidel
                </div>
              </div>
              <div class="sm:mt-6">
                <div class="Container__Progress py-2">
                  <div
                    class="Player__Time flex justify-between w-full mb-2 Not__Loaded"
                  >
                    <div class="Current w-10 rounded-lg py-0.5 text-center">
                      00:00
                    </div>
                    <div
                      class="Duration w-10 rounded-lg py-0.5 text-center"
                    ></div>
                  </div>
                  <div class="ProgressBar" color="rgb(255, 239, 175)">
                    <div
                      class="ProgressBar__Loaded"
                      color="rgb(255, 239, 175)"
                    ></div>
                    <div class="ProgressBar__Played" color="#ff4734"></div>
                    <div class="ProgressBar__Indicator"></div>
                  </div>
                </div>
                <div class="Container__MainControls">
                  <div class="MainControls flex items-center justify-center">
                    <div class="PrevButton w-7 mr-4">
                      <svg
                        viewBox="0 0 24 24"
                        fill="rgb(243, 244, 246)"
                        class="PrevIcon"
                      >
                        <path
                          d="M11.253 17.84l-6.955-5.248a.736.736 0 0 1 0-1.184l6.955-5.249c.507-.383 1.247-.032 1.247.592V17.25c0 .624-.74.975-1.247.592zm8.5 0l-6.955-5.248a.736.736 0 0 1 0-1.184l6.955-5.249C20.26 5.776 21 6.127 21 6.751V17.25c0 .624-.74.975-1.247.592z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ToggleButton w-9 mr-4">
                      <svg
                        viewBox="0 0 36 36"
                        fill="rgb(243, 244, 246)"
                        class="PlayIcon"
                      >
                        <path
                          d="M12.233 7.68l15.75 10.124c.69.443.69 1.45 0 1.892L12.233 29.82a1.125 1.125 0 0 1-1.733-.947V8.627c0-.89.985-1.428 1.733-.947z"
                        ></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        fill="rgb(243, 244, 246)"
                        class="PauseIcon"
                        style="display:none;"
                      >
                        <path
                          d="M10 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zm8 0a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4z"
                        ></path>
                      </svg>
                    </div>
                    <div class="NextButton w-7 mr-4">
                      <svg
                        viewBox="0 0 24 24"
                        fill="rgb(243, 244, 246)"
                        class="NextIcon"
                      >
                        <path
                          d="M12.747 17.84l6.955-5.248a.736.736 0 0 0 0-1.184L12.747 6.16c-.507-.383-1.247-.032-1.247.592V17.25c0 .624.74.975 1.247.592zm-8.5 0l6.955-5.248a.736.736 0 0 0 0-1.184L4.247 6.16C3.74 5.776 3 6.127 3 6.751V17.25c0 .624.74.975 1.247.592z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="Playlist__Component">
            <div class="Container__Playlist">
              <div
                style="position:relative; width:100%; height:100%; height:300px; "
              >
                <div
                  style="position:relative; overflow-y:scroll;  overflow-x:hidden; height:300px;"
                  id="PLaylistItems"
                  class="border-t border-gray-400"
                >
                  <playlist-item
                    v-for="(track, i) in tracks_data.tracks"
                    v-bind:key="i + 1"
                    :data-track-row="i + 1"
                    :track="track"
                    :album_thumbs="album_thumbs"
                  ></playlist-item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="MoreSample mt-1 sm:mt-2" v-if="tracks_data.other_tracks.length > 0">
      <div class="flex flex-wrap space-y-1 space-x-2 text-sm md:text-base">
        <div class="font-medium px-1">Others:</div>
        <div
          v-for="(trStr, i) in tracks_data.other_tracks"
          :key="i"
          class="bg-gray-100 px-1 rounded"
        >
          {{ trStr }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import audioPlayer from "@/static/js/player.js";

export default {
  props: ["tracks_data", "album_thumbs"],
  // data() {
  //   return {
  //   };
  // },
  mounted() {
    var player = new audioPlayer(this.tracks_data.tracks, "/audio/");
    player.initPlayer();
  }
};
</script>

<style lang="scss" scoped>
.Container__BgOut {
  background-color: rgba(0, 0, 0, 0.35);
  background-image: url(~@/static/images/guitar.jpeg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  // &::before {
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   inset: 0px;
  //   pointer-events: none;
  //   background-color: rgba(0, 0, 0, 0.35);
  //   z-index: 0;
  // }
}
.Container__BgIn {
  backdrop-filter: blur(1.5px);
}
.Container__Full {
  @apply text-gray-200;
  max-width: 500px;
}

.Container__TrackImage {
  border: 1px solid rgba(17, 17, 17, 0.1);
  & > img {
    object-fit: cover;
  }
}

#PLaylistItems::-webkit-scrollbar {
  width: 8px;
  // background: #ccc;
}
#PLaylistItems::-webkit-scrollbar-thumb {
  width: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.5);

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
}

.Container__Progress {
  & > .ProgressBar {
    position: relative;
    display: flex;
    // overflow: hidden;
    cursor: pointer;
    line-height: 0;
    font-size: 0.75rem;
    background-color: #e9ecef;
    z-index: 2;
    background-color: rgba(229, 231, 235, 0.2);
    // background-color: rgba(255, 239, 175, 0.3);
    height: 4px;
    border-radius: 4px;

    & > .ProgressBar__Played {
      background-color: rgb(255, 71, 52);
      z-index: 3;
      height: 4px;
      width: 0%;
      border-radius: 4px;
    }
    & > .ProgressBar__Loaded {
      position: absolute;

      z-index: 3;
      background-color: rgba(229, 231, 235, 0.3);
      // background-color: rgba(255, 239, 175, 0.4);

      height: 4px;
      width: 0%;
      border-radius: 4px;
    }
    & > .ProgressBar__Indicator {
      position: absolute;

      z-index: 12;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: rgb(255, 71, 52);
      // opacity: 0;

      pointer-events: none;
      cursor: grab;
      user-select: none;
      touch-action: none;
      transition: opacity 0.2s ease 0s;
      transform: translate(-6px, -4px);
    }
  }
  & > .Player__Time {
    @apply text-gray-200;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    // color: rgba(0, 0, 0, 0.55);

    font-size: 13px !important;
    line-height: 1;
    //  right: 2px;
    //  top: 45px;

    &.Not__Loaded > div {
      @apply bg-gray-200;
    }
  }
}

.ToggleButton,
.PrevButton,
.NextButton {
  cursor: pointer;
}

.PrevButton.disabled,
.NextButton.disabled {
  & > svg {
    opacity: 0.5;
    cursor: default;
  }
}
</style>
