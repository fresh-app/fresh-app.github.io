<script setup lang="ts">
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div style="display: flex; gap: 0.5em; flex-wrap: wrap;">
    <VPButton
      tag="a"
      theme="brand"
      text="Use this template"
      :href="`https://github.com/fresh-app/${props.name}/generate`"
    />
    <VPButton
      tag="a"
      theme="alt"
      text="View on GitHub"
      :href="`https://github.com/fresh-app/${props.name}`"
    />
  </div>
</template>