<script setup>
  import MessageDemo from '../../src/components/message.vue';
</script>
# 消息提示 Message

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

<MessageDemo />
<br />
<br />

<iframe src="https://codesandbox.io/embed/message-uk8nt?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fmessage.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="message"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 基础用法

可以显示「消息、成功、错误」类的操作反馈。

可以添加关闭按钮。默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用`showClose`字段。此外，和 Notification 一样，Message 拥有可控的`duration`，设置`0`为不会被自动关闭，默认为 3000 毫秒。

```html

<template>
  <ur-button @click="open1">消息</ur-button>
  <ur-button @click="open2">成功</ur-button>
  <ur-button @click="open3">错误</ur-button>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示',
      });
    },

    open2() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success',
      });
    },

    open3() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error',
      });
    },
  },
};
</script>
```



## 全局方法

UnrealUI 为 `app.config.globalProperties` 添加了全局方法 $message。因此在 vue 实例的 method 中可调用 `this.$message` 方法唤起 `UrMessage`。

## 单独引用

```javascript
import { UrMessage } from 'unreal-ui-next';
```

此时调用方法为 `UrMessage(options)`。每个 type 也定义了各自的方法，如 `UrMessage.success(options)`。并且可以调用 `UrMessage.closeAll()` 手动关闭所有实例。

## 传参
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文本 | string | — | — |
| type | 主题 | string | success/ info / error | info |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| center | 文本是否居中 | boolean | — | false |
| onClose | 关闭时的回调函数 | function | — | — |
| offset | 距离页面顶部的偏移量 | number | — | 20 |

## 方法
调用 `UrMessage` 或 `this.$message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Message |