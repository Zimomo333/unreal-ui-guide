<script setup>
  import ProgressDemo from '../../src/components/progress.vue';
</script>
# 进度条 Progress

用于展示操作进度，告知用户当前状态和预期。

<ProgressDemo />
<br />

<iframe src="https://codesandbox.io/embed/progress-fe846?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fprogress.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="progress"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 线形进度条

设置`percentage`属性表示进度条对应的百分比，可通过 `format` 属性来指定进度条文字内容。

```html

<template>
  <ur-progress class="progress" :percentage="50"></ur-progress>
  <ur-progress class="progress" :percentage="50" status="success"></ur-progress>
  <ur-progress class="progress" :percentage="50" status="exception"></ur-progress>
</template>

<style>
.progress {
  margin: 1rem 0;
}
</style>
```

## 百分比内显

百分比不占用额外控件，适用于文件上传等场景。

Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。

```html

<template>
  <ur-progress class="progress" :text-inside="true" :stroke-width="20" :percentage="70"></ur-progress>
  <ur-progress class="progress" :text-inside="true" :stroke-width="20" :percentage="100" status="success"></ur-progress>
  <ur-progress class="progress" :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></ur-progress>
</template>

<style>
.progress {
  margin: 1rem 0;
}
</style>
```

## 自定义颜色

可以通过 `color` 设置进度条的颜色，`color` 可以接受颜色字符串，函数和数组。

```html

<template>
  <ur-progress class="progress" percentage="40" :color="customColor"></ur-progress>
</template>

<script>
  export default {
    data() {
      return {
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      }
    },
  };
</script>

<style>
.progress {
  margin: 1rem 0;
}
</style>
```

## 环形进度条

通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

```html

<template>
  <ur-progress class="progress" type="circle" :percentage="percentage"></ur-progress>
  <ur-button @click="decrease">减</ur-button>
  <ur-button @click="increase">加</ur-button>
</template>

<script>
  export default {
    data() {
      return {
        percentage: 40,
      }
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  };
</script>

<style>
.progress {
  margin: 1rem 0;
}
</style>
```

## 属性
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| percentage | 百分比   | number         |     0-100          |     0    |
| type          | 进度条类型           | string         | line / circle | line |
| stroke-width  | 进度条的宽度，单位 px | number          | — | 7 |
| text-inside  | 进度条显示文本内置在进度条内（只在 type=line 时可用） | boolean | — | false |
| color  | 进度条背景色 | string/function/array | — | '' |
| show-text  | 是否显示进度条文字内容 | boolean | — | true |
| format  | 指定进度条文字内容 | function(percentage) | — | — |