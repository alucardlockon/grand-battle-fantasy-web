<template>
  <div style="float: left;width: 25%">
      <mt-button :key="skill.id" v-for="skill in chara.skills" style="width: 100%;height: 30px;font-size: 12px" @click="handleSkillClick(skill)" :disabled="skill.cooldown<skill.maxCooldown">
          {{skill.name}}({{skill.cooldown.toFixed(1)}}/{{skill.maxCooldown.toFixed(1)}})
      </mt-button>
  </div>
</template>

<script>
export default {
  name: 'game-chara-skill-panel',
  props: {
    chara: {
      skills: []
    }
  },
  methods: {
    handleSkillClick: function (skill) {
      skill.cooldown = 0
      this.$emit('click', this.chara, skill)
    }
  },
  created () {
    setInterval(() => {
      this.chara.skills.forEach(it => {
        if (it.cooldown <= it.maxCooldown - 0.2) {
          it.cooldown += 0.2
        } else if (it.cooldown < it.maxCooldown) {
          it.cooldown = it.maxCooldown
        }
      })
    }, 200)
  }
}
</script>

<style scoped>

</style>
