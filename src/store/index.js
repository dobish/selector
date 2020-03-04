import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        type: '',
        diameter: '',
        msg: 'Hello from Vuex',
        count: 0
    },
    getters: {
        TYPE_GET(state){
            return state.type;
        },
        DIAMETER_GET(state){
            return state.diameter;
        },
    },
    mutations: {
        SET_TYPE(state, payload) {
            state.type = payload;
        },

        SET_DIAMETER(state, payload) {
            state.diameter = payload;
        }
    },
    actions: {}
});
