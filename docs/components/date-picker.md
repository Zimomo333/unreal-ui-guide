
# 日期选择器 DatePicker

用于选择或输入日期

##  选择日

以「日」为基本单位，基础的日期选择控件

基本单位由`type`属性指定。通过`shortcuts`配置快捷选项，禁用日期通过 `disabledDate` 设置，传入函数
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <ur-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </ur-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <ur-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :disabled-date="disabledDate"
      :shortcuts="shortcuts"
    >
    </ur-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          value: new Date(),
        }, {
          text: '昨天',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          })(),
        }, {
          text: '一周前',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          })(),
        }],
        value1: '',
        value2: '',
      };
    }
  };
</script>
```

##  日期和时间点

通过设置`type`属性为`datetime`，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。

```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <ur-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </ur-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <ur-date-picker
      v-model="value2"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      :shortcuts="shortcuts">
    </ur-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: '今天',
          value: new Date(),
        }, {
          text: '昨天',
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date
          })(),
        }, {
          text: '一周前',
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date
          })(),
        }],
        value1: '',
        value2: '',
        defaultTime: new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'
      };
    }
  };
</script>
```

## 日期和时间范围

设置`type`为`datetimerange`即可选择日期和时间范围

```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <ur-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </ur-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <ur-date-picker
      v-model="value2"
      type="datetimerange"
      :shortcuts="shortcuts"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </ur-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: '最近一周',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end]
          })()
        }, {
          text: '最近一个月',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end]
          })()
        }, {
          text: '最近三个月',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end]
          })()
        }],
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
</script>
```

## 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | date / array[date] | — | — |
| readonly | 只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时结束日期的占位内容 | string | — | — |
| type | 日期时间显示类型 | string | date / datetime / datetimerange | date |
| format | 显示在输入框中的格式 | string | YYYY（年）MM（月）DD（日）<br/>HH（时）mm（分）ss（秒） | YYYY-MM-DD<br/>HH:mm:ss |
| range-separator | 选择范围时的分隔符 | string | — | '-' |
| default-value | 选择器打开时默认显示的时间 | date |  | — |
| shortcuts | 设置快捷选项，需要传入数组对象 | object[{ text: string, value: date }] | — | — |
| disabledDate | 设置禁用日期，要求返回 Boolean | Function | — | — |

## 事件
| 事件名称      | 说明    | 回调参数      |
|---------|--------|---------|
| change | 用户确认选定的值时触发 | 组件绑定值 |
| blur | 当 input 失去焦点时触发 | 组件实例 |
| focus | 当 input 获得焦点时触发 | 组件实例 |

## 方法
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |