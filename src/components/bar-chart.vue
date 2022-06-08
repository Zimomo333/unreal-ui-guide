<template>
  <ClientOnly>
    <div style="margin: 2rem 2rem 0;">
      <ur-bar-chart :data="data" :xAxis="xAxis" />
    </div>
  </ClientOnly>
</template>

<script>
export default {
  data() {
    return {
      xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [10, 30, 60, 80, 60, 30, 0],
    };
  },
};
</script>