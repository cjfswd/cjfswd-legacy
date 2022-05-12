<template>
  <div class="root-footer">
    <div>
      <div class="container-photoResume-footer">
        <LayoutOrganismHeader :header="header" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let header = {
  name: "Castillo Junior",
  subtitle: "Fullstack JS Web Developer.",
  region: `Nova Iguaçu - RJ - BR`,
  resume: `Commitando ao menos uma vez no dia.`
};
</script>

<style scoped>
.root-footer {
  @apply flex flex-col gap-2;
}

.title-footer {
  @apply text-xl font-bold;
  color: #ead41c;
}

.title-footer2 {
  @apply text-xl font-bold;
  color: #ead41c;
}

.container-photoResume-footer {}

.photo-footer {
  @apply rounded float-left my-[2px] mr-2 w-[92px] sm:w-[124px] md:w-[188px];
}

.resume-footer {
  @apply leading-tight;
  margin-bottom: 0;
}

.resume-footer2 {
  @apply leading-tight text-sm;
  margin-bottom: 0;
}
</style>
