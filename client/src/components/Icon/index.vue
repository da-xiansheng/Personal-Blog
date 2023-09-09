<template>
  <i class="iconfont icon-container" :class="fontClass" />
</template>

<script>
let classMap = {
  home: "icon-shouye3",
  empty: "icon-empty",
  about: "icon-guanyuwomen2",
  blog: "icon-wenzhang",
  code: "icon-xiangmu1",
  chat: "icon-liuyanban-05",
  github: "icon-github-fill",
  mail: "icon-bangdingyouxiang",
  qq: "icon-QQ-circle-fill",
  weixin: "icon-logo-wechat",
  success: "icon-success",
  error: "icon-error",
  info: "icon-info",
  warn: "icon-warning",
  close: "icon-close",
  arrowUp: "icon-arrowup",
  arrowDown: "icon-arrowdown",
};
export default {
  props: {
    type: {
      type: String,
      requrie: true,
    },
  },
  computed: {
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/c/font_3670235_hqk11g6hcpt.css";
.icon-container {
  color: inherit;
  font-size: inherit;
}
</style>
