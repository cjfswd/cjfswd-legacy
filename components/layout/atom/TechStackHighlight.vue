<template>
  <div class="root-techStackHighlight">
    <hr class="divider-techStackHighlight" />
    <p class="title-techStackHighlight">{{ title }}</p>
    <div class="container-iconCategory-techStackHighlight">
      <div v-for="(item, x) in category" :key="x" class="container-category-techStackHighlight">
        <p class="category-techStackHighlight">{{ item.name }}</p>
        <div class="container-icon-techStackHighlight">
          <i v-for="(icon, y) in item.icons" :key="y" :class="`text-2xl ${icon}`"></i>
        </div>
      </div>
    </div>
    <p class="observation-techStackHighlight">{{ observation }}&nbsp;</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string,
  category?: { name: string, icons: string[] }[],
  observation?: string
}>()
</script>
<style scoped>
.root-techStackHighlight {
  @apply flex flex-col;
}

.divider-techStackHighlight {
  @apply my-2;
}

.title-techStackHighlight {
  @apply pl-0 text-sm text-left font-semibold;
  margin-bottom: 0px;
}

.container-iconCategory-techStackHighlight {
  @apply flex flex-row h-full w-full items-center divide-x divide-black overflow-x-auto;
}

.container-iconCategory-techStackHighlight > div:nth-child(n) {
  @apply pl-2;
}

.container-iconCategory-techStackHighlight > div:first-child {
  @apply pl-0;
}

.container-iconCategory-techStackHighlight > div:last-child {
  @apply pr-0;
}

.container-category-techStackHighlight {
  @apply flex flex-col pr-2 h-full;
}

.category-techStackHighlight {
  margin-bottom: 0;
}

.container-icon-techStackHighlight {
  @apply h-full flex items-center flex-row gap-1;
}

.observation-techStackHighlight {
  @apply text-xs font-light;
  margin-bottom: 0;
}
</style>