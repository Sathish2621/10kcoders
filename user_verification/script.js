document.getElementById("heading").style.color="orange"

function verifying() {
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if (username === "sathish" && password === "1234") {
        document.getElementById("heading").innerText = "Login Successful ✅";
        document.getElementById("heading").style.color = "green";
    } else {
        document.getElementById("heading").innerText = "Invalid Credentials ❌";
        document.getElementById("heading").style.color = "red";
    }
}
