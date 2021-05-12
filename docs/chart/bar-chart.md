# 柱状图 BarChart

通过`xAxis`属性可配置x轴坐标系，y轴坐标系会根据数据`data`自动计算并绘图。

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