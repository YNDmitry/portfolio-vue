<template>
  <header
    data-collapse="all"
    data-animation="default"
    data-duration="0"
    role="banner"
    class="header w-nav"
  >
    <nav class="nav-container">
      <a
        href="https://t-do.ru/YNDmitry_Metelev"
        target="_blank"
        class="soc-btn w-button"
        >Telegram</a
      >
      <div class="menu-button w-nav-button">
        <div data-w-id="burger" class="burger"></div>
        <div class="burger _2"></div>
        <div class="burger _3"></div>
      </div>
      <nav role="navigation" class="nav-menu w-nav-menu">
        <div class="links-wrap">
          <div class="wrap-nav-links">
            <a href="#main" class="content-title">главная</a
            ><a href="#why" class="content-title">почему я</a>
          </div>
          <a href="#my-job" class="content-title"
            >мои<br />
            работы</a
          ><a href="#contact" class="content-title">контакты</a>
          <div class="soc-wrap nav-set">
            <div class="email-txt">
              <span class="font-witght-600">Email</span>: mailmetelev@gmail.com
            </div>
            <div class="email-txt">
              <span class="font-witght-600">Telegram</span>: @YNDmitry_Metelev
            </div>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import '../utils/functions'
export default {
  name: 'Header'
}
</script>
