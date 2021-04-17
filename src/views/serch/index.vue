<template>
  <div class="serch">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        action-text="清除"
        shape="round"
        left-icon=""
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        input-align="center"
        @blur="shiqu"
      />
      <van-icon name="arrow-left" tag="div" size="20" @click="fanhui" />
    </form>
    <div class="pos" v-show="show">
      <h4 style="color: rgb(51, 136, 255)">搜索"{{ value }}"</h4>
    </div>
    <div class="pd23">
      <div class="history-title">
        <span>历史记录</span>
        <van-icon name="cross" @click="arr1" />
      </div>
      <div class="wrapper">
        <div class="container">
          <ul class="icons-group">
            <li class="icon-list" v-for="(item, index) in arr" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      show: false,
      arr: [],
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
      this.value=""
    },
    onCancel() {
      console.log("清除");
    },
    shiqu() {
      this.show = false;
      this.arr.push(this.value);
    },
    fanhui() {
      this.$router.go(-1);
    },
    arr1() {
      this.arr = [];
    },
  },
  watch: {
    value() {
      if (this.value !== "") {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
};
</script>
<style scoped>
.pos {
  position: absolute;
  width: 76%;
  box-shadow: 0 4px 16px #aaa;
  background-color: #fff;
  left: 11%;
  z-index: 1000;
  top: 6%;
}
.pos h4 {
  line-height: 0.6rem;
}
.sear-list {
  width: 100%;
}
.van-icon-arrow-left {
  position: absolute;
  font: normal normal normal 14px/1 vant-icon;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  display: flex;
  top: 0.45rem;
  left: 0.32rem;
}
.pd23 {
  box-sizing: border-box;
  padding: 0 0.23rem;
}
.history-title {
  display: flex;
  justify-content: space-between;
  height: 0.8rem;
  line-height: 0.8rem;
}
.wrapper {
  box-sizing: border-box;
  overflow: hidden;
  height: 0.5rem;
}
.container {
  overflow-x: scroll;
}
.icons-group {
  height: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  white-space: nowrap;
  width: auto;
  min-width: 100%;
}
.icon-list {
  height: 0.44rem;
  box-sizing: border-box;
  padding: 0 0.13rem;
  font-size: small;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  border-radius: 0.3rem;
  background: #eee;
}
</style>