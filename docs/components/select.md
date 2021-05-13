# 选择器 Select

当选项过多时，使用下拉菜单展示并选择内容。

<iframe src="https://codesandbox.io/embed/select-fjtu0?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fselect.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="select"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 基础用法

适用广泛的基础单选
`v-model`的值为当前被选中的`ur-option`的 value 属性值
```html
<template>
  <ur-select v-model="value" placeholder="请选择">
    <ur-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ur-option>
  </ur-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '选项1'
        }, {
          value: '选项2',
          label: '选项2'
        }, {
          value: '选项3',
          label: '选项3'
        }, {
          value: '选项4',
          label: '选项4'
        }, {
          value: '选项5',
          label: '选项5'
        }],
        value: ''
      }
    }
  }
</script>
```

## 有禁用选项

在`ur-option`中，设定`disabled`禁用该选项
```html
<template>
  <ur-select v-model="value" placeholder="请选择">
    <ur-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </ur-option>
  </ur-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '选项1'
        }, {
          value: '选项2',
          label: '选项2',
          disabled: true
        }, {
          value: '选项3',
          label: '选项3'
        }, {
          value: '选项4',
          label: '选项4'
        }, {
          value: '选项5',
          label: '选项5'
        }],
        value: ''
      }
    }
  }
</script>
```

## 禁用状态

为`ur-select`设置`disabled`属性，则整个选择器不可用
```html
<template>
  <ur-select v-model="value" disabled placeholder="请选择">
    <ur-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ur-option>
  </ur-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '选项1'
        }, {
          value: '选项2',
          label: '选项2'
        }, {
          value: '选项3',
          label: '选项3'
        }, {
          value: '选项4',
          label: '选项4'
        }, {
          value: '选项5',
          label: '选项5'
        }],
        value: ''
      }
    }
  }
</script>
```

## 可清空单选

为`ur-select`设置`clearable`属性，包含清空按钮，可将选择器清空为初始状态。需要注意的是，`clearable`属性仅适用于单选。
```html
<template>
  <ur-select v-model="value" clearable placeholder="请选择">
    <ur-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ur-option>
  </ur-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '选项1'
        }, {
          value: '选项2',
          label: '选项2'
        }, {
          value: '选项3',
          label: '选项3'
        }, {
          value: '选项4',
          label: '选项4'
        }, {
          value: '选项5',
          label: '选项5'
        }],
        value: ''
      }
    }
  }
</script>
```

## 多选

适用性较广的基础多选，用 Tag 标签组件展示已选项。为`ur-select`设置`multiple`属性即可启用多选，此时`v-model`的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，可以设置`collapse-tags`属性将它们合并为数字统计。

```html
<template>
  <ur-select v-model="value1" multiple placeholder="请选择">
    <ur-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ur-option>
  </ur-select>

  <ur-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="请选择">
    <ur-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ur-option>
  </ur-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '选项1'
        }, {
          value: '选项2',
          label: '选项2'
        }, {
          value: '选项3',
          label: '选项3'
        }, {
          value: '选项4',
          label: '选项4'
        }, {
          value: '选项5',
          label: '选项5'
        }],
        value1: [],
        value2: []
      }
    }
  }
</script>
```

## Select 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean / object | — | — |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否可以清空选项 | boolean | — | false |
| collapse-tags | 是否将选中值按数字的形式展示 | boolean | — | false |
| multiple-limit | 最多可以选择的项目数，为 0 时不限制 | number | — | 0 |
| placeholder | 占位文本 | string | — | 请选择 |
| no-data-text | 选项为空时显示的文字 | string | — | 无数据 |

## Select 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 多选模式下移除tag时触发 | 移除的tag值 |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |

## Select 插槽
|   name  | 说明     |
|---------|---------|
| empty | 无选项时的列表 |

## Option Group 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | — | false |

## Option 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项值 | string / number / boolean / object | — | — |
| label | 选项标签，默认与 `value` 相同 | string / number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

## 方法
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
| blur | 使 input 失去焦点，并隐藏下拉框 | - |