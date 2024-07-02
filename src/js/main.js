let calcResult = document.getElementById("box");

const showResult = (num) => {
  calcResult.value += num;
  console.log(calcResult);
};

const countCalc = () => {
  try {
    calcResult.value = eval(calcResult.value);
  } catch {
    console.log("kontol");
  }
};

const clearCalc = () => {
  calcResult.value = "";
};

const delNum = () => {
  calcResult.value = calcResult.value.slice(0, -1);
};
