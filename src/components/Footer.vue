<template>
  <footer id="contact" data-scroll-time="0.75" class="footer">
    <div class="wrap-btn">
      <a
        href="https://wa.me/79519270272"
        target="_blank"
        class="soc-btn wts w-button"
        >Whatsapp</a
      >
      <a
        href="https://t-do.ru/YNDmitry_Metelev"
        target="_blank"
        class="soc-btn w-button"
        >Telegram</a
      >
    </div>
    <div class="soc-wrap">
      <div class="email-txt">
        <span class="font-witght-600">Email</span>: mailmetelev@gmail.com
      </div>
      <div class="email-txt">
        <span class="font-witght-600">Telegram</span>: @YNDmitry_Metelev
      </div>
    </div>
    <div class="f-txt">© <span>{{ new Date().getFullYear() }}</span> flowdmitry.design</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
