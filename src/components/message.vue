
<template>
  <ClientOnly>
    <ur-button class="space" @click="open1">消息</ur-button>
    <ur-button class="space" @click="open2">成功</ur-button>
    <ur-button class="space" @click="open3">错误</ur-button>
  </ClientOnly>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示',
      });
    },

    open2() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success',
      });
    },

    open3() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error',
      });
    },
  },
};
</script>