<template>
    <div :style="'height:'+height+'px'"></div>
</template>

<script>
export default {
  name: 'space',
  props: {
    height: {
      default: 2
    }
  }
}
</script>

<style scoped>

</style>
