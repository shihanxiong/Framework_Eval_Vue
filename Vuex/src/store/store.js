import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        increment: (context, payload) => {
            context.commit('increment', payload);
        },
        decrement: context => {
            context.commit('decrement');
        },
        asyncIncrement: context => {
            setTimeout(() => {
                context.commit('increment');
            }, 1000);
        },
        asyncDecrement: (context, payload) => {
            setTimeout(() => {
                context.commit('decrement', payload.by);
            }, payload.duration);
        },
        updateValue: (context, payload) => {
            context.commit('updateValue', payload);
        }
    }
});