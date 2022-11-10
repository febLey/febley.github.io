const Vue = window.Vue

const channels = [
  {
    name: 'GitHub',
    url: 'https://github.com/febley',
    icon: 'fab fa-github-alt'
  },
  {
    name: 'WaniKani',
    url: 'https://www.wanikani.com/users/febLey',
    icon: 'fas fa-language'
  },
  {
    name: 'PlayStation',
    url: 'https://psnprofiles.com/febLey',
    icon: 'fab fa-playstation'
  },
  {
    name: 'Steam',
    url: 'https://steamcommunity.com/id/febLey',
    icon: 'fab fa-steam'
  },
  {
    name: 'Xbox',
    url: 'https://exophase.com/xbox/user/febLey/',
    icon: 'fab fa-xbox'
  }
]

Vue.component('page', {
  props: {
    suffix: {
      type: String
    }
  },
  template: `
    <div class="page" :class="suffixedClass">
      <div class="page__inner">
        <slot></slot>
      </div>
    </div>
  `,
  computed: {
    suffixedClass () {
      if (this.suffix) {
        return `page--${this.suffix}`
      }
    }
  }
})

Vue.component('socialbar', {
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul class="socialbar">
      <li class="socialbar__item" v-for="(channel, index) in channels" :key="channel.id">
        <a class="socialbar__link" :href="channel.url" target="_blank" :data-channel-name="channel.name"><i :class="channel.icon"></i></a>
      </li>
    </ul>
  `
})

const app = new Vue({
  el: '.app',
  data: {
    pages: ['Home'],
    selectedPage: 'Home',
    channels: channels
  },
  methods: {
    setSelectedPage (page) {
      if (this.selectedPage !== page) {
        this.selectedPage = page
      }
    }
  }
})
