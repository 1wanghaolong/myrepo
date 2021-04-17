<template>
  <div class="wrap1">
    <h2>热门城市</h2>
    <ul class="clearfix mp-list">
      <li v-for="item in hostcity" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["hostcity"],
};
</script>
<style>
.wrap1 h2 {
  font-size: 0.24rem;
  margin: 0.24rem 0.3rem;
  display: flex;
}
.wrap1 ul {
  position: relative;
  overflow: hidden;
  z-index: 0;
  background-color: #fff;
}
.wrap1 .mp-list:before {
  content: "";
  position: absolute;
  width: 33.33%;
  left: 33.33%;
  height: 100%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.wrap1 li {
  width: 33.33%;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.28rem;
  text-align: center;
  border-bottom: 0.02rem solid #ddd;
  margin-bottom: -1px;
  float: left;
  position: relative;
  z-index: 10;
  color: #212121;
}
</style>
