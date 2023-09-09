import request from "@/utils/request";

//获取验证码
export function getCaptcha(params) {
  return request({
    url: "/res/captcha",
    method: "get",
  });
}
