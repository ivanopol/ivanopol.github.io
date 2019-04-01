<template lang="pug">
  .wrapper
    #app
      div#greeting.substrate
        .container
          div.menu
            div.logo
              img(src="./assets/svg/logo_ivanopol_portfolio.svg")
            nav
              a(href="#greeting") Приветствие
              a(href="#history") История
              a(href="#experience") Опыт работы
              a(href="#skills") Навыки
              a(href="#contacts") Контакты
          div.block_wrapper
            div.block.appeal
              h1 Дмитрий Иванов
              h2 Backend Developer
              div.underline
              p Здравстуйте, меня зовут Дмитрий. Я&nbsp;занимаюсь
                |  веб-разработкой уже много лет и&nbsp;мне это занятие очень
                | нравится. Сейчас я&nbsp;ищу работу на&nbsp;позицию
                | backend-developer или fullstack-developer.
              a(href="./assets/pdf/Portfolio_SPA.pdf"
              class="button"
              ) Скачать портфолио
                span.icon_pdf
            div.block.illustration
              img(
                src="./assets/svg/picture.svg"
              )
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
@import "../node_modules/stylus-reset"
@import '../node_modules/jeet/stylus/jeet/index'
@import './assets/stylus/main.styl'
</style>
