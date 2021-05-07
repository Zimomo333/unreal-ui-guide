# 多选框 Checkbox
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

## 基础用法

`ur-checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用`v-model`绑定`Array`类型的变量即可。 `ur-checkbox` 的 `label`属性是该 checkbox 对应的值，`label`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```html
<template>
  <ur-checkbox-group v-model="checkList">
    <ur-checkbox label="多选框 A"></ur-checkbox>
    <ur-checkbox label="多选框 B"></ur-checkbox>
    <ur-checkbox label="多选框 C"></ur-checkbox>
    <ur-checkbox label="禁用" disabled></ur-checkbox>
    <ur-checkbox label="选中且禁用" disabled></ur-checkbox>
  </ur-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['选中且禁用','多选框 A']
      };
    }
  };
</script>
```



## 禁用状态

多选框不可用状态。

设置`disabled`属性即可。

```html
<template>
  <ur-checkbox v-model="checked1" disabled>选项1</ur-checkbox>
  <ur-checkbox v-model="checked2" disabled>选项2</ur-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```



## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

```html
<template>
  <ur-checkbox-group
    v-model="checkedOptions"
    :min="1"
    :max="2">
    <ur-checkbox v-for="option in Options" :label="option" :key="option">{{option}}</ur-checkbox>
  </ur-checkbox-group>
</template>
<script>
  export default {
    data() {
      return {
        checkedOptions: ['选项1', '选项4'],
        Options: ['选项1', '选项2', '选项3', '选项4'],
      };
    }
  };
</script>
```



## Checkbox 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | 选中状态的值 | string / number / boolean  |       —        |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| checked  | 当前是否勾选    | boolean   |  — | false   |

## Checkbox 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

## Checkbox-group 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | array | — | — |
| disabled  | 是否禁用    | boolean   | — | false   |
| min     | 可被勾选的最小数量 | number    |       —        |     —    |
| max     | 可被勾选的最大数量   | number    |       —        |     —    |

## Checkbox-group 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |