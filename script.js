const yearsExperience = document.querySelector(".years-experience");

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

const tradingCard = document.querySelector(".flip");

let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  tradingCard.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${-center.y / 100},
      ${center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

  tradingCard.querySelector(".glow").style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * (isFlipped ? -2 : 2) + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      rgba(255,255,255,.2),
      transparent
    )
  `;
}

tradingCard.addEventListener("mouseenter", () => {
  bounds = tradingCard.getBoundingClientRect();
  document.addEventListener("mousemove", rotateToMouse);
});

tradingCard.addEventListener("mouseleave", () => {
  document.removeEventListener("mousemove", rotateToMouse);
  tradingCard.style.transform = "";
  tradingCard.style.background = "";
  tradingCard.querySelector(".glow").style.backgroundImage = "";
});

let isFlipped = false;

document.querySelector(".flip").addEventListener("click", () => {
  isFlipped = true;
  document.querySelector(".flip-inner").style.transform = `rotateY(${
    isFlipped ? 180 : 0
  }deg)`;
  document.querySelector(".flip").style.cursor = "default";
});
