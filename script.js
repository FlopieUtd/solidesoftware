const div = document.querySelector(".typewriter-text");
const caret = document.querySelector(".caret");
const jobTitleElement = document.querySelector(".job-title");
const yearsExperience = document.querySelector(".years-experience");
const jobTitle = "frontend enginer".split("");
const correction = "er".split("");
const DELAY_IN_MS = 100;

let i = 0;
let innerI = 0;

setTimeout(() => {
  caret.style.color = "white";
  setTimeout(() => {
    const intervalId = setInterval(() => {
      if (i === jobTitle.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          div.textContent = div.textContent.slice(0, -1);
          const innerIntervalId = setInterval(() => {
            if (innerI === correction.length) {
              clearInterval(innerIntervalId);
              setTimeout(() => {
                caret.style.color = "transparent";
                jobTitleElement.style.marginLeft = 0;
                jobTitleElement.style.justifyContent = "center";
                setTimeout(() => {
                  caret.remove();
                }, DELAY_IN_MS * 4);
              }, DELAY_IN_MS * 10);
            } else {
              div.innerHTML += correction[innerI];
              innerI += 1;
            }
          }, DELAY_IN_MS * 2);
        }, DELAY_IN_MS * 10);
      } else {
        div.innerHTML += jobTitle[i];
        i += 1;
      }
    }, DELAY_IN_MS);
  }, DELAY_IN_MS * 10);
}, DELAY_IN_MS * 4);

yearsExperience.innerHTML = new Date().getFullYear() - 2017;

function validateContactForm() {
  const nameField = document.querySelector("input#name");
  const emailField = document.querySelector("input#email");
  const messageField = document.querySelector("textarea#message");
  const submitButton = document.querySelector("input#submit-contact-form");

  const isContactFormValid = !!(
    nameField.value.length &&
    emailField.value.length &&
    messageField.value.length
  );
  submitButton.disabled = !isContactFormValid;
  submitButton.title = isContactFormValid ? "" : "Please fill in all fields.";
}

