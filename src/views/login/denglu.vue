<template>
  <div class="denglu">
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username3"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password3"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      username3: "",
      password3: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log(this.username3, this.password3);
      if (this.username3 === this.username) {
        alert("用户名正确");
      } else {
        this.username3=''
        alert("用户名错误");
      }
      if (this.password3 === this.password) {
        alert("密码正确");
      } else {
        this.password3 = ''
        alert("密码错误");
      }
    },
    onClickLeft() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState(["username", "password"]),
  },
  watch: {},
};
</script>