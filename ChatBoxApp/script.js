window.onload = function () {
    var name = localStorage.getItem("chatUser");

    if (name) {
        document.getElementById("userName").innerText = name;
    } else {
        window.location.href = "login.html";
    }
}
function darkMode() {
    document.body.classList.toggle("dark");
}
