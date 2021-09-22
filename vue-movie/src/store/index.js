import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  state: {
    todosData: [
      {
        id: 1,
        textTask: "Task 1",
        isChecked: true,
      },
      {
        id: 2,
        textTask: "Task 2",
        isChecked: false,
      },
      {
        id: 3,
        textTask: "Task 3",
        isChecked: false,
      },
    ],
    radioData: [
      {
        id: 1,
        text: "All",
        isChecked: true,
      },
      {
        id: 2,
        text: "Active",
        isChecked: false,
      },
      {
        id: 3,
        text: "Complete",
        isChecked: false,
      },
    ],
    type: "All",
  },
  getters: {
    buttons(state) {
      return state.radioData;
    },
    todosLength(state) {
      return state.radioData.length;
    },
    todosCompleted(state) {
      return state.todosData.filter((todo) => todo.isChecked).length;
    },

    ckeckBoxs(state) {
      switch (state.type) {
        case "Active":
          return state.todosData.filter((todo) => !todo.isChecked);
        case "Complete":
          return state.todosData.filter((todo) => todo.isChecked);
        default:
          return state.todosData;
      }
    },
  },
  mutations: {},
});
