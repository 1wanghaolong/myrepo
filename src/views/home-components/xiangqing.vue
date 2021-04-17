<template>
  <div class="x-q">
    <div style="width: 100%">
      <div class="x-q-nei">
        <div class="recommend-hd">
          <img
            src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png"
            class="recommend-hd-bg"
          />
        </div>
        <div class="recommend-item" v-for="i of 8" :key="i" >
          <a class="recommend-img-wrapper triggerClick" data-index="0">
            <img
              class="recommend-img lazyload"
              src="//gw.alicdn.com/bao/uploaded/i4/2208564488773/O1CN015rD9eP2Eg5LrSqvby_!!0-item_pic.jpg_500x500q90.jpg_.webp"
            />
          </a>
          <a class="recommend-info triggerClick" data-index="0">
            <div class="recommend-title">
              <span class="recommend-title-p"
                >小米路由器4C无线家用wifi穿墙王1200M4A千兆版双千兆端口高速双频无限光纤穿墙漏油大户型宽带宿舍300M</span
              >
            </div>
            <div class="recommend-price-box">
              <span class="recommend-sign recommend-h">￥</span>
              <span class="recommend-price">46</span>
              <span class="recommend-payed">2886人已购买</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.x-q {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.x-q-nei {
  width: 100%;
  display: -webkit-flex;
  display: flex;
  position: relative;
  box-sizing: border-box;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  place-content: flex-start space-between;
  flex-shrink: 0;
  overflow: hidden;
  -webkit-box-pack: justify;
  -webkit-box-lines: multiple;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 0.15rem;
  background: #f2f2f2;
  padding-bottom: 0.24rem;
}
.recommend-hd {
  padding: 0.24rem 0;
  width: 100%;
  text-align: center;
}
.recommend-hd-bg {
  width: 3.22rem;
  height: 0.4rem;
}
.recommend-item {
  position: relative;
  width: 47%; 
  /* //1rem=37px */
  box-sizing: border-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  background: #fff;
  margin-top: 0.24rem;
  border-radius: 0.16rem;
  overflow: hidden;
  margin-left: 0.125rem;
  margin-right: 0.125rem;
}
.recommend-img-wrapper {
  -webkit-box-align: center;
  height: 100%;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.recommend-img {
  width: 100%;
  height: 100%;
}
.recommend-info {
  padding-left: 0.27rem;
  padding-right: 0.24rem;
  height: 2.54rem;
  text-decoration: none;
}
.recommend-title {
  margin-top: 0.31rem;
  height: 1rem;
  position: relative;
  overflow: hidden;
  line-height: 0.5rem;
  text-overflow: ellipsis;
  min-height: 0;
}
.recommend-title-p {
  font-size: 0.35rem;
  color: #333333;
}
.recommend-price-box {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  margin-top: 0.29rem;
  height: 0.54rem;
  line-height: 0.54rem;
}
.recommend-sign {
  font-size: 0.29rem;
  margin-right: 0.05rem;
}
.recommend-h {
  color: #ff5500;
}
.recommend-price {
  font-size: 0.37rem;
  line-height: 0.43rem;
  color: #ff5500;
  margin-right: 0.48rem;
}
.recommend-payed {
  font-size: 0.29rem;
  color: #999999;
  margin-top: 0.054rem;
}
</style>