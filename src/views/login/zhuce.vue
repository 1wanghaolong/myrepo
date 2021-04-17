<template>
  <div class="zhece">
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-icon :name="name" :color="color" />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-icon :name="name2" :color="color2" />
      <van-field
        v-model="pwds"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写确认密码' }]"
      />
      <van-icon :name="name3" :color="color3" />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      username: "",
      password: "",
      pwds: "",
      name: "clear",
      color: "red",
      name2: "clear",
      color2: "red",
      name3: "clear",
      color3: "red",
    };
  },
  methods: {
    ...mapMutations(["username2","password2"]),
    onSubmit(values) {
      console.log(this.username, this.password, this.pwds);
      this.$router.push("/denglu");
      console.log(this.pwds);
      alert("注册成功");
      console.log(values);
      console.log(values.用户名);
      console.log(values.密码);
      this.username2(values)
    },
    onClickLeft() {
      this.$router.push("/denglu");
    },
  },
  watch: {
    username() {
      var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
      if (uPattern.test(this.username)) {
        this.username = this.username;
        this.name = "checked";
        this.color = "#0f0";
      } else {
        this.name = "clear";
        this.color = "red";
      }
    },
    password() {
      var pPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;

      if (pPattern.test(this.password)) {
        this.password = this.password;
        this.name2 = "checked";
        this.color2 = "#0f0";
      } else {
        this.name2 = "clear";
        this.color2 = "red";
      }
    },
    pwds() {
      if (this.password === this.pwds) {
        this.name3 = "checked";
        this.color3 = "#0f0";
      }
    },
    computed:{},
  },
};
</script>
<style scoped>
.van-icon {
  color: red;
  z-index: 2;
  top: -30px;
  left: 160px;
}
</style>