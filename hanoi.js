
'use strict';
const a = { name: 'a', discs: [] };
const b = { name: 'b', discs: [] };
const c = { name: 'c', discs: [] };
function newHanoi(num) {
    let counter = 0;
    for (let i = 0; i < num; i++) {
        a.discs.push(num - i);
        console.log(a.discs, b.discs, c.discs);
    }

    const solver = (disc, source, dest, aux) => {
        if (disc === 1) {
            makeMove(source, dest);
        } else {
            solver(disc - 1, source, aux, dest);
            makeMove(source, dest);
            solver(disc - 1, aux, dest, source);
        }
    };

    const makeMove = (source, target) => {
        counter++;
        console.log(`I will now move from ${source.name} to ${target.name}`);
        target.discs.push(source.discs.pop());
        console.log('Number of moves:', counter);
    };

    solver(num, a, c, b);
}


newHanoi(7);