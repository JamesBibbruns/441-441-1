/' James RenHuaiyuan 223190623'/
document.getElementById('login-btn').addEventListener('click', function() {  
    
    var username = document.getElementById('username').value;  
    var password = document.getElementById('password').value;  
  
    var user = {  
        username: 'admin',  
        password: '123'   
    };  
  
    if (username === user.username && password === user.password) {  
        window.location.href = 'page9.html';  
    } else {  
        alert('Invalid username or password');  
    }  
});


// set cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; Secure; HttpOnly";
  }
  
  // read cookie
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // delete cookie
  function eraseCookie(name) {
    document.cookie = name + "=; max-age=0";
  }
