# 柱状图 BarChart

通过`xAxis`属性可配置x轴坐标系，y轴坐标系会根据数据`data`自动计算并绘图。

<iframe src="https://codesandbox.io/embed/bar-chart-ooprs?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fbar-chart.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="bar-chart"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

```vue
<template>
  <div>
    <ur-bar-chart :data="data" :xAxis="xAxis"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [10, 30, 60, 80, 60, 30, 0],
    }
  }
}
</script>
```

## 属性

| 参数    | 说明      | 类型   | 可选值 | 默认值    |
| ------- | --------- | ------ | ------ | --------- |
| xAxis   | x轴坐标系 | Array  | —      | [ ]       |
| data    | 数据      | Array  | —      | [ ]       |
| width   | 柱宽度    | String | —      | '2rem'    |
| height  | 图高度    | String | —      | '200px'   |
| bgColor | 柱颜色    | String | —      | '#18634b' |