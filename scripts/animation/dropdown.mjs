export function dropDown(bottonID, dropDownID, hideDropDownClass) {
  const clickObj = document.getElementById(`${bottonID}`);
  const dropDownContent = document.getElementById(`${dropDownID}`);
  clickObj.addEventListener("click", function (e) {
    dropDownContent.classList.toggle(`${hideDropDownClass}`);
  });
  window.addEventListener("click", function (e) {
    if (!e.target.matches(`#${bottonID}`)) {
      if (!dropDownContent.classList.contains(`${hideDropDownClass}`)) {
        dropDownContent.classList.toggle(`${hideDropDownClass}`);
      }
    }
  });
}
