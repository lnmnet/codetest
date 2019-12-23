import Vue from "vue"
import Vuex from "vuex"

import pet from "@/store/modules/pet"
import weather from "@/store/modules/weather"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { pet, weather }
})