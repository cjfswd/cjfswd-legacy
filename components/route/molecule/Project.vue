<template>
  <div class="root-project">
    <h2 class="title-project">Alguns Projetos</h2>
    <div class="container-project">
      <RouteMoleculeProjectDisplay title="Dedicar" media="https://via.placeholder.com/1080x463/000?text=21:9"
        component="RouteAtomResumeProjectDedicar" />
      <RouteMoleculeProjectDisplay title="LAN Media Player"
        media="https://via.placeholder.com/1080x463/000?text=21:9" component="RouteAtomResumeMediaPlayer" />
      <RouteMoleculeProjectDisplay title="Awesome Builder" media="https://via.placeholder.com/1080x463/000?text=21:9"
        component="RouteAtomResumePasswordSaver" />
      <RouteMoleculeProjectDisplay title="PS4 Project" media="videos/ps4project.webm"
        component="RouteAtomResumePS4Project" />
    </div>
  </div>
</template>
<style scoped>
.root-project {
  @apply flex flex-col gap-1;
}

.title-project {
  @apply pl-0 text-2xl font-bold;
  color: #ead41c;
}

.container-project {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-2;
}

.container-link-project {
  @apply text-xs text-gray-400;
  margin-bottom: 0;
}
</style>