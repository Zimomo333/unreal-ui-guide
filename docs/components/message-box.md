<script setup>
  import MessageBoxDemo from '../../src/components/message-box.vue';
</script>
# 弹框 MessageBox
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

<MessageBoxDemo />
<br />
<br />

<iframe src="https://codesandbox.io/embed/message-box-idkdt?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fmessage-box.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="message-box"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

:::tip
从场景上说，MessageBox 的作用是美化系统自带的 `alert`、`confirm` 和 `prompt`，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。

:::

## 消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

调用`$alert`方法即可打开消息提示，它模拟了系统的 `alert`，无法通过按下 ESC 或点击框外关闭。窗口被关闭后，它默认会返回一个`Promise`对象便于进行后续操作的处理。若不确定浏览器是否支持`Promise`，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。
```html
<template>
  <ur-button type="text" @click="open">点击打开 Message Box</ur-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>
```

## 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

调用`$confirm`方法即可打开确认消息，它模拟了系统的 `confirm`。可以传入`options`对象作为配置参数。`type`字段表明消息类型，可以为`success`，`error`，`info`。

```html
<template>
  <ur-button type="text" @click="open">点击打开 Message Box</ur-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
```

## 提交内容

当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。

调用`$prompt`方法即可打开提交弹框，它模拟了系统的 `prompt`。可以用`inputPattern`字段自己规定匹配模式，或者用`inputValidator`规定校验函数，可以返回`Boolean`或`String`，返回`false`或字符串时均表示校验未通过，同时返回的字符串相当于定义了`inputErrorMessage`字段。此外，可以用`inputPlaceholder`字段来定义输入框的占位符。

```html
<template>
  <ur-button type="text" @click="open">点击打开 Message Box</ur-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    }
  }
</script>
```



## 全局方法

如果你完整引入了 UnrealUI，它会为 `app.config.globalProperties` 添加如下全局方法：$msgbox, $alert, $confirm 和 $prompt。因此在 Vue 实例中可以采用本页面中的方式调用 `MessageBox`。调用参数为：
- `$msgbox(options)`
- `$alert(message, title, options)`
- `$confirm(message, title, options)`
- `$prompt(message, title, options)`

## 单独引用

如果单独引入 `MessageBox`：

```javascript
import { UrMessageBox } from 'unreal-ui-next';
```

那么对应于上述四个全局方法的调用方法依次为：UrMessageBox, UrMessageBox.alert, UrMessageBox.confirm 和 UrMessageBox.prompt，调用参数与全局方法相同。

## 传参

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | — | — |
| message | 消息正文内容                                                 | string | — | — |
| showClose | 是否显示右上角关闭按钮 | boolean | — | true |
| beforeClose | 关闭前的回调函数 | function(action, instance, done)，action 的值为`confirm`, `cancel`或`close`；instance 为弹框实例；done 用于关闭弹框实例 | — | — |
| lockScroll | 是否在弹框出现时将 body 滚动锁定 | boolean | — | true |
| showCancelButton | 是否显示取消按钮 | boolean | — | false |
| showConfirmButton | 是否显示确定按钮 | boolean | — | true |
| cancelButtonText | 取消按钮的文本内容 | string | — | 取消 |
| confirmButtonText | 确定按钮的文本内容 | string | — | 确定 |
| closeOnClickModal | 是否可通过点击遮罩关闭弹框 | boolean | — | true |
| showInput | 是否显示输入框 | boolean | — | false |
| inputPlaceholder | 输入框的占位符 | string | — | — |
| inputType | 输入框的类型 | string | — | text |
| inputValue | 输入框的初始文本 | string | — | — |
| inputPattern | 输入框的校验表达式 | regexp | — | — |
| inputValidator | 输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage | function | — | — |
| inputErrorMessage | 校验未通过时的提示文本 | string | — | 输入的数据不合法! |
| center | 是否居中布局 | boolean | — | false |
| roundButton | 是否使用圆角按钮 | boolean | — | false |
| buttonSize | 自定义确认按钮及取消按钮的大小 | string | mini / small / medium / large | small |