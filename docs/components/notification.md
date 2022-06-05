<script setup>
  import NotificationDemo from '../../src/components/notification.vue';
</script>
# 通知 Notification

悬浮出现在页面角落，显示全局的通知提醒消息。

<NotificationDemo />
<br />
<br />

<iframe src="https://codesandbox.io/embed/notification-6i45e?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fnotification.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="notification"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 基本用法

适用性广泛的通知栏

Notification 组件提供通知功能，UnrealUI 注册了`$notify`方法，接收一个`options`字面量参数，在最简单的情况下，你可以设置`title`字段和`message`字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置`duration`，可以控制关闭的时间间隔，特别的是，如果设置为`0`，则不会自动关闭。注意：`duration`接收一个`Number`，单位为毫秒，默认为`4500`。
```html
<template>
  <ur-button
    plain
    @click="open1">
    可自动关闭
  </ur-button>
  <ur-button
    plain
    @click="open2">
    不会自动关闭
    </ur-button>
</template>

<script>
  import { h } from 'vue';

  export default {
    methods: {
      open1() {
        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: green' }, '这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }
    }
  }
</script>
```

## 自定义弹出位置

可以让 Notification 从屏幕四角中的任意一角弹出

使用`position`属性定义 Notification 的弹出位置，支持四个选项：`top-right`、`top-left`、`bottom-right`、`bottom-left`，默认为`top-right`。
```html
<template>
  <ur-button
    plain
    @click="open1">
    右上角
  </ur-button>
  <ur-button
    plain
    @click="open2">
    右下角
  </ur-button>
  <ur-button
    plain
    @click="open3">
    左下角
  </ur-button>
  <ur-button
    plain
    @click="open4">
    左上角
  </ur-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open2() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      }
    }
  }
</script>
```

## 隐藏关闭按钮

可以不显示关闭按钮

将`showClose`属性设置为`false`即可隐藏关闭按钮。
```html
<template>
  <ur-button
    plain
    @click="open">
    隐藏关闭按钮
  </ur-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false
        });
      }
    }
  }
</script>
```

## 全局方法

UnrealUI 为 ``app.config.globalProperties`` 添加了全局方法 `$notify`。因此在 vue 实例中可以采用本页面中的方式调用 Notification。

## 单独引用

```javascript
import { UrNotification } from 'unreal-ui-next';
```

此时调用方法为 `UrNotification(options)`。我们也为每个 type 定义了各自的方法，如 `UrNotification.success(options)`。并且可以调用 `UrNotification.closeAll()` 手动关闭所有实例。

## 传参
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | — | — |
| message | 说明文本 | string | — | — |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 4500 |
| position | 自定义弹出位置 | string | top-right / top-left / bottom-right / bottom-left | top-right |
| showClose | 是否显示关闭按钮 | boolean | — | true |
| onClose | 关闭时的回调函数 | function | — | — |
| onClick | 点击 Notification 时的回调函数 | function | — | — |

## 方法
调用 `Notification` 或 `this.$notify` 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Notification |