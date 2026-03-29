const email = "ngh2691@nyu.edu";

document.body.querySelectorAll('.email-button')
  .forEach((element, index) => {
    element.addEventListener('click', () => {
      copyEmail(email);
      confirmCopy(element);
    })
  });

function copyEmail(email) {
  navigator.clipboard.writeText(email);
}

function confirmCopy(element) {
  confirmMsg = element.querySelector('.email-confirm-off');
  confirmMsg.classList.add('email-confirm-on');
  setTimeout(() => {
    confirmMsg.classList.remove('email-confirm-on');
  }, 1200);
}