<template>
  <div class="root-projectDisplay">
    <div class="container-titlePhotoResume-projectDisplay">
      <h3 class="title-projectDisplay">{{ title }}</h3>
      <img
        v-if="
          (media != undefined && media.includes('.webp')) ||
          (media != undefined && media.includes('http'))
        "
        :src="media"
        class="image-projectDisplay"
      />
      <video
        v-if="media != undefined && media.includes('.webm')"
        autoplay
        muted
        loop
        width="100%"
        :src="media"
        type="video/mp4"
        class="rounded"
      >
        Seu Navegador não pode exibir o video
      </video>
      <component :is="component" />
    </div>
    <LayoutAtomTechStackHighlight
      v-if="stack != null"
      v-bind="stack"
      class="techStackHighlight-projectDisplay"
    />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title?: string;
  component?: string;
  media?: string;
  stack?: {
    title?: string;
    category?: { name: string; icons: string[] }[];
  };
}>();
</script>

<style scoped>
.root-projectDisplay {
  @apply leading-tight flex flex-col justify-between py-2 px-3 bg-white text-black rounded;
}

.container-titlePhotoResume-projectDisplay {
  @apply bg-white flex flex-col gap-1;
}

.title-projectDisplay {
  @apply leading-tight text-2xl font-bold;
}

.image-projectDisplay {
  @apply border-solid rounded;
}

.techStackHighlight-projectDisplay {
  @apply mt-1;
}
</style>
