import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        msg: 'Hello from Vuex',
        count: 0,
        parameters: {
            type: '',
            diameter: ''
        }
    },
    getters: {
        TYPE_GET(state){
            return state.parameters.type;
        },
        DIAMETER_GET(state){
            return state.parameters.diameter;
        },
       PARAMETERS_GET(state) {
            return state.parameters//let p = state.parameters;

/*       for (let i in state.parameters) {
                return i
            }*/
        }
    },
    mutations: {
        SET_TYPE(state, payload) {
            state.parameters.type = payload;
        },

        SET_DIAMETER(state, payload) {
            state.parameters.diameter = payload;
        }
    },
    actions: {}
});
