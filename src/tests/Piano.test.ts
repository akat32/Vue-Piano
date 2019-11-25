"use strict";
import { shallowMount } from "@vue/test-utils";
import Piano from "src/views/Piano.vue";

describe("Piano", () => {
  test("should render content correctly", () => {
    const wrapper = shallowMount(Piano);
    // expect(wrapper.find('[data-test="piano-div"]').wrappers.length.toEqual(1));
    // expect(wrapper.contains("div")).toBe(true);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
