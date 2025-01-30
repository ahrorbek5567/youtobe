document.getElementById("signupBtn").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let message = document.getElementById("message");

    if (username.trim() === "") {
        message.style.color = "red";
        message.textContent = "Iltimos, foydalanuvchi nomini kiriting!";
    } else {
        message.style.color = "green";
        message.textContent = "Muvaffaqiyatli ro‘yxatdan o‘tdingiz!";
    }
}); 