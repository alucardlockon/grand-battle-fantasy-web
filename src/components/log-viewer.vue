<template>
  <div style="text-align: left">
    <log-item :log="log" v-for="log in logsRev" :key="log.id"></log-item>
  </div>
</template>

<script>
import LogItem from '@/components/log-item'
export default {
  name: 'log-viewer',
  components: { LogItem },
  props: {
    logs: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  computed: {
    logsRev () {
      return this.logs.slice(0).reverse()
    }
  }
}
</script>

<style scoped>

</style>
