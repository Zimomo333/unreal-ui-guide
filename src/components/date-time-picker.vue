<template>
  <ClientOnly>
    <span class="demonstration">默认</span>
    <ur-date-picker class="date-picker-space" v-model="value1" type="datetime" placeholder="选择日期时间"></ur-date-picker>
    <br />
    <span class="demonstration">带快捷选项</span>
    <ur-date-picker
      class="date-picker-space"
      v-model="value2"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      :shortcuts="shortcuts1"
    ></ur-date-picker>
    <br />
    <span class="demonstration">默认</span>
    <ur-date-picker
      class="date-picker-space"
      v-model="value3"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></ur-date-picker>
    <br />
    <span class="demonstration">带快捷选项</span>
    <ur-date-picker
      class="date-picker-space"
      v-model="value4"
      type="datetimerange"
      :shortcuts="shortcuts2"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
    ></ur-date-picker>
  </ClientOnly>
</template>

<script>
export default {
  data() {
    return {
      shortcuts1: [
        {
          text: '今天',
          value: new Date(),
        },
        {
          text: '昨天',
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          })(),
        },
        {
          text: '一周前',
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          })(),
        },
      ],
      shortcuts2: [
        {
          text: '最近一周',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          })(),
        },
        {
          text: '最近一个月',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          })(),
        },
        {
          text: '最近三个月',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          })(),
        },
      ],
      value1: '',
      value2: '',
      value3: '',
      value4: '',
    };
  },
};
</script>

<style>
.demonstration {
  margin-right: 1rem;
}
.date-picker-space {
  margin-bottom: 30rem;
}
</style>
