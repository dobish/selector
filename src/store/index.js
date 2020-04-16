import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        msg: 'Hello from Vuex',
        count: 0,
        parameters: {
            type: '',
            diameter: '',
            thread: '',
            delay: '',
            tag:''
        }
    },
    getters: {
        TYPE_GET(state){
            return state.parameters.type;
        },
        DIAMETER_GET(state){
            return state.parameters.diameter;
        },
        DELAY_GET(state){
            return state.parameters.delay;
        },
        THREAD_GET(state){
            return state.parameters.thread;
        },
        TAG_GET(state){
            //return state.parameters.tag.join(' ');  //Filtering with an array
            return state.parameters.tag;
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
            },

        SET_DELAY(state, payload) {
            if (state.parameters.delay === payload) {
                state.parameters.delay = ''
            } else {
                state.parameters.delay = payload;
            }
        },

        SET_THREAD(state, payload) {
            if (state.parameters.thread === payload) {
                state.parameters.thread = ''
            } else {
                state.parameters.thread = payload;
            }
        },

        SET_TAG(state, payload) {
            //state.parameters.tag.push(payload); //Search with an array
            state.parameters.tag = payload;
        }

    },
    actions: {}
});
