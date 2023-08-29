const validations = {
    email: '.*[@].*..*',
    password: '^.*(?=.{8,})(?=.*\\d)(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^`~!+\\-,.!]).*$',
    name: '^[^`~!+,:!@#$%^&*();/|<>"0-9=[\\]{}_☺]{1,255}$',
    phoneNumber: '^.[-10-9]*[^a-zA-Z]*[0-9,\\-]+$',
    city: '^[^0-9]+$',
    zip: '^[A-Za-z0-9-]*$',
    department: '[a-zA-Z]',
    floridaLicense: '^([Dd][hH|nN]|[Hh][Aa][Dd])[1-9][0-9]{3,4}$',
    louisianaLicense: '^[1-9][0-9]{2,3}$',
    southCarolinaLicense: '^[1-9][0-9]{3,5}$',
    tennesseeLicense: '^[1-9][0-9]{3,4}$',
};

export const emailValidator = (email: string) => !(email && new RegExp(validations.email).test(email));
export const passwordValidator = (password: string) => !(password && new RegExp(validations.password).test(password));
export const nameValidator = (name: string) => !(name && new RegExp(validations.name).test(name));
export const phoneNumberValidator = (phoneNumber: string) =>
    !(phoneNumber && new RegExp(validations.phoneNumber).test(phoneNumber));
export const cityValidator = (city: string) => !(city && new RegExp(validations.city).test(city));
export const zipValidator = (zip: string) => !(zip && new RegExp(validations.zip).test(zip));
export const departmentValidator = (department: string) =>
    !(department && new RegExp(validations.department).test(department));
export const addressValidator = (address: any) => !address;
