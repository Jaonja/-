import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  state: {
    todosData: [
      {
        id: 1,
        textTask: "Задача номер 1",
        isChecked: true,
      },
      {
        id: 2,
        textTask: "Задача номер 2",
        isChecked: false,
      },
      {
        id: 3,
        textTask: "Задача номер 3",
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
  mutations: {
    delTask(state, id) {
      state.todosData.splice(id - 1);
      if (state.todosData.length === 0) {
        alert("Поздравляем вы выполнили все задачки");
      }
    },
    addTsk(state, textTask) {
      state.todosData.push({
        id: state.todosData.length,
        isChecked: false,
        textTask: textTask,
      });
      if ((state.todosData.length = state.todosData.length)) {
        alert("вы добляете " + state.todosData.length + " задачу");
      }
    },
  },
});
