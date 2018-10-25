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
  data () {
    return {
      account: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      this.$request.post('/account/login', this.account).then(res => {
        if (res.data.data) {
          this.$msgbox('提示', '登录成功')
        } else {
          this.$msgbox('提示', '登录失败')
        }
      })
    }
  }
}
</script>
