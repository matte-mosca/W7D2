const form = document.querySelector("form");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const name = inputUsername.value;
  localStorage.setItem("user", name);
  users.innerHTML = `Nome di accesso: ${username}`;
  form.reset();
});

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  users.innerHTML = ""; 
  form.reset(); 
});



