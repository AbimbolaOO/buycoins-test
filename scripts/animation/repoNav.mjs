export function repoNav() {
  window.addEventListener("scroll", function (e) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("repo-nav").classList.add("sticky-nav");
    } else {
      document.getElementById("repo-nav").classList.remove("sticky-nav");
    }

    if (
      document.body.scrollTop > 394 ||
      document.documentElement.scrollTop > 394
    ) {
      document
        .getElementById("repo-nav-profile")
        .classList.add("sticky-nav-profile");
    } else {
      document
        .getElementById("repo-nav-profile")
        .classList.remove("sticky-nav-profile");
    }
  });
}
