const toggleActions = document.querySelector(".fi-br-menu-burger");
const actionButtons = document.querySelector(".actions");

toggleActions.addEventListener("click", function () {
  actionButtons.classList.toggle("show");
});
