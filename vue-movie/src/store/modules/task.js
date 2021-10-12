import { v4 as uuidv4 } from "uuid";

export default {
  actions: {
    storage(context) {
      context.commit("storage");
    },
  },
  state: {
    todosData: new Array(),
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
      localStorage.setItem("todosData", JSON.stringify(state.todosData));
    },
    addTsk(state, textTask) {
      state.todosData.push({
        id: uuidv4(),
        textTask: textTask,
        isChecked: false,
      });
      localStorage.setItem("todosData", JSON.stringify(state.todosData));
    },
    CheckBoxNext(state, id) {
      state.todosData = state.todosData.map((i) =>
        i.id === id ? { ...i, isChecked: !i.isChecked } : i
      );
      localStorage.setItem("todosData", JSON.stringify(state.todosData));
    },
    changeBtn(state, text) {
      state.type = text;
      state.radioData.map((i) =>
        i.text === text ? { ...i, isChecked: !i.isChecked } : i
      );
    },
    storage(state) {
      state.todosData =
        JSON.parse(localStorage.getItem("todosData")) || new Array();
    },
  },
};
