<template>
  <div class="echart-container">
    <p style="text-align: center; font-size: 18px; font-weight: 500">
      文章分布
    </p>
    <div style="display: flex">
      <div ref="pie" style="width: 30%; height: 800px" />
      <div ref="bar" style="width: 70%; height: 800px" />
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getBlogType } from "@/api/blogType.js";
export default {
  data() {
    return {
      pieChart: null,
      barChart: null,
      data: {},
      nameArr: [],
      articleCountArr: [],
      pieDataArr: [],
    };
  },
  async mounted() {
    await this.fetchData();
    this.echartsInit();
  },
  methods: {
    async fetchData() {
      this.data = await getBlogType();
      for (const i of this.data.data) {
        this.nameArr.push(i.name);
        this.articleCountArr.push(i.articleCount);
      }
      this.pieDataArr = this.articleCountArr.map((value, i) => ({
        value,
        name: this.nameArr[i],
      }));
    },
    echartsInit() {
      this.pieChart = echarts.init(this.$refs.pie);
      this.barChart = echarts.init(this.$refs.bar);
      const pieOption = {
        tooltip: {},
        series: [
          {
            type: "pie",
            radius: "70%",
            roseType: "radius",
            data: this.pieDataArr,
          },
        ],
      };
      const barOption = {
        tooltip: {},
        xAxis: {
          type: "category",
          data: this.nameArr,
          axisTick: { show: false },
          axisLabel: {
            interval: 0, //全部显示x轴
          },
        },
        yAxis: {
          // splitLine: { show: false },
          type: "value",
          // axisLine: {
          //   show: true, // Y轴
          //   lineStyle: {
          //     color: "#888", // 颜色
          //   },
          // },
        },
        series: [
          {
            data: this.articleCountArr,
            type: "bar",
            itemStyle: {
              normal: {
                color: function () {
                  return (
                    "#" +
                    Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(
                      16
                    )
                  );
                },
              },
            },
          },
        ],
      };
      this.pieChart.setOption(pieOption);
      this.barChart.setOption(barOption);
    },
  },
};
</script>
