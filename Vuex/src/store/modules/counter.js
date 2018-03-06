const state = {
    counter: 0,
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
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
    }
};

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}