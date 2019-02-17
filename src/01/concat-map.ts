import {from, of} from 'rxjs';
import {concatMap} from "rxjs/operators";

const tick$ = from([1, 2, 3, 4, 5, 6, 7]);
const tack$ = of(['a', 'b', 'c', 'd', 'e', 'f', 'j']);

let count = 0;

const result$ = tick$.pipe(concatMap(() => tack$));

result$.subscribe(
    function (message) {
        console.log(`Count ${++count}`, message);
    },
    function () {
        console.log(`Error`);
    },
    function () {
        console.log('Complete');
    }
);
