<template>
 <div>
  enemyTeam:
  <div>
   <game-chara-status :key="chara.playerId" v-for="chara in enemyTeam" :chara="chara"></game-chara-status>
  </div>
  playerTeam:
  <div>
   <game-chara-status :key="chara.playerId" v-for="chara in playerTeam" :chara="chara"></game-chara-status>
  </div>
 </div>
</template>

<script>
import GameCharaStatus from '@/components/game-chara-status'
export default {
  name: 'battle',
  components: { GameCharaStatus },
  data () {
    return {
      enemyTeam: [
        {
          playerId: 1,
          level: 10,
          hp: 100,
          maxHp: 100
        },
        {
          playerId: 2,
          level: 10,
          hp: 100,
          maxHp: 100
        },
        {
          playerId: 3,
          level: 10,
          hp: 100,
          maxHp: 100
        },
        {
          playerId: 4,
          level: 10,
          hp: 100,
          maxHp: 100
        }
      ],
      playerTeam: [
        {
          playerId: 1,
          level: 10,
          hp: 100,
          maxHp: 100
        },
        {
          playerId: 2,
          level: 10,
          hp: 100,
          maxHp: 100
        },
        {
          playerId: 3,
          level: 10,
          hp: 100,
          maxHp: 100
        },
        {
          playerId: 4,
          level: 10,
          hp: 100,
          maxHp: 100
        }
      ]
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
