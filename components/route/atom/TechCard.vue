<template>
  <div :class="rootClass">
    <div v-for="(tech, index) in iconList" :key="index" :class="`${cardContainerClass}`">
      <i :class="`${iconClass} ${tech.icon}`"></i>
      <p :class="nameClass" style="margin-bottom: 0px">{{ tech.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  rootClass: string;
  cardContainerClass: string;
  iconClass: string;
  nameClass: string;
  iconList: { icon: string; name: string }[];
}>();
</script>
<style scoped></style>
