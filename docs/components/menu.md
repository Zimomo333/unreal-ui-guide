<script setup>
  import MenuDemo from '../../src/components/menu.vue';
</script>
# 导航栏 Menu

垂直菜单，可内嵌子菜单。

<MenuDemo />
<br />
<br />

<iframe src="https://codesandbox.io/embed/menu-mqvvn?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fmenu.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="menu"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 基础用法

通过`ur-menu-item-group`组件可以实现菜单进行分组。

```html
<template>
  <div class="menu_demo">
    <ur-menu default-active="2" @open="handleOpen" @close="handleClose">
      <ur-submenu index="1">
        <template #title>
          <svg
            t="1620738782826"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8038"
            width="24"
            height="24"
          >
            <path
              d="M556.586667 159.36l288.490666 183.914667A64 64 0 0 1 874.666667 397.248v392.746667a64 64 0 0 1-64 64l-224-0.021334V597.333333H448v256.64l-213.333333 0.042667a64 64 0 0 1-64-64V391.68a64 64 0 0 1 30.272-54.4l287.530666-178.346667a64 64 0 0 1 68.138667 0.426667z"
              p-id="8039"
              fill="#707070"
            />
          </svg>
          <span>导航一</span>
        </template>
        <ur-menu-item index="1-1">选项1</ur-menu-item>
        <ur-menu-item index="1-2">选项2</ur-menu-item>
        <ur-menu-item index="1-3">选项3</ur-menu-item>
        <ur-submenu index="1-4">
          <template #title>选项4</template>
          <ur-menu-item index="1-4-1">选项1</ur-menu-item>
        </ur-submenu>
      </ur-submenu>
      <ur-menu-item index="2">
        <svg
          t="1620738702225"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7795"
          width="24"
          height="24"
        >
          <path
            d="M644.8 581.568l160.64 187.456A64 64 0 0 1 756.842667 874.666667H267.157333a64 64 0 0 1-48.597333-105.642667l160.661333-187.434667A254.805333 254.805333 0 0 0 512 618.666667c48.64 0 94.08-13.546667 132.8-37.098667zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z"
            p-id="7796"
            fill="#707070"
          />
        </svg>
        <template #title>导航二</template>
      </ur-menu-item>
      <ur-menu-item index="3" disabled>
        <svg
          t="1620738985968"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9143"
          width="24"
          height="24"
        >
          <path
            d="M896 832v64H597.333333v-64h298.666667zM192 355.477333l300.373333 132.672-1.621333 375.978667a64.064 64.064 0 0 1-2.346667-1.002667l-258.389333-114.730666A64 64 0 0 1 192 689.898667V355.477333zM896 725.333333v64H597.333333v-64h298.666667z m0-106.666666v64H597.333333v-64h298.666667z m-59.264-259.626667V576h-280.746667l0.362667-86.122667 280.384-130.837333zM540.352 160.853333l258.346667 114.752c9.834667 4.373333 18.197333 11.008 24.533333 19.157334l-297.002667 139.114666-318.784-141.482666a63.914667 63.914667 0 0 1 22.570667-16.789334l258.389333-114.730666a64 64 0 0 1 51.946667 0z"
            p-id="9144"
            fill="#707070"
          />
        </svg>
        <template #title>导航三</template>
      </ur-menu-item>
      <ur-menu-item index="4">
        <svg
          t="1620738906893"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8756"
          width="24"
          height="24"
        >
          <path
            d="M789.333333 170.666667a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h554.666666zM341.333333 693.333333h-106.666666V789.333333h106.666666v-96z m448 0H405.333333V789.333333h384v-96zM341.333333 533.333333h-106.666666v96h106.666666V533.333333z m448 0H405.333333v96h384V533.333333z m-448-160h-106.666666V469.333333h106.666666v-96z m448 0H405.333333V469.333333h384v-96z"
            p-id="8757"
            fill="#707070"
          />
        </svg>
        <template #title>导航四</template>
      </ur-menu-item>
    </ur-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
.menu_demo {
  width: 15%;
  margin: 0 auto;
}
.menu_demo .icon {
  position: relative;
  top: -0.1rem;
}
</style>
```
## Menu 属性
| 参数              | 说明                                                         | 类型    | 可选值 | 默认值  |
| ----------------- | ------------------------------------------------------------ | ------- | ------ | ------- |
| background-color  | 菜单的背景色                                                 | string  | —      | #ffffff |
| text-color        | 菜单的文字颜色                                               | string  | —      | #303133 |
| active-text-color | 当前激活菜单的文字颜色                                       | string  | —      | #409EFF |
| default-active    | 当前激活菜单的 index                                         | string  | —      | —       |
| unique-opened     | 是否只保持一个子菜单的展开                                   | boolean | —      | false   |
| router            | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean | —      | false   |

## Menu 方法
| 方法名称 | 说明                | 参数                                |
| -------- | ------------------- | ----------------------------------- |
| open     | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close    | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

## SubMenu 属性
| 参数     | 说明     | 类型        | 可选值 | 默认值 |
| -------- | -------- | ----------- | ------ | ------ |
| index    | 唯一标志 | string/null | —      | null   |
| disabled | 是否禁用 | boolean     | —      | false  |

## Menu-Item 属性
| 参数     | 说明                | 类型    | 可选值 | 默认值 |
| -------- | ------------------- | ------- | ------ | ------ |
| index    | 唯一标志            | string  | —      | —      |
| route    | Vue Router 路径对象 | Object  | —      | —      |
| disabled | 是否禁用            | boolean | —      | false  |