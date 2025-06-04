export function valider(e) {
    e.preventDefault();

    const errors = {};
    let isValid = true;

    // Valider email
    const email = document.querySelector("input[name='email']");
    if (!email) {
        console.error("Email input not found");
        errors.email = "Email field not found";
        isValid = false;
    } else if (!email.value) {
        email.style.backgroundColor = "rgb(160, 40, 40)";
        errors.email = "Email is required";
        isValid = false;
    } else {
        const regxp_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!regxp_email.test(email.value)) {
            email.style.backgroundColor = "rgb(160, 40, 40)";
            errors.email = "Invalid email format";
            isValid = false;
        } else {
            email.style.backgroundColor = "#fff";
        }
    }

    // Valider brugernavn
    const username = document.querySelector("input[name='username']");
    if (!username) {
        console.error("Username input not found");
        errors.username = "Username field not found";
        isValid = false;
    } else if (!username.value) {
        username.style.backgroundColor = "rgb(160, 40, 40)";
        errors.username = "Username is required";
        isValid = false;
    } else {
        username.style.backgroundColor = "#fff";
    }

    // Valider adgangskode
    const password = document.querySelector("input[name='password']");
    if (!password) {
        console.error("Password input not found");
        errors.password = "Password field not found";
        isValid = false;
    } else if (!password.value) {
        password.style.backgroundColor = "rgb(160, 40, 40)";
        errors.password = "Password is required";
        isValid = false;
    } else {
        password.style.backgroundColor = "#fff";
    }

    // Valider bekræft adgangskode
    const confirmPassword = document.querySelector("input[name='confirmPassword']");
    if (!confirmPassword) {
        console.error("Confirm Password input not found");
        errors.confirmPassword = "Confirm Password field not found";
        isValid = false;
    } else if (!confirmPassword.value) {
        confirmPassword.style.backgroundColor = "rgb(160, 40, 40)";
        errors.confirmPassword = "Confirm Password is required";
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        confirmPassword.style.backgroundColor = "rgb(160, 40, 40)";
        errors.confirmPassword = "Passwords do not match";
        isValid = false;
    } else {
        confirmPassword.style.backgroundColor = "#fff";
    }

    if (isValid) {
        console.log("Form submitted:", {
            email: email ? email.value : "",
            username: username ? username.value : "",
            password: password ? password.value : "",
            confirmPassword: confirmPassword ? confirmPassword.value : "",
        });
    }

    return { isValid, errors };
}