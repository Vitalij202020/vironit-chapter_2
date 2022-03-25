function fibo (n) {
    const arr = []
    fibonacci(n)

    function fibonacci(n) {
        if(n == 0) {
            return [0, 1];
        } else {
            const [prev, next] = fibonacci(n - 1);
            arr.push(prev)
            return [next, prev + next];
        }
    }

    return arr
}

console.log(fibo(5))
console.log(fibo(9))
console.log(fibo(40))
