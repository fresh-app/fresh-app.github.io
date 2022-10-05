<script setup>
  import list from './list.json'
  import {getIconStyle} from './icons'
</script>

<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">Template</th>
        <th>Links</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.name">
        <td class="fw-icon">
          <i :style="getIconStyle(item.name)"></i>
        </td>
        <td nowrap>
          <a :href="item.href">
            {{ item.name }}
          </a>
        </td>
        <td nowrap>
          <div class="links">
            <a :href="`https://github.com/fresh-app/${item.name}/generate`" class="use" title="Use this template">
              Use this template
            </a>
            <a :href="`https://github.com/fresh-app/${item.name}`" title="View repository" class="icon-link">
              <i class='codicon codicon-repo'></i>
            </a>
            <a :href="`https://github.dev/fresh-app/${item.name}`" title="Open in github.dev" class="icon-link">
              <i class='codicon codicon-code'></i>
            </a>
            <a :href="`${item.href}#result`" title="View terminal output" class="icon-link">
              <i class='codicon codicon-terminal'></i>
            </a>
            <a :href="`${item.href}#screenshot`" title="View screenshot" class="icon-link" v-if="item.screenshotAvailable">
              <i class='codicon codicon-device-camera'></i>
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  .use {
    font-size: 14px;
    padding: 5px 16px;
    display: inline-block;
    font-weight: 500;
    color: #fff;
    background: #238636;
    border: 1px solid rgba(240,246,252,0.1);
    border-radius: 6px;
  }
  .use:hover {
    color: #fff;
    background: #2ea043;
  }
  .icon-link i.codicon {
    font-size: 24px;
    display: block;
  }
  .links {
    display: flex;
    gap: 1em;
    align-items: center;
  }
  .fw-icon {
    padding: 0 12px;
    text-align: center;
  }
  .fw-icon > i {
    width: 32px;
    height: 32px;
    background: var(--icon-light) center no-repeat;
    background-size: contain;
    display: inline-block;
  }
  html.dark .fw-icon > i {
    background-image: var(--icon-dark);
  }
</style>
