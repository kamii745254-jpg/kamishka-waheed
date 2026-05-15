const form = document.getElementById("studentForm");
const result = document.getElementById("result");
let students = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();
  clearErrors();

  let name = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let gender = document.querySelector("input[name='gender']:checked");
  let course = document.getElementById("course").value;
  let hobbies = [...document.querySelectorAll("input[name='hobby']:checked")].map(h => h.value);
  let message = document.getElementById("message").value.trim();

  let valid = true;

  if (name === "") {
    showError("nameError", "Enter full name");
    valid = false;
  }

  if (!email.includes("@")) {
    showError("emailError", "Enter valid email");
    valid = false;
  }

  if (password.length < 6) {
    showError("passwordError", "Minimum 6 characters");
    valid = false;
  }

  if (password !== confirmPassword) {
    showError("confirmPasswordError", "Passwords do not match");
    valid = false;
  }

  if (!/^\d{11}$/.test(phone)) {
    showError("phoneError", "Enter 11-digit phone number");
    valid = false;
  }

  if (!gender) {
    showError("genderError", "Select gender");
    valid = false;
  }

  if (course === "") {
    showError("courseError", "Select course");
    valid = false;
  }

  if (hobbies.length === 0) {
    showError("hobbyError", "Select hobby");
    valid = false;
  }

  if (message === "") {
    showError("messageError", "Write something");
    valid = false;
  }

  if (!valid) return;

  let student = {
    name, email, phone,
    gender: gender.value,
    course, hobbies, message
  };

  students.push(student);

  result.innerHTML = `
    <h3>Submitted Data</h3>
    <p><b>Name:</b> ${student.name}</p>
    <p><b>Email:</b> ${student.email}</p>
    <p><b>Phone:</b> ${student.phone}</p>
    <p><b>Gender:</b> ${student.gender}</p>
    <p><b>Course:</b> ${student.course}</p>
    <p><b>Hobbies:</b> ${student.hobbies.join(", ")}</p>
    <p><b>Message:</b> ${student.message}</p>
  `;

  form.reset();
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(item => {
    item.textContent = "";
  });
}
