import Vue from 'vue'
import VueX from 'vuex'
import todos from './todos'
import doctors from './doctors'

Vue.use(VueX)

export default new VueX.Store({
  state: {
    counter:2,
    
    
    patients:[]
  },
  modules: {
    todos,
    doctors
  }

})