<script lang="ts" setup>
const props = withDefaults(defineProps<{
  icon: string,
  size: string
}>(), {
  icon: 'mdi-emoticon',
  size: 'lg'
});

</script>

<template>
  <span 
    class="mdi"
    :class="[props.icon, `text-${props.size}`]" />
</template>