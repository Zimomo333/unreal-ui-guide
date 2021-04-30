# Radio 单选框

适用于在多个互斥的选项中选择的场景

## 基础用法

结合`ur-radio-group`元素和子元素`ur-radio`可以实现单选组，在`ur-radio-group`中绑定`v-model`，在`ur-radio`中设置好`label`即可，无需再给每一个`ur-radio`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`。

```html
<template>
  <ur-radio-group v-model="radio">
    <ur-radio :label="3">备选项</ur-radio>
    <ur-radio :label="6">备选项</ur-radio>
    <ur-radio :label="9">备选项</ur-radio>
  </ur-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```
## 禁用状态

单选框不可用的状态。

只要在`ur-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。
```html
<template>
  <ur-radio disabled v-model="radio" label="禁用">备选项</ur-radio>
  <ur-radio disabled v-model="radio" label="选中且禁用">备选项</ur-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
</script>
```


## Radio 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |

## Radio 事件
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

## Radio-group 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| disabled  | 是否禁用    | boolean   | — | false   |

## Radio-group 事件
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |
