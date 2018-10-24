<template>
  <div>
    <h3>Grand Battle Fantasy</h3>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="account.username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="account.password"></mt-field>
    <mt-field label="密码确认" placeholder="请再次输入密码" v-model="repassword"></mt-field>
    <mt-field label="邮箱" placeholder="请再次输入邮箱" v-model="account.email"></mt-field>
    <mt-button type="primary" @click="register">注册</mt-button>
    <div>
      已经有账户?请选择<router-link to="login">登录</router-link>
    </div>
  </div>
</template>

<script>
import { request } from '@/utils/request'
export default {
  name: 'home',
  data () {
    return {
      account: {
        username: '',
        password: '',
        email: ''
      },
      repassword: ''
    }
  },
  methods: {
    register: function () {
      request('/account/','post')
    }
  }
}
</script>
