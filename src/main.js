const htmlNav = document.getElementById("nav");
const htmlMenuBtn = document.getElementById("menu-btn");
const htmlStatsSection = document.getElementById("stats");
const htmlYears = document.querySelector(".js-years");
const htmlClients = document.querySelector(".js-clients");
const htmlStartups = document.querySelector(".js-startups");
const htmlSatisfied = document.querySelector(".js-satisfied");

function expandMenu() {
  htmlNav.classList.toggle("expanded");
}

let years = 0;
let clients = 0;
let startups = 0;
let satisfied = 0;
let isCompleted = false;

function increment(value, max, htmlTarget, speed) {
  setInterval(() => {
    if (value === max) {
      isCompleted = true;
      return;
    } else {
      value += 1;

      htmlTarget.innerHTML =
        htmlTarget == htmlSatisfied
          ? value + "<span>%</span>"
          : value + "<span>+</span>";
    }
  }, speed);
}

function checkIsInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("scroll", () => {
  if (checkIsInViewport(htmlStatsSection) && !isCompleted) {
    increment(years, 18, htmlYears, 100);
    increment(clients, 250, htmlClients, 15);
    increment(startups, 150, htmlStartups, 20);
    increment(satisfied, 100, htmlSatisfied, 20);
  }
});
