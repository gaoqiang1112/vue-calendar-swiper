/**
 * Created by gaoqiang on 2018/5/25.
 */
import VueCalendarSwiper from './components/calendar.vue'

const CalendarSwiper = {
  install: function (Vue) {

    Vue.component('VueCalendarSwiper', VueCalendarSwiper)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(CalendarSwiper)
}
export default CalendarSwiper
