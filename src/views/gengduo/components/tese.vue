<template>
  <div class="tese">
    <div class="tese-kuang">
      <div class="group">
        <h1>特色市场</h1>
      </div>
      <div class="content">
        <div class="app" v-for="i of 29" :key="i">
          <img
            src="//gw.alicdn.com/tps/TB1UE1mPXXXXXX9apXXXXXXXXXX-156-156.png"
            alt=""
          />
          <div class="name">腔调</div>
        </div>
      </div>
      <div class="group">
        <h1>主题市场</h1>
      </div>
      <div class="content">
        <div class="app" v-for="i of 4" :key="i">
          <img
            src="//img.alicdn.com/tps/TB155yHPpXXXXboXFXXXXXXXXXX-160-160.png"
            alt=""
          />
          <div class="name">阿里健康</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.tese-kuang {
  margin-left: 0.46rem;
  width: 92%;
}
.group {
  width: 100%;
  margin-top: 0.8rem;
  margin-bottom: .4rem;
}
.group h1 {
  font-family: Heiti SC;
  color: #5f646e;
  font-weight: 300;
  display: flex;
  justify-content: left;
  font-size: 0.4rem;
}
.content {
  box-sizing: border-box;
  border: solid 1px #ddd;
  min-height: 4.6rem;
  text-align: justify;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: center;
}
.app {
  font-size: 0.2rem;
  display: inline-block;
  font-family: Heiti SC;
  text-align: center;
  overflow: hidden;
  display: flex;
  vertical-align: top;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.app img {
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.4rem;
  margin-right: 0.6rem;
  border-radius: 0.2rem;
  margin-left: 0.187rem;
}
.app .name {
  height: 1.8rem;
  text-align: center;
  color: #5f646e;
  line-height: 1.4rem;
  margin-right: 0.4rem;
}
</style>