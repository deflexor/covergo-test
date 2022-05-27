import { describe, it, expect } from "vitest";

import {
  formData,
  formFilled,
  computedPremium,
  computedExtra,
  cities,
  premiumPackages,
  resetForm,
} from "../../stores/form";

describe("form store", () => {
  it("checks if formFilled", async () => {
    resetForm();
    expect(formFilled.value).toBeFalsy();
    formData.name = "John";
    formData.age = 20;
    console.log;
    expect(formFilled.value).toBeTruthy();
  });
  it("computes premium", () => {
    resetForm();
    expect(computedPremium.value).toEqual("");
    formData.name = "John";
    formData.age = 20;
    expect(computedPremium.value).toEqual("200 HKD");
    formData.package = premiumPackages[1];
    expect(computedPremium.value).toEqual("300 HKD");
    formData.city = cities[2];
    expect(computedPremium.value).toEqual("900 AUD");
  });
  it("computes extra", () => {
    resetForm();
    expect(computedExtra.value).toEqual(0);
    formData.name = "John";
    formData.age = 50;
    expect(computedExtra.value).toEqual(0);
    formData.package = premiumPackages[1];
    expect(computedExtra.value).toEqual(250);
    formData.city = cities[2];
    expect(computedExtra.value).toEqual(750);
  });
});
