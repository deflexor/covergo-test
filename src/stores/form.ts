import { computed, reactive } from "vue";

export const cities = [
  { text: "Hong Kong", currency: "HKD", rate: 1 },
  { text: "USA", currency: "USD", rate: 2 },
  { text: "Australia", currency: "AUD", rate: 3 },
];

export const premiumPackages = [
  { name: "Standard", value: 0 },
  { name: "Safe", value: 50 },
  { name: "Super Safe", value: 75 },
];

interface UserData {
  name: string;
  age?: number;
  city: { text: string; currency: string; rate: number };
  package: { name: string; value: number };
}

const initialData: UserData = {
  name: "",
  age: undefined,
  city: cities[0],
  package: premiumPackages[0],
};

export const formData: UserData = reactive({ ...initialData });

export function resetForm() {
  Object.assign(formData, initialData);
}

const isNumber = (val: any): boolean => typeof val === "number" && val === val;

export const formFilled = computed<boolean>(() => {
  return (
    formData.name.length > 1 &&
    isNumber(formData.age) &&
    (formData.age || 0) > 0
  );
});

export function setAge(
  e: { target: { value: any } },
  v = e.target.value
): void {
  formData.age = v === "" ? v : v >= 0 ? +v : Math.abs(+v);
}

const premium = computed<number>(() => {
  return 10 * (formData.age || 0) * formData.city.rate;
});

export const extraPremium = (packageValue: number): number => {
  return (premium.value * packageValue) / 100;
};

export const computedExtra = computed<number>(() => {
  return extraPremium(formData.package.value);
});

export const computedPremium = computed<string>(() => {
  return premium.value > 0
    ? `${premium.value + computedExtra.value} ${formData.city.currency}`
    : "";
});
