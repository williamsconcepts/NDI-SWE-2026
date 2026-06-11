

/**
 * promise.all() static method takes an iterable of promises as input and returns a single promise. this returned promise fulfills when ll of the inputs promises fulfill.
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values)
});

const p = Promise.all([1, 2, 3]);
const p2 = Promise.all([1,2,3, Promise.resolve(444)]);
const p3 = Promise.all([1,2,3, Promise.resolve(("Good"))]);

setTimeout(() => {
    console.log(p);
    console.log(p2);
    console.log(p3);
});

Promise.all([p,p2,p3]).then(([a, b, c]) => {
    console.log(a,b,c)
})
const [a,b,c] = await Promise.all([p,p2,p3])