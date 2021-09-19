<template>
  <div
    class="
      PlaylistItem__Component
      py-2
      px-2
      flex flex-wrap
      items-start
      h-auto
      cursor-pointer
      rounded-lg
    "
  >
    <div class="Container__PlaylistItemDetails flex w-full ">
      <div
        class="
          PlaylistItemImages
          mr-4
          ml-2
          rounded-lg
        "
      >
        <div class="Container__PlaylistItemImage ">
          <img
            :src="require('@/static/images/'+album_thumbs.sm)"
            class="PlaylistItemImage__Component h-full mx-auto"
            style="opacity: 1;"
          />
        </div>
        <div class="Container__PlaylistItemIcon">
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
            class="PlaylistItem__Author font-normal text-sm opacity-80"
          >
            Neil Seidel
          </div>
        </div>
      </div>
      
      <div class="PlaylistItem__Duration opacity-70 text-sm leading-tight">
        <div v-if="track.duration">
        {{ track.duration }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistItem",
  data() {
    return {
    };
  },
  props: ["track", "album_thumbs"]
};
</script>

<style lang="scss">
.PlaylistItem__Component {
  &.Active__Track,
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    @apply text-white;

    .Container__PlaylistItemIcon {
      opacity: 1;
    }
  }
}

.PlaylistItemImages {
  width: 54px;
  height: 54px;
  // border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-shrink: 0;
  border: 1px solid rgba(200, 200, 200, 0.1);
}
.Container__PlaylistItemImage {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  flex-shrink: 0;
  overflow: hidden;
  & > img {
    object-fit: cover;
  } 
}
.Container__PlaylistItemIcon {
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
