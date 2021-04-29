# InputNumber 计数器

仅允许输入标准的数字值，可定义范围

## 基础用法

要使用它，只需要在`ur-input-number`元素中使用`v-model`绑定变量即可，变量的初始值即为默认值。
```html
<template>
  <ur-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></ur-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

## 禁用状态

`disabled`属性接受一个`Boolean`，设置为`true`即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置`min`属性和`max`属性，不设置`min`和`max`时，最小值为 0。

```html
<template>
  <ur-input-number v-model="num" :disabled="true"></ur-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
```

## 步数

允许定义递增递减的步数控制

设置`step`属性可以控制步长，接受一个`Number`。

```html
<template>
  <ur-input-number v-model="num" :step="2"></ur-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 5
      }
    }
  };
</script>
```

## 精度

设置 `precision` 属性可以控制数值精度，接收一个 `Number`。

```html
<template>
  <ur-input-number v-model="num" :precision="2" :step="0.1" :max="10"></ur-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
```

:::tip
`precision` 的值必须是一个非负整数，并且不能小于 `step` 的小数位数。

:::

## 按钮位置

设置 `controls-position` 属性可以控制按钮位置。
```html
<template>
  <ur-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></ur-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

## 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| modelValue / v-model | 绑定值         | number / undefined | — | 0 |
| min      | 设置计数器允许的最小值 | number | — | -Infinity |
| max      | 设置计数器允许的最大值 | number | — | Infinity |
| step     | 计数器步长           | number   | — | 1 |
| precision| 数值精度             | number   | — | — |
| disabled | 是否禁用计数器        | boolean | — | false |
| controls-position | 控制按钮位置 | string | right | - |
| placeholder | 输入框默认 placeholder | string | - | - |

## 事件
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 绑定值被改变时触发 | currentValue, oldValue |
| blur | 在组件 Input 失去焦点时触发 | (event: Event) |
| focus | 在组件 Input 获得焦点时触发 | (event: Event) |

## 方法
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
| select | 选中 input 中的文字 | — |