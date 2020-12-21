<template>
  <section id="main" data-scroll-time="0.30" class="s1">
    <div class="box">
      <h1 class="size-telephone">дизайн<br />вёрстка</h1>
      <img
        src="../assets/site/images/pluse.svg"
        alt=""
        class="absolute-pluse"
      />
      <div class="btn-wrap">
        <a href="#contact" class="btn w-button">контакты</a>
        <a href="#my-job" class="btn _2 w-button">мои работы</a>
      </div>
    </div>
    <p class="size-p-telephone margin">
      Привет,  меня зовут Дмитрий,<br />я из Перми. Занимаюсь <br />дизайном и
      вёрсткой уже более<br />1-ого года. Это мой <br />сайт-портфолио для
      Вас!
    </p>
  </section>

  <About/>

  <MyWorks/>

  <section class="s4">
    <div class="wrap-widht">
      <div class="wrap-h">
        <h1 class="size-telephone font-setting">Правила &amp; Условия</h1>
        <h2 class="size-hor-telephone border">
          Установка правильных ожиданий с самого начала
        </h2>
      </div>
      <div class="margin">
        <div class="txt">
          1. Я люблю, когда на ТЫ <br />( если Вам это не подходит, дайте
          знать с самого начала )
        </div>
        <div class="text-wrap">
          <div class="txt">2. Вежливость и шутки <br />приветствуются!</div>
          <div class="txt bold">3. Хорошее настроение 🤗</div>
        </div>
      </div>
    </div>
  </section>

  <Animations/>

  <a href="#main" data-scroll-time="0.50" class="scrolltop w-inline-block"></a>
  <div class="progress-bar"></div>

</template>

<script>
import About from '@/components/About.vue'
import Animations from '@/components/Animations.vue'
import MyWorks from '@/components/MyWorks.vue'
import '../assets/site/js/canvas'
import '../assets/site/js/canvas-int'
import { onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    About, Animations, MyWorks
  },
  setup() {
    onMounted(() => {
      Webflow.require('ix2').init()
    })
  }
};
</script>
