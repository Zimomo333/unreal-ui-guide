# DateTimePicker 日期时间选择器

在同一个选择器里选择日期和时间


DateTimePicker 由 DatePicker 和 TimePicker 派生，相关属性可以参照 DatePicker 和 TimePicker。

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

## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | date(DateTimePicker) / array(DateTimeRangePicker) | — | — |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时结束日期的占位内容 | string | — | — |
| time-arrow-control | 是否使用箭头进行时间选择 | boolean | — | false |
| type | 显示类型 | string | year/month/date/week/ datetime/datetimerange/daterange | date |
| format | 显示在输入框中的格式 | string | 见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi) | YYYY-MM-DD HH:mm:ss |
| default-value | 可选，选择器打开时默认显示的时间 | Date | 可被`new Date()`解析 | — |
| default-time | 选中日期后的默认具体时刻 | Date / 范围选择时：Date[] | 非范围选择时：Date 对象；范围选择时：数组，长度为 2，每项值为 Date 对象，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 `00:00:00` | — |
| name | 原生属性 | string | — | — |
| unlink-panels | 在范围选择器里取消两个日期面板之间的联动 | boolean | — | false |
| shortcuts | 设置快捷选项，需要传入数组对象 | object[{ text: string, value: Date }] | — | — |
| disabledDate | 设置禁用状态，参数为当前日期，要求返回 Boolean | Function | — | — |

## Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | 用户确认选定的值时触发 | 组件绑定值 |
| blur | 当 input 失去焦点时触发 | 组件实例 |
| focus | 当 input 获得焦点时触发 | 组件实例 |

## Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |

## Slots
| Name    | 说明         |
|---------|-------------|
| range-separator  | 自定义分隔符 |
