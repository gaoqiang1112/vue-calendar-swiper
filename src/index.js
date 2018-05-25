/**
 * Created by gaoqiang on 2018/5/25.
 */
import VueCalendarSwiper from './components/calendar.vue'

const CalendarSwiper = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('VueCalendarSwiper', VueCalendarSwiper)
  }
}

export default CalendarSwiper
