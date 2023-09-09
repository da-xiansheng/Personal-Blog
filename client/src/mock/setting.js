import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://img1.baidu.com/it/u=3206351602,2714439067&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    siteTitle: "大先生",
    github: "https://github.com/da-xiansheng",
    qq: "664555649",
    qqQrCode:
      "https://img1.baidu.com/it/u=3206351602,2714439067&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    weixin: "Big_fireworks",
    weixinQrCode:
      "https://img1.baidu.com/it/u=3206351602,2714439067&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    mail: "big_fireworks@163.com",
    icp: "黑ICP备17001719号",
    githubName: "da-xiansheng",
    favicon: "http://cdn.lsal.cn/red/368/a/b13e30c0d.png",
  },
});
