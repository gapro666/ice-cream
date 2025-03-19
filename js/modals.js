// const menuOpenBtn = document.querySelector('[data-action="modal-menu"]')
// const backdrop = document.querySelector('[data-action="backdrop"]')
// const closeBtn = document.querySelector('[data-action="close-btn"]')
// const body = document.querySelector('body')

// openBtn.addEventListener('click',()=>{
// body.classList.toggle('show-modal')
// })

// closeBtn.addEventListener('click',()=>{
// body.classList.remove('show-modal')
// })

// backdrop.addEventListener('click',()=>{
//     if (event.target===backdrop) {
//         body.classList.remove('show-modal')
//     }

// })
document.addEventListener("DOMContentLoaded", () => {
  const modalButtons = document.querySelectorAll("[data-action]");
  const modals = document.querySelectorAll(".backdrop");
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden"; // Заборона прокрутки
      window.addEventListener("keydown", onEscPress);
    }
  }
  function closeModal(modal) {
    modal.classList.remove("active");
    const nestedModal=modal.querySelector('backdrop active')
if (nestedModal) {
  nestedModal.classList.remove('active')
}

    document.body.style.overflow = "";
    window.removeEventListener("keydown", onEscPress);
  }
  // Открытие модальных окон по клику
  modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-action");
      openModal(modalId);
    });
  });
  // Закрытие модальных окон по клику
  modals.forEach((modal) => {
    console.log(modal);

    modal.addEventListener("click", (event) => {
      console.log(event);

      if (
        event.target.classList.contains("backdrop") ||
        event.target.classList.contains("close-btn")
      ) {
        closeModal(modal);
      }
    });
  });
  //  Закриття по Escape
  function onEscPress(event) {
    if (event.key === "Escape") {
      modals.forEach((modal) => closeModal(modal));
    }
  }
});
