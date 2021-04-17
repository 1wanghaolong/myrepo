<template>
  <div class="daohang">
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
      @change="onChange"
      route
    >
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item
        icon="shopping-cart-o"
        badge="5"
        to="/gouwuche"
        @click="gouwuche"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" badge="15" to="/denglu"
        >我的</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/shezhi" @click="shezhi"
        >设置</van-tabbar-item
      >
      <van-tabbar-item icon="ellipsis" to="/gengduo" @click="gengduo"
        >更多</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    gouwuche() {
      this.title("购物车");
    },
    shezhi() {
      this.title("设置");
    },
    gengduo() {
      this.title("更多");
    },
    onChange(index) {
      console.log(index);
    },
    ...mapMutations(["title"]),
  },
};
</script>
<style>
</style>