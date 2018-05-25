import Vue from 'vue'
import App from './App.vue'

// import CalendarSwiper from './index.js'
import  VueCalendarSwiper from '../dist/vue-calendar-swiper.min.js'
Vue.use(VueCalendarSwiper)
new Vue({
  el: '#app',
  render: h => h(App)
})
