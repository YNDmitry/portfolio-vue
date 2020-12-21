<template>
  <div class="container">
    <a
      :href="work.link"
      target="_blank"
      class="work-box-inline border-right w-inline-block"
      :key="work.id"
      v-for="work in WORKS"
    >
      <div class="absolute-txt-work">{{ work.title }}</div>
      <img :src="work.img" alt="" class="work-img" sizes="(max-width: 479px) 92vw, (max-width: 767px) 87vw, (max-width: 991px) 40vw, 49vw" />
      <div class="absolute-txt-work left">{{ work.subTitle }}</div>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Work',
  computed: mapGetters(['WORKS'])
}
</script>
