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
            if (state.parameters.type === payload) {
                this.state.parameters.type = ''
            }else {
                state.parameters.type = payload;
            }

        },

        SET_DIAMETER(state, payload) {
            if (state.parameters.diameter === payload) {
                state.parameters.diameter = ''
            } else {
                state.parameters.diameter = payload;
            }
            }

    },
    actions: {}
});
