<script setup>
  import SwitchDemo from '../../src/components/switch.vue';
</script>
# 开关 Switch

表示两种相互对立的状态间的切换，多用于触发「开/关」。

<SwitchDemo />
<br />
<br />

<iframe src="https://codesandbox.io/embed/switch-1w3y9?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fswitch.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="switch"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 基本用法

绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。

```html
<ur-switch
  v-model="value"
</ur-switch>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
```

## 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

```html
<ur-switch
  v-model="value"
  active-text="激活"
  inactive-text="未激活">
</ur-switch>

<script>
  export default {
    data() {
      return {
        value: true,
      }
    }
  };
</script>
```


## 禁用状态

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。


```html
<ur-switch
  v-model="value1"
  disabled>
</ur-switch>
<ur-switch
  v-model="value2"
  disabled>
</ur-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
</script>
```

## 属性

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值，必须等于`active-value`或`inactive-value`，默认为`Boolean`类型 | boolean / string / number | — | — |
| disabled  | 是否禁用    | boolean   | — | false   |
| active-text  | 打开时的文字描述                                             | string   | — | — |
| inactive-text  | 关闭时的文字描述    | string   | — | — |
| active-value  | 打开时的值                                                   | boolean / string / number | — | true |
| inactive-value  | 关闭时的值                                                   | boolean / string / number | — | false |

## 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的值 |

## 方法
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 Switch 获取焦点 | - |