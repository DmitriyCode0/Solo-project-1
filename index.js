let scoreHome = document.getElementById("scoreHome");
let scoreGuest = document.getElementById("scoreGuest");
let countHome = 0;
let countGuest = 0;

function addOneHome() {
  countHome += 1;
  scoreHome.textContent = countHome;
}

function addTwoHome() {
  countHome += 2;
  scoreHome.textContent = countHome;
}

function addThreeHome() {
  countHome += 3;
  scoreHome.textContent = countHome;
}

function addOneGuest() {
  countGuest += 1;
  scoreGuest.textContent = countGuest;
}
function addTwoGuest() {
  countGuest += 2;
  scoreGuest.textContent = countGuest;
}
function addThreeGuest() {
  countGuest += 3;
  scoreGuest.textContent = countGuest;
}
