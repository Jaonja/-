import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  mutations: {},
	state: {
		checkData: [
      {
        id: 1,
        textTask: "Task 1",
        isChecked: false,
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
	},
	getters: {},

	modules: {

	}


});
