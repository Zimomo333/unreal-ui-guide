# Tag 标签

用于标记和选择。

## 基础用法

由`type`属性来选择tag的类型，也可以通过`color`属性来自定义背景色。

```html
<ur-tag>标签一</ur-tag>
<ur-tag type="success">标签二</ur-tag>
<ur-tag type="info">标签三</ur-tag>
<ur-tag type="danger">标签五</ur-tag>
```

## 可移除标签

设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`disable-transitions`属性，它接受一个`Boolean`，true 为关闭。

```html
<ur-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</ur-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'danger' }
        ]
      };
    }
  }
</script>
```

## 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<ur-tag closable>默认标签</ur-tag>
<ur-tag size="medium" closable>中等标签</ur-tag>
<ur-tag size="small" closable>小型标签</ur-tag>
<ur-tag size="mini" closable>超小标签</ur-tag>
```

## 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | string | success/info/danger | — |
| closable | 是否可关闭 | boolean | — | false |
| size | 尺寸 | string | medium / small / mini | — |


## 事件
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 点击 Tag 时触发的事件 | — |
| close | 关闭 Tag 时触发的事件 | — |
