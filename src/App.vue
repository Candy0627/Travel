<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的路由内容 vue自带的标签-keep-alive做了缓存，避免多次请求数据 -->
    <keep-alive exclude="Detail">
    	<router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
</style>
