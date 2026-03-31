const navbar = document.getElementById("myNavbar");
const navHeight = navbar.offsetHeight;

/* -------- smooth scroll with navbar offset -------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - navHeight + 5;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    /* -------- close navbar on mobile after clicking -------- */
    const navbarCollapse = document.getElementById("navbarText");

    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse =
        bootstrap.Collapse.getInstance(navbarCollapse) ||
        new bootstrap.Collapse(navbarCollapse);

      bsCollapse.hide();
    }
  });
});

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

const firstNameInput = document.querySelector('input[name="firstName"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector("textarea[name=message]");

// First Name Validation (minimum 3 letters)
firstNameInput.addEventListener("input", function () {
  const value = firstNameInput.value.trim();

  if (value.length >= 3) {
    firstNameInput.classList.add("valid");
    firstNameInput.classList.remove("error");
  } else {
    firstNameInput.classList.remove("valid");
  }
});

firstNameInput.addEventListener("blur", function () {
  const value = firstNameInput.value.trim();

  if (value.length < 3) {
    firstNameInput.classList.add("error");
  } else {
    firstNameInput.classList.remove("valid"); // remove green when user leaves
  }
});

// Email Validation (when user types and leaves the field)
emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(emailValue)) {
    emailInput.classList.add("valid");
    emailInput.classList.remove("error");
  } else {
    emailInput.classList.remove("valid");
  }
});

emailInput.addEventListener("blur", function () {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("valid"); // remove green when user leaves
  }
});

// show green while typing (if at least 1 character exists)
messageInput.addEventListener("input", function () {
  const value = messageInput.value.trim();

  if (value.length >= 1) {
    messageInput.classList.add("valid");
    messageInput.classList.remove("error");
  } else {
    messageInput.classList.remove("valid");
  }
});

// show red if user leaves field empty
messageInput.addEventListener("blur", function () {
  const value = messageInput.value.trim();

  if (value.length < 1) {
    messageInput.classList.add("error");
  } else {
    messageInput.classList.remove("valid"); // remove green when user leaves
  }
});

function showToast() {
  const toast = document.getElementById("toast");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function goToHome() {
  document.getElementById("mainContentForPage").scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("[data-form]");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    console.log({
      firstName,
      lastName,
      email,
      message,
    });

    showToast();
    goToHome();
    form.reset();
  });
});
