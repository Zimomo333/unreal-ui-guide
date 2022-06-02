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

  <ur-carousel
    class="carousel-demo"
    direction="horizontal"
    trigger="click"
    arrow="always"
  >
    <ur-carousel-item v-for="item in items" :key="item.id">
      <img :src="item.imgSrc" />
    </ur-carousel-item>
  </ur-carousel>

  <ur-carousel class="carousel-demo" direction="vertical" trigger="click">
    <ur-carousel-item v-for="item in items" :key="item.id">
      <img :src="item.imgSrc" />
    </ur-carousel-item>
  </ur-carousel>
</template>

<script>
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";

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
  width: 35rem;
  height: 24rem;
  margin: 0 auto 2rem;
}
</style>
