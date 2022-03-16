import { createStore } from 'vuex';
import { joinList } from '@/pluging/utils';
interface State {
  MeunList: Array<unknown>
}
export default createStore<State>({
  state: {
    MeunList: [],
  },
  mutations: {
    setList(state, payload) {
      state.MeunList =  [...payload];
    },
  },
  actions: {
    allList(state, payload) {
      const list = JSON.parse(JSON.stringify(payload));
      state.commit('setList', joinList(list));
    },
  },
  modules: {

  },
  getters: {
    getList(state) {
      return state.MeunList;
    },
  },
});
