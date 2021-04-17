<template>
  <div class="lunbo">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg",
        "//img.alicdn.com/imgextra/i3/2206686532409/O1CN01ejdnyd1TfMnHVl81o_!!2206686532409-0-lubanimage.jpg",
        "//img.alicdn.com/imgextra/i3/172/O1CN01jGjYxz1D8onG0LKeu_!!172-0-luban.jpg",
        "//img.alicdn.com/imgextra/i2/2206686532409/O1CN01TkSEN71TfMnCir0K3_!!2206686532409-0-lubanimage.jpg",
      ],
    };
  },
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.2rem;
  text-align: center;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 3rem;
}
</style>