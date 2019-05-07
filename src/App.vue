<template lang="pug">
  #app
    Reveal(
      right
    )
      a(href="#greeting")
        span Приветствие
      a(href="#history")
        span История
      a(href="#experience")
        span Опыт работы
      a(href="#skills")
        span Навыки
      a(href="#contacts")
        span Контакты
    main#page-wrap
      div#greeting.substrate
        .container
          div.menu
            div.logo
              icon-logo
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
              div.button_wrapper
                a(href="./static/Portfolio_SPA.pdf"
                class="button"
                download="resume_ivanov_dmitriy"
                ) Скачать Резюме
                  span.icon_pdf
            div.block.illustration
              app-illustration-icon
      div#history.siema_wrapper
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
              p#born Родился в 1986 году (33 года) в городе Пермь.
                icon-born
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
            | 1)&nbsp;
            a(
              href="https://tentorium.ru"
              target="_blank"
                rel="nofollow"
            ) tentorium.ru
            |  (1C Битрикс);
            br
            | 2)&nbsp;
            span(
              class="no_site"
              title="Сайт уже не работает"
            ) save-bee.ru (1C Битрикс);
            br
            | 3) Внутренний корпоративный портал компании (1C Битрикс);
            br
            | 4)&nbsp;
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
      div#skills
        div.container
          div.title Навыки
          div.tabs
            ul
              li(
                v-for="tab in tabs"
                :class="{'is-active': tab.active}"
              )
                a(@click="setActive(tab)") {{tab.caption}}
          div(
            class="skills"
            v-if="tabs[0].active === true"
          )
            div.skills_block
              div.skills_title Языки
              div.skills_inner
                div.skills_row(
                    title="На данный момент в языке PHP я чувствую себя уверенно, могу решать задачи различной сложности. Собираюсь и дальше в нём разбираться"
                  )
                  div.skills_row_name PHP 5-7
                  div.skills_row_value
                    div.skills_row_value_100.skills_row_value_up
                div.skills_row(
                    title="В языке Python я начал разбираться недавно. Мне интересны его возможности и гибкость. Хотелось бы улучшить свои навыки работы с этим языком"
                  )
                  div.skills_row_name Python
                  div.skills_row_value
                    div.skills_row_value_10.skills_row_value_up
            div.skills_block
              div.skills_title Фреймворки и CMS
              div.skills_inner
                div.skills_row(
                      title="Я много работал с MODx, чувствую себя в нём уверенно и могу решать многие задачи. Однако, эта CMS развивается недостаточно интенсивно и, по возможности, я бы не хотел работать с ним больше"
                  )
                  div.skills_row_name MODx
                  div.skills_row_value
                    div.skills_row_value_100.skills_row_value_down
                div.skills_row(
                      title="Мне нравится Laravel. На данный момент у меня мало практических навыков работы с ним. Я читал много статей, документацию, проходил курсы Дмитрий Елисеева по Laravel. В дальнейшем собираюсь работать с этим фреймворком или его аналогами"
                  )
                  div.skills_row_name Laravel
                  div.skills_row_value
                    div.skills_row_value_50.skills_row_value_up
                div.skills_row(
                      title="С фреймворком Yii мне довелось поработать около года. В то время он мне очень нравился, но на данный момент я считаю, что этот фреймворк уходит в прошлое и стоит сосредоточиться на работе с Laravel. По возможности, я бы не хотел работать с данным фреймворком в будущем"
                  )
                  div.skills_row_name Yii
                  div.skills_row_value
                    div.skills_row_value_50.skills_row_value_down
                div.skills_row(
                      title="Я делал несколько сайтов на CMS Drupal. На мой взгляд это очень интересная и прогрессивная CMS. Опыта работы с ним у меня не очень много. Я бы не хотел использовать в работе эту CMS в дальнейшем"
                  )
                  div.skills_row_name Drupal
                  div.skills_row_value
                    div.skills_row_value_25.skills_row_value_down
                div.skills_row(
                      title="Мне довелось работать с 1С Битрикс при первом трудоустройстве в качестве программиста. Это было не легко и данная система, честно говоря, мне не по душе. Уже мало чего помню. По возможности, не хотелось бы работать с ней"
                  )
                  div.skills_row_name 1C Битрикс
                  div.skills_row_value
                    div.skills_row_value_10.skills_row_value_down
          div(
            class="skills"
            v-if="tabs[1].active === true"
          )
            div.skills_block
              div.skills_title Языки
              div.skills_inner
                div.skills_row(
                    title="С языка Javascript я начал заниматься программированием. Однако, быстро перешёл на фреймворк JQuery и использовать нативный JS мне приходилось не часто. Я бы хотел улучшить свои навыки в работе с этим языком"
                  )
                  div.skills_row_name Javascript
                  div.skills_row_value
                    div.skills_row_value_50.skills_row_value_up
            div.skills_block
              div.skills_title Фреймворки
              div.skills_inner
                div.skills_row(
                    title="Очень простой и понятный фреймворк. В нём я чувствую себя уверено и могу решать различные задачи без затруднений. Но, кажется, ему на смену уже пришли более современные фреймворки и придётся от него отказываться"
                  )
                  div.skills_row_name JQuery
                  div.skills_row_value
                    div.skills_row_value_100.skills_row_value_down
                div.skills_row(
                    title="Этот сайт сделан на VueJS. Мне он пришёлся по душе. Я хочу больше использовать его в работе и разбираться его возможностями"
                  )
                  div.skills_row_name VueJS
                  div.skills_row_value
                    div.skills_row_value_25.skills_row_value_up
                div.skills_row(
                    title="Довелось немного использовать React на одном из проектов. Также как и VueJS он очень привлекает своими возможностями и мне бы хотелось разобраться с ним"
                  )
                  div.skills_row_name React
                  div.skills_row_value
                    div.skills_row_value_10.skills_row_value_up
            div.skills_block
              div.skills_title Вёрстка
              div.skills_inner
                div.skills_row(
                    title="Я много занимался вёрсткой. Начинал со статичной табличной вёрстки. Затем была блочная, адаптивная, отзывчивая и т.д.. Есть опыт работы программистом-верстальщиком. Чувствую себя достаточно комфортно в вёрстке и в дальнейшем буду развиватсья в этом направлении"
                  )
                  div.skills_row_name CSS, SCSS, Stylus
                  div.skills_row_value
                    div.skills_row_value_100.skills_row_value_up
                div.skills_row(
                    title="До программирование и паралельно с ним я занимался веб-дизайном, рисовал, анимировал, делал 3D. Поэтому, я довольно комфортно себя чувствую с такими инструментами как Photoshop, Illustrator и их аналоги"
                  )
                  div.skills_row_name Photoshop, Ai
                  div.skills_row_value
                    div.skills_row_value_100.skills_row_value_up
          div.skills_other
            div.skills_other_block
              div.skills_other_title Окружение
              div.skills_other_list
                span(
                  class="tooltip"
                  title="Около 6 лет я пользуюсь ОС Linux. Более 4-х лет использую разные виды ОС как основую и единственную систему на всех компьютерах. В командной строке чувствую себя уверенно, но есть ещё чему учиться"
                ) Linux
                |  (Ubuntu, Debian, Arch, Deepin, Solus)
              div.skills_other_list Docker, Vagrant, XAMPP, Ubuntu server на VirtualBox
              div.skills_other_list Git, Github, Bitbucket
              div.skills_other_list Composer, Webpack & Gulp
            div.skills_other_block
              div.skills_other_title БД
              div.skills_other_list MySQL
              div.skills_other_title Есть понимание
              div.skills_other_list ООП, PSR, SOLID, KISS
      div#books.substrate
        div.title Последние прочитанные книги
        div.books_wrapper
          smooth-scrollbar(
            :options="{alwaysShowTracks: true}"
          )
            ul
              li
                a(
                href="https://www.ozon.ru/context/detail/id/139411597"
                target="_blank"
                )
                  img(
                  src="./assets/images/books/using_docker.jpg"
                  )
              li
                a(
                href="https://www.amazon.com/Design-Patterns-Laravel-Kelt-Dockins/dp/1484224507"
                target="_blank"
                )
                  img(
                  src="./assets/images/books/design_patterns_in_php_and_laravel.jpg"
                  )
              li
                a(
                href="https://www.ozon.ru/context/detail/id/140376487/"
                target="_blank"
                )
                  img(
                  src="./assets/images/books/djedaiskie_tehniki.jpg"
                  )
              li
                a(
                href="https://www.ozon.ru/context/detail/id/28336354/"
                target="_blank"
                )
                  img(
                  src="./assets/images/books/chistiy_kod.jpg"
                  )
              li
                a(
                href="https://www.ozon.ru/context/detail/id/144233005/"
                target="_blank"
                )
                  img(
                  src="./assets/images/books/patterny_proektirovania.jpg"
                  )
              li
                a(
                href="https://www.ozon.ru/context/detail/id/148737571/"
                target="_blank"
                )
                  img(
                  src="./assets/images/books/php_objecty_shablony_i_metodiki.jpg"
                  )
      #contacts
        div.title Контакты
        div.appeal_wrapper
          div.message Заинтересованы в сотрудничестве?
                    br
                    |  Вы можете отправить мне сообщение
                    |  или написать в социальных сетях.
                    div.extended_logo
                      icon-logo
        form
          textarea
          input(
            type="submit"
            class="button"
            value="Отправить"
          )
        footer
          ul.contacts
            li
              a(
                href="https://moikrug.ru/ivanopol"
                class="moi_krug"
                target="_blank"
              )
                img(
                  src="./assets/svg/contacts/moi_krug.svg"
                )
            li
              a(
                href="https://github.com/ivanopol"
                class="github"
                target="_blank"
              )
                img(
                  src="./assets/svg/contacts/github.svg"
                )
            li
              a(
                href="https://www.linkedin.com/in/ivanopol"
                class="linkedin"
                target="_blank"
              )
                img(
                  src="./assets/svg/contacts/linkedin.svg"
                )
</template>

<script>
import IconLogo from './components/icons/IconLogo.vue'
import IconBorn from './components/icons/IconBorn.vue'
import AppIllustrationIcon from './components/AppIllustrationIcon.vue'
import { Reveal } from 'vue-burger-menu'

export default {
  data () {
    return {
      animations: {
        illustration: false,
        logoMain: false,
        born: false,
        logoSecond: false,
        greeting: 0,
        history: 0,
        contacts: 0
      },
      scrollbar: {
        alwaysShowTracks: true
      },
      options: {
        draggable: false,
        multipleDrag: false
      },
      arrowLeft: '',
      arrowRight: 'Образование среднее',
      showModal: false,
      tabs: [
        {
          caption: 'Back-end',
          active: true
        },
        {
          caption: 'Front-end',
          active: false
        }
      ]
    }
  },
  mounted: function () {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var windowScrollPixels = (document.body.scrollTop || document.documentElement.scrollTop)
      var node = document
      if (this.animations.greeting === 0 && this.animations.history === 0 && this.animations.contacts === 0) {
        var greetingHeight = node.getElementById('greeting').clientHeight
        var historyHeight = node.getElementById('history').clientHeight / 3 + greetingHeight
        var contactsHeight = historyHeight
        contactsHeight += node.getElementById('experience').clientHeight
        contactsHeight += node.getElementById('skills').clientHeight

        this.animations.greeting = greetingHeight - (greetingHeight * 25 / 100)
        this.animations.history = historyHeight
        this.animations.contacts = contactsHeight
      }
      if (windowScrollPixels > this.animations.greeting) {
        if (this.animations.illustration) {
          this.animations.illustration = false
          node.getElementById('illustration').removeAttribute('class', 'active')
        }
      } else {
        if (!this.animations.illustration) {
          this.animations.illustration = true
          node.getElementById('illustration').setAttribute('class', 'active')
        }
      }

      if (windowScrollPixels > this.animations.history || windowScrollPixels < this.animations.greeting) {
        if (this.animations.born) {
          this.animations.born = false
          node.getElementById('born').removeAttribute('class', 'active')
        }
      } else {
        if (!this.animations.born) {
          this.animations.born = true
          node.getElementById('born').setAttribute('class', 'active')
        }
      }

      if (windowScrollPixels > this.animations.greeting) {
        if (this.animations.logoMain) {
          this.animations.logoMain = false
          node.getElementsByClassName('logo_wrap')[0].setAttribute('class', 'logo_wrap')
        }
      } else {
        if (!this.animations.logoMain) {
          this.animations.logoMain = true
          node.getElementsByClassName('logo_wrap')[0].setAttribute('class', 'logo_wrap active')
        }
      }

      if (windowScrollPixels < this.animations.contacts) {
        if (this.animations.logoSecond) {
          this.animations.logoSecond = false
          node.getElementsByClassName('logo_wrap')[1].setAttribute('class', 'logo_wrap')
        }
      } else {
        if (!this.animations.logoSecond) {
          this.animations.logoSecond = true
          node.getElementsByClassName('logo_wrap')[1].setAttribute('class', 'logo_wrap active')
        }
      }
    },
    setActive (tab) {
      this.tabs.forEach(el => {
        el.active = el === tab
      })
    },
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
  },
  components: {
    IconLogo,
    IconBorn,
    AppIllustrationIcon,
    Reveal
  }
}
</script>

<style lang="stylus">
@import "../node_modules/stylus-reset"
@import '../node_modules/jeet/stylus/jeet/index'
@import './assets/stylus/main.styl'
</style>
