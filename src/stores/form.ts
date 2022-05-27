import { computed, reactive } from "vue"

export const cities = [
    { text: 'Hong Kong', currency: 'HKD', rate: 1 },
    { text: 'USA', currency: 'USD', rate: 2 },
    { text: 'Australia', currency: 'AUD', rate: 3 }
]

export const premiumPackages = [
    { name: "Standard", value: 0 },
    { name: "Safe", value: 50 },
    { name: "Super Safe", value: 75 }
]

const initialData = {
    name: '',
    age: null,
    city: cities[0],
    package: premiumPackages[0]
}

export const formData = reactive({ ...initialData  })

export function resetForm() {
    Object.assign(formData, initialData)
}

const isNumber = (val: any): boolean => typeof val === "number" && val === val;

export const formFilled = computed((): boolean => {
    return formData.name.length > 1 &&
        isNumber(formData.age) && formData.age > 0
})

const premium = computed((): number => {
    return 10 * formData.age * formData.city.rate
})

export const extraPremium = (packageValue: number): number => {
    return premium.value * packageValue / 100
}

export const computedExtra = computed((): number => {
    return extraPremium(formData.package.value) // premium.value * formData.package.value / 100
})

export const computedPremium = computed((): string => {
    return premium.value > 0 ? `${premium.value + computedExtra.value} ${formData.city.currency}` : ''
})


