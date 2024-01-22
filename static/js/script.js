function checkLoginFailed() {
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
}

function clearLoginFailed() {
    document.getElementById('username').style.borderColor = '#474D57';
    document.getElementById('password').style.borderColor = '#474D57';
    document.getElementById('login-failed-message').style.display = 'none';
}

window.onload = checkLoginFailed;
