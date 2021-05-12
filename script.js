const icon = document.querySelector(".error");
const text = document.querySelector(".text");
const input = document.getElementById("email").value;
const pattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (input.match(pattern)) {
    icon.classList.add("hidden");
    text.classList.add("hidden");
  } else {
    icon.classList.remove("hidden");
    text.classList.remove("hidden");
  }
});
