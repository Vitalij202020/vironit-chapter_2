function fibonacci(n) {
    if (n <= 2) {
        return n
    }
    let temp = fibonacci(n - 1) + fibonacci(n - 2)
    return temp
}

console.log(fibonacci(13))

// function fib(n) {
//     let cur = 1, prev = 1;
//     for (let i = 3; i <= n; i++) {
//         [cur, prev] = [cur + prev, cur];
//     }
//     return cur;
// }
//
// console.log(fib(10))
//
function fib2(n) {
    if(n == 0){
        return [0, 1];
    }else{
        const [prev, next] = fib2(n - 1);
        return [next, prev + next];
    }
}

console.log(fib2(13))