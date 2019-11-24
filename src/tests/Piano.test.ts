"use strict";
import { mount } from "@vue/test-utils";
import Piano from "../views/Piano.vue";

describe("Piano", () => {
  test("should render content correctly", () => {
    const wrapper = mount(Piano);
    expect(wrapper.find('[data-test="piano-div"]').length.toEqual(1));
  });
});
