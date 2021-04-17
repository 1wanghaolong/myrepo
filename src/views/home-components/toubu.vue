<template>
  <div class="toubu">
    <van-nav-bar title="首页" left-text="地址" @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18"  @click="serch"/>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  methods: {
    serch(){
      this.$router.push({path:'/serch'})
    },
    onClickLeft(){
      this.$router.push("/dizhi")
    }
  },
  data() {
    return {
      
    };
  },
  watch: {},
};
</script>
<style>
</style>