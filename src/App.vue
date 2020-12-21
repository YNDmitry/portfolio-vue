<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import { onMounted } from 'vue'
export default {
  name: 'App',
  computed: {
    layout() {
      return this.$route.meta.layout || 'main-layout'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style>
@import url('../src/assets/site/css/components.css');
</style>
