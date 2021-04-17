<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="width: 100%;">
          <div v-for="i of 8" :key="i">
            <img
              src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"
              alt=""
            />
            <span>天猫</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div v-for="i of 8" :key="i">
            <img
              src="https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1"
              alt=""
            />
            <span>饿了吗</span>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  components: {
    Swiper,
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: 5000, //可选选项，自动滑动
      pagination: ".swiper-pagination",
      paginationType: "progress",
    });
  },
};
</script>
<style  scoped>
.swiper-slide {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.swiper-slide img {
  height: 2rem;
  width: 2rem;
}
.swiper-wrapper{
  height: 5.5rem;
  width: 100%;
}
.swiper {
  height: 5.5rem;
  width: 100%;
  position: relative;
  margin-top: 0.25rem;
  z-index: 100;
}
.swiper-slide span {
  line-height: 0.75rem;
  color: rgb(102, 102, 102);
  margin-top: 0.02rem;
}
.swiper-container-horizontal > .swiper-pagination-progress {
  width: 20%;
  height: 0.08rem;
  left: 40%;
  bottom: 0;
  top: 94%;
}
.swiper-slide div {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  height: 2rem;
  width: 1.5rem;
  margin-top: 0.03rem;
  margin-left: 0.55rem;
}
</style>