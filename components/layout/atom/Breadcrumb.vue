<template>
  <div class="root-breadcrumb">
    <div class="container-breadcrumb">
      <NuxtLink class="link-breadcrumb" :to="`/blog`">ínicio</NuxtLink>
      <span v-if="$route.name == 'blog-categoria-artigo'">/</span>
      <NuxtLink
        class="link-breadcrumb"
        v-if="$route.name == 'blog-categoria-artigo'"
        :to="`/blog/${$route.params.categoria}`"
        >{{ $route.params.categoria }}</NuxtLink
      >
      <span v-if="$route.name == 'blog-categoria-artigo'">/</span>
      <span v-if="$route.name == 'blog-categoria-artigo'">artigo</span>
    </div>
    <NuxtLink
      class="link-allArticle-breadcrumb"
      :to="{ path: '/blog/all' }"
      v-if="$route.path != '/blog/all'"
      >todos artigos</NuxtLink
    >
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.root-breadcrumb {
  @apply flex flex-row text-sm justify-between text-gray-400;
}

.container-breadcrumb {
  @apply flex flex-row gap-1;
}

.link-breadcrumb {
  @apply linkStyle cursor-pointer underline;
}

.link-allArticle-breadcrumb {
  @apply text-center underline linkStyle;
}
</style>
