var promise1 = Promise.resolve("ok");
var promise2 = Promise.reject("not ok");

promise1.catch(console.log)
promise1.then(console.log)

promise2.catch(console.log)
promise2.then(console.log)

