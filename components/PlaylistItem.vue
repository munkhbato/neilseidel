<template>
  <div
    class="
      PlaylistItem__PlaylistItemComponent
      p-4
      flex flex-wrap
      items-start
      h-auto
    "
  >
    <div class="PlaylistItem__PlaylistItemInfoContainer flex w-full ">
      <div
        class="
          Image__ImageContainer
          w-14
          h-14
          mr-6
          rounded-lg
          overflow-hidden
        "
      >
        <div class="Image__Container ">
          <img
            src="@/static/images/cd.jpeg"
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
          title="Burdens"
          class="PlaylistItem__Title font-semibold leading-tight"
        >
          Burdens
        </div>
        <div class="PlaylistItem__InfoBottom">
          <div
            title="Neil Seidel"
            class="PlaylistItem__Author font-light text-sm"
          >
            Neil Seidel
          </div>
        </div>
      </div>
      <div class="Buttons__ButtonsComponent">
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
      </div>
      <div class="PlaylistItem__Duration opacity-70 text-sm leading-tight">
        3:56
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistItem"
};
</script>


<style scoped></style>
