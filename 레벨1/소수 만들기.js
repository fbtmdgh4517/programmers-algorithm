function prime(num) {
    for (let a = 2; a < num; a++) {
        if (num % a === 0) {
            //받은 수가 a에 나누어떨어지면 소수가 아니기 때문에 false 반환
            return false;
        }
    }
    return true; //해당 사항 없으면 true 반환
}

function solution(nums) {
    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (prime(nums[i] + nums[j] + nums[k])) {
                    //3개의 숫자를 골라서 prime 함수에 전달
                    answer++; //true를 반환받으면 소수가 되는 경우의 개수 증가
                    // console.log(answer);                           //소수가 되는 경우의 개수
                    // console.log(nums[i], nums[j], nums[k], "num"); //소수를 만드는데 사용된 숫자 3개
                    // console.log(i, j, k, "index");                 //소수를 만드는데 사용된 숫자의 index값
                }
                // console.log(nums[i], nums[j], nums[k]); //소수를 만들지 못하는 숫자 3개
                // console.log(i, j, k); //소수를 만들지 못하는 숫자의 index값
            }
        }
    }
    return answer;
}
