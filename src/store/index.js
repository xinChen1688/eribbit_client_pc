import {
  createStore
} from 'vuex'

const mouA = {
  // 模块有开启命名空间 A不开启命名空间
  state: {
    usname: 'moduleA'
  },
  getters: {
    newName(state) {
      return state.usnmae = '!AAAAAAAAAAAAAAAA!!!!!'
    }
  }
}



const mouB = {
  // 命名空间
  namespaced: true,
  state: {
    usname: 'moduleB'
  },
  getters: {
    newName(state) {
      return state.usnmae = '!BBBBBBBBBBBBB!!!!!'
    }
  },
  mutations: {
    updateName(state) {
      state.usname = 'AAA啊啊啊啊啊啊啊啊 啊啊'
    }
  },
  actions: {
    updateName(ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000);
    }
  }
}


export default createStore({
  modules: {
    mouA,
    mouB
  }

})