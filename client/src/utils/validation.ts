/*
RULES

fname > 3 characters
lname > 3 characters

email
password > 8 characters, must be strong

*/

type Values = {
    fname: string;
    lname: string;
    email: string;
    password: string;

}

export const isEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
}

export const isFname = (fname: string) => {
    return fname.trim().length > 3;
}

export const isLname = (lname: string) => {
    return lname.trim().length > 3;
}

export const allEmpty = (values: Values) => {
    return values.fname.trim() === '' && values.lname.trim() === '' && values.email.trim() === '' && values.password.trim() === '';
}

export const isPassword = (password: string) => {
    return password.length >= 8;
}

export const validateValues = (values: Values) => {
    return isFname(values.fname) && isLname(values.lname) && isEmail(values.email) && isPassword(values.password)
}