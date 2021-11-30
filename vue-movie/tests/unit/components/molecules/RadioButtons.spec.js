import Vuex from "vuex";
import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
import RadioButtons from "@/components/molecules/RadioButtons.vue";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("buttons", () => {
  let getters;
  let store;
  beforeEach(() => {
    getters = {
      buttons: jest.fn(),
    };
    store = new Vuex.Store({ getters });
  });
  test("buttons test", () => {
    let wrapper = mount(RadioButtons, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(RadioButtons)).toBeTruthy();
  });
});
