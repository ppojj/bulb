let bulb = document.querySelector("#wow");
let button = document.querySelector("#p");
let flag = 1;

button.addEventListener("click", function () {
  if (flag === 1) {
    bulb.style.backgroundColor = "yellow";
    flag = 0;
  } else {
    bulb.style.backgroundColor = "black";
    flag = 1;
  }
});
