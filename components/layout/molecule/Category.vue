<template>
  <div class="root-category">
    <NuxtLink class="container-category" v-for="(element, key) in category" :key="key" :to="element.path">
      <img :src="element.title + '.png'" class="img-category" />
      <div class="container-titleDescription-category">
        <h2 class="title-category">{{ element.title }}</h2>
        <h3 class="description-category">{{ element.description }}</h3>
      </div>
    </NuxtLink>  </div>
</template>
<script setup lang="ts">
defineProps<{
  category: { path: string, title: string, description: string }[]
}>()
</script>
<style scoped>
.root-category {
  @apply grid text-white grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4;
}

.container-category {
  height: 56px;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1em;
}

.container-category:hover{
  color:#F2F200!important
}

.img-category {
  @apply rounded;
}

.container-titleDescription-category {
  @apply flex flex-col justify-center w-full max-w-full min-w-0;
}

.title-category {
  @apply rounded-l-none text-2xl leading-tight;
}

.description-category {
  @apply whitespace-nowrap font-extralight text-[13px];
}
</style>