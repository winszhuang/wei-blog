<script lang="ts" setup>
interface ListItem {
  id: string;
  key: string;
  value: string;
}

const props = defineProps<{
  title: string,
  list: ListItem[]
}>();

</script>

<template>
  <ul class="flex flex-col">
    <!-- menu title -->
    <li class=" border-b mb-4">
      <div class="flex flex-row items-center h-12">
        <div class=" text-lg font-bold tracking-wide text-slate-600">
          {{ props.title }}
        </div>
      </div>
    </li>

    <!-- menu item -->
    <li 
      v-for="item in props.list" 
      :key="item.id"
    >
      <a
        href="#"
        class="relative flex flex-row items-center h-8 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
      >
        <span 
          class="ml-2 text-sm tracking-wide truncate">
          {{ item.value }}
        </span>
      </a>
    </li>
  </ul>
</template>