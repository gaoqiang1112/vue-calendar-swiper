# vue-calendar-swiper

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
项目效果图

  ![效果图](https://github.com/gaoqiang1112/vue-calendar-swiper/blob/master/src/assets/ImpressionDrawing.jpg)

项目注意事项

    1.注意，此项目使用了swiper4，引用地址我以cdn方式引入，路径配置在了index.html里，如果你使用时，千万不要忘记
   ![图](https://github.com/gaoqiang1112/vue-calendar-swiper/blob/master/src/assets/swiperPartExample.png)
    
    2.html例子
   ![图](https://github.com/gaoqiang1112/vue-calendar-swiper/blob/master/src/assets/htmlPartExample.jpg)
    
    3.vue例子
   ![图](https://github.com/gaoqiang1112/vue-calendar-swiper/blob/master/src/assets/vuePartExample.jpg)
    
    
项目介绍

1.项目是在vue-calendar基础上进行改进，添加swiper，进行整合后，可实现滑动轮播，或者点击翻页按钮进行轮播切换

2.项目功能修改：

	a.项目删除原vue-calendar的范围选择和多个选择功能，丰富了单选功能

	b.项目添加: 

	    1）设置value: 如果设置则value为选中项，为设置默认为选中今天

	    2）设置values:请以[[2018,1,1],[2018,2,2]]格式进行初始值设置,这些时间将被默认选中,但样式和value所设置的不同

        3) 设置totalMonth 来设定要从选定日期向后显示多少个月，默认是14个月

        4）可设置是否显示农历功能

        5）可设置选中日期的事件

	    6）可自行设置 月，周 中英文显示

        7）项目目前支持年份选择，暂不支持月份选择，后续补充


3.项目地址 https://github.com/gaoqiang1112/vue-calendar-swiper

4.项目是在vue-calendar基础上进行二次调整，尊重原创，感谢原创的代码分享，原创github地址 https://github.com/jinzhe/vue-calendar
