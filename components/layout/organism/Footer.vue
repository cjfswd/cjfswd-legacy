<template>
  <div class="root-footer">
    <LayoutAtomSocialMedia class="mt-2" />
  </div>
</template>

<script></script>

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

.container-photoResume-footer {
  @apply text-sm;
}

.photo-footer {
  @apply rounded float-left mr-2;
  max-width: 90px;
  margin-top: 2px;
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
