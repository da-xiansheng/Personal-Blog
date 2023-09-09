<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>

    <Menu />
    <Contact v-if="data" />
    <div v-if="data" class="footer">
      <div>
        <a href="https://beian.miit.gov.cn" target="_blank">{{ data.icp }}</a>
      </div>
      <div class="filing-container">
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41010302003011"
          style="display: inline-block; height: 20px; line-height: 20px"
          ><img src="@/assets/filing.png" />
          <p style="float: left; margin: 0px 0px 0px 5px">
            豫公网安备 41010302003011号
          </p></a
        >
      </div>
      <a>Powered by Mr Big</a>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  margin: 50px 0;
  text-align: center;
  font-size: 12px;
  a {
    margin: 5px 0;
  }
  .filing-container {
    margin-bottom: -3px;
    img {
      float: left;
      filter: brightness(30%);
    }
    &:hover {
      img {
        filter: brightness(100%);
      }
      a {
        color: @primary;
      }
    }
  }
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
