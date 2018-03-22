import api from '../../api/admin/index';

const mutations = {
  updateCustomers: (state, payload) => {
    state.customers = payload;
    return state.customers;
  },

  loadTherapeuticClassesPending: (state) => {
    state.areTherapeuticClassesLoading = true;
  },

  loadTherapeuticClassesSuccess: (state, therapeuticClasses) => {
    state.therapeuticClasses = therapeuticClasses.reduce((acc, therapeuticClass) => {
      acc[therapeuticClass.id] = therapeuticClass;
      return acc;
    }, {});
    state.areTherapeuticClassesLoading = false;
    return state.therapeuticClasses;
  },

  updateTherapeuticClass: (state, payload) => {
    state.therapeuticClasses[payload.id] = {
      ...state.therapeuticClasses[payload.id],
      ...payload.payload,
    };
  },

  updateTherapeuticClassPending: (state, payload) => {
    state.therapeuticClasses[payload.id] = {
      ...state.therapeuticClasses[payload.id],
      isSaving: true,
    };
  },

  updateTherapeuticClassSuccess: (state, { id, updatedTherapeuticClass }) => {
    state.therapeuticClasses[id] = {
      ...state.therapeuticClasses[id],
      ...updatedTherapeuticClass,
      isSaving: false,
      failedToSaveError: null,
    };
  },

  updateTherapeuticClassFail: (state, { id, err }) => {
    state.therapeuticClasses[id] = {
      ...state.therapeuticClasses[id],
      isSaving: false,
      failedToSaveError: err,
    };
  },
};

const actions = {
  updateCustomers: (context, payload) => {
    context.commit('updateCustomers', payload);
  },
  fetchCustomers: (context) => {
    api.getCustomers().then((customers) => {
      context.commit('updateCustomers', customers);
    });
  },
  fetchTherapeuticClasses: ({ commit }) => {
    commit('loadTherapeuticClassesPending');

    api.getTherapeuticClasses().then((therapeuticClasses) => {
      commit('loadTherapeuticClassesSuccess', therapeuticClasses);
    });
  },
  updateTherapeuticClass: ({ commit }, payload) => {
    commit('updateTherapeuticClassPending', payload);

    return api
      .updateTherapeuticClass(payload.id, payload.fields)
      .then((updatedTherapeuticClass) => {
        commit('updateTherapeuticClassSuccess', { id: payload.id, updatedTherapeuticClass });
      })
      .catch((err) => {
        commit('updateTherapeuticClassFail', { id: payload.id, err });
      });
  },
};

const getters = {
  getCustomers: state => state.customers,
  getTherapeuticClasses: ({ therapeuticClasses }) =>
    Object.keys(therapeuticClasses).map(id => therapeuticClasses[id]),
  areTherapeuticClassesLoading: ({ areTherapeuticClassesLoading }) => areTherapeuticClassesLoading,
};

const state = {
  customers: [],
  therapeuticClasses: {},
  areTherapeuticClassesLoading: false,
  therapeuticClassSaveState: {},
};

export default {
  state,
  mutations,
  actions,
  getters,
};
