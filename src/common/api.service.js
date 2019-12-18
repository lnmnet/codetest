import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
  },

  async get (resource, slug = '') {
    return await Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  }
}

export default ApiService;