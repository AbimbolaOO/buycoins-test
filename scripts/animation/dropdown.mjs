export function dropDown(hideHeaderIcon, hideDropDown) {
  const headerIcon = document.getElementById(`${hideHeaderIcon}`);
  const iconDropDown = document.getElementById(`${hideDropDown}`);
  headerIcon.addEventListener("click", function () {
    iconDropDown.classList.toggle("hide-drop-down");
  });
  window.addEventListener("click", function (e) {
    if (!e.target.matches(`#${hideHeaderIcon}`)) {
      if (!iconDropDown.classList.contains("hide-drop-down")) {
        iconDropDown.classList.add("hide-drop-down");
      }
    }
  });
}
