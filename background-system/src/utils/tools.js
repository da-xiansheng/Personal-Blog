//工具函数库

// 时间格式化 xxxx-xx-xx xx:xx:xx 星期x
export function formatDate(timestamp) {
  let date = new Date(parseInt(timestamp));

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let weekArr = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  let week = weekArr[date.getDay()];

  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (day >= 0 && day <= 9) {
    day = "0" + day;
  }
  if (hour >= 0 && hour <= 9) {
    hour = "0" + hour;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds;
  }

  return (
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hour +
    ":" +
    minutes +
    ":" +
    seconds +
    "  " +
    week
  );
}
