const operationBtn = document.querySelector(".oper-btn");
const submitBtn = document.getElementById("sub");
const addBtn = document.getElementById("a");
const subBtn = document.getElementById("s");
const multiBtn = document.getElementById("m");
const divisionBtn = document.getElementById("d");

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  operationBtn.style.display = "block";
  operationBtn.style.textAlign = "center";
});
addBtn.addEventListener("click", e => {
  e.preventDefault();
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = Number(n1);
  n2 = Number(n2);
  alert(n1 + n2);
});
subBtn.addEventListener("click", e => {
  e.preventDefault();
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = Number(n1);
  n2 = Number(n2);
  alert(n1 - n2);
});
multiBtn.addEventListener("click", e => {
  e.preventDefault();
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = Number(n1);
  n2 = Number(n2);
  alert(n1 * n2);
});
divisionBtn.addEventListener("click", e => {
  e.preventDefault();
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = Number(n1);
  n2 = Number(n2);
  alert(n1 / n2);
});
