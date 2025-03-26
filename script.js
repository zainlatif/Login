function login() {
    // Define credentials
    const users = {
        admin: "admin123",
        customer: "customer123"
    };

    // Get input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (users[username] && users[username] === password) {
        // Redirect based on user type
        if (username === "admin") {
            window.location.href = "admin.html"; // Redirect to admin page
        } else if (username === "customer") {
            window.location.href = "customer.html"; // Redirect to customer page
        }
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
}
