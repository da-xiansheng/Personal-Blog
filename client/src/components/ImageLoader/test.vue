<template>
  <div class="test-container">
    <ImageLoader
      src="https://img0.baidu.com/it/u=922902802,2128943538&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1664730000&t=51e11b62c3ae6b9ee408c3a8c83815ca"
      placeholder="https://img1.baidu.com/it/u=3009731526,373851691&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664730000&t=70a1cb7b8333b6002ce5781c0ab4a9c4"
      :duration="3000"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
