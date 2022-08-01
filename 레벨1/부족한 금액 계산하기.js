function solution(price, money, count) {
    let requirePrice = 0;

    for (let i = 1; i <= count; i++) {
        requirePrice += price * i;
    }

    if (requirePrice > money) {
        return requirePrice - money;
    } else {
        return 0;
    }
}
