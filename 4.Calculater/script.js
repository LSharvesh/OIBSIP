let input = document.getElementById("input");
let result = document.getElementById("result");
let buttons = document.querySelectorAll("button");

let ans = 0;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "clear") {
      input.value = "";
      result.innerText = "0";
    } 
    else if (value === "del") {
      input.value = input.value.slice(0, -1);
    } 
    else if (value === "ENTER") {
      try {
        let evalResult = eval(input.value);
        result.innerText = evalResult;
        ans = evalResult;
      } catch {
        result.innerText = "Error";
      }
    } 
    else if (value === "ans") {
      input.value += ans;
    } 
    else if (value === "√") {
      input.value += "Math.sqrt(";
    } 
    else if (value === "±") {
      if (input.value.startsWith("-")) {
        input.value = input.value.substring(1);
      } else {
        input.value = "-" + input.value;
      }
    } 
    else {
      if (value !== "ENTER") {
        input.value += value;
      }
    }
  });
});
