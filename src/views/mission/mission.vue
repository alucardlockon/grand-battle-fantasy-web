<template>
    <div>
        <h4>任务</h4>
        <mt-button style="width: 100%" type="primary" @click="handleMissionClick()">测试任务</mt-button>
    </div>
</template>

<script>
export default {
  name: 'mission',
  methods: {
    handleMissionClick: function () {
      this.$router.push('/battle/battle')
    }
  }
}
</script>

<style scoped>

</style>
