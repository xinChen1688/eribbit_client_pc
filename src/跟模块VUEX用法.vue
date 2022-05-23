<template>
  <!-- vue 2.0需要根元素 vue 3 可以是代码片段 -->
  <div>
    哈哈
    <!-- 使用state的数据 -->
    <p>{{ $store.state.usname }} </p>
    <!-- 使用计算属性 -->
    <p>{{ $store.getters['newName'] }} </p>

    <button @click=""></button>
  </div>

</template>

<script>
// 拿到仓库实列
import { useStore } from 'vuex'

// import {} from 'vue-router'
export default {
  name: 'App',
  setup() {
    // 使用vuex仓库
    const store = useStore()

    // 使用state数据
    console.log(store.state.username);
    // 使用计算数据
    console.log(store.getters['newName']);
    // 使用方法mutations函数
    // store.commit('updateName')
    const mutationsFn = ()=>{
      store.commit('updateName')
    }
  }
}
</script>