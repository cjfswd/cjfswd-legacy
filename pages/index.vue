<script async setup lang="ts">
import { marked } from "marked";
import { NuxtLink, ClientOnly } from '../.nuxt/components';

const parseMarkdown = async (link: string) => {
  const markdown = await fetch(link).then((res) => res.text());
  return String(marked.parse(markdown));
};

let header = {
  salutation: "Seja bem-vindo! eu sou",
  name: "Castillo Junior",
  subtitle: "Fullstack Web Developer.",
  resume: `Desenvolvedor de software, focado em entregar sistemas
                testáveis, responsivos e funcionais.`,
};

let mdComponent = {
  badgeStack: await parseMarkdown(
    "https://raw.githubusercontent.com/cjfswd/cjfswd/main/.github/public/markdown/badges/techstack.md"
  ).then((res) => res.replaceAll("<p>", "").replaceAll("</p>", "")),
  developer: {
    check: await parseMarkdown(
      "https://raw.githubusercontent.com/cjfswd/cjfswd/main/.github/public/markdown/developer/check.md"
    ).then((res) => res.replaceAll("<p>", "").replaceAll("</p>", "")),
    limit: await parseMarkdown(
      "https://raw.githubusercontent.com/cjfswd/cjfswd/main/.github/public/markdown/developer/limit.md"
    ).then((res) => res.replaceAll("<p>", "").replaceAll("</p>", "")),
  },
};
</script>
<template>
  <div id="container-index">
    <div class="flex flex-col gap-4">
      <LayoutMoleculeResume class="mt-8 mb-12" />
      <div class="flex flex-col gap-3 px-4 pt-3 pb-4 rounded bg-black border border-neutral-800">
        <h2 class="title-project">Projetos em destaque</h2>
        <div class="flex flex-col gap-[0.3em]">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="flex flex-col gap-[0.15em] px-3 pt-1 pb-2 rounded bg-black border border-neutral-800">
              <h3 class="text-lg">Dedicar</h3>
              <img
                src="https://github.com/cjfswd/dedicar-site/raw/dd4e30c1f2c24ceb25723ef753d2cb004555bc7e/static/video.webp"
                class="rounded">
              <p class="text-sm">trabalho voluntário para aplicar uma transformação digital.</p>
              <div class="flex flex-row gap-1 mt-1">
                <a href="http://www.equipededicar.com/" target="_blank"
                  class="px-1 pb-[1px] rounded border border-zinc-800 text-xs whitespace-nowrap w-min"><i
                    class="mdi mdi-open-in-new " /> site</a>
                <a href="https://github.com/cjfswd/dedicar-site" target="_blank"
                  class="px-1 pb-[1px] rounded border border-zinc-800 text-xs whitespace-nowrap w-min"><i
                    class="mdi mdi-github " /> github</a>
              </div>

            </div>
            <div class="flex flex-col gap-[0.15em] px-3 pt-1 pb-2 rounded bg-black border border-neutral-800">
              <h3 class="text-lg">Gallery PS4</h3>
              <img src="https://github.com/cjfswd/gallery-ps4/raw/main/public/video.webp?raw=true" class="rounded" />
              <p class="text-sm">projeto artístico com mais de 20Gb de imagens em 4K.</p>
              <div class="flex flex-row gap-1 mt-1">
                <a href="https://gallery-ps4.vercel.app/" target="_blank"
                  class="px-1 pb-[1px] rounded border border-zinc-800 text-xs whitespace-nowrap w-min"><i
                    class="mdi mdi-open-in-new " /> site</a>
                <a href="https://github.com/cjfswd/gallery-ps4" target="_blank"
                  class="px-1 pb-[1px] rounded border border-zinc-800 text-xs whitespace-nowrap w-min"><i
                    class="mdi mdi-github " /> github</a>
              </div>
            </div>
            <div class="flex flex-col gap-[0.15em] px-3 pt-1 pb-2 rounded bg-black border border-neutral-800">
              <h3 class="text-lg">Awesome Builder</h3>
              <img
                src="https://github.com/cjfswd/awesome-builder/raw/6ab09112e00211a0e511ceff25185417de840ad9/public/video.webp"
                class="rounded" />
              <p class="text-sm">projeto para criar awesome lists mais facilmente.</p>
              <div class="flex flex-row gap-1 mt-1">
                <a href="https://awesome-builder.vercel.app/" target="_blank"
                  class="px-1 pb-[1px] rounded border border-zinc-800 text-xs whitespace-nowrap w-min"><i
                    class="mdi mdi-open-in-new " /> site</a>
                <a href="https://github.com/cjfswd/awesome-builder" target="_blank"
                  class="px-1 pb-[1px] rounded border border-zinc-800 text-xs whitespace-nowrap w-min"><i
                    class="mdi mdi-github " /> github</a>
              </div>
            </div>
          </div>
          <div class="text-xs text-zinc-500">
            você pode conferir todos os projetos no
            <a href="https://github.com/cjfswd?tab=repositories" target="_blank"
              class="hover:text-[#EAD41C] underline">Github</a>
            ou na aba
            <NuxtLink to="/portfolio" class="hover:text-[#EAD41C] underline">Portfólio</NuxtLink>
            e
            <NuxtLink to="/codigo" class="hover:text-[#EAD41C] underline">Códigos</NuxtLink>
            desse site.
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-2 px-4 pt-3 pb-4 rounded bg-black border border-neutral-800">
          <h2 class="title-project">Stack de desenvolvimento</h2>
          <div class="flex flex-col gap-[0.3em]">
            <div v-html="mdComponent.badgeStack" class="flex flex-row flex-wrap gap-[0.3em]"></div>
            <div class="text-xs text-zinc-500">
              não me limito somente a essas tecnologias e linguagens listadas.
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 px-4 pt-3 pb-4 rounded bg-black border border-neutral-800">
          <h2 class="title-footer">Status de trabalho</h2>
          <div class="flex flex-col gap-[0.3em]">
            <div class="flex flex-row gap-[0.3em] flex-wrap badge">
              <img src="https://img.shields.io/badge/-✅%20disponível-000000" alt="" />
              <img src="https://img.shields.io/badge/-✅%20remoto-000000" alt="" />
              <img src="https://img.shields.io/badge/-✅%20presencial-000000" alt="" />
              <img src="https://img.shields.io/badge/-💯%20full%20stack-000000" alt="" />
              <img src="https://img.shields.io/badge/-🖼️%20frontend-000000" alt="" />
              <img src="https://img.shields.io/badge/-⚙️%20backend-000000" alt="" />
            </div>
            <div class="text-xs text-zinc-500">
              estou disponível para trabalhar como web developer seja de forma
              presencial ou remoto, também analiso propostas frontend e backend.
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<style scoped>
#container-index:nth-child(n + 1) {
  @apply w-full flex flex-col;
}

.title-project {
  @apply pl-0 text-2xl font-medium;
  color: #ead41c;
}

.resume-footer {
  @apply leading-tight;
  margin-bottom: 0;
}

.title-footer {
  @apply text-2xl font-medium;
  color: #ead41c;
}
</style>
