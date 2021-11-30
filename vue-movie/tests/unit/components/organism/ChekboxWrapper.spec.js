import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import ChekboxWrapper from "@/components/organisms/ChekboxWrapper";
let localVue = createLocalVue();
localVue.use(Vuex);
describe("ChekboxWrapper", () => {
  let mutations;
  let getters;
  let actions;
  let store;
  beforeEach(() => {
    getters = {
      taskState: jest.fn(),
    };
    mutations = {
      addTsk: jest.fn(),
    };
    actions = {
      storage: jest.fn(),
    };
    store = new Vuex.Store({ getters, mutations, actions });
  });
  test("content present", () => {
    let wrapper = mount(ChekboxWrapper, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(getters.taskState).toBeTruthy();
  });
  test("storage", () => {
    const wrapper = mount(ChekboxWrapper, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(actions.storage).toHaveBeenCalled();
  });
  describe("new task component - mutations", () => {
    test("add todo to list", () => {
      const wrapper = mount(ChekboxWrapper, { store, localVue });
      expect(wrapper.vm).toBeTruthy();
      const inputTask = wrapper.find("input");
      inputTask.trigger("submit.prevent");
      inputTask.trigger("keypress.enter");
      expect(mutations.addTsk).toBeTruthy();
    });
  });
});
