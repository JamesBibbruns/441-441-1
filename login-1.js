function setUsername() {
    const usernameInput = document.getElementById('usernameInput').value.trim();
    if (usernameInput !== '') {
        setCookie('username', usernameInput, 7); // Set cookie with name "username" lasting 7 days
        alert(`Username "${usernameInput}" has been register.`);
    } else {
        alert('Please enter a valid username.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    getUsername(); 
});
// Function to retrieve and display the username from the cookie
function getUsername() {
    const username = getCookie('username');
    if (username !== '') {
        document.getElementById('usernameDisplay').textContent = `login-Username: ${username}`;
        window.location.href = 'index-1.html'; 
    } else {
        document.getElementById('someElementId').textContent =' Guest' ;
    }
}



// Function to set a cookie with a specified name, value, and expiration time
function setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by its name
function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}
