<template>
  <div>
    <!-- 使用A模块的state数据 -->
    <p>{{ $store.state.mouA.usname }} </p>
    <!-- getters -->
    <p>{{ $store.getters.newName }} </p>






    <!-- 使用B模块的state数据 -->
    <p>{{ $store.state.mouB.usname }} </p>
    <!-- getters -->
    <p>{{ $store.getters['mouB/newName'] }} </p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionsFn">actionsFn</button>

  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    const mutationsFn = () => {
      // 提交B模块的修改
      store.commit('mouB/updateName')
    }

    const actionsFn = () => {
      // 调用ACT
      store.dispatch('mouB/updateName')
    }
    return {
      mutationsFn, actionsFn
    }
  }
}
</script>