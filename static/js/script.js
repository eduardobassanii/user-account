function checkFailed() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('login_failed') === '1') {
        document.getElementById('username').style.borderColor = 'rgb(246, 70, 93)';
        document.getElementById('password').style.borderColor = 'rgb(246, 70, 93)';
        document.getElementById('login-failed-message').style.display = 'block';

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        usernameInput.addEventListener('focus', clearLoginFailed);
        passwordInput.addEventListener('focus', clearLoginFailed);
    }

    if (urlParams.get('signup_failed') === '1') {
        document.getElementById('first-name').style.borderColor = 'rgb(246, 70, 93)';
        document.getElementById('last-name').style.borderColor = 'rgb(246, 70, 93)';
        document.getElementById('username').style.borderColor = 'rgb(246, 70, 93)';
        document.getElementById('password').style.borderColor = 'rgb(246, 70, 93)';
        document.getElementById('signup-failed-message').style.display = 'block';

        const firstNameInput = document.getElementById('first-name');
        const lastNameInput = document.getElementById('last-name');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        firstNameInput.addEventListener('focus', clearSignupFailed);
        lastNameInput.addEventListener('focus', clearSignupFailed);
        usernameInput.addEventListener('focus', clearSignupFailed);
        passwordInput.addEventListener('focus', clearSignupFailed);
    }
}

function clearLoginFailed() {
    document.getElementById('username').style.borderColor = '#474D57';
    document.getElementById('password').style.borderColor = '#474D57';
    document.getElementById('login-failed-message').style.display = 'none';
}

function clearSignupFailed() {
    document.getElementById('first-name').style.borderColor = '#474D57';
    document.getElementById('last-name').style.borderColor = '#474D57';
    document.getElementById('username').style.borderColor = '#474D57';
    document.getElementById('password').style.borderColor = '#474D57';
    document.getElementById('signup-failed-message').style.display = 'none';
}

window.onload = checkFailed;