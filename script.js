function login() {
    // Hardcoded credentials
    const correctUsername = "admin";
    const correctPassword = "1234";

    // Get user input
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        // Redirect to hello.html
        window.location.href = "hello.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
}
