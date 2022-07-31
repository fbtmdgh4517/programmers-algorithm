function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer += absolutes[i];
        } else {
            absolutes[i] = 0 - absolutes[i];
            answer += absolutes[i];
        }
    }
    return answer;
}
