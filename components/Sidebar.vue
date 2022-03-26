<script lang="ts" setup>
const categorylist = [
  {
    key: 'arduino',
    value: 'arduino',
    id: 'ihilhjiljil'
  },
  {
    key: '樹梅派',
    value: '樹梅派',
    id: 'reko;gkreo;'
  },
  {
    key: '加工',
    value: '加工',
    id: 'ojojjo'
  },
  {
    key: '機構設計',
    value: '機構設計',
    id: 'uighuh'
  },
];

const taglist = [
  {
    key: 'c語言',
    value: 'c語言',
    id: '1111'
  },
  {
    key: '實作',
    value: '實作',
    id: '2222;'
  },
  {
    key: 'inventor',
    value: 'inventor',
    id: '3333'
  },
  {
    key: 'solidworks',
    value: 'solidworks',
    id: '4444'
  },
];
</script>

<template>
  <!-- component -->
  <div class="mt-5 flex-auto p-5 overflow-y-auto overflow-x-hidden text-gray-800">
    <Menu 
      :title="'分類'"
      :list="categorylist"
      class="mb-4"
    />
    <Menu 
      :title="'標籤'"
      :list="taglist"
    />
  </div>
</template>