import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);

    Vue.axios.interceptors.response.use (
      response => response,
      error => {
        // temporary blocking error
        if (error.resource) {
          console.log('ERROR:: ', error.resource.status);
        }
        return Promise.reject(error.response.data);
      }
    )
  },

  async get (resource, slug = '') {
    return await Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  }
}

export default ApiService;