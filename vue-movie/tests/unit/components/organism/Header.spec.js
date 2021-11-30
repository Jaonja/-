import { mount } from "@vue/test-utils";
import Header from "@/components/organisms/Header.vue";
describe("test for TodoComponent", () => {
  const wrapper = mount(Header);
  test("render a div ", () => {
    expect(wrapper.find("div")).toBeTruthy();
  });
  test("div must be visible", () => {
    expect(wrapper.isVisible()).toBe(true);
  });
});
