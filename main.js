document.addEventListener("DOMContentLoaded", function () {
  const rodoHandler = document.querySelector(".form__rodo");
  let rodoCheckbox = document.querySelector(".form__checkbox");
  const buttonCheck = document.querySelector(".form__button");

  function rodoChange() {
    if (rodoCheckbox.checked == false) {
      rodoCheckbox.checked = true;
      buttonCheck.disabled = false;
    } else {
      rodoCheckbox.checked = false;
      buttonCheck.disabled = true;
    }
  }
  rodoChange();

  rodoHandler.addEventListener("click", rodoChange);
});
