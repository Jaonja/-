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
        isChecked: false,
      },
      {
        id: 2,
        text: "Active",
        isChecked: true,
      },
      {
        id: 3,
        text: "Complete",
        isChecked: false,
      },
    ],
  },
  getters: {
    buttons(state) {
      return state.radioData;
    },

    ckeckBoxs(state) {
      return state.todosData;
    },
    todosLength(state) {
      return state.radioData.length;
    },
    completedTaskCount(state) {
      return state.todosData.filter((todo) => todo.isChecked).length;
    },
  },
  mutations: {},
});
