<script setup>
  import TabsDemo from '../../src/components/tabs.vue';
</script>
# 标签页 Tabs

分隔内容上有关联但属于不同类别的数据集合。

<TabsDemo />
<br />


<iframe src="https://codesandbox.io/embed/tabs-w7vlg?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Ftabs.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="tabs"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 基础用法

基础的、简洁的标签页。

Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。

```html
<template>
  <ur-tabs v-model="activeName" @tab-click="handleClick">
    <ur-tab-pane label="用户管理" name="first">用户管理</ur-tab-pane>
    <ur-tab-pane label="配置管理" name="second">配置管理</ur-tab-pane>
    <ur-tab-pane label="角色管理" name="third">角色管理</ur-tab-pane>
    <ur-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</ur-tab-pane>
  </ur-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```

## 位置

可以通过 `tab-position` 设置标签的位置

标签一共有四个方向的设置 `tabPosition="left|right|top|bottom"`

```html
<template>
  <ur-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <ur-radio label="top">top</ur-radio>
    <ur-radio label="right">right</ur-radio>
    <ur-radio label="bottom">bottom</ur-radio>
    <ur-radio label="left">left</ur-radio>
  </ur-radio-group>

  <ur-tabs :tab-position="tabPosition" style="height: 200px;">
    <ur-tab-pane label="用户管理">用户管理</ur-tab-pane>
    <ur-tab-pane label="配置管理">配置管理</ur-tab-pane>
    <ur-tab-pane label="角色管理">角色管理</ur-tab-pane>
    <ur-tab-pane label="定时任务补偿">定时任务补偿</ur-tab-pane>
  </ur-tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>
```

## Tabs 属性
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model  | 绑定值，选中选项卡的 name  | string   |  —  | 首个选项卡的 name |
| tab-position  | 选项卡所在位置 | string   |  top/right/bottom/left  |  top |
| before-leave | 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。 | Function(activeName, oldActiveName) | — | — |

## Tabs 事件
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| tab-click  | tab 被选中时触发 | 被选中的标签 tab 实例 |

## Tab-pane 属性
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选项卡标题   | string   | — |    —     |
| disabled | 是否禁用 | boolean | — | false |
| name      | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string | — | 该选项卡在选项卡列表中的顺序值 |
| lazy  | 标签是否延迟渲染   | boolean   | — |  false  |

## Tab-pane 插槽

| name | 说明 |
|------|--------|
| - | Tab-pane 的内容 |
| label | Tab-pane 的标题内容 |