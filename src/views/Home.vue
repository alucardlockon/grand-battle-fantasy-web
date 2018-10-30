<template>
  <div>
    <!--<mt-header fixed title="Grand Battle Fantasy"></mt-header>-->
    <h3>Grand Battle Fantasy</h3>
    <mt-tab-container v-model="tabActive">
      <!--<mt-tab-container-item id="首页">
        <index></index>
      </mt-tab-container-item>-->
      <mt-tab-container-item id="任务">
        <mission></mission>
      </mt-tab-container-item>
      <mt-tab-container-item id="编队">
        <teamedit></teamedit>
      </mt-tab-container-item>
      <mt-tab-container-item id="召唤">
        <gacha></gacha>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mypage></mypage>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="tabActive">
      <!--<mt-tab-item id="首页">
        首页
      </mt-tab-item>-->
      <mt-tab-item id="任务">
        任务
      </mt-tab-item>
      <mt-tab-item id="编队">
        编队
      </mt-tab-item>
      <mt-tab-item id="召唤">
        召唤
      </mt-tab-item>
      <mt-tab-item id="我的">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Index from '@/views/index/index'
import Mission from '@/views/mission/mission'
import Teamedit from '@/views/teamedit/teamedit'
import Gacha from '@/views/gacha/gacha'
import Mypage from '@/views/mypage/mypage'
export default {
  name: 'home',
  components: { Mypage, Gacha, Teamedit, Mission, Index },
  data () {
    return {
      tabActive: '任务'
    }
  }
}
</script>
