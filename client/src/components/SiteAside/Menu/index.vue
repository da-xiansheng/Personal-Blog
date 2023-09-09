<template>
  <nav class="menu-container">
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  methods: {
    // isSelected(item) {
    //   let link = item.link.toLowerCase();
    //   let curPathname = location.pathname.toLowerCase();
    //   if (item.startWith) {
    //     return curPathname.startsWith(link);
    //   } else {
    //     return curPathname === link;
    //   }
    // },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    display: block;
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    &:hover {
      color: #fff;
    }
    .icon {
      width: 24px;
    }
    &.router-link-active {
      background: #2d2d2d;
    }
  }
}
</style>
