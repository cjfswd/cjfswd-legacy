<script setup lang="ts">
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

type ITree = { [key in string]: string }[];
type IRepository = { [key: string]: string } & { tree: ITree } & {
    [key in "repositoryTopics" | "languages"]: any;
  };

interface ICjfswdAPI {
  login: string;
  repositories: IRepository[];
}

const {
  pending,
  data,
  refresh,
  error,
} = await useLazyFetch(
  "https://raw.githubusercontent.com/cjfswd/cjfswd-api/main/src/public/repository.json",
  { transform: (data): ICjfswdAPI => JSON.parse(data as string) }
);

refresh();

let dataFiltered = ref<ICjfswdAPI>();
let categories = ref([]);
let actualCategory = ref("todos");

watch(data, (newData, oldData) => {
  if (newData != null && newData != oldData) {
    categories.value = [
      ...new Set(
        newData.repositories
          .map((item) =>
            item.name.split("-")[0] == "dedicar" ? "dedicar" : item.name.split("-")
          )
          .flat(Infinity)
      ),
    ];
    dataFiltered.value = { ...newData };
  }
});

const filterOnlyWith = (value: string) => {
  actualCategory.value = value;
  dataFiltered.value.repositories = data.value.repositories.filter((item) =>
    item.name.includes(value)
  );
  value == "todos" ? (dataFiltered.value = { ...data.value }) : "";
};

const colNumber = computed(() => {
  if (screen != undefined) {
    if (actualCategory.value != "todos") return 1;
    if (["ms", "mm", "ml"].some((value) => grid.breakpoint.includes(value))) return 1;
    if (["sm"].some((value) => grid.breakpoint.includes(value))) return 2;
    if (["md", "lg", "xl", "2xl", "3xl"].some((value) => grid.breakpoint.includes(value)))
      return 3;
  }
});
</script>
<template>
  <div id="container-index">
    <div class="flex flex-col gap-6">
      <h1 class="text-5xl font-semibold tracking-wide">Portfólio</h1>
      <div class="flex flex-row flex-wrap gap-[0.35em]">
        <div
          :class="`rounded bg-black px-1 pb-[2.5px] cursor-pointer border-[1.5px] ${
            item == actualCategory
              ? 'border-[#EAD41C] text-[#EAD41C]'
              : 'border-zinc-700 text-zinc-400'
          } font-extralight`"
          v-for="(item, index) in pending
            ? Array(20).fill('loading...')
            : ['todos', ...categories]"
          @click="filterOnlyWith(item)"
        >
          {{ item }}
        </div>
      </div>
      <div
        class="column-gap-4"
        :style="`
      columns: ${colNumber}; 
      break-inside: avoid;`"
      >
        <div
          v-for="(item, index) in pending
            ? Array <
              IRepository >
              (40).fill({ name: 'Loading...', description: 'loading...' })
            : dataFiltered.repositories"
          :key="item.name + index"
          class="px-4 pt-2 pb-3 rounded bg-black border border-zinc-800 flex flex-col gap-1 mb-[1.25em]"
          style="
            -webkit-column-break-inside: avoid;
            page-break-inside: avoid;
            break-inside: avoid;
          "
        >
          <h3 class="text-xl font-semibold tracking-wider text-[#EAD41C]">
            {{ item.name }}
          </h3>
          <!-- <img
              src="https://raw.githubusercontent.com/cjfswd/cjfswd/main/.github/public/video/video.webp"
              alt=""
              class="rounded-[4px]"
            /> -->
          <div>{{ item.description }}</div>
          <div class="flex flex-row h-full gap-2 mt-2">
            <a
              :href="`https://www.github.com/cjfswd/${item.name}`"
              target="_blank"
              class="px-1 rounded-[4px] border border-neutral-700 hover:border-[#EAD41C] cursor-pointer text-sm"
            >
              <i class="mdi mdi-github" /> github
            </a>
            <a
              v-if="item.homepageUrl"
              :href="item.homepageUrl"
              target="_blank"
              class="px-1 rounded-[4px] border border-neutral-700 hover:border-[#EAD41C] cursor-pointer text-sm"
            >
              <i class="mdi mdi-open-in-new" /> live
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#container-index:nth-child(n + 1) {
  @apply w-full flex flex-col;
}
</style>
