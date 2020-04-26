import VueCodemirror from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
import pvm from './p5-vue-mirror'

export default {
  install(Vue, options) {
    Vue.use(VueCodemirror, { 
      options: {
        // theme: 'tomorrow-night-bright', 
        mode: "javascript",
        tabSize: 4,
        lineNumbers: true,
        line: true
      },
      events: ['scroll']
    } )
    Vue.component("p5-vue-mirror",pvm)
  }
 };