# 时间选择器 TimePicker

 用于选择或输入日期

<iframe src="https://codesandbox.io/embed/time-picker-4x261?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Ftime-picker.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="time-picker"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 任意时间点

可以选择任意时间，使用 ur-time-picker 标签，通过 `disabledHours` `disabledMinutes` 和 `disabledSeconds` 限制可选时间范围。

```html
<template>
  <ur-time-picker
    v-model="value1"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="任意时间点">
  </ur-time-picker>
</template>

<script>
  const makeRange = (start, end) => {
    const result = []
    for (let i = start; i <= end; i++) {
      result.push(i)
    }
    return result
  }
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40)
      };
    },
    methods: {
      // 如允许 17:30:00 - 18:30:00
      disabledHours() {
        return makeRange(0, 16).concat(makeRange(19, 23))
      },
      disabledMinutes (hour) {
        if (hour === 17) {
          return makeRange(0, 29)
        }
        if (hour === 18) {
          return makeRange(31, 59)
        }
      },
      disabledSeconds(hour, minute) {
        if (hour === 18 && minute === 30) {
          return makeRange(1, 59)
        }
      },
    },
  }
</script>
```

## 任意时间范围

添加`is-range`属性即可选择时间范围。
```html
<template>
  <ur-time-picker
    is-range
    v-model="value1"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </ur-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
```

## 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | date | — | — |
| readonly | 只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| is-range | 是否为时间范围选择 | boolean | — | false |
| format | 显示在输入框中的格式 | string | HH（时）mm（分）ss（秒） | HH:mm:ss |
| default-value | 选择器打开时默认显示的时间 | date | — | — |
| disabledHours | 禁止选择部分小时选项 | function | — | - |
| disabledMinutes | 禁止选择部分分钟选项 | function(selectedHour) | — | - |
| disabledSeconds | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | — | - |

## 事件
| 事件名 | 说明 | 参数 |
|---------|--------|---------|
| change | 用户确认选定的值时触发 | 组件绑定值 |
| blur | 当 input 失去焦点时触发 | 组件实例 |
| focus | 当 input 获得焦点时触发 | 组件实例 |

## 方法
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |