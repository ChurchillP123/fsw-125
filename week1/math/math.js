const add = (...args) => {
    return args.reduce((a, b) => a + b);
}
    
const subtract = (...args) => {
    return args.reduce((a, b) => a - b);
}

const multiply = (...args) => {
    return args.reduce((a, b) => a * b);
}

const divide = (...args) => {
    return args.reduce((a, b) => a / b);
}

module.exports = {add, subtract, multiply, divide};