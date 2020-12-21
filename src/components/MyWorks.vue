<template>
  <section id="my-job" data-scroll-time="0.50" class="s3">
    <div class="box section4">
      <h1 class="size-telephone font-setting">мои последние <br />работы</h1>
      <p class="small-p">
        Все работы кликабельны, просто нажмите для перехода на страницу с
        работой.
      </p>
    </div>

    <Work/>

  </section>
</template>

<script>
import Work from '../components/Works/Work'
export default {
  name: 'MyWorks',
  components: {
    Work
  }
}
</script>
