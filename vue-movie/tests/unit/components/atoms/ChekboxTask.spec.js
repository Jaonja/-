import Vuex from "Vuex";
import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import ChekboxTask from "@/components/atoms/ChekboxTask.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ChekboxTask", () => {
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      delTask: jest.fn(),
      CheckBoxNext: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  test("", () => {
    let wrapper = mount(ChekboxTask, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(ChekboxTask)).toBeTruthy();
  });

  test("", () => {
    let wrapper = mount(ChekboxTask, { store, localVue });
    wrapper.findAll("div").at(1).trigger("click");
    expect(mutations.delTask).toHaveBeenCalled();
  });
});
