<template>
  <div>
    <Pager :total="total" :current="current" @pageChange="handlePageChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 3,
      total: 111,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
    handleLoaded() {
      console.log("事件触发");
    },
  },
};
</script>

<style></style>
