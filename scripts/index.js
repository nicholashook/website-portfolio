const email = "ngh2691@nyu.edu";

document.body.querySelectorAll('.email-button')
  .forEach((element, index) => {
    element.addEventListener('click', () => {
      copyEmail(email);
    })
  });

function copyEmail(email) {
  navigator.clipboard.writeText(email);
}