let eye = document.getElementById('eye');
let inputBox = document.getElementsByName('password')[0];

function showPassword() {
    if (inputBox.type === 'password') {
        inputBox.type = 'text';
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    } else {
        inputBox.type = 'password';
        eye.classList.add('fa-eye');
        eye.classList.remove('fa-eye-slash');
    }
}
eye.addEventListener("click", function() {
    showPassword();
});