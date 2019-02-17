import {interval, timer} from 'rxjs';
import {map, switchMap, take} from "rxjs/operators";

const tick$ = timer(0, 1000).pipe(take(5), map((i) => `tick$ ${i}`));
const tack$ = interval(3000).pipe(take(5), map((i) => `tack$ ${i}`));

let count = 0;

const result$ = tick$.pipe(
    switchMap(() => tack$)
);

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


