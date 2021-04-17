<template>
  <div class="gengduo">
    <toubu></toubu>
    <van-tabs type="card" color="#5f646e">
      <van-tab title="特色导购" name="a">
        <tese></tese>
      </van-tab>
      <van-tab title="功能服务" name="b">
        <gongneng></gongneng>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import toubu from "/src/components/toubu.vue";
import gongneng from "../gengduo/components/gongneng";
import tese from "../gengduo/components/tese";
export default {
  components: {
    toubu,
    tese,
    gongneng,
  },
  data() {
    return {
      activeName: "a",
    };
  },
};
</script>
<style scoped>
</style>