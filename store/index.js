import { getVehicles } from '../assets/API/request.js'

const state = () => ({
    vehicles: [],
    isLoaded: false,
    currentFilter: '',
    currentVehicle: {}
});

const mutations = {
    SET_VEHICLES: (state, payload) => {
        state.vehicles = payload;
        state.isLoaded = true;
    },
    SET_LOADED: (state) => {
        state.isLoaded = true;
    },
    SET_FILTER: (state, payload) => {
        console.log(payload)
        return state.currentFilter = payload;
    },
    SET_CURRENT_VEHICLE: (state, id) => {
        return state.currentVehicle = state.vehicles.find(vehicle => vehicle.id === id);
    },
    FILTER_VEHICLES: (state, filter = '') => {
        return state.vehicles.filter(vehicle => vehicle.type === filter);
    }
};

const actions = {
    getAllVehicles: ({ commit }) => {
        getVehicles().then(response => commit('SET_VEHICLES', response))
    },
    reloadFetch: ({ commit }) => {

        getVehicles().then(response => {
            if (response.length !== 0) {
                commit('SET_VEHICLES', response)
            }
            return getVehicles();
        })
    },
    // setCurrentFilter: ({ commit }, val) => {
    //     commit('SET_FILTER', val)
    // }
};

const getters = {
    // vehicleById: state => id => {
    //     return state.vehicles.find(vehicle => vehicle.id === id)
    // }
};

export default {
    state,
    actions,
    getters,
    mutations
};
