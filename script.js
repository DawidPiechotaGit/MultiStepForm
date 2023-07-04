const formStep = document.querySelectorAll(".step");
const sidebarStep = document.querySelectorAll(".sidebar-step-circle");
const nxtButton = document.querySelector(".button-next");
const bckButton = document.querySelector(".button-back");
const stage = sidebarStep.length;

let stepNum = 0;

function showStep(x) {
  if (x < formStep.length) {
    for (let i = 0; i < formStep.length; i++) {
      formStep[i].classList.remove("active");
    }
    // adds the "active" class to the current step
    formStep[x].classList.add("active");
  }
}
showStep(0);

nxtButton.addEventListener("click", (e) => {
  e.preventDefault();
  stepNum++;
  showStep(stepNum);
});

bckButton.addEventListener("click", (e) => {
  e.preventDefault();
  stepNum--;
  showStep(stepNum);
});
