import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Wizard from "../Wizard.vue";

describe("Wizard", () => {
  it("renders properly", () => {
    const wrapper = mount(Wizard);
    expect(wrapper.text()).toContain("Hello there");
    expect(wrapper.text()).toContain("Start");
  });
});
