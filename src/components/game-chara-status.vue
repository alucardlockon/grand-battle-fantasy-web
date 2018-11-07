<template>
    <div style="width: 50%;float: left">
        <div>
            level: {{chara.level}}
        </div>
        <div>
            hp: {{chara.hp}} / {{chara.maxHp}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'game-chara-status',
  props: {
    chara: {
      hp: 100,
      maxHp: 100
    }
  }
}
</script>

<style scoped>

</style>
