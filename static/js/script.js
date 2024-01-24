function checkParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('login_failed') === '1') {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        usernameInput.style.borderColor = 'rgb(246, 70, 93)';
        passwordInput.style.borderColor = 'rgb(246, 70, 93)';
        document.getElementById('login-failed-message').style.display = 'block';

        usernameInput.addEventListener('focus', clearLoginFailed);
        passwordInput.addEventListener('focus', clearLoginFailed);
    }

    if (urlParams.get('signup_failed') === '1') {
        const firstNameInput = document.getElementById('first-name');
        const lastNameInput = document.getElementById('last-name');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        firstNameInput.style.borderColor = 'rgb(246, 70, 93)';
        lastNameInput.style.borderColor = 'rgb(246, 70, 93)';
        usernameInput.style.borderColor = 'rgb(246, 70, 93)';
        passwordInput.style.borderColor = 'rgb(246, 70, 93)';
        document.getElementById('signup-failed-message').style.display = 'block';

        firstNameInput.addEventListener('focus', clearSignupFailed);
        lastNameInput.addEventListener('focus', clearSignupFailed);
        usernameInput.addEventListener('focus', clearSignupFailed);
        passwordInput.addEventListener('focus', clearSignupFailed);
    }

    if (urlParams.get('signup_successful') === '1') {
        document.getElementById('signup-successful-message').style.display = 'block';

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        usernameInput.addEventListener('focus', clearSigupSuccessful);
        passwordInput.addEventListener('focus', clearSigupSuccessful);
    }

    if (urlParams.get('change_password_failed') === '1') {
        document.getElementById('change-password-failed-message').style.display = 'block';

        const oldPasswordInput = document.getElementById('old_password');
        const newPasswordInput = document.getElementById('new_password');
        const confirmPasswordInput = document.getElementById('confirm_password');

        oldPasswordInput.style.borderColor = 'rgb(246, 70, 93)';
        newPasswordInput.style.borderColor = 'rgb(246, 70, 93)';
        confirmPasswordInput.style.borderColor = 'rgb(246, 70, 93)';

        oldPasswordInput.addEventListener('focus', clearPasswordChangeFailed);
        newPasswordInput.addEventListener('focus', clearPasswordChangeFailed);
        confirmPasswordInput.addEventListener('focus', clearPasswordChangeFailed);
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

function clearSigupSuccessful() {
    document.getElementById('signup-successful-message').style.display = 'none';
}

function clearPasswordChangeFailed() {
    document.getElementById('old_password').style.borderColor = '#474D57';
    document.getElementById('new_password').style.borderColor = '#474D57';
    document.getElementById('confirm_password').style.borderColor = '#474D57';
    document.getElementById('change-password-failed-message').style.display = 'none';
}

function confirmAccountDeletion() {
    var confirmDeletion = confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmDeletion) {
        var deleteUrl = document.getElementById('delete-account').getAttribute('data-url');
        window.location.href = deleteUrl;
    }
}

window.onload = checkParameters;