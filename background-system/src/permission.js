import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  const hasGetUserInfo = store.getters.user;
  if (to.meta.auth) {
    if (hasGetUserInfo) {
      next();
    } else {
      const hasToken = localStorage.getItem("adminToken");
      if (hasToken) {
        try {
          await store.dispatch("user/getInfo");
          next();
        } catch (error) {
          await store.dispatch("user/resetToken");
          Message.error("登录过期，请重新登录");
          // next(`/login?redirect=${to.path}`);
          next("/login");
          NProgress.done();
        }
      } else {
        next(`/login?redirect=${to.path}`);
        NProgress.done();
      }
    }
  } else {
    if (to.path === "/login" && hasGetUserInfo) {
      next({ path: "/" });
    } else {
      next();
    }
    NProgress.done();
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
