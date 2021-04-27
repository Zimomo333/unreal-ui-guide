# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用`content`属性来决定`hover`时的提示信息。由`placement`属性决定展示效果：`placement`属性值为：`方向-对齐位置`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如`placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```html
<div class="box">
  <div class="top">
    <ur-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <ur-button>上左</ur-button>
    </ur-tooltip>
    <ur-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
      <ur-button>上边</ur-button>
    </ur-tooltip>
    <ur-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
      <ur-button>上右</ur-button>
    </ur-tooltip>
  </div>
  <div class="left">
    <ur-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
      <ur-button>左上</ur-button>
    </ur-tooltip>
    <ur-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
      <ur-button>左边</ur-button>
    </ur-tooltip>
    <ur-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
      <ur-button>左下</ur-button>
    </ur-tooltip>
  </div>

  <div class="right">
    <ur-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
      <ur-button>右上</ur-button>
    </ur-tooltip>
    <ur-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
      <ur-button>右边</ur-button>
    </ur-tooltip>
    <ur-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
      <ur-button>右下</ur-button>
    </ur-tooltip>
  </div>
  <div class="bottom">
    <ur-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
      <ur-button>下左</ur-button>
    </ur-tooltip>
    <ur-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
      <ur-button>下边</ur-button>
    </ur-tooltip>
    <ur-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
      <ur-button>下右</ur-button>
    </ur-tooltip>
  </div>
</div>

<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .ur-tooltip__popper,
    .right .ur-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>
```

## 主题

Tooltip 组件提供了两个不同的主题：`dark`和`light`。


通过设置`effect`属性来改变主题，默认为`dark`。
```html
<ur-tooltip content="Top center" placement="top">
  <ur-button>Dark</ur-button>
</ur-tooltip>
<ur-tooltip content="Bottom center" placement="bottom" effect="light">
  <ur-button>Light</ur-button>
</ur-tooltip>
```

## 更多 Content

展示多行文本或者是设置文本内容的格式

用具名 slot 分发`content`，替代`tooltip`中的`content`属性。
```html
<ur-tooltip placement="top">
  <template #content>
    多行信息<br/>第二行信息
  </template>
  <ur-button>Top center</ur-button>
</ur-tooltip>
```

## 高级扩展

除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

`transition` 属性可以定制显隐的动画效果，默认为`fade-in-linear`。
如果需要关闭 `tooltip` 功能，`disabled` 属性可以满足这个需求，它接受一个`Boolean`，设置为`true`即可。

事实上，这是基于 [Vue-popper](https://github.com/element-component/vue-popper) 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。
当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。


```html
<template>
  <ur-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
    <ur-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</ur-button>
  </ur-tooltip>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
</script>
```

:::tip
tooltip 内不支持 `router-link` 组件，请使用 `vm.$router.push` 代替。

tooltip 内不支持 disabled form 元素，参考[MDN](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter)，请在 disabled form 元素外层添加一层包裹元素。

## Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  append-to-body | 决定 popper 是否传送到 document.body 下 | Boolean | - | false |
|  effect        |  默认提供的主题  | String            | dark/light | dark  |
|  content        |  显示的内容，也可以通过 `slot#content` 传入 DOM  | String            | — | — |
|  placement        |  Tooltip 的出现位置  | String           |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  value / v-model |  状态是否可见  | Boolean           | — |  false |
|  disabled       |  Tooltip 是否可用  | Boolean           | — |  false |
|  offset        |  出现位置的偏移量  | Number           | — |  0 |
|  transition     |  定义渐变动画      | String             | — | ur-fade-in-linear |
|  visible-arrow   |  是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper) | Boolean | — | true |
|  popper-options        | [popper.js](https://popper.js.org/documentation.html) 的参数 | Object            | 参考 [popper.js](https://popper.js.org/documentation.html) 文档 | { boundariesElement: 'body', gpuAcceleration: false } |
| show-after | 延迟出现，单位毫秒 | Number | — | 0 |
| hide-after | 延迟关闭，单位毫秒 | Number | — | 0 |
| auto-close | Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏 | number | — | 0 |
| manual | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效 | Boolean | — | false |
| popper-class | 为 Tooltip 的 popper 添加类名 | String | — | — |
| enterable | 鼠标是否可进入到 tooltip 中 | Boolean | — | true |
| tabindex   | Tooltip 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number | — | 0 |
