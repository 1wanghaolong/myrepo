<template>
  <div class="wrap1">
    <h2>字母排序</h2>
    <ul class="clearfix letter">
      <li v-for="(value,key) in letter" :key="key" @click="letterpos(key)">{{key}}</li>
    </ul>
  </div>
</template>
<script>
import bus from '@/bus.js'
export default {
  props: ['letter'],
  methods: {
    letterpos (letter) {
      console.log(letter)
      bus.$emit('letter', letter)
      // 调用bs插件的scrolltoelement()
      // this.scroll.scrollToElement(this.$refs.letter[0])
    }
  }
}
</script>
<style scoped>
.letter li{
  width: 16.66%;
  border : none;
  margin: 0
}
</style>
