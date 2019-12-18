import ApiService from "@/common/api.service"
import { FETCH_PETS } from "@/store/actions.type"
import { FETCH_START, FETCH_END } from "@/store/mutations.type"

const url = 'http://5c92dbfae7b1a00014078e61.mockapi.io/owners';

const state = {
  isLoading: true,
  pets: []
};

const actions = {
  async [FETCH_PETS] ({ commit }) {
    commit(FETCH_START);
    await ApiService.get(url).then(({ data }) => {
      commit(FETCH_END, data)
    })
  }
};

const getters = {
  isLoading (state) {
    return state.isLoading;
  },

  pets (state) {
    const pets = state.pets;
    let data = {};

    if (pets.length) {
      pets.map(pet => {
        if (pet.pets && pet.pets.length) {
          const gender = pet.gender;
          data[gender] = data[gender] || [];
          data[gender] = [...data[gender], ...pet.pets.filter(p => p.type === 'Cat')];
        }
      });
    }

    return data;
  }
};

const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true;
  },

  [FETCH_END] (state, data) {
    state.isLoading = false;
    state.pets = data;
  }
};

export default { state, actions, getters, mutations }