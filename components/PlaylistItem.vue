<template>
  <div
    class="
      PlaylistItem__PlaylistItemComponent
      py-2
      px-2
      flex flex-wrap
      items-start
      h-auto
      cursor-pointer
      rounded-lg
    "
  >
    <div class="PlaylistItem__PlaylistItemInfoContainer flex w-full ">
      <div
        class="
          Image__ImageContainer
          mr-4
          ml-2
          rounded-lg
          overflow-hidden
        "
      >
        <div class="Image__Container ">
          <img
            src="/images/world-traveler-cover.jpg"
            class="Image__ImageComponent"
            style="opacity: 1"
          />
        </div>
        <div class="PlaylistItem__IconContainer">
          <svg viewBox="0 0 36 36" fill="#fff" class="PlaylistItem__Icon">
            <path
              d="M12.233 7.68l15.75 10.124c.69.443.69 1.45 0 1.892L12.233 29.82a1.125 1.125 0 0 1-1.733-.947V8.627c0-.89.985-1.428 1.733-.947z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="PlaylistItem__Info overflow-hidden flex-1">
        <div
          :title="track.title"
          class="PlaylistItem__Title font-semibold leading-tight"
        >
          {{ track.title }}
        </div>
        <div class="PlaylistItem__InfoBottom">
          <div
            title="Neil Seidel"
            class="PlaylistItem__Author font-normal text-sm"
          >
            Neil Seidel
          </div>
        </div>
      </div>
      <!-- <div class="Buttons__ButtonsComponent">
        <a
          href="https://files.elfsight.com/storage/f7e9a9de-578a-404d-9755-29717c16030a/5826bebf-21a6-4d8d-8a81-70335d9c5ed8.mpga"
          target="_blank"
          download=""
          title="Download Button"
          class="ButtonsItem__ButtonComponent"
          ><div class="ButtonsItem__IconContainer">
            <svg viewBox="0 0 24 24" class="Icon__IconComponent">
              <path
                d="M5.778 17.444h12.444a.778.778 0 0 1 .106 1.549l-.106.007H5.778a.778.778 0 0 1-.106-1.548l.106-.008h12.444zM12 5c.43 0 .778.348.778.778l-.001 7.456 1.006-1.006a.778.778 0 0 1 1.176 1.013l-.076.087-2.333 2.333a.782.782 0 0 1-.08.07l.08-.07a.782.782 0 0 1-.55.228l.087-.005a.782.782 0 0 1-.073.005H12a.794.794 0 0 1-.38-.099.803.803 0 0 1-.17-.129l-2.333-2.333a.778.778 0 0 1 1.012-1.176l.088.076 1.005 1.005V5.778c0-.394.293-.72.672-.77z"
              ></path>
            </svg></div
        ></a>
      </div> -->
      <div class="PlaylistItem__Duration opacity-70 text-sm leading-tight">
        <!-- {{ track.duration }} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistItem",
  data() {
    return {
      // track: this.track
    };
  },
  props: ["track"]
};
</script>

<style lang="scss" scoped>
.PlaylistItem__PlaylistItemComponent {
  &.Active__Track,
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    @apply text-white;

    .PlaylistItem__IconContainer {
      opacity: 1;
    }
  }
}

.Image__ImageContainer {
  width: 54px;
  height: 54px;
  // border-radius: 4px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-shrink: 0;
}
.Image__Container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  flex-shrink: 0;
  overflow: hidden;
}
.PlaylistItem__IconContainer {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(17, 17, 17, 0.2);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease 0s;

  & > .PlaylistItem__Icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    transition: all 0.3s ease 0s;
  }
}
</style>
