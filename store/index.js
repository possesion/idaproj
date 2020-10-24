import { getVehicles } from '../assets/API/request.js'

const state = () => ({
    vehicles: [],
    isLoaded: false
});

const mutations = {
    SET_VEHICLES: (state, payload) => {
        state.vehicles = payload;
        state.isLoaded = true;
    }
};

const actions = {
    getAllVehicles: ({ commit }) => {
        getVehicles().then(response => commit('SET_VEHICLES', response))
    }
};

const getters = {
    TYPE: state => {
        return state.vehicles.type
    },
};

export default {
    state,
    actions,
    getters,
    mutations
};
