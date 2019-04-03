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
      div.siema_wrapper
        siema(
          class="siema s"
          ref="siema"
          :options="options"
          @change="change"
          )
          div.slide(
            data-name="Начало"
            )
            div.content_wrapper
              img(
                src="./assets/images/avatar.jpg"
                class="avatar"
              )
              p.born Родился в 1986 году (33 года) в городе Пермь.
          div.slide(
            data-name="Образование среднее"
            )
            div.content_wrapper
              div.img_wrapper
                img(
                  src="./assets/images/pgti.jpg"
                  class="pgti_img"
                )
              p.pgti Закончил ПГТИ 2003 &mdash; 2006 года.
                    br
                    strong Специализация:
                    br
                    |  Программное обеспечение вычислительной
                    |  техники и автоматизированных систем.
                    div.button_wrapper
                      a(href="#"
                      class="button"
                      ) Посмотреть диплом
                        span.icon_zoom
          div.slide(
            data-name="Образование высшее"
            )
            div.content_wrapper
              div.img_wrapper
                img(
                  src="./assets/images/pnipu.png"
                  class="pnipu_img"
                )
              p.pnipu Закончил ПНИПУ (ПГТУ) 2006 &mdash; 2010 года.
                    br
                    strong Специализация:
                    br
                    |  Автоматизированные системы обработки
                    |  информации и управления (АСУ).
                    div.button_wrapper
                      a(href="#"
                      class="button"
                      ) Посмотреть диплом
                        span.icon_zoom
        div(
          class="arrow arrow_left"
          @click="$refs.siema.prev()"
          v-if="arrowLeft !== ''"
        )
          span {{arrowLeft}}
        div(
          class="arrow arrow_right"
          @click="$refs.siema.next()"
          v-if="arrowRight !== ''"
        )
          span {{arrowRight}}
          
</template>

<script>
export default {
  data () {
    return {
      options: {
        draggable: false,
        multipleDrag: false
      },
      arrowLeft: '',
      arrowRight: 'Образование среднее',
      showModal: false
    }
  },
  methods: {
    change (arrowLeft, arrowRight) {
      var el = this.$refs.siema.siema
      var current = el.currentSlide
      var count = el.innerElements.length
      var prev = current - 1
      var next = current + 1
      var prevEl = ''
      var nextEl = ''

      if (prev >= 0) {
        prevEl = el.innerElements[prev].getAttribute('data-name')
        this.arrowLeft = prevEl
      } else {
        this.arrowLeft = ''
      }

      if (next <= count - 1) {
        nextEl = el.innerElements[next].getAttribute('data-name')
        this.arrowRight = nextEl
      } else {
        this.arrowRight = ''
      }
    }
  }
}
</script>

<style lang="stylus">
@import "../node_modules/stylus-reset"
@import '../node_modules/jeet/stylus/jeet/index'
@import './assets/stylus/main.styl'
</style>
