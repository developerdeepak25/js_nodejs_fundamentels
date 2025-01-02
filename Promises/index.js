console.log("this that");

// ASYNC code
// demonstration that setTimeout goes to web api
// setTimeout(() => {
//   console.log("setTimeout");
// }, 1000);
// for (let index = 0; index < 100000; index++) {
//   console.log(index + 3 / 4);
// }

// callbacks

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`Meet ${username} first`);
//   }, 1000);
// }

// function impAction2(username, cb) {
//   setTimeout(() => {
//     cb(`Meet ${username} second`);
//   }, 500);
// }
// function impAction3(username, cb) {
//   setTimeout(() => {
//     cb(`Meet ${username} third`);
//   }, 500);
// }

// importantAction("piyush", function (msg) {
//   console.log(msg);
//   impAction2("deepak", (action) => {
//     console.log(action);
//      impAction3("Deepak Ji", (action) => {
//        console.log(action);
//      });
//   });
// });

// we cant perform nesting of callbacks like this this makes code messy, unreadable, hard to understand
// solution in promises

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hasPermission = true;
//     if (hasPermission) resolve("you are alloweded");
//     else reject(new Error("you are not alloweded"));
//   }, 4000);
// });

// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   console.log(sub);

// solving cb back nesting with promises

function impAction1(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Meet ${username} first`);
    }, 500);
  });
}
function impAction2(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Meet ${username} second`);
    }, 500);
  });
}
function impAction3(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Meet ${username} third`);
    }, 400);
  });
}

// impAction1("yash")
//   .then((res) => {
//     console.log(res);
//     return impAction2("uikey");
//   })
//   .then((res) => {
//     console.log(res);
//     return impAction3("deepak");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(() => {
//     console.error(err);
//   });

//   promise combinator

// 1 All - it runs all promises at once if any once promise fails all promises fail
// also takes and returns a array

// Promise.all([impAction1("yash"), impAction2("uikey"), impAction3("deepak")])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//2 race - similar to 'all' syntax wise but returns only one promise which is resolved or rejected first

// Promise.race([impAction1("yash"), impAction2("uikey"), impAction3("deepak")])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//  3.  allSettled returns both  rejected and resolved promises

// Promise.allSettled([
//   impAction1("yash"),
//   impAction2("uikey"),
//   impAction3("deepak"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   4. any- same as race but returns first fulliled promise only and ignore rejected promise and returns error only if all promises are rejected

// Promise.any([impAction1("yash"), impAction2("uikey"), impAction3("deepak")])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// async await

// const result = async () => {
// try {
//   const message1 = await impAction1("yash");
//   const message2 = await impAction2("uikey");
//   const message3 = await impAction2("Deepak Ji");

//   console.log({ message1, message2, message3 });
// } catch (err) {
//   console.error("Promise failed", err);
// }
// };

// const result = async () => {
//   try {
//     const message1 = await impAction1("yash");
//     console.log("🚀 ~ result ~ message1:", message1);
//     const message2 = await impAction2("uikey");
//     console.log("🚀 ~ result ~ message2:", message2);
//     const message3 = await impAction2("Deepak Ji");
//     console.log("🚀 ~ result ~ message3:", message3);

//     // console.log({ message1, message2, message3 });
//   } catch (err) {
//     console.error("Promise failed", err);
//   }
// };

// result();

// Ques 1 what's the output?

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
// console.log(1); // sync code
// resolve(2)
// })

// promise1.then((res)=>{ // async code
//   console.log(res);
// })

// console.log('end');

// Ques 2 what's the output?

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   // resolve(2)
//   console.log(3);
// });

// promise1.then((res) => {
//   // then will not run as promise does not have resolve ( or can say promise not resolved)
//   console.log("result" + res);
// });

// console.log("end");

// Ques 3 what's the output?

// console.log("start"); //1

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1); //3
//     resolve("success");
//   });

// console.log("middle"); //2

// fn().then((res) => {
//   console.log(res); //5
// });

// console.log('end'); //4

// Ques 4 what's the output?

// function job(){
//   return new Promise((resolve, reject) => {
//    reject();
//   });
// }

// let promise = job();

// promise.then(()=>{
// console.log("success 1");
// })
// .then(()=>{
//   console.log('success 2');
// })
// .then(()=>{
//   console.log('success 3');
// })
// .catch(()=>{
//   console.log("error 1"); //  this will run
// })
// .then(()=>{
//   console.log('success 4'); //  this also runs
// })

// Q 5 what's the output
// function job1(state) {
//   return new Promise((resolve, reject) => {
//     if (state) resolve("success");
//     else reject("error");
//   });
// }

// let promise = job1(true);

// promise
//   .then((res) => {
//     console.log(res); //log - success
//     return job1(false);
//   })
//   .catch((data) => {
//     console.log(data); //log - error

//     return "Error caught"; // this count as resolved
//   })
//   .then((data) => {
//     console.log(data); // log - Error caught

//     return job1(true);
//   })
//   .catch((err) => {
//     console.log(err); //this won't run as a resolved is returned
//   });

// returning even a error results in resolved not rejected though throwing an error will result in rejected
// we can say that returning anything will result in resolved not rejected

Promise.resolve(42)
  .then((value) => {
    return new Error("Something went wrong");
  })
  .then((result) => {
    console.log("Success:", result.message); // Output: Success: Something went wrong
  })
  .catch((err) => console.error(err));

// Ques 8 - Rewrite this example code using `async/await` instead of `then/catch`

// function loadJson(url){
//   return fetch(url).then((res)=>{
//     if (res.status == 200) {
//       return res.json();
//     }else{
//       throw new Error(res.status)
//     }
//   })
// }

// rewrited version of `loadJson

async function loadJson(url) {
  const res = await fetch(url);
  if (res.status == 200) {
    let json = await res.json();
    return json;
  } else {
    throw new Error(res.status);
  }
}
// loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
//   console.error(err)
// );

// Ques 9 - Solve Promise Recursively

function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;

  const currPromise = funcPromises.shift();

  currPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  promRecurse(funcPromises);
}

// promRecurse([
//   impAction1("ham first han"),
//   impAction2("ham second han"),
//   impAction3("ham third han"),
// ]);

// polyfill for promise

function PromisePolyfill(executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isCalled = false,
    isRejected = false,
    value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      called = true;
    }
  }

  this.then = function (cb) {
    onResolve = cb;
    if (isFulfilled && !isCalled) {
      called = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (cb) {
    onReject = cb;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const exPromise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve("polyfill 2");
  }, 1000);
});

exPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

// all polyfill

Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!promises.length) {
      resolve(results);
      return;
    }
    let pending = promises.length;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((res) => {
        results[idx] = res;
        pending--;
        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};

Promise.allPolyfill([
  impAction1("yash"),
  impAction2("uikey"),
  impAction3("deepak"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
