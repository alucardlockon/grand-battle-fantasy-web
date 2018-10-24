<template>
  <div>
    <!--<mt-header fixed title="Grand Battle Fantasy"></mt-header>-->
    <h3>Grand Battle Fantasy</h3>
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
    <mt-button
            type="primary">
      选择操作
    </mt-button>
    <mt-tabbar>
      <mt-tab-item id="首页">
        首页
      </mt-tab-item>
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
export default {
  name: 'home'
}
</script>
