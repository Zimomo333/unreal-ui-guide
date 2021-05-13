# 时间选择 TimeSelect

 用于选择或输入日期

<iframe src="https://codesandbox.io/embed/time-select-yglcf?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Ftime-select.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="time-select"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 固定时间点

提供几个固定的时间点供用户选择

使用 ur-time-select 标签，分别通过`start`、`end`和`step`指定可选的起始时间、结束时间和步长
```html
<ur-time-select
  v-model="value"
  start='08:30'
  step='00:15'
  end='18:30'
  placeholder="选择时间">
</ur-time-select>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
</script>
```

## 固定时间范围

若先选择开始时间，则结束时间内备选项的状态会随之改变


```html
<template>
  <ur-time-select
    placeholder="起始时间"
    v-model="startTime"
    start='08:30'
  step='00:15'
  end='18:30'>
  </ur-time-select>
  <ur-time-select
    placeholder="结束时间"
    v-model="endTime"
    start='08:30'
    step='00:15'
    end='18:30'
    :minTime="startTime">
  </ur-time-select>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
</script>
```

## 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | string | — | — |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start | 开始时间 | string | — | 09:00 |
| end | 结束时间 | string | — | 18:00 |
| step | 间隔时间 | string | — | 00:30 |
| minTime | 最小时间，小于该时间的时间段将被禁用 | string | — | 00:00 |
| maxTime | 最大时间，大于该时间的时间段将被禁用 | string | — | — |


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
| blur | 去掉 input 获取焦点 | - |