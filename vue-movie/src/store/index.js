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
      return state.todosData.length;
    },
    todosCompleted(state) {
      return state.todosData.filter((todo) => todo.isChecked).length;
    },

    taskState(state) {
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
      state.todosData = state.todosData.filter((task) => task.id != id);
    },
    addTsk(state, textTask) {
      state.todosData.push({
        id: state.todosData.length + 2,
        textTask: textTask,
        isChecked: false,
      });
    },
    CheckBoxNext(state, id) {
      state.todosData = state.todosData.map((i) =>
        i.id === id ? { ...i, isChecked: !i.isChecked } : i
      );
    },
    changeBtn(state, text) {
      state.type = text;
      state.radioData.map((i) =>
        i.text === text ? { ...i, isChecked: !i.isChecked } : i
      );
    },
  },
});
