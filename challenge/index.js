let hiddenProject = document.querySelectorAll(".column");
hiddenProject[0].style.display = "block";

let btnShow = document.getElementById("btn");
btnShow.addEventListener("click", () => {
  if (btnShow.textContent === "Show all") {
    for (let i = 1; i < hiddenProject.length; i++) {
      hiddenProject[i].style.display = "block";
    }
    btnShow.textContent = "Hidden";
  } else {
    for (let i = 1; i < hiddenProject.length; i++) {
      hiddenProject[i].style.display = "none";
    }
    btnShow.textContent = "Show all";
  }
});


let x = window.matchMedia("(min-width: 739px) and (max-width: 1023px)")
x.addListener((x) => {
  for (let i = 1; i < hiddenProject.length; i++) {
    hiddenProject[i].style.display = "block";
  }
});


let y = window.matchMedia("(max-width: 738px)")
y.addListener((x) => {
  for (let i = 1; i < hiddenProject.length; i++) {
    hiddenProject[i].style.display = "none";
  }
})

