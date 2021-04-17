<template>
  <div class="home">
    <toubu></toubu>
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      :head-height="80"
      @refresh="onRefresh"
    >
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
        <div
          class="doge"
          :style="{ transform: `scale(${props.distance / 80})` }"
        ></div>
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <div class="doge">下拉刷新</div>
      </template>

      <!-- 加载提示 -->
      <template #loading>
        <div class="doge"><van-loading type="spinner" size="20" />加载中</div>
      </template>
      <template #success>
        <div class="doge">成功</div>
      </template>
      <lunbo></lunbo>
      <!-- swiper -->
      <swiper></swiper>
      <!-- swiper -->
      <!-- fenlei -->
      <fenlei></fenlei>
      <!-- fenlei -->
      <!-- xiangqing -->
      <xiangqing></xiangqing>
      <!-- xiangqing -->
    </van-pull-refresh>
    <!-- 下拉刷新 -->
    <!-- daohang  -->
    <daohang></daohang>
    <!-- daohang -->
    <div @click="denglu">登录</div>
    <div @click="zhuce">注册</div>
  </div>
</template>
<script>
import toubu from "./home-components/toubu";
import lunbo from "./home-components/lunbo";
import swiper from "./home-components/swiper";
import Swiper from "./home-components/swiper.vue";
import fenlei from "./home-components/fenlei";
import xiangqing from "./home-components/xiangqing";
import daohang from "/src/components/dingbudaohang/daohang.vue";
export default {
  components: {
    toubu,
    lunbo,
    swiper,
    Swiper,
    fenlei,
    xiangqing,
    daohang,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    denglu() {
      this.$router.push("/denglu");
    },
    zhuce() {
      this.$router.push("/zhuce");
    },
  },
};
</script>
<style  scoped>
.doge {
  width: 100%;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.home {
  background-color: whitesmoke;
}
</style>
