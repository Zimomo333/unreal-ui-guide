# 下拉菜单 Dropdown

将动作或菜单折叠到下拉菜单中。

<iframe src="https://codesandbox.io/embed/dropdown-s5jz4?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fdropdown.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dropdown"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 基础用法

移动到下拉菜单上，展开更多操作。

通过组件`slot`来设置下拉触发的元素以及需要通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

```html
<template>
  <ur-dropdown class="space">
    <span>
      <ur-button>
        下拉菜单
        <svg
          t="1620467593457"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2585"
          width="20"
          height="20"
        >
          <path
            d="M512 729.86624c-13.70112 0-27.40224-5.23264-37.84704-15.6672l-328.69376-328.704c-20.91008-20.91008-20.91008-54.80448 0-75.70432 20.89984-20.89984 54.79424-20.89984 75.70432 0L512 600.63744l290.83648-290.83648c20.91008-20.89984 54.80448-20.89984 75.70432 0 20.91008 20.89984 20.91008 54.79424 0 75.70432l-328.69376 328.704C539.40224 724.64384 525.70112 729.86624 512 729.86624z"
            p-id="2586"
            fill="#707070"
          />
        </svg>
      </ur-button>
    </span>
    <template #dropdown>
      <ur-dropdown-menu>
        <ur-dropdown-item>选项1</ur-dropdown-item>
        <ur-dropdown-item>选项2</ur-dropdown-item>
        <ur-dropdown-item>选项3</ur-dropdown-item>
        <ur-dropdown-item>选项4</ur-dropdown-item>
        <ur-dropdown-item disabled>选项5</ur-dropdown-item>
        <ur-dropdown-item divided>选项6</ur-dropdown-item>
      </ur-dropdown-menu>
    </template>
  </ur-dropdown>
</template>

<style>
.space {
  margin: 1rem;
}
</style>
```
## 触发方式

可以配置 click 激活或者 hover 激活。

在`trigger`属性设置为`click`即可。
```html
<template>
  <ur-dropdown trigger="click" class="space">
    <span>
      <ur-button>
        下拉菜单
        <svg
          t="1620467593457"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2585"
          width="20"
          height="20"
        >
          <path
            d="M512 729.86624c-13.70112 0-27.40224-5.23264-37.84704-15.6672l-328.69376-328.704c-20.91008-20.91008-20.91008-54.80448 0-75.70432 20.89984-20.89984 54.79424-20.89984 75.70432 0L512 600.63744l290.83648-290.83648c20.91008-20.89984 54.80448-20.89984 75.70432 0 20.91008 20.89984 20.91008 54.79424 0 75.70432l-328.69376 328.704C539.40224 724.64384 525.70112 729.86624 512 729.86624z"
            p-id="2586"
            fill="#707070"
          />
        </svg>
      </ur-button>
    </span>
    <template #dropdown>
      <ur-dropdown-menu>
        <ur-dropdown-item>选项1</ur-dropdown-item>
        <ur-dropdown-item>选项2</ur-dropdown-item>
        <ur-dropdown-item>选项3</ur-dropdown-item>
        <ur-dropdown-item>选项4</ur-dropdown-item>
        <ur-dropdown-item disabled>选项5</ur-dropdown-item>
        <ur-dropdown-item divided>选项6</ur-dropdown-item>
      </ur-dropdown-menu>
    </template>
  </ur-dropdown>
</template>

<style>
.space {
  margin: 1rem;
}
</style>
```
## Dropdown 属性
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| max-height    | 菜单最大高度  | string / number |           —      | — |
| placement    | 菜单弹出位置     | string | top/top-start/top-end/bottom/bottom-start/bottom-end  | bottom-end |
| trigger       | 触发下拉的行为     | string          | hover, click  | hover |
| show-timeout  | 展开下拉菜单的延时 | number          | — | 250 |
| hide-timeout  | 收起下拉菜单的延时 | number          | — | 150 |

## Dropdown 插槽

| Name | 说明 |
|------|--------|
| dropdown | 下拉列表，`<ur-dropdown-menu>` 组件     |

## Dropdown Item 属性
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| disabled      | 禁用     | boolean          | — | false |
| divided       | 显示分割线     | boolean          | — | false |