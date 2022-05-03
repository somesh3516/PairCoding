function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    else {
        for(let i=2;i<num;i++){
            if(num % i == 0) {
                return false;
            }
        }
    } return true
}

const numArr = [1,2,3,4,5,6,17,8,9,10]
const primeArr = [];

for (let num of numArr) {
    if (checkPrime(num)) {
        primeArr.push(num)
    }
}

console.log(primeArr)

// by Cameron with help from Somesh