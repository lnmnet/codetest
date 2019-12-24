import { FETCH_CITY, FETCH_WEATHER } from "@/store/actions.type"
import { FETCH_START, FETCH_END } from "@/store/mutations.type"
import ApiService from "@/common/api.service"

const uri = 'http://115.28.131.190:8080/weather-api';

const state = {
  city: [],
  weather: {},
  isLoading: true,
}

const actions = {
  async [FETCH_CITY] ({ commit }) {
    commit(FETCH_START);
    await ApiService.get(`${uri}/city`).then(({ data }) => {
      commit(FETCH_END, { data, key: 'city' });
    })
  },

  async [FETCH_WEATHER] ({ commit }, city) {
    commit(FETCH_START);
    await ApiService.get(`${uri}/weather/${city}`).then(({ data }) => {
      commit(FETCH_END, { data, key: 'weather' });
    })
  }
}

const getters = {
  city (state) { return state.city },
  weather (state) { return state.weather }
}

const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true;
  },

  [FETCH_END] (state, { data, key }) {
    state.isLoading = false;
    state[key] = data;
  }
}

export default { state, actions, getters, mutations }
