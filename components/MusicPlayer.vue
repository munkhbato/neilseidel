<template>
  <div class="Container__Full w-full px-4 bg-light">
    <div class="Container__Top p-4 bg-yellow-100">
      <div class="Container__Info flex">
        <div class="Container__Image w-14 mr-4 rounded-lg overflow-hidden">
          <img src="@/static/images/cd.jpeg" alt="" />
        </div>
        <div class="Music__Info w-auto">
          <div class="Music__Title font-semibold">Desert Scapes</div>
          <div class="Music__Author font-light text-sm">Neil Seidel</div>
        </div>
      </div>
      <div class="Container__Progress py-2">
        <div class="Progress">
          <div class="Loaded"></div>
          <div class="Position"></div>
          <div class="Indicator"></div>
          <span class="Player__Time Time">
            <span class="Cur">0:00</span>
            <span class="Sep">/</span>
            <span class="Duration">0:00</span>
          </span>
        </div>
      </div>
      <!-- <div class="ProgressBar__Component">
          <div
            class="ProgressBar__Track"
            style="transform: scale(1); cursor: pointer"
          >
            <div
              tabindex="0"
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="13.3"
              draggable="false"
              role="slider"
              class="ProgressBar__Thumb"
              style="
                position: absolute;
                z-index: 12;
                cursor: grab;
                user-select: none;
                touch-action: none;
                transform: translate(33.368px, 1px);
              "
            ></div>
            <div class="ProgressBar__Time">
              <div class="ProgressBar__TimeStart">
                <span
                  ><span class="Loading__Skeleton" style="width: 28px"
                    >‌</span
                  ></span
                >
              </div>
              <div class="ProgressBar__TimeEnd">
                <span
                  ><span class="Loading__Skeleton" style="width: 28px"
                    >‌</span
                  ></span
                >
              </div>
            </div>
            <div color="#000" class="ProgressBar__FakeTrack"></div>
            <div
              color="#000"
              class="ProgressBar__ProgressBarLoaded"
              style="width: 0%"
            ></div>
            <div
              color="#ff4734"
              class="ProgressBar__ProgressBarPlayed"
              style="width: 13.3%"
            ></div>
            <div class="ProgressBar__HoverTime" style="left: 66.3513%">
              0:00
            </div>
          </div>
        </div> -->
      <div class="Container__MainControls">
        <div class="MainControls flex items-center justify-center">
          <div class="PrevButton w-7 mr-4">
            <svg viewBox="0 0 24 24" fill="rgb(0, 0, 0)" class="PrevIcon">
              <path
                d="M11.253 17.84l-6.955-5.248a.736.736 0 0 1 0-1.184l6.955-5.249c.507-.383 1.247-.032 1.247.592V17.25c0 .624-.74.975-1.247.592zm8.5 0l-6.955-5.248a.736.736 0 0 1 0-1.184l6.955-5.249C20.26 5.776 21 6.127 21 6.751V17.25c0 .624-.74.975-1.247.592z"
              ></path>
            </svg>
          </div>
          <div class="PlayButton w-9 mr-4">
            <svg viewBox="0 0 36 36" fill="rgb(0, 0, 0)" class="PlayIcon">
              <path
                d="M12.233 7.68l15.75 10.124c.69.443.69 1.45 0 1.892L12.233 29.82a1.125 1.125 0 0 1-1.733-.947V8.627c0-.89.985-1.428 1.733-.947z"
              ></path>
            </svg>
          </div>
          <div class="PauseButton w-9 mr-4">
            <svg viewBox="0 0 24 24" fill="rgb(0, 0, 0)" class="PauseIcon">
              <path
                d="M10 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zm8 0a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4z"
              ></path>
            </svg>
          </div>
          <div class="NextButton w-7 mr-4">
            <svg viewBox="0 0 24 24" fill="rgb(0, 0, 0)" class="NextIcon">
              <path
                d="M12.747 17.84l6.955-5.248a.736.736 0 0 0 0-1.184L12.747 6.16c-.507-.383-1.247-.032-1.247.592V17.25c0 .624.74.975 1.247.592zm-8.5 0l6.955-5.248a.736.736 0 0 0 0-1.184L4.247 6.16C3.74 5.776 3 6.127 3 6.751V17.25c0 .624.74.975 1.247.592z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="Container__Playlist px-4 bg-red-100">playlist</div>

    <div class="Playlist__Component">
      <div class="Playlist__Container">
        <div
          style="
              position: relative;
              overflow: hidden;
              width: 100%;
              height: 100%;
              min-height: 0px;
              max-height: 286px;
            "
        >
          <div
            style="
                position: relative;
                overflow: scroll;
                margin-right: -14px;
                margin-bottom: -14px;
                min-height: 14px;
                max-height: 300px;
              "
          >
            <playlist-item></playlist-item>
          </div>
          <div style="display: none">
            <div style="display: none; width: 0px"></div>
          </div>
          <div
            style="
                position: absolute;
                width: 6px;
                right: 2px;
                bottom: 2px;
                top: 2px;
                border-radius: 3px;
              "
          >
            <div
              color="rgb(255, 239, 175)"
              class="Playlist__Thumb"
              style="height: 199px; transform: translateY(0px)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MusicPlayer",
};
</script>


<style>
.Container__Progress > .Progress {
  display: flex;
  /* overflow: hidden; */
  cursor: pointer;
  line-height: 0;
  font-size: 0.75rem;
  background-color: #e9ecef;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.2);
  height: 4px;
  border-radius: 4px;
}

.Container__Progress > .Progress > .Position {
  background-color: rgb(255, 71, 52);
  z-index: 3;
  height: 4px;
  width: 30%;
  border-radius: 4px;
}
.Container__Progress > .Progress > .Loaded {
  position: absolute;

  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  height: 4px;
  width: 60%;
  border-radius: 4px;
}
.Container__Progress > .Progress > .Indicator {
  z-index: 12;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: rgb(255, 71, 52);
  /* opacity: 0; */

  /* position: absolute; */
  pointer-events: none;
  cursor: grab;
  user-select: none;
  touch-action: none;
  transition: opacity 0.2s ease 0s;
  transform: translate(-6px, -4px);
}

.Container__Progress > .Progress > .Time {
  position: absolute;
  right: 2px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px !important;
  cursor: default;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 13px !important;
  top: 45px;
}
</style>
