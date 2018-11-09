<template>
 <div style="font-size: 12px">
  [{{log.sender}}] {{log.message}}
 </div>
</template>

<script>
export default {
  name: 'log-item',
  props: {
    log: {}
  }
}
</script>

<style scoped>

</style>
