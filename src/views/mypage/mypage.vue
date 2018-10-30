<template>
    <div>
        <h4>我的</h4>
        <mt-field label="用户名" v-model="account.username" disabled></mt-field>
        <mt-field label="邮箱" v-model="account.email" disabled></mt-field>
        <mt-button style="width: 100%" type="primary">设定</mt-button>
        <space></space>
        <mt-button style="width: 100%" type="danger" @click="hanldeLogout">登出</mt-button>
    </div>
</template>

<script>
import Space from '@/components/space'
export default {
  name: 'mypage',
  components: { Space },
  data () {
    return {
      account: {
        username: '',
        email: ''
      }
    }
  },
  async created () {
    const res = await this.$request.get('/account/self')
    if (res.data) {
      this.account = res.data.data
    }
  },
  methods: {
    hanldeLogout: function () {
      localStorage.clear()
      this.$router.push('/account/login')
    }
  }
}
</script>

<style scoped>

</style>
