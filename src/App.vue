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
      div#experience.substrate
        div.title Опыт работы
        div.container
          div.timeline_block
            span.date 2006 &mdash; 2011
            | Разработка логотипов, веб-дизайна и сайтов.
            | Свой первый интернет-магазин рыболовных товаров.
          div.timeline_block
            span.date 2011 &mdash; 2012
            span.company Тенториум
            span.position Администратор сайтов в компании
            | Администрировал и дорабатывал сайты:
            br
            | 1)
            a(
              href="https://tentorium.ru"
              target="_blank"
               rel="nofollow"
            ) tentorium.ru
            |  (1C Битрикс);
            br
            | 2)
            span(
              class="no_site"
              title="Сайт уже не работает"
            ) save-bee.ru (1C Битрикс);
            br
            | 3) Внутренний корпоративный портал компании (1C Битрикс);
            br
            | 4)
            a(
              href="http://apispa.ru"
              target="_blank"
              rel="nofollow"
            ) apispa.ru.
            br
            | Также, занимался: разработкой электронного документооборота
            | компании (разработка архитектуры&nbsp;БД, программирование под CMS Bitrix),
            | разработкой модуля личного кабинета для tentorium.ru (отчёты, диаграммы,
            | одноразовые ссылки на&nbsp;документы т.д.), написанием &laquo;гаджетов&raquo;
            | для корпоративного портала, разработкой электронных конкурсов и&nbsp;тестов
            | для корпоративного портала (на&nbsp;JQuery + MySQL) размещением информации
            | и&nbsp;аккаунтов в&nbsp;социальных сетях.
          div.timeline_block
            span.date 2013
            span.company Federal Finance
            span.position PHP программист
            | Работа с Zend Framework над системой сбора
            | заявок на кредиты в банки. Вёрстка.
          div.timeline_block
            span.date 2014
            span.company Студия &laquo;Помидор&raquo;
            span.position PHP программист
            | Разработка сайтов на&nbsp;Drupal, Yii. Верстка,
            | программирование. Архитектура&nbsp;БД.
          div.timeline_block
            span.date 2014 &mdash; 2017
            span.company WBMS interactive
            span.position SEO-оптимизатор, веб-программист
            | Продвижение сайтов, работа над отдельными сайтами
            | (верстка, программирование), создание лендингов. В&nbsp;основном на&nbsp;MODx.
          div.timeline_block
            span.date 2017
            span.company &laquo;Модерн&raquo;
            span.position Программист-верстальщик
            | Адаптивная вёрстка, JS, немного back-end'а.
          div.timeline_block
            span.date 2014 &mdash; 2019
            span.company АН &laquo;Новые дома&raquo;
            span.position Разработчик и администратор сайта
            | Создание, развитие, поддержка и администрирование сайта.
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
