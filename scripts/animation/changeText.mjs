export function changeText() {
  var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (width > 768 && width < 1012) {
    document.querySelector(".trimable-text").textContent = "Pulls";
  } else {
    document.querySelector(".trimable-text").textContent = "Pull Requests";
  }
}
