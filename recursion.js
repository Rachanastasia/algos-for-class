//Counting Sheep
//O(N)
function countSheep(num) {

    if (num <= 0) {
        return 'All sheep jumped over the fence'
    }

    return 'Another sheep jumps over the fence' + countSheep(num - 1);

}


//Power Calculator
//O(N)
function powerCalculator(base, exp) {

    if (exp < 0) {
        return 'Exponent should be greater than 0'
    }

    if (exp === 0) {
        return 1;
    }

    return base * powerCalculator(base, exp - 1);

}

//Reverse String
//O(N)
function reverseString(str) {

    if (str === '') {
        return '';
    }

    const len = str.length;

    return str.slice(-1) + reverseString(str.slice(0, len - 1))

}


//Nth Triangular
//O(N)
function nthTriangular(num) {

    if (num === 1) {
        return 1
    }

    return num + nthTriangular(num - 1)
}


//String Splitter
function stringSplitter(str, sep) {

    if (!str.includes(sep)) {
        return [str];
    }
    let ix = str.indexOf(sep);

    return [str.slice(0, ix), ...stringSplitter(str.slice(ix + 1), sep)]
}

//Fibonacci
function fib(n) {

    if (n === 0) {
        return [1]
    } else if (n === 1) {
        return [1, 1];
    }

    const next = fib(n - 1);

    return [...next, next[n - 1] + next[n - 2]];

}

//Factorial
function factorial(n) {

    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}



//Find a way out of the maze
function solveMaze(maze, col = 0, row = 0, path = []) {


    if (maze[col][row] === ' ') {
        maze[col][row] = 'x';

        if (row === maze[col].length - 1) {
            path.push('D')
            return solveMaze(maze, col + 1, row, path)
        }

        if (col === maze.length - 1) {
            path.push('R')
            return solveMaze(maze, col, row + 1, path)
        }


        path.push('R')
        return solveMaze(maze, col, row + 1, path)
    }

    if (maze[col][row] === '*') {

        if (row < maze[col].length - 1) {
            path.push('D')
            return solveMaze(maze, col + 1, row - 1, path)
        }

        if (col < maze.length - 1) {
            path.push('L')
            solveMaze(maze, col - 1, row, path)
        }

    }

    if (maze[col][row] === 'e') {
        path.push('end')
        return path;
    }



    return path;

}
