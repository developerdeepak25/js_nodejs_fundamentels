// Ques 1 - create a button UI and add debounce as follows =>
// --> Show "Button Pressed <X> Times" every time button is pessed
// --> Increment "Triggeres <y> times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
btnPress;
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

// usina a lib - lodash for bebounce
// const debouncedCount = _.debounce(() => {
//   count.innerHTML = ++triggeredCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   //   count.innerHTML = ++triggerCount;
//   debouncedCount();
// });

// Ques 1 - create a button UI and add Throttle as follows =>
// --> Show "Button Pressed <X> Times" every time button is pessed
// --> Increment "Triggeres <y> times" every 800ms of throttle

// const throttleCount = _.throttle(() => {
//   count.innerHTML = ++triggeredCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   //   count.innerHTML = ++triggerCount;
//   throttleCount();
// });

//Q3 debounce Polyfill implementation

const debounce = (cb, d) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debounceCount = debounce(() => {
  count.innerHTML = ++triggeredCount;
}, 600);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debounceCount();
// });

//Q3 Throttle Polyfill implementation

// my implementation of throttle
// const throttle = (cb, d) => {
//   let shouldExecute = true;

//   return (...args) => {
//     if (!shouldExecute) return;
//     setTimeout(() => {
//       cb(...args);
//       shouldExecute = true;
//     }, d);
//     shouldExecute = false;
//   };
// };

const throttle = (cb, d) => {
  last = 0;
  return (...args) => {
    let curr = new Date().getTime();
    if (curr - last < d) return;
    last = curr;
    cb(...args);
  };
};

const throttleCount = throttle(() => {
  count.innerHTML = ++triggeredCount;
}, 600);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttleCount();
});
