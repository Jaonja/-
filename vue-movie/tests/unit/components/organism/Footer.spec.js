import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Footer from "@/components/organisms/Footer.vue";
let localVue = createLocalVue();
localVue.use(Vuex);
describe("Footer", () => {
  let getters;
  let store;
  beforeEach(() => {
    getters = {
      buttons: () => [
        {
          id: 1,
          text: "All",
          isChecked: true,
        },
      ],
      todosCompleted: () => [
        {
          id: 1,
          text: "Task 1",
          isChecked: false,
        },
      ],
      todosLength: () => [
        {
          id: 1,
          text: "Task 1",
          isChecked: false,
        },
      ],
    };
    store = new Vuex.Store({ getters });
  });
  test("footer test", () => {
    let wrapper = mount(Footer, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Footer)).toBeTruthy();
  });
});
