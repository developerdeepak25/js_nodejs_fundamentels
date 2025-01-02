// evnt propagation

// Q  what is event bubbling

const div = document.querySelector(".diver");
const form = document.querySelector("form");
const button = document.querySelector("button");

// div.addEventListener("click", function () {
//   alert("div");
//   console.log(div);
// });
// form.addEventListener("click", function () {
//   alert("form");
//   console.log("form");
// });
// button.addEventListener("click", function () {
//   alert("button");
//   console.log("button");
// });

// Q event.target vs this.target vs event.currentTarget

// div.addEventListener("click" ,func);
// form.addEventListener("click" ,func );
// button.addEventListener("click" ,func );

// function func(event){
//     alert("currentTarget = " + event.currentTarget.tagName +  " ,target = " + event.target.tagName + ", this = " + this.tagName  )
// }
// div.addEventListener("click" ,func);
// form.addEventListener("click" ,func );
// button.addEventListener("click" ,func );

// function func(event){
//     alert("currentTarget = " + event.currentTarget.tagName +  " ,target = " + event.target.tagName + ", this = " + this.tagName  )
// }

// Q 4  What is Event Capturing / Trickling?
// setting vapture to true make event propagate from outermost to innermost
// div.addEventListener("click", func, {
//   capture: true,
// });
// form.addEventListener("click", func, {
//   capture: true,
// });
// button.addEventListener("click", func, {
//   capture: true,
// });

// function func(event) {
//   alert("currentTarget = " + event.currentTarget.tagName);
// }

// Q5  - How to stop bubbling or capturing
// for stoping propgation we use stopporpagation method

div.addEventListener("click", function func(event) {
  alert("currentTarget = " + event.currentTarget.tagName);
});
form.addEventListener("click", function func(event) {
  event.stopPropagation();
  alert("currentTarget = " + event.currentTarget.tagName);
});
button.addEventListener("click", function func(event) {
  event.stopPropagation();
  alert("currentTarget = " + event.currentTarget.tagName);
});

// can be done for capturing also

//Q Event delegation

// using dsingle event for multiple events
document.querySelector(".products").addEventListener("click", (e) => {
  if (e.target.closest("span")) {
    console.log(e.target.closest("span").innerHTML);
    // closest method finds the closest element given to it
  }
});

