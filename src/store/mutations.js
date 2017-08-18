/**
 * Created by leibo on 17/8/18.
 */
import getters from './getters'

const state = {
  resulte:[]
}

const mutations = {
  setResulte(state,resulte){
    state.resulte = resulte;
  }
};
export default {
  getters,
  mutations,
  state
}
