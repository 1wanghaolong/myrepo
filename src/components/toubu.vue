<template>
  <div class="toubu">
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      console.log(this.title);
    },
    onClickRight() {},
  },
  computed: {
    ...mapState(["title"]),
  },
};
</script>
<style scoped>
</style>