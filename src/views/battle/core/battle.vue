<template>
 <div>
  enemyTeam:
  <div style="width: 100%;height: 100px">
   <game-chara-status :key="chara.playerId" v-for="chara in enemyTeam" :chara="chara" @click="selectTarget"></game-chara-status>
  </div>
  infos:
  <div style="width: 100%;height: 60px;overflow-y: auto">
   <log-viewer :logs="logs" />
  </div>
  actions:
  <div style="width: 100%;height: 125px">
   <game-chara-skill-panel :key="chara.playerId" v-for="chara in playerTeam" :chara="chara" @click="handleSkillClick"></game-chara-skill-panel>
  </div>
  playerTeam:
  <div style="width: 100%;height: 100px">
   <game-chara-status :key="chara.playerId" v-for="chara in playerTeam" :chara="chara"></game-chara-status>
  </div>
 </div>
</template>

<script>
import GameCharaStatus from '@/components/game-chara-status'
import GameCharaSkillPanel from '@/components/game-chara-skill-panel'
import LogViewer from '@/components/log-viewer'
export default {
  name: 'battle',
  components: { LogViewer, GameCharaSkillPanel, GameCharaStatus },
  data () {
    return {
      logs: [],
      targetPlayerId: null,
      enemyTeam: [
        {
          playerId: 1,
          name: 'enemy1',
          level: 10,
          hp: 100,
          maxHp: 100
        },
        {
          playerId: 2,
          name: 'enemy2',
          level: 10,
          hp: 100,
          maxHp: 100
        },
        {
          playerId: 3,
          name: 'enemy3',
          level: 10,
          hp: 100,
          maxHp: 100
        },
        {
          playerId: 4,
          name: 'enemy4',
          level: 10,
          hp: 100,
          maxHp: 100
        }
      ],
      playerTeam: [
        {
          playerId: 1,
          name: 'player1',
          level: 10,
          hp: 100,
          maxHp: 100,
          skills: [
            {
              id: 1,
              name: 'fire',
              rate: 2.0,
              cooldown: 5.0,
              maxCooldown: 5.0
            },
            {
              id: 2,
              name: 'ice',
              rate: 3.0,
              cooldown: 12.0,
              maxCooldown: 12.0
            },
            {
              id: 3,
              name: 'death',
              rate: 2.0,
              cooldown: 7.0,
              maxCooldown: 7.0
            },
            {
              id: 4,
              name: 'speed up',
              rate: 1.5,
              cooldown: 4.0,
              maxCooldown: 4.0
            }
          ]
        },
        {
          playerId: 2,
          name: 'player2',
          level: 10,
          hp: 100,
          maxHp: 100,
          skills: [
            {
              id: 1,
              name: 'fire',
              rate: 2.0,
              cooldown: 4.0,
              maxCooldown: 4.0
            },
            {
              id: 2,
              name: 'ice',
              rate: 3.0,
              cooldown: 7.0,
              maxCooldown: 7.0
            },
            {
              id: 3,
              name: 'death',
              rate: 2.0,
              cooldown: 10.0,
              maxCooldown: 10.0
            }
          ]
        },
        {
          playerId: 3,
          name: 'player3',
          level: 10,
          hp: 100,
          maxHp: 100,
          skills: [
            {
              id: 1,
              name: 'fire',
              rate: 2.5,
              cooldown: 10.0,
              maxCooldown: 10.0
            }
          ]
        },
        {
          playerId: 4,
          name: 'player4',
          level: 10,
          hp: 100,
          maxHp: 100,
          skills: [
            {
              id: 3,
              name: 'death',
              rate: 2.0,
              cooldown: 7.5,
              maxCooldown: 7.5
            },
            {
              id: 4,
              name: 'speed up',
              rate: 1.5,
              cooldown: 7.0,
              maxCooldown: 7.0
            }
          ]
        }
      ]
    }
  },
  created () {
    this.log('system', '开始')
  },
  methods: {
    log: function (sender, message) {
      this.logs.push({ id: this.logs.length + 1, message: message, sender: sender })
    },
    handleSkillClick: function (chara, skill) {
      const damage = skill.rate
      const target = this.$_.find(this.enemyTeam, { playerId: this.targetPlayerId })
      target.hp = Math.round(target.hp - damage)
      this.$_.cloneDeep(this.enemyTeam)
      this.log(chara.name, chara.name + '的' + skill.name + '发动,对' + target.name + '造成' + damage + '点伤害')
    },
    selectTarget: function (chara) {
      this.$_.forEach(this.enemyTeam, x => { x.selected = false })
      chara.selected = true
      this.targetPlayerId = chara.playerId
      this.enemyTeam = this.$_.cloneDeep(this.enemyTeam)
    }
  }
}
</script>

<style scoped>

</style>
