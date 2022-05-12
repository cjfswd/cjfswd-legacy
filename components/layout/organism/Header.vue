<template>
  <!-- <LayoutAtomMenu class="menu-header" /> -->
    <div class="container-nameSubtitleResume-header">
      <div ref="headerElement" class="container-nameSubtitle-header">
        <p class="name-header">{{ header.name }}</p>
        <p class="subtitle-header">{{ header.subtitle }}</p>
        <p class="subtitle-header mb-2">{{ header.region }}</p>
        <p class="md:pl-1 text-xs">{{ header.resume }}</p>
      </div>
      <img
        class="rounded w-[80px] h-[80px] sm:w-[128px] sm:h-[128px]" src="/eu.webp" />
    </div>
    <!-- <div class="link-blog-header" v-if="String($route.name).includes('blog')">
      <a class="linkStyle categorias" href="#categorias">Categorias</a> |
      <a class="linkStyle artigos" href="#artigos">Artigos</a>
    </div> -->
</template>
<script setup lang="ts">
defineProps<{ header: { name, subtitle, region, resume } }>();
</script>

<style scoped>
.container-nameSubtitleResume-header {
  @apply flex flex-col-reverse sm:flex-row rounded p-2 gap-2 sm:gap-4 md:gap-8 text-black w-fit;
  background: #ead41c;
}

.container-nameSubtitle-header {
  @apply flex flex-col leading-none;
}

.name-header {
  @apply text-3xl sm:text-4xl md:text-6xl whitespace-nowrap font-bold mb-0;
}

.subtitle-header {
  @apply md:text-lg font-semibold md:pl-1;
  line-height: 1.15!important
}

.resume-header {
  @apply text-sm;
  line-height: 1.3;
}

.link-blog-header {
  @apply mb-2 text-sm;
}
</style>
