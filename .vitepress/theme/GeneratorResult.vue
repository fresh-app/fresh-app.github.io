<script setup>
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import TerminalOutput from './TerminalOutput.vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { page } = useData()
const time = computed(() => {
  const timing = page.value.frontmatter.result.timing
  const ms = Date.parse(timing.finishTime) - Date.parse(timing.startTime)
  const s = Math.ceil(ms / 1000)
  return Math.floor(s / 60) + 'm ' + s % 60 + 's'
})
</script>

<template>
  <table>
    <tr>
      <th scope="row">Time spent</th>
      <td>{{time}}</td>
    </tr>
    <tr>
      <th scope="row">Disk usage</th>
      <td>{{Math.round(page.frontmatter.result.size / 1048576)}} MB</td>
    </tr>
  </table>
  <TerminalOutput :ansi="page.frontmatter.result.log.join('\n')" />
  <div style="display: flex; gap: 0.5em; flex-wrap: wrap; margin-top: 1em;">
    <VPButton
      tag="a"
      theme="alt"
      text="View generator script"
      :href="`https://github.com/fresh-app/factory/blob/main/src/generators/${page.frontmatter.result.generator}.ts`"
    />
    <VPButton
      tag="a"
      theme="alt"
      text="View build output"
      :href="`${page.frontmatter.result.buildUrl}`"
    />
  </div>
</template>