<template>
    <div>
        <slot></slot>
        <input v-show="false" :value="value">
        <span v-if="showMessage">{{message}}</span>
    </div>
</template>

<script>
export default {
  name: 'valid-form-item',
  props: {
    filed: '',
    type: '',
    filedName: String,
    value: '',
    showMessage: Boolean
  },
  data () {
    return {
      message: ''
    }
  },
  watch: {
    filed: function () {
      const types = this.$_.isArray(this.type) ? this.type : [this.type]
      for (const type of types) {
        if (type === 'notEmpty' && (!this.filed || this.filed === '')) {
          this.message = '请输入' + this.filedName
          this.$emit('input', 'error')
          break
        } else if (type === 'number' && !/\d+/.test(this.filed)) {
          this.message = this.filedName + '需要为数字'
          this.value = 'error'
          break
        } else {
          this.message = ''
          this.$emit('input', 'success')
        }
      }
    }
  }
}
</script>

<style scoped>
    span {
        color:red
    }
</style>
