<script lang="ts" setup>
const props = defineProps<{
  title: string,
  content: string,
  category: string,
  tags: Array<string>,
  createTime: string,
  imageUrl: string
}>();

</script>

<template>
  <div class="flex">
    
    <div class="flex flex-col items-start">
      <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
        {{ props.category }}
      </span>
      <h2 class="sm:text-3xl text-2xl title-font font-bold text-slate-700 mt-4 mb-4">
        {{ props.title }}
      </h2>
      <p class=" font-normal leading-relaxed mb-8 text-slate-600">
        {{ props.content }}
      </p>
      <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <a class=" text-slate-900 inline-flex items-center">閱讀更多
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
        <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <svg
            class="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle
              cx="12"
              cy="12"
              r="3"
            />
          </svg>1.2K
        </span>
        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
          <svg
            class="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>6
        </span>
      </div>
    </div>
    <div class="p-4 ml-5 mt-5" style="max-width: 300px;">
      <img :src="props.imageUrl" alt="">
    </div>
  </div>
</template>