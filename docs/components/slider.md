<script setup>
  import SliderDemo from '../../src/components/slider.vue';
</script>
# 滑块 Slider

通过拖动滑块在一个固定区间内进行选择

<SliderDemo />
<br />

<iframe src="https://codesandbox.io/embed/slider-ik5ub?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fslider.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="slider"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 基础用法

在拖动滑块时，显示当前值

通过设置绑定值自定义滑块的初始值
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <ur-slider v-model="value1"></ur-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <ur-slider v-model="value2" :show-tooltip="false"></ur-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <ur-slider v-model="value3" disabled></ur-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
```

## 离散值

选项可以是离散的

改变`step`的值可以改变步长，通过设置`show-stops`属性可以显示间断点
```html
<template>
  <div class="block">
    <span class="demonstration">不显示间断点</span>
    <ur-slider
      v-model="value1"
      :step="10">
    </ur-slider>
  </div>
  <div class="block">
    <span class="demonstration">显示间断点</span>
    <ur-slider
      v-model="value2"
      :step="10"
      show-stops>
    </ur-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
</script>
```

## 带有输入框

通过输入框设置精确数值

设置`show-input`属性会在右侧显示一个输入框
```html
<template>
  <div class="block">
    <ur-slider
      v-model="value"
      show-input>
    </ur-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```

## 范围选择

支持选择某一数值范围

设置`range`即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值
```html
<template>
  <div class="block">
    <ur-slider
      v-model="value"
      range
      show-stops
      :max="10">
    </ur-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
</script>
```

## 竖向模式

设置`vertical`可使 Slider 变成竖向模式，此时必须设置高度`height`属性
```html
<template>
  <div class="block">
    <ur-slider
      v-model="value"
      vertical
      height="200px">
    </ur-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```

## 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | number | — | 0 |
| min | 最小值 | number | — | 0 |
| max | 最大值 | number | — | 100 |
| disabled | 是否禁用 | boolean | — | false |
| step | 步长 | number | — | 1 |
| show-input | 是否显示输入框，仅在非范围选择时有效 | boolean | — | false |
| show-stops | 是否显示间断点 | boolean | — | false |
| show-tooltip | 是否显示气泡提示 | boolean | — | true |
| range | 是否为范围选择 | boolean | — | false |
| vertical | 是否竖向模式 | boolean | — | false |
| height | 滑块高度，竖向模式时必填 | string | — | — |

## 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） | 改变后的值 |
| input | 数据改变时触发（使用鼠标拖曳时，活动过程实时触发） | 改变后的值 |