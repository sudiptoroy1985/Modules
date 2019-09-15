export function checkedSubtract(num1, num2) {
    return num1 > num2
        ? num1 - num2
        : num2 - num1;
}

export function uncheckedSubtract(num1, num2) {
    return num1 - num2;
}

