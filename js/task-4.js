const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = e.target.elements;
  if (!email.value || !password.value) {
    alert("All form fields must be filled in");
    return;
  }
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(data);
  formLogin.reset();
});
