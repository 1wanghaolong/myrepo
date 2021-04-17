<template>
  <div class="bscroll" ref="bscroll">
    <div>
      <header>
        <van-icon name="arrow-left" @click="homeback" size="20" />
        <div>城市选择</div>
      </header>
      <!-- 热门城市 -->
      <hostcity :hostcity="hotCities"></hostcity>
      <!-- 热门城市 -->
      <!-- 字母排序 -->
      <letter :letter="cities"></letter>
      <!-- 字母排序 -->
      <!-- a-z -->
      <sort :sort="cities"></sort>
      <!-- a-z -->
    </div>
  </div>
</template>
<script>
import hostcity from "./components/hostcity";
import sort from "./components/sort";
import letter from "./components/letter";
import BScroll from "better-scroll";
export default {
  name: "city",
  data() {
    return {
      hotCities: [],
      cities: [{}],
    };
  },
  methods: {
    homeback() {
      this.$router.go(-1);
    },
    getcity() {
      this.axios
        .get("mock/city.json")
        .then((res) => {
          this.hotCities = res.data.data.hotCities;
          this.cities = res.data.data.cities;
          console.log(this.hotCities);
          console.log(this.cities);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    scroll() {
      this.scroll = new BScroll(this.$refs.bscroll, {
        click: true,
      });
    },
  },
  components: {
    hostcity,
    sort,
    letter,
  },
  mounted() {
    this.getcity();
    this.scroll();
  },
};
</script>
<style scoped>
header {
  height: 0.88rem;
  text-align: center;
  line-height: 0.88rem;
  display: flex;
  background: #00bcd4;
}

.van-icon-arrow-left {
  width: 0.8rem;
  color: #ffffff;
  margin-top: 0.15rem;
}

header div {
  color: #ffffff;
  text-align: center;
  flex: 1;
}

.bscroll {
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}
</style>