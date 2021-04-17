<template>
  <div class="wrap1">
    <div v-for="(value,key) in sort" :key="key">
          <h2 :ref="key">{{key}}</h2>
          <ul class="clearfix mp-list">
            <li v-for="item in value" :key="item.id" @click="changecity(item.name)">
              {{item.name}}
            </li>
          </ul>
    </div>
  </div>
</template>
<script>
import bus from '@/bus.js'
export default {
  props: ['sort'],
  methods: {
    changecity (name) {
      console.log(name)
      // 传递参数  this.$router.push({ path: '路由', query: { 属性 } })
      this.$router.push({ path: '/', query: { name } })
      // 第二种跳转方式 命名式路由
      this.$router.push({ name: 'home', params: { name } })
      // 把选择的城市，本地存储
      localStorage.setItem('city', name)
      // 修改vuexstate的city的值
      this.$store.dispatch('changecity', name)
      // this.$store.commit('changecity', name) 这样写也可以
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const that = this // 这里不能直接使用this因为钩子函数的this是指向windows
    bus.$on('letter', val => {
      console.log(that.$refs)
      bus.$emit('a', that.$refs[val][0])// 这里的不能用.连接
    })
  }
}
</script>
<style>

</style>
