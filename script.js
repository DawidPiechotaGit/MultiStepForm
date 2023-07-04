const formStep = document.querySelectorAll(".step");
const sidebarStep = document.querySelectorAll(".sidebar-step-circle");
const nxtButton = document.querySelector(".button-next");
const bckButton = document.querySelector(".button-back");
const stage = sidebarStep.length;

let stepNum = 1;

function showStep(x) {
  if (x === 0) {
    bckButton.classList.add("hidden");
    bckButton.setAttribute("disabled", "");
  } else if (x === 4) {
    nxtButton.classList.add("hidden");
  } else {
    bckButton.classList.remove("hidden");
    bckButton.removeAttribute("disabled", "");
    nxtButton.classList.remove("hidden");
  }

  x === 3
    ? (nxtButton.textContent = "Confirm")
    : (nxtButton.textContent = "Next Step");

  if (x < formStep.length) {
    for (let i = 0; i < formStep.length; i++) {
      formStep[i].classList.remove("active");
    }
    // adds the "active" class to the current step
    formStep[x].classList.add("active");
  }
}
showStep(stepNum);

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
