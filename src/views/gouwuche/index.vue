<template>
  <div class="gouwuche">
       <toubu></toubu>
       <daohang></daohang>
  </div>
</template>
<script>
import toubu from '/src/components/toubu.vue'
import daohang from '/src/components/dingbudaohang/daohang.vue'
export default {
    components:{
        toubu,
        daohang
    }
}
</script>
<style scoped>
</style>