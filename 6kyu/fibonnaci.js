// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibo(n) {
    let fibo = [0, 1, 1, 2]
    if (n <= 3) {
        return fibo[n-1]
    } else if (n > 3) {
        for(let i = 3; i < n; i++){
            let last = fibo[fibo.length-1]
            let secondLast = fibo[fibo.length-2]
            let newNum = last + secondLast
            fibo.push(newNum)
        }
        return fibo[n-1]
    }
  }

  console.log(nthFibo(24))
  console.log(nthFibo(2))
  console.log(nthFibo(13))
  console.log(nthFibo(6))


//   BETTER VERSIONS FROM CODEWARS: 
// function nthFibo(n) {
//     let [prev, curr] = [0, 1];
//     for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
//     return prev;
//   }

function nthFibo(n) {
    return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
  }
