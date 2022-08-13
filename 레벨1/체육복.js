function solution(n, lost, reserve) {
    let lost2 = lost.filter((lostElement) => {
        return !reserve.includes(lostElement);
    });
    let reserve2 = reserve.filter((r) => {
        return !lost.includes(r);
    });
    let answer = n - lost2.length;

    lost2.sort((a, b) => {
        return a - b;
    });
    reserve2.sort((a, b) => {
        return a - b;
    });

    for (let i of reserve2) {
        if (lost2.includes(i - 1)) {
            lost2 = lost2.filter((lostElement) => {
                return lostElement !== i - 1;
            });
            answer++;
        } else if (lost2.includes(i + 1)) {
            lost2 = lost2.filter((lostElement) => {
                return lostElement !== i + 1;
            });
            answer++;
        }
    }

    return answer;
}
