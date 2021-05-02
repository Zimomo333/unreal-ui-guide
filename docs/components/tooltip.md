# Tooltip 气泡提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用`content`属性来决定`hover`时的提示信息。由`placement`属性决定展示效果：`placement`属性值为：`方向-对齐位置`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如`placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```html

<template>
  <div class="box">
    <div class="top">
      <ur-tooltip class="item" content="Top Left 提示文字" placement="top-start">
        <ur-button>上左</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Top Center 提示文字" placement="top">
        <ur-button>上边</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Top Right 提示文字" placement="top-end">
        <ur-button>上右</ur-button>
      </ur-tooltip>
    </div>
    <div class="left">
      <ur-tooltip class="item" content="Left Top 提示文字" placement="left-start">
        <ur-button>左上</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Left Center 提示文字" placement="left">
        <ur-button>左边</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Left Bottom 提示文字" placement="left-end">
        <ur-button>左下</ur-button>
      </ur-tooltip>
    </div>

    <div class="right">
      <ur-tooltip class="item" content="Right Top 提示文字" placement="right-start">
        <ur-button>右上</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Right Center 提示文字" placement="right">
        <ur-button>右边</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Right Bottom 提示文字" placement="right-end">
        <ur-button>右下</ur-button>
      </ur-tooltip>
    </div>
    <div class="bottom">
      <ur-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-start">
        <ur-button>下左</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Bottom Center 提示文字" placement="bottom">
        <ur-button>下边</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-end">
        <ur-button>下右</ur-button>
      </ur-tooltip>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.box {
  width: 400px;
  margin: 0 auto;

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

## 属性
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  placement        | 气泡提示的出现位置                                    | String           |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  disabled       |  是否可用  | Boolean           | — |  false |
|  offset        |  出现位置的偏移量  | Number           | — |  0 |
| show-after | 延迟出现，单位毫秒 | Number | — | 0 |
| hide-after | 延迟关闭，单位毫秒 | Number | — | 0 |
| auto-close | 气泡出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏 | number | — | 0 |
| enterable | 鼠标是否可进入到气泡中 | Boolean | — | true |