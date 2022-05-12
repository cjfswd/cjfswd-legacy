<template>
  <div class="root-socialMedia">
    <a v-for="(socialMedia, index) in [
      { route: 'https://api.whatsapp.com/send?phone=5521976067823&text=Voc%C3%AA%20est%C3%A1%20iniciando%20uma%20conversa%20com%20Castillo%20Junior%2C%20Fullstack%20JS%20Web%20Developer', icon: 'mdi mdi-whatsapp' },
      { route: 'https://github.com/cjfswd', icon: 'devicon-github-original' },
      { route: '/', icon: 'mdi mdi-linkedin' },
    ]" :key="index + 'socialmedia'" :href="socialMedia.route" target="_blank" class="link-socialMedia">
      <i :class="socialMedia.icon"></i>
    </a>
  </div>
</template>
<style scoped>
.root-socialMedia {
  @apply flex flex-row gap-3 items-center text-xl;
  width: min-content;
}

.link-socialMedia {
  @apply mb-0 whitespace-nowrap linkStyle cursor-pointer;
}
</style>
