const text = ["MCA Student", "Web Developer", "Tech Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];
  
  if (!isDeleting) {
    document.getElementById("typing").textContent = currentText.substring(0, j++);
  } else {
    document.getElementById("typing").textContent = currentText.substring(0, j--);
  }

  if (j == currentText.length) isDeleting = true;
  if (j == 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name && email && message) {
    document.getElementById("formMsg").textContent = "Message sent successfully!";
    this.reset();
  } else {
    document.getElementById("formMsg").textContent = "Please fill all fields!";
  }
});

type();