# p5-vue-mirror

p5.js code mirror with live edit/ run using vue.js v-model using iframe

[Example: Monoame Design Website](http://monoame.com/)
![Monoame Design](https://github.com/frank890417/p5-vue-mirror/blob/master/2020-04-30%2001.12.44.gif)

## 1. Installation

```javascript
npm install p5-vue-mirror -s
```

## 2. Using the vue component
```javascript
import pvm from 'p5-vue-mirror'
Vue.use(pvm)
```

## 3. Use the compontent within pages with v-model
```vue
<template>
  <p5-vue-mirror v-model="p5codes" />
</template>

<script>
let codes = `
  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
  }

  function draw() {
    ellipse(mouseX, mouseY, 20, 20);
  }
`
export default {
  data(){
    return {
      p5codes: codes
    }
  }
}
```

## 4. Use the compontent within pages with script files
```vue
<template>
  <p5-vue-mirror :scriptFiles="scriptFiles" />
</template>

<script>
export default {
  data(){
    return {
      scriptFiles: ['https://cdnjs.cloudflare.com/ajax/libs/tone/14.5.40/Tone.js',
                    '/static/thesis/module.js','/static/thesis/units.js','/static/thesis/main.js']
    }
  }
}
```


## Other parameters
* "hidecode": Boolean - show or hide the editable source code
* "enableMotion": Boolean - enable motion control (accaccelerometer) on mobile
* "scriptFiles": Array of preloaded script files
* "defaultSrc": String of ajax script files, served as the default code

## Example With hidecode=false
[Example: p5 Tutorial Site](https://idmcreativecoding.monoame.com/section/3)
![](https://github.com/frank890417/p5-vue-mirror/blob/master/截圖%202020-04-30%20上午1.19.48.png)

