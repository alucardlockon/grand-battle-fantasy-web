<template>
  <div>
    <h3>Grand Battle Fantasy</h3>
    <valid-form-item :filed="account.username" v-model="validater.username" type="notEmpty" filed-name="用户名">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="account.username" :state="validater.username"></mt-field>
    </valid-form-item>
    <valid-form-item :filed="account.password" v-model="validater.password" type="notEmpty" filed-name="密码">
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="account.password" :state="validater.password"></mt-field>
    </valid-form-item>
    <valid-form-item :filed="repassword" v-model="validater.repassword" type="notEmpty" filed-name="密码确认">
        <mt-field label="密码确认" placeholder="请再次输入密码" type="password" v-model="repassword" :state="validater.repassword"></mt-field>
    </valid-form-item>
    <valid-form-item :filed="account.email" v-model="validater.email" type="notEmpty" filed-name="邮箱">
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="account.email" :state="validater.email"></mt-field>
    </valid-form-item>
    <mt-button type="primary" @click="register">注册</mt-button>
    <div>
      已经有账户?请选择<router-link to="login">登录</router-link>
    </div>
  </div>
</template>

<script>
import ValidFormItem from '@/components/valid-form-item'
export default {
  name: 'home',
  components: { ValidFormItem },
  data () {
    return {
      account: {
        username: '',
        password: '',
        email: ''
      },
      repassword: '',
      validater: {}
    }
  },
  methods: {
    register: async function () {
      this.$request.post('/account/', this.account).then(res => {
        if (res.data.code === 200) {
          this.$msgbox('恭喜', '注册完毕!')
        }
      })
    }
  }
}
</script>
