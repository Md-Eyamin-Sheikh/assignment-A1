# Assignment A1

A collection of JavaScript helper functions for basic value checks, day classification, username validation, CNG fare calculation, and cricket chase estimates.

## Requirements

- Node.js

## Functions

- `describeValue(value)` returns the JavaScript type and truthiness of a value, such as `number | truthy`.
- `getDayType(day)` returns `Weekend`, `Working Day`, or `Invalid Day`. Day names are matched without regard to case.
- `validateUsername(username)` checks the minimum length, spaces, and the reserved word `admin`.
- `getCngFare(distance, isNight = false, waitingMinutes = 0)` calculates the fare using a base fare of 50, a distance charge after 2 km, a waiting charge, and an optional 20% night increase.
- `getChaseVerdict(target, scored, ballsLeft)` reports whether the chase is won or lost, or gives the runs needed and a required-rate verdict.

## Try the functions

The file currently contains function definitions only; it does not print output when run or export functions as a module. To try them, add calls after the definitions in `answer.js`, for example:

```js
console.log(describeValue(42));
console.log(getDayType("Friday"));
console.log(validateUsername("cricketFan"));
console.log(getCngFare(5, true, 3));
console.log(getChaseVerdict(180, 120, 30));
```

Run the file with:

```sh
node answer.js
```

To check its syntax without running it:

```sh
node --check answer.js
```