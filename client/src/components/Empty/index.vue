<template>
  <div class="empty-container">
    <Icon type="empty" />
    <P>{{ text }}</P>
  </div>
</template>

<script>
import Icon from "../Icon/index.vue";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  .self-center();
  color: @gray;
  text-align: center;
}
.icon-container {
  font-size: 70px;
}
</style>
