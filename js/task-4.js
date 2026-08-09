const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (form.elements.email.value.trim() === "" || form.elements.password.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const creds = {
      email: form.elements.email.value.trim(),
      password: form.elements.password.value.trim(),
    };
    console.log(creds);
    form.reset();
  }
});
