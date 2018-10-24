<template>
  <div>
    <h3>Grand Battle Fantasy</h3>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="account.username"></mt-field>
    <mt-field label="密码" placeholder="请输入用户名" v-model="account.password"></mt-field>
    <mt-button type="primary" @click="login">登录</mt-button>
    <div>
      还没有账户?请选择<router-link to="register" >注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      account: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function() {
      this.$request.request({url:'http://127.0.0.1:8088/account/read/1'}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
