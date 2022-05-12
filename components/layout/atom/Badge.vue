<template>
  <div class="root-badge">
    <NuxtLink class="link-badge" :to="{ path: '/blog' }">
      <div class="container-nameSubtitle-badge">
        <p class="name-badge">{{ name }}</p>
        <p class="subtitle-badge">{{ subtitle }}</p>
      </div>
    </NuxtLink>
    <div class="container-routeDynamicAtomMenu-badge">
      <RouteDynamicAtomMenu class="routeDynamicAtomMenu-badge" />
    </div>
  </div>
</template>

<script setup>
const name = "Castillo Junior"
const subtitle = "Developer Blog."
</script>

<style scoped>
.root-badge {
  @apply mb-4 mt-4 flex flex-row justify-between;
}

.link-badge {
  height: 40.8px;
  width: 143px;
}

.container-routeDynamicAtomMenu-badge {
  @apply flex flex-col justify-end text-sm;
  line-height: 20px;
}

.routeDynamicAtomMenu-badge {
  padding-top: 0;
}

.container-nameSubtitle-badge {
  @apply flex flex-col rounded-lg px-2 pt-1 pb-3 text-black w-min mb-1;
  background: #ead41c;
  transform: scale(0.3);
  transform-origin: 0 0;
  width: min-content;
}

.name-badge {
  @apply text-7xl whitespace-nowrap font-semibold mb-0 pl-0;
}

.subtitle-badge {
  @apply text-5xl font-medium mb-0;
}
</style>