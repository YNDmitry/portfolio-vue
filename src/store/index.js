import { createStore } from 'vuex'

export default createStore({
  state: {
    works: [
      {
        id: 0,
        title: 'Вёрстка',
        subTitle: 'Лендинг',
        img: 'images/lands.jpg',
        link: 'https://launchandscale.flowdmitry.design/'
      },
      {
        id: 1,
        title: 'Вёрстка',
        subTitle: 'Лендинг',
        img: 'images/Screenshot_1.png',
        link: 'https://www.dreamstream.org/'
      },
      {
        id: 2,
        title: 'Вёрстка',
        subTitle: 'QUIZ',
        img: 'images/Screenshot_4.png',
        link: 'http://quiz.flowdmitry.design/'
      },
      {
        id: 3,
        title: 'Вёрстка',
        subTitle: 'Лендинг',
        img: 'images/gorodascr.jpg',
        link: 'http://goroda.flowdmitry.design/'
      },
      {
        id: 4,
        title: 'Вёрстка',
        subTitle: 'Лендинг',
        img: 'images/Screenshot_6.png',
        link: 'https://flowdmitry.design/'
      },
      {
        id: 5,
        title: 'Вёрстка',
        subTitle: 'Лендинг',
        img: 'images/zullu-work.png',
        link: 'https://yndmitry.github.io/zullu/'
      },
      {
        id: 6,
        title: 'Вёрстка + программирование',
        subTitle: 'Калькулятор',
        img: 'images/dg-scr.png',
        link: 'http://digitalgrid.flowdmitry.design/'
      },
      {
        id: 7,
        title: 'Вёрстка',
        subTitle: 'Лендинг',
        img: 'images/Screenshot_3.png',
        link: 'http://landing.flowdmitry.design/'
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    WORKS: state => state.works
  },
  modules: {
  }
})
