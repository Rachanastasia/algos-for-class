//Counting Sheep
//O(N)
function countSheep(num) {
    for (let i = 0; i <= num; i++) {
        return 'Another sheep jumps over the fence'
    }
    return 'All sheep jumped over the fence'

}


//Power Calculator
//O(N)
function powerCalculator(base, exp) {
    let num = 1;
    if (exp < 0) {
        return 'Exponent should be greater than 0'
    }

    for (let i = 1; i <= exp; i++) {
        num *= base;
    }
    return num
}

//Reverse String
//O(N)
function reverseString(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    return newStr;
}


//Nth Triangular
//O(1)
function nthTriangular(num) {
    return (num * (num + 1) / 2)
}

//String Splitter
//O(N)
function stringSplitter(str, sep) {
    let words = []
    let num = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == sep) {
            words.push(str.slice(num, i));
            num = i + 1
        }
    }
    words.push(str.slice(num));
    return words;
}

stringSplitter('hello.this.is.a.string', '.')


//Fibonacci
//O(N)
function fib(n) {

    let arr = [];

    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            arr.push(0)
        } else if (i === 1) {
            arr.push(1)
        } else {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }
    }

    return arr;

}

fib(9)

//Factorial
//O(N)
function factorial(n) {
    let num = 1;


    for (let i = 0; i <= n; i++) {
        console.log(num, i)
        num = num * (n - i);
    }
    return num;
}

