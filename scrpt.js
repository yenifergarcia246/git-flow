const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailIcon = document.getElementById("emailIcon");
const togglePass = document.getElementById("togglePass");
const message = document.getElementById("message");
const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.onclick = () => {
    document.body.classList.toggle("dark");
};

togglePass.onclick = () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
};

emailInput.addEventListener("input", () => {
    if (validateEmail(emailInput.value)) {
        emailIcon.textContent = "✓";
        emailIcon.style.color = "lime";
    } else {
        emailIcon.textContent = "✗";
        emailIcon.style.color = "red";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateEmail(emailInput.value)) {
        shakeForm("Correo inválido");
        return;
    }

    if (passwordInput.value.length < 6) {
        shakeForm("Contraseña demasiado corta");
        return;
    }

    message.style.color = "lightgreen";
    message.textContent = "¡Bienvenido de vuelta!";
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function shakeForm(msg) {
    message.style.color = "salmon";
    message.textContent = msg;
    form.style.animation = "shake 0.3s";
    setTimeout(() => form.style.animation = "", 300);
}
