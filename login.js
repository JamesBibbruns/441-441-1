document.getElementById('login-btn').addEventListener('click', function() {  
    
    var username = document.getElementById('username').value;  
    var password = document.getElementById('password').value;  
  
    var user = {  
        username: 'admin',  
        password: '123'   
    };  
  
    if (username === user.username && password === user.password) {  
        window.location.href = 'shop.html';  
    } else {  
        alert('Invalid username or password');  
    }  
});