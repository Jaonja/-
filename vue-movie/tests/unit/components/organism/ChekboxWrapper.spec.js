import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import ChekboxWrapper from "@/components/organisms/ChekboxWrapper";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("ChekboxWrapper", () => {
  let mutations;
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      taskState: () => [
        {
          id: 1,
          text: "All",
          isChecked: true,
        },
      ],
    };
    mutations = {
      addTsk: jest.fn(),
    };
    store = new Vuex.Store({ getters });
    store = new Vuex.Store({ mutations });
  });

  test("content present", () => {
    let wrapper = mount(ChekboxWrapper, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(ChekboxWrapper)).toBeTruthy();
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
