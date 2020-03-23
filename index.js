// Import stylesheets
import './style.css';
import Vue from 'vue';
import dayjs from 'dayjs';

// Write Javascript code!
const root = document.getElementById('app');

new Vue({
  el: '#app',
  data: {
    time: dayjs().format('YYYY-MM-DD HH:mm:ss')
  },
  template: '<h1>{{time}}</h1>',
  created() {
    this.loopTime()
  },
  methods: {
    loopTime() {
      setInterval(() => {
        this.time = dayjs().format('YYYY-MM-DD HH:mm:ss')
      }, 1000)
    }
  }
})
