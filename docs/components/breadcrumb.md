<script setup>
  import BreadcrumbDemo from '../../src/components/breadcrumb.vue';
</script>
# 面包屑 Breadcrumb
显示当前页面的路径，快速返回之前的任意页面。

<BreadcrumbDemo />
<br />

<iframe src="https://codesandbox.io/embed/breadcrumb-yhvq3?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fbreadcrumb.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="breadcrumb"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 基础用法

适用广泛的基础用法。

在`ur-breadcrumb`中使用`ur-breadcrumb-item`标签表示从首页开始的每一级。UnrealUI 提供了一个`separator`属性，在`ur-breadcrumb`标签中设置它来决定分隔符，它只能是字符串，默认为斜杠`/`。

```html
<ur-breadcrumb separator="/">
  <ur-breadcrumb-item :to="{ path: '/' }">首页</ur-breadcrumb-item>
  <ur-breadcrumb-item><a href="/">活动管理</a></ur-breadcrumb-item>
  <ur-breadcrumb-item>活动列表</ur-breadcrumb-item>
  <ur-breadcrumb-item>活动详情</ur-breadcrumb-item>
</ur-breadcrumb>
```

## Breadcrumb 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | — | 斜杠'/' |

## Breadcrumb Item 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |
| replace   | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |