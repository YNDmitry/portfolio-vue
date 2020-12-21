<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  name: 'MainLayout',
  components: {
    Header, Footer
  },
  setup() {
    onMounted(() => {
      Webflow.require('ix2').init()
    })
  }
}
</script>
