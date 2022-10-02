<script setup>
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import { useData } from 'vitepress'

const { page } = useData()
</script>

<template>
  <div style="display: flex; gap: 0.5em; flex-wrap: wrap;">
    <VPButton
      tag="a"
      theme="brand"
      text="Use this template"
      :href="`https://github.com/fresh-app/${page.frontmatter.result.generator}/generate`"
    />
    <VPButton
      tag="a"
      theme="alt"
      text="View on GitHub"
      :href="`https://github.com/fresh-app/${page.frontmatter.result.generator}`"
    />
  </div>
</template>