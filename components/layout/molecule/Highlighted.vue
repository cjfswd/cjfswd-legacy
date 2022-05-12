<template>
  <div class="root-highlighted">
    <div class="container-highlighted">
      <NuxtLink
        v-for="(element, key) in highlighted"
        :key="key"
        :to="`${element.path}`"
        class="link-highlighted"
      >
        <h2 class="title-highlighted">{{ element.title }}</h2>
        <h3 class="description-highlighted">{{ element.description }}</h3>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  highlighted: { path: string, title: string, description: string }[]
}>()
</script>

<style scoped>
.root-highlighted {
  @apply flex flex-col gap-2;
}

.container-highlighted {
  @apply grid grid-cols-1 gap-4;
}

.link-highlighted {
  @apply linkStyle w-full max-w-full min-w-0 border-l-2 border-white hover:border-[#F2F200];
}

.title-highlighted {
  @apply rounded-l-none pl-4 px-1 text-lg leading-tight;
}

.description-highlighted {
  @apply pl-4 text-sm truncate font-extralight;
}
</style>