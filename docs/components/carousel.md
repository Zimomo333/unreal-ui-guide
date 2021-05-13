# 走马灯 Carousel

在有限空间内，循环播放同一类型的图片、文字等内容。

<iframe src="https://codesandbox.io/embed/carousel-71bkd?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2Fcarousel.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="carousel"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 基础用法

适用广泛的基础用法

结合使用`ur-carousel`和`ur-carousur-item`标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在`ur-carousur-item`标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置`trigger`属性为`click`，可以达到点击触发的效果。
```html
<template>
  <ur-carousel class="carousel-demo" direction="horizontal">
    <ur-carousel-item v-for="item in items" :key="item.id">
      <img :src="item.imgSrc" />
    </ur-carousel-item>
  </ur-carousel>

  <ur-carousel class="carousel-demo" direction="horizontal" trigger="click">
    <ur-carousel-item v-for="item in items" :key="item.id">
      <img :src="item.imgSrc" />
    </ur-carousel-item>
  </ur-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          imgSrc: image1,
        },
        {
          id: 2,
          imgSrc: image2,
        },
        {
          id: 3,
          imgSrc: image3,
        },
      ],
    };
  },
};
</script>

<style>
.carousel-demo {
  width: 800px;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 50px;
}
</style>
```

## 切换箭头
可以设置切换箭头的显示时机

`arrow`属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将`arrow`设置为`always`，则会一直显示；设置为`never`，则会一直隐藏。
```html
<template>
 <ur-carousel class="carousel-demo" direction="horizontal" trigger="click" arrow="always">
    <ur-carousel-item v-for="item in items" :key="item.id">
      <img :src="item.imgSrc" />
    </ur-carousel-item>
  </ur-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          imgSrc: image1,
        },
        {
          id: 2,
          imgSrc: image2,
        },
        {
          id: 3,
          imgSrc: image3,
        },
      ],
    };
  },
};
</script>

<style>
.carousel-demo {
  width: 800px;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 50px;
}
</style>
```

## 方向
默认情况下，`direction` 为 `horizontal`。通过设置 `direction` 为 `vertical` 来让走马灯在垂直方向上显示。

```html
<template>
 <ur-carousel class="carousel-demo" direction="vertical" trigger="click">
    <ur-carousel-item v-for="item in items" :key="item.id">
      <img :src="item.imgSrc" />
    </ur-carousel-item>
  </ur-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          imgSrc: image1,
        },
        {
          id: 2,
          imgSrc: image2,
        },
        {
          id: 3,
          imgSrc: image3,
        },
      ],
    };
  },
};
</script>

<style>
.carousel-demo {
  width: 800px;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 50px;
}
</style>
```

## Carousel 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| initial-index | 初始状态激活的幻灯片的索引，从 0 开始 | number | — | 0 |
| trigger | 指示器的触发方式 | string | click | — |
| autoplay | 是否自动切换 | boolean | — | true |
| interval | 自动切换的时间间隔，单位为毫秒 | number | — | 3000 |
| arrow | 切换按钮的显示时机 | string | always / hover / never | hover |
| loop | 是否循环显示 | boolean | - | true |
| direction | 走马灯展示的方向 | string | horizontal / vertical | horizontal |
| pause-on-hover | 鼠标悬浮时暂停自动切换 | boolean | - | true |

## Carousel 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |

## Carousel 方法
| 方法名      | 说明          | 参数 |
|---------- |-------------- | -- |
| setActiveItem | 手动切换幻灯片 | 需要切换的幻灯片的索引，从 0 开始；或相应 `ur-carousur-item` 的 `name` 属性值 |
| prev | 切换至上一张幻灯片 | — |
| next | 切换至下一张幻灯片 | — |

## Carousur-Item 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 选定值，可用作 `setActiveItem` 的参数 | string | — | — |