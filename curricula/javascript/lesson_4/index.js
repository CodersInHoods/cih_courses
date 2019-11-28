const doAThing = callback => {
  let x = 1000000000;
  while (x > 0) {
    x--;
  }
  callback();
};

const asyncThing = numberOfSeconds =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        reject("async thing COULD NOT BE done");
      } else {
        resolve("async thing is done");
      }
    }, numberOfSeconds * 1000);
  });

// console.log(asyncThing(1));
// console.log(asyncThing(1));
// console.log(asyncThing(1));
// console.log(asyncThing(1));

const wakeUp = asyncThing(5);

wakeUp
  .then(message => console.log(message))
  .catch(errorMessage => console.error(errorMessage));

asyncThing(5)
  .then(message => console.log(message))
  .catch(errorMessage => console.error(errorMessage));

// doAThing(() => console.log("done"));
// doAThing(() => console.log("done"));
// doAThing(() => console.log("done"));
// doAThing(() => console.log("done"));
console.log("done some things");

setTimeout(() => console.log("done"), 500);
setTimeout(() => console.log("done"), 500);
setTimeout(() => console.log("done"), 500);
setTimeout(() => console.log("done"), 500);
// setInterval(() => console.log("done again"), 500);

console.log("told some things to be done later");

const timer1StartButton = document.querySelector("button#btn-1");
const timer2StartButton = document.querySelector("button#btn-2");
const timer3StartButton = document.querySelector("button#btn-3");

const startTimer = numberOfSeconds => {
  setTimeout(() => {
    console.log("timer done");
  }, numberOfSeconds * 1000);
};

timer1StartButton.addEventListener("click", () => startTimer(1));
timer2StartButton.addEventListener("click", () => startTimer(2));
timer3StartButton.addEventListener("click", () => startTimer(3));

document
  .querySelector("button#btn-3")
  .addEventListener("click", () => startTimer(3));

const getDataFromReddit = async () => {
  const response = await fetch("https://www.reddit.com/r/javascript.json");
  const data = await response.json();
  data.data.children.forEach(child => {
    const div = document.createElement("div");
    div.innerText = child.data.title;
    document.body.append(div);
  });
};

getDataFromReddit();

fetch("https://www.reddit.com/r/javascript.json")
  .then(response => response.json())
  .then(data => data.data.children)
  .then(children =>
    children.forEach(child => {
      const div = document.createElement("div");
      div.innerText = child.data.title;
      document.body.append(div);
    })
  );

const user = { username: "sam", password: "hello" };
fetch("https://www.reddit.com/r/javascript.json", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify(user) // "[Object object]"
});
