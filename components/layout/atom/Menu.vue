<template>
  <div class="root" v-if="!$route.path.includes('/blog/')">
    <span class="link-menu" :style="`${link.name == $route.name ? 'color:white;' : ''}`" v-for="(link, index) in links">
      <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
    </span>
  </div>
</template>
<script setup lang="ts">
const links = [
  { label: "Início", path: "/", name: "index" },
  // { label: "Blog", path: "/blog", name: "blog" },
  { label: "Portfólio", path: "/portfolio", name: "portfolio" },
  { label: "Códigos", path: "/codigo", name: "codigo" },
  { label: "Contato", path: "/contato", name: "contato" },
];
</script>
<style scoped>
.root {
  @apply top-0 right-0 pt-4;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.link-menu {
  @apply linkStyle text-gray-400 px-2;
}
</style>
