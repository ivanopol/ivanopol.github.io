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
              p Привет, меня зовут Дмитрий и&nbsp;это моё портфолио.
                |  Я&nbsp;занимаюсь веб-программированием уже больше 9-ти лет.
                | Ниже вы&nbsp;можете узнать подробную информацию обо мне, моём опыте и&nbsp;навыках.
                | Стек: PHP, JS, MySQL, Linux.
              div.button_wrapper
                a(
                  href="./static/resume_ivanov_dmitriy.pdf"
                  class="button"
                  download="resume_ivanov_dmitriy"
                  v-on:click="reachGoal"
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
                alt="Аватар: Иванов Дмитрий"
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
                   alt="Логотип ПГТИ"
                )
              p.pgti Закончил ПГТИ 2003 &mdash; 2006 года.
                    br
                    strong Специализация:
                    br
                    |  Программное обеспечение вычислительной
                    |  техники и автоматизированных систем.
          div.slide(
            data-name="Образование высшее"
            )
            div.content_wrapper
              div.img_wrapper
                img(
                  src="./assets/images/pnipu.jpg"
                  class="pnipu_img"
                  alt="Логотип ПНИПУ"
                )
              p.pnipu Закончил ПНИПУ (ПГТУ) 2006 &mdash; 2010 года.
                    br
                    strong Специализация:
                    br
                    |  Автоматизированные системы обработки
                    |  информации и управления (АСУ).
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
            span.date 2014 &mdash; 2019
            span.company АН &laquo;Новые дома&raquo;
            span.position Разработчик и администратор сайта
            p
              | Создание, развитие и&nbsp;поддержка личного кабинета и&nbsp;сайта компании.<br>
            p
              | Разработка архитектуры&nbsp;БД, структуры сайта, вёрстка,
              | глубокая SEO-оптимизация, например: динамические URL из&nbsp;параметров поиска, микроразметка,
              | генерация страниц из&nbsp;справочника улиц и&nbsp;объектов недвижимости.<br>
            p
              | Разработка личного кабинета включала в&nbsp;себя множество разных задач, например: конструктор листовок из&nbsp;объявления,
              | сложные фильтрации объявлений для быстрого поиска.
            ul
              li
                a(
                  href="https://noviedoma24.ru/"
                  target="_blank"
                  rel="nofollow"
                ) noviedoma24.ru
          div.timeline_block
            span.date 2017
            span.company &laquo;Модерн&raquo;
            span.position Программист-верстальщик
            p
              | Адаптивная вёрстка, JS, немного back-end'а.
              | Работа над отдельными страницами, сложная вёрстка с хорошей поддержкой мобильных устройств.
            ul
              li
                a(
                  href="https://www.bestcreditoffers.com/compare-credit-cards-to-earn-rewards-150.php"
                  target="_blank"
                  rel="nofollow"
                ) Пример 1
              li
                a(
                  href="https://www.bestcreditoffers.com/top-credit-cards-for-smart-spending.php"
                  target="_blank"
                  rel="nofollow"
                ) Пример 2
              li
                a(
                  href="https://www.bestcreditoffers.com/save-on-cruise-with-credit-card.php"
                  target="_blank"
                  rel="nofollow"
                ) Пример 3
          div.timeline_block
            span.date 2014 &mdash; 2017
            span.company WBMS interactive
            span.position SEO-оптимизатор, веб-программист
            p
              | Продвижение сайтов, работа над отдельными сайтами
              | (верстка, программирование), создание лендингов. В&nbsp;основном на&nbsp;MODx.
            ul
              li
                a(
                  href="http://wbms.ru"
                  target="_blank"
                  rel="nofollow"
                ) wbms.ru
              li
                a(
                  href="http://lasermall24.ru"
                  target="_blank"
                  rel="nofollow"
                ) lasermall24.ru
          div.timeline_block
            span.date 2014
            span.company Студия &laquo;Помидор&raquo;
            span.position PHP программист
            p
              | Разработка сайтов на&nbsp;Drupal, Yii. Верстка,
              | программирование, архитектура&nbsp;БД.
          div.timeline_block
            span.date 2013
            span.company Federal Finance
            span.position PHP программист
            p
              | Работа с Zend Framework над системой сбора
              | заявок на кредиты в банки. Вёрстка.
          div.timeline_block
            span.date 2011 &mdash; 2012
            span.company Тенториум
            span.position Администратор сайтов в компании
            p
              | Администрировал и дорабатывал сайты:
            ul
              li
                a(
                  href="https://tentorium.ru"
                  target="_blank"
                    rel="nofollow"
                ) tentorium.ru
                |  (1C Битрикс)
              li
                span(
                  class="no_site"
                  title="Сайт уже не работает"
                ) save-bee.ru (1C Битрикс)
              li
                | Внутренний корпоративный портал компании (1C Битрикс)
              li
                a(
                  href="http://apispa.ru"
                  target="_blank"
                  rel="nofollow"
                ) apispa.ru
            p
              | Также, занимался: разработкой электронного документооборота
              | компании (разработка архитектуры&nbsp;БД, программирование под CMS Bitrix),
              | разработкой модуля личного кабинета для tentorium.ru (отчёты, диаграммы,
              | одноразовые ссылки на&nbsp;документы т.д.), написанием &laquo;гаджетов&raquo;
              | для корпоративного портала, разработкой электронных конкурсов и&nbsp;тестов
              | для корпоративного портала (на&nbsp;JQuery + MySQL) размещением информации
              | и&nbsp;аккаунтов в&nbsp;социальных сетях.
          div.timeline_block
            span.date 2006 &mdash; 2011
            p
              | Разработка логотипов, веб-дизайна и сайтов.
              | Свой первый интернет-магазин рыболовных товаров.
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
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name PHP 5-7
                    div.skills_row_value
                      div.skills_row_value_100.skills_row_value_up
                  template(
                    slot="popover"
                  )
                    p {{ skills.php }}
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name Python
                    div.skills_row_value
                      div.skills_row_value_10.skills_row_value_up
                  template(
                    slot="popover"
                  )
                    p {{ skills.python }}
            div.skills_block
              div.skills_title Фреймворки и CMS
              div.skills_inner
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name MODx
                    div.skills_row_value
                      div.skills_row_value_100.skills_row_value_down
                  template(
                    slot="popover"
                  )
                    p {{ skills.modx }}
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name Laravel
                    div.skills_row_value
                      div.skills_row_value_50.skills_row_value_up
                  template(
                    slot="popover"
                  )
                    p {{ skills.laravel }}
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name Yii
                    div.skills_row_value
                      div.skills_row_value_50.skills_row_value_down
                  template(
                    slot="popover"
                  )
                    p {{ skills.yii }}
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name Drupal
                    div.skills_row_value
                      div.skills_row_value_25.skills_row_value_down
                  template(
                    slot="popover"
                  )
                    p {{ skills.drupal }}
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name 1C Битрикс
                    div.skills_row_value
                      div.skills_row_value_10.skills_row_value_down
                  template(
                    slot="popover"
                  )
                    p {{ skills.bitrix }}
          div(
            class="skills"
            v-if="tabs[1].active === true"
          )
            div.skills_block
              div.skills_title Языки
              div.skills_inner
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name Javascript
                    div.skills_row_value
                      div.skills_row_value_50.skills_row_value_up
                  template(
                    slot="popover"
                  )
                    p {{ skills.javascript }}
            div.skills_block
              div.skills_title Фреймворки
              div.skills_inner
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name JQuery
                    div.skills_row_value
                      div.skills_row_value_100.skills_row_value_down
                  template(
                    slot="popover"
                  )
                    p {{ skills.jquery }}
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name VueJS
                    div.skills_row_value
                      div.skills_row_value_25.skills_row_value_up
                  template(
                    slot="popover"
                  )
                    p {{ skills.vuejs }}
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name React
                    div.skills_row_value
                      div.skills_row_value_10.skills_row_value_up
                  template(
                    slot="popover"
                  )
                    p {{ skills.react }}
            div.skills_block
              div.skills_title Вёрстка
              div.skills_inner
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name CSS, Stylus
                    div.skills_row_value
                      div.skills_row_value_100.skills_row_value_up
                  template(
                    slot="popover"
                  )
                    p {{ skills.layout }}
                v-popover(
                  placement="top"
                )
                  div.skills_row
                    div.skills_row_name Photoshop
                    div.skills_row_value
                      div.skills_row_value_100.skills_row_value_up
                  template(
                    slot="popover"
                  )
                    p {{ skills.design }}
          div.skills_other
            div.skills_other_block
              div.skills_other_title Окружение
                v-popover(
                  placement="top"
                )
                  div.skills_other_list
                    span.tooltip_other Linux (Ubuntu, Debian, Arch, Deepin, Solus)
                  template(
                    slot="popover"
                  )
                    p {{ skills.environment }}
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
                    alt="Использование Docker"
                  )
              li
                a(
                href="https://www.amazon.com/Design-Patterns-Laravel-Kelt-Dockins/dp/1484224507"
                target="_blank"
                )
                  img(
                    src="./assets/images/books/design_patterns_in_php_and_laravel.jpg"
                    alt="Design Patterns in PHP and Laravel"
                  )
              li
                a(
                href="https://www.ozon.ru/context/detail/id/140376487/"
                target="_blank"
                )
                  img(
                    src="./assets/images/books/djedaiskie_tehniki.jpg"
                    alt="Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо"
                  )
              li
                a(
                href="https://www.ozon.ru/context/detail/id/28336354/"
                target="_blank"
                )
                  img(
                    src="./assets/images/books/chistiy_kod.jpg"
                    alt="Чистый код: создание, анализ и рефакторинг"
                  )
              li
                a(
                href="https://www.ozon.ru/context/detail/id/144233005/"
                target="_blank"
                )
                  img(
                    src="./assets/images/books/patterny_proektirovania.jpg"
                    alt="Head First. Паттерны проектирования. Обновленное юбилейное издание"
                  )
              li
                a(
                href="https://www.ozon.ru/context/detail/id/148737571/"
                target="_blank"
                )
                  img(
                    src="./assets/images/books/php_objecty_shablony_i_metodiki.jpg"
                    alt="PHP. Объекты, шаблоны и методики программирования"
                  )
      #contacts
        div.title Контакты
        div(
          class="appeal_wrapper"
          id="messages"
        )
          div.message Заинтересованы в сотрудничестве?
                    br
                    |  Вы можете отправить мне сообщение
                    |  или написать в социальных сетях.
                    div.extended_logo
                      icon-logo
        form(
          @submit.prevent="onSubmit"
        )
          span.typing_wrap
            span(
              class="typing"
              v-show="form.active === true"
            ) Печатает...
            span(
              class="typing"
              v-if="form.submitStatus === 'empty'"
            ) Вы кое-что забыли ;)
            span(
              class="typing"
              v-if="form.submitStatus === 'error'"
            ) Извините, ваше сообщение не доставленно из-за ошибки.<br> Скоро я всё починю.
          textarea(
            id="message"
            name="message"
            v-model.trim="form.message"
            @input="onTyping()"
          )
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
      vue-ya-metrica(
        :counter='53939236'
        enable-hash=true
        enable-webvisor=true
      )
</template>

<script>
import IconLogo from './components/icons/IconLogo.vue'
import IconBorn from './components/icons/IconBorn.vue'
import AppIllustrationIcon from './components/AppIllustrationIcon.vue'
import { Reveal } from 'vue-burger-menu'
import VueYaMetrica from './router/vue-ya-metrica.js'

export default {
  data () {
    return {
      form: {
        message: '',
        submitStatus: null,
        active: false
      },
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
      arrowRight: 'Образование',
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
      ],
      skills: {
        php: 'На данный момент в языке PHP я чувствую себя уверенно, могу решать задачи различной сложности. Собираюсь и дальше c ним работать',
        python: 'В языке Python я начал разбираться недавно. Мне интересны его возможности и гибкость. Намерен улучшить свои навыки работы с этим языком',
        modx: 'Я много работал с MODx, чувствую себя в нём уверенно и могу решать разнообразные задачи. Однако, эта CMS развивается недостаточно интенсивно и, по возможности, я бы не хотел работать с ним в будущем',
        laravel: 'Мне нравится Laravel. На данный момент у меня мало практических навыков работы с ним. Я читал много статей, документацию, проходил курсы Дмитрия Елисеева по Laravel и Yii. В дальнейшем собираюсь работать с этим фреймворком или его аналогами',
        yii: 'С фреймворком Yii мне довелось работать около года. В то время он мне очень нравился, но на данный момент я считаю, что этот фреймворк уходит в прошлое и стоит сосредоточиться на работе с Laravel.',
        drupal: 'Я делал несколько сайтов на CMS Drupal. На мой взгляд это очень интересная и прогрессивная CMS. Опыта работы с ним у меня не очень много. Я бы не хотел использовать в работе эту CMS в дальнейшем',
        bitrix: 'Мне довелось работать с 1С Битрикс при первом трудоустройстве в качестве программиста. По возможности, не хотелось бы работать с ней',
        javascript: 'С языка Javascript я начал заниматься веб-программированием. Однако, быстро перешёл на фреймворк JQuery и использовать нативный JS мне приходилось не часто. Я буду улучшать свои навыки в этом языке',
        jquery: 'Очень простой и понятный фреймворк. В нём я чувствую себя уверено и могу решать различные задачи без затруднений. Однако, ему на смену уже пришли более современные фреймворки',
        vuejs: 'Этот сайт сделан на VueJS. Мне он пришёлся по душе. Я хочу больше использовать его в работе и разбираться с его возможностями',
        react: 'Довелось немного использовать React на одном из проектов. Также как и VueJS он очень привлекает своими возможностями и в дальнейшем я готов его изучать',
        layout: 'Я много занимался вёрсткой. Начинал со статичной табличной вёрстки. Затем была блочная, адаптивная, отзывчивая и т.д.. Есть опыт работы программистом-верстальщиком. Чувствую себя достаточно комфортно в вёрстке и в дальнейшем буду развиватсья в этом направлении',
        design: 'До программирования, и параллельно с ним, я занимался веб-дизайном, анимацией и 3D-графикой. Поэтому, я довольно комфортно себя чувствую с такими инструментами как Photoshop, Illustrator и их аналоги',
        environment: 'Около 6 лет я пользуюсь ОС Linux. Более 4-х лет использую разные виды ОС как основую и единственную систему на всех компьютерах. В командной строке чувствую себя уверенно, продолжаю развиваться в этой области'
      }
    }
  },
  mounted: function () {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    reachGoal () {
      console.log(this.$root)
    // Ya(53939236, 'reachGoal', 'download_resume')
    },    
    onSubmit () {
      if (this.form.message === '') {
        this.form.submitStatus = 'empty'
        return false
      }

      this.form.submitStatus = null
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'X-Requested-With': 'XMLHttpRequest',
          'accept': 'application/json'
        }
      }
      var data = new FormData()
      var formMessage = this.form.message
      var messages, messagesCount, messageResponse, messageBlock, messageStatus
      data.set('message', formMessage)
      this.form.message = ''

      messages = document.getElementById('messages')
      messagesCount = messages.getElementsByClassName('message_response_wrapper').length

      messageBlock = document.createElement('div')
      messageBlock.className = 'message_response'
      messageBlock.innerHTML = formMessage

      messageStatus = document.createElement('span')
      messageStatus.className = 'status'

      messageResponse = document.createElement('div')
      messageResponse.className = 'message_response_wrapper msg' + messagesCount
      messageResponse.appendChild(messageBlock)
      messageResponse.appendChild(messageStatus)

      document.getElementById('messages').appendChild(messageResponse)

      this.axios.post('https://ivanopol.ru/mail/github.php', data, options)
        .then(response => {
          if (response.status === 200) {
            var successFunc = function () {
              var el = messages.querySelector('.msg' + messagesCount)
              var elStatus = el.querySelector('.status')
              elStatus.className = 'status success'
              elStatus.innerHTML = 'Доставлено'
            }
            setTimeout(successFunc, 1000)
          }
        })
        .catch(e => {
          this.form.submitStatus = 'error'
          var errorFunc = function () {
            var el = messages.querySelector('.msg' + messagesCount)
            var elStatus = el.querySelector('.status')
            elStatus.className = 'status error'
            elStatus.innerHTML = 'Ошибка'
          }
          setTimeout(errorFunc, 1000)
        })
    },
    onTyping (form) {
      if (this.form.submitStatus === 'empty' || this.form.submitStatus === 'error') {
        this.form.submitStatus = null
      }
      if (!this.form.active) {
        this.form.active = true
        setTimeout(() => { this.form.active = false }, 2000)
      }
    },
    handleScroll () {
      // Animation launch control
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
    Reveal,
    VueYaMetrica
  }
}
</script>

<style lang="stylus">
@import "../node_modules/stylus-reset"
@import '../node_modules/jeet/stylus/jeet/index'
@import './assets/stylus/main.styl'
</style>
