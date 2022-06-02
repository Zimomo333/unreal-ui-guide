<template>
  <div class="box">
    <div class="top">
      <ur-tooltip class="item" content="Top Left" placement="top-start">
        <ur-button>上左</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Top Center" placement="top">
        <ur-button>上边</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Top Right" placement="top-end">
        <ur-button>上右</ur-button>
      </ur-tooltip>
    </div>
    <div class="left">
      <ur-tooltip class="item" content="Left Top" placement="left-start">
        <ur-button>左上</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Left Center" placement="left">
        <ur-button>左边</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Left Bottom" placement="left-end">
        <ur-button>左下</ur-button>
      </ur-tooltip>
    </div>

    <div class="right">
      <ur-tooltip class="item" content="Right Top" placement="right-start">
        <ur-button>右上</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Right Center" placement="right">
        <ur-button>右边</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Right Bottom" placement="right-end">
        <ur-button>右下</ur-button>
      </ur-tooltip>
    </div>
    <div class="bottom">
      <ur-tooltip class="item" content="Bottom Left" placement="bottom-start">
        <ur-button>下左</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Bottom Center" placement="bottom">
        <ur-button>下边</ur-button>
      </ur-tooltip>
      <ur-tooltip class="item" content="Bottom Right" placement="bottom-end">
        <ur-button>下右</ur-button>
      </ur-tooltip>
    </div>
  </div>
</template>

<script>
</script>

<style>
.box {
  width: 350px;
  margin: 3rem auto;
}
.top {
  text-align: center;
}

.left {
  float: left;
  width: 50px;
}

.right {
  float: right;
  width: 50px;
}

.bottom {
  clear: both;
  text-align: center;
}

.item {
  margin: 4px;
}

.left .ur-tooltip__popper,
.right .ur-tooltip__popper {
  padding: 8px 10px;
}
</style>
