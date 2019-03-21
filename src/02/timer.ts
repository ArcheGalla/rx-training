import {of, timer} from 'rxjs';
import {filter, mergeMap, take, tap} from "rxjs/operators";


const stream$ = timer(1, 1000);

const start$ = of(0,1, 2);
// concurrent pulling mechanism
start$.pipe(
    mergeMap(() => {
        return stream$.pipe(
            tap((e) => {
                console.log(`e`, e);
            }),
            filter((e) => e === 5),
            take(1)
        )
    }, 3)
).subscribe({
    next(e) {
        console.log(`next`, e);
    },
    complete() {
        console.log(`complete`);
    },
    error(err) {
        console.log(`err`, err);
    }
});
