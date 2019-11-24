// "use strict";
import { mount } from "@vue/test-utils";
import Piano from "src/views/Piano.vue";
import octave from "../views/octave.vue";

describe("Piano", () => {
  test("should render content correctly", () => {
    const wrapper = mount(Piano);
    // expect(wrapper.find('[data-test="piano-div"]').wrappers.length.toEqual(1));
    expect(wrapper.contains("div")).toBe(true);
  });
});
