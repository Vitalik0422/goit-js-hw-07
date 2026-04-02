const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = e.target.elements;
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  if (!data.email || !data.password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(data);
  formLogin.reset();
});
