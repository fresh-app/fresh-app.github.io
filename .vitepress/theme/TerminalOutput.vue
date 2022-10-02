<script setup lang="ts">
import {computed} from 'vue'
import Convert from 'ansi-to-html';
const  convert = new Convert();

const props = defineProps<{
  ansi: string
}>()
const html = computed(() => {
  return convert.toHtml(props.ansi)
})
</script>

<template>
  <pre wrap><code v-html="html"></code></pre>
</template>

<style scoped>
  pre {
    background: #090807;
    color: #e9e8e7;
    padding: 1em;
    border-radius: 0.5em;
    overflow: auto;
    font-size: 0.8em;
  }
</style>