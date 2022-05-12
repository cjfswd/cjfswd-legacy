<script setup lang="ts">
import hljs from "highlight.js";
import "highlight.js/styles/androidstudio.css";

import { marked } from "marked";
import { useScreen, useGrid } from "vue-screen";
const screen = useScreen();
const grid = useGrid({
  ms: 320,
  mm: 375,
  ml: 425,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
  "3xl": 1536,
});

type IGist = {
  url: string;
  description: string;
  files: { name: string; text: string }[];
};

const {
  pending,
  data,
  refresh,
} = await useLazyFetch(
  "https://raw.githubusercontent.com/cjfswd/cjfswd-api/main/src/public/gist.json",
  { transform: (data): IGist[] => JSON.parse(data as string) }
);

refresh();

let categories = ref([]);
let dataFiltered = ref<IGist[]>();
let actualCategory = ref("todos");

watch(data, (newData, oldData) => {
  if (newData != null && newData != oldData) {
    categories.value = [
      ...new Set(
        data.value.map((item) => item.files[0].name.split("_")[0]).flat(Infinity)
      ),
    ] as string[];
    dataFiltered.value = [...data.value];
  }
  if (process.client) {
    setTimeout(() => {
      hljs.highlightAll();
    }, 1);
  }
});

const filterOnlyWith = (value: string) => {
  actualCategory.value = value;
  dataFiltered.value = data.value.filter((item) => item.files[0].name.includes(value));
  value == "todos" ? (dataFiltered.value = [...data.value]) : "";
  if (process.client) {
    setTimeout(() => {
      hljs.highlightAll();
    }, 1);
  }
};

const header = {
  name: "Códigos",
  subtitle: "Castillo Junior.",
};

const colNumber = computed(() => {
  if (screen != undefined && process.client) {
    if (actualCategory.value != "todos") return 1;
    if (["ms", "mm", "ml"].some((value) => grid.breakpoint.includes(value))) return 1;
    if (["sm"].some((value) => grid.breakpoint.includes(value))) return 2;
    if (["md", "lg", "xl", "2xl", "3xl"].some((value) => grid.breakpoint.includes(value)))
      return 3;
  }
});

const copy = (code: string) => {
  navigator.clipboard.writeText(code);
};

onMounted(() => {
  setTimeout(() => {
    hljs.highlightAll();
  }, 1); // 1 seems to work better for me than 0
});

const skeleton = {
  url: "loading...",
  description: "Loading...",
  files: [{ name: "loading...", text: "loading..." }],
};
</script>
<template>
  <div id="container-index">
    <div class="flex flex-col gap-6">
      <h1 class="text-5xl font-semibold tracking-wide">Códigos</h1>
      <div class="flex flex-row flex-wrap gap-[0.35em]">
        <div
          :class="`rounded bg-black px-1 pb-[2.5px] cursor-pointer border-[1.5px] ${
            item == actualCategory
              ? 'border-[#EAD41C] text-[#EAD41C]'
              : 'border-zinc-700 text-zinc-400'
          } font-extralight`"
          v-for="(item, index) in pending
            ? Array(10).fill('loading...')
            : ['todos', ...categories]"
          @click="filterOnlyWith(item)"
        >
          {{ item }}
        </div>
      </div>
      <ClientOnly>
        <div
          v-if="data != undefined"
          class="column-gap-4"
          :style="`
        columns: ${colNumber}; 
        break-inside: avoid;`"
        >
          <div
            v-for="(item, index) in pending
              ? Array < IGist > (40).fill({ ...skeleton })
              : dataFiltered"
            :key="item.files[0].name + index"
            class="px-4 pt-2 pb-3 rounded bg-black border border-zinc-800 flex flex-col gap-2 mb-[1.25em]"
            style="
              -webkit-column-break-inside: avoid;
              page-break-inside: avoid;
              break-inside: avoid;
            "
          >
            <h2 class="text-xl font-semibold tracking-wider text-[#EAD41C]">
              {{ item.description }}
            </h2>
            <pre
              v-if="!item.files[0].name.includes('.md')"
              style="
                display: flex;
                flex-direction: column;
                width: 100%;
                height: fit-content;
              "
            >
            <code>{{ item.files[0].text }}</code>
            </pre>
            <div v-else v-html="marked.parse(item.files[0].text)"></div>
            <div class="flex flex-row gap-2">
              <div
                class="px-1 rounded-[4px] border border-neutral-700 hover:border-[#EAD41C] cursor-pointer text-sm w-min whitespace-nowrap"
              >
                <i class="mdi mdi-content-copy" @click="copy(item.files[0].text)"></i>
                copy
              </div>
              <a
                :href="item.url"
                target="_blank"
                class="px-1 rounded-[4px] border border-neutral-700 hover:border-[#EAD41C] cursor-pointer text-sm w-min whitespace-nowrap"
              >
                <i class="mdi mdi-github"></i> github
              </a>
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>
<style scoped>
#container-index:nth-child(n + 1) {
  @apply flex flex-col;
}

.hljs {
  padding: 2px 4px;
  background-color: #050505;
  @apply border border-neutral-700 rounded;
}
</style>
