# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 线形进度条

Progress 组件设置`percentage`属性即可，表示进度条对应的百分比，**必填**，必须在 0-100。通过 `format` 属性来指定进度条文字内容。

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
        customColor: '#409eff',
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

Progress 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

```html

<template>
  <ur-progress class="progress" type="circle" :percentage="percentage"></ur-progress>
  <ur-button-group>
    <ur-button @click="decrease">减</ur-button>
    <ur-button @click="increase">加</ur-button>
  </ur-button-group>
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
| **percentage** | **百分比（必填）**   | number         |     0-100          |     0    |
| type          | 进度条类型           | string         | line / circle | line |
| stroke-width  | 进度条的宽度，单位 px | number          | — | 7 |
| text-inside  | 进度条显示文字内置在进度条内（只在 type=line 时可用） | boolean | — | false |
| color  | 进度条背景色（会覆盖 status 状态颜色） | string/function/array | — | '' |
| show-text  | 是否显示进度条文字内容 | boolean | — | true |
| format  | 指定进度条文字内容 | function(percentage) | — | — |
