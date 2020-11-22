function checkScroll(position) {
  if (
    document.body.scrollTop > position ||
    document.documentElement.scrollTop > position
  ) {
    document.getElementById("repo-nav").classList.add("sticky-nav");
  } else {
    document.getElementById("repo-nav").classList.remove("sticky-nav");
  }
}

export function repoNav() {
  window.addEventListener("scroll", function (e) {
    checkScroll(106);
    checkScroll(394);
  });
}
