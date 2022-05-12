<template>
  <div class="root-experience">
    <div class="container-experience">
      <h2 class="title-high-experience">Tecnologias que tenho mais experiência</h2>
      <RouteAtomTechCard v-bind="{
        rootClass: defaultCardTechRootClass,
        cardContainerClass: 'flex flex-col justify-between text-black bg-white rounded py-1 px-2 flex flex-col items-center',
        iconClass: 'text-4xl md:text-5xl',
        nameClass: 'text-center font-bold',
        iconList: [
          { icon: 'devicon-tailwindcss-plain', name: 'Tailwind' },
          { icon: 'mdi mdi-vuejs', name: 'Vue' },
          { icon: 'devicon-nuxtjs-plain', name: 'Nuxt' },
          { icon: 'mdi mdi-nodejs', name: 'Node' },
          { icon: 'devicon-express-original', name: 'Express' },
          { icon: 'icon-typeorm', name: 'Typeorm' },
          { icon: 'icon-prisma', name: 'Prisma' },
          { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
          { icon: 'devicon-jest-plain', name: 'Jest' },
          { icon: 'icon-cypress', name: 'Cypress' },
        ],
      }" />
    </div>
    <div class="container-experience">
      <h2 class="title-low-experience">Tecnologias que considero triviais</h2>
      <RouteAtomTechCard v-bind="{
        rootClass: defaultCardTechRootClass,
        cardContainerClass:
          'text-black bg-white rounded py-1 px-2 flex flex-col items-center',
        iconClass: 'text-2xl md:text-4xl',
        nameClass: 'text-center',
        iconList: [
          { icon: 'devicon-git-plain', name: 'Git' },
          { icon: 'devicon-github-original', name: 'Github' },
          { icon: 'mdi mdi-language-html5', name: 'HTML5' },
          { icon: 'mdi mdi-language-css3', name: 'CSS3' },
          { icon: 'mdi mdi-language-javascript', name: 'Javascript' },
          { icon: 'mdi mdi-language-typescript', name: 'Typescript' },
        ],
      }" />
      <div>
        <h3 class="text-xs text-gray-400">Não me limito somente ao uso e estudo dessas tecnologias listadas.
        </h3>
        <h3 class="text-xs text-gray-400">
          Você
          pode
          conferir isso no meu <NuxtLink to="/" class="link-project">Portfólio</NuxtLink>&nbsp;ou
          <NuxtLink to="/" class="link-project">Github</NuxtLink>.
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const defaultCardTechRootClass = "flex flex-row gap-2 sm:gap-3 flex-wrap"
</script>

<style scoped>
.root-experience {
  @apply flex flex-col gap-2;
}

.container-experience {
  @apply flex flex-col gap-1;
}

.title-high-experience {
  @apply text-2xl font-bold;
  color: #ead41c;
}

.title-low-experience {
  @apply font-light;
  color: #ead41c;
}
</style>