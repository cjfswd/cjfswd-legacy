<template>
  <div :style="`height:${height}px`">
    <div id="container-vanta" :style="`height:${height}px;`" :class="`w-full fixed`"></div>
    <div class="container-default" style="background: rgb(0 0 0 / 25%)">
      <LayoutAtomMenu class="menu-header my-4" />
      <NuxtPage class="animate__animated animate__fadeInLeft" :key="route.name" />
      <div>
        <LayoutAtomSocialMedia />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
let route = useRoute();

let height = ref(0);

function getWindowHeight() {
  height.value = innerHeight;
}

onMounted(() => {
  getWindowHeight();
  window.addEventListener("resize", getWindowHeight);
  // @ts-ignore
  VANTA.WAVES({
    el: "#container-vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    scale: 1,
    scaleMobile: 1,
    color: 0,
    shininess: 10,
    waveHeight: 40,
    waveSpeed: 0.7,
    zoom: 0.5,
    forceAnimate: true,
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", getWindowHeight);
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");

strong {
  letter-spacing: 0.07em;
}

@font-face {
  font-family: "icomoon";
  src: url("fonts/icomoon.eot");
  src: url("fonts/icomoon.eot") format("embedded-opentype"),
    url("fonts/icomoon.ttf") format("truetype"), url("fonts/icomoon.woff") format("woff"),
    url("fonts/icomoon.svg") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"],
[class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "icomoon" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-typeorm:before {
  content: "\e903";
}

.icon-cypress:before {
  content: "\e902";
}

.icon-insomnia:before {
  content: "\e901";
}

.icon-prisma:before {
  content: "\e900";
}

html {
  width: 100%;
  height: 100%;
  color: white;
  font-family: "IBM Plex Sans", sans-serif;
  background-color: black;
}

*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  border-radius: 8px;
}

*::-webkit-scrollbar-thumb {
  height: 56px;
  border-radius: 8px;
  border: 2px solid transparent;
  background-clip: content-box;
  background-color: #888;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.container-default {
  @apply mx-auto flex flex-col items-center gap-4 px-4 pb-4;
  max-width: 900px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
</style>
