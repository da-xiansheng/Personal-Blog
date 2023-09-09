<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">zuo</div>
      </template>
      <div class="main">main</div>
      <template #right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: { Layout },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 60%;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background: red;
}
.main {
  width: 100%;
  height: 100%;
  background: green;
}
.right {
  width: 150px;
  height: 100%;
  background: pink;
}
</style>
