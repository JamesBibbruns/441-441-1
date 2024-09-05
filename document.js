/'James Renhuaiyuan 223190623'/
const addButton = document.querySelectorAll('.add');
const cartTable = document.getElementById('cart-table');
const cartTotal = document.getElementById('cart-total');
let totalPrice = 0;

addButton.forEach(button => {
  button.addEventListener('click', function() {
    const course = this.parentNode.querySelector('h2').textContent;
    const price = parseInt(this.parentNode.querySelector('p').textContent);
    const quantity = parseInt(this.parentNode.querySelector('.quantity-input').value);
    const total = price * quantity;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${course}</td>
      <td>${quantity}</td>
      <td>$${total.toFixed(2)}</td>
      <td><button class="remove-btn">Remove</button></td>
    `;
    cartTable.appendChild(row);

    totalPrice += total;
    cartTotal.textContent = totalPrice.toFixed(2);

    // Add event listener to the "Remove" button
    const removeButton = row.querySelector('.remove-btn');
    removeButton.addEventListener('click', function() {
      cartTable.removeChild(row);
      totalPrice -= total;
      cartTotal.textContent = totalPrice.toFixed(2);
    });
  });
});

function checkout() {
  alert(`Total amount to pay: $${totalPrice.toFixed(2)}`);
  // Additional checkout logic can be added here
}

function clearCart() {
  cartTable.innerHTML = '';
  totalPrice = 0;
  cartTotal.textContent = totalPrice.toFixed(2);
}



        function addTask() {
    const taskInput = document.getElementById('new-task');
    const newTask = taskInput.value.trim();

    if (newTask) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        listItem.textContent = newTask;
        listItem.onclick = function() {
            this.classList.toggle('completed');
        };
        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input after adding task
    } else {
        alert('Please enter a task.');
    }
}

// Optional: Add a way to delete tasks
document.getElementById('task-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentNode.remove();
    }
});

// Optional: Add a button to each task for deletion
function addDeleteButton(taskItem) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskItem.remove();
    };
    taskItem.appendChild(deleteButton);
}

        const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let operator = null;
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (isNaN(value) && value !== '.') {
            handleOperator(value);
        } else {
            handleNumber(value);
        }
    });
});

function handleNumber(value) {
    currentInput += value;
    display.value = currentInput;
}

function handleOperator(value) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        const result = performCalculation(operator, firstOperand, parseFloat(currentInput));
        display.value = result;
        firstOperand = result;
    }

    operator = value;
    currentInput = '';
}

function performCalculation(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return;
    }
}


   function validateForm() {
        // Get form elements
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const course = document.getElementById('course').value;
        const age = document.getElementById('age').value;
        const major = document.getElementById('major').value;
        const gender = document.getElementById('gender').value;

        // Basic validation checks
        if (!name || !email || !course || !age || !major || !gender) {
            alert('Please fill in all required fields.');
            return false;
        }

        // Age validation
        if (age < 1 || age > 100) {
            alert('Please enter a valid age between 1 and 100.');
            return false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // If all validations pass
        alert('Form submitted successfully!');
        window.location.href = 'index.html';
        return false; // Prevent default form submission
    }


 // 定义全局变量
var usernameCookieName = "username";
var passwordCookieName = "password";

// 获取cookie
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// 设置cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// 检查cookie中是否有用户名
function checkCookie() {
    var username = getCookie(usernameCookieName);
    if (username) {
        document.getElementById("login-signup-link").innerHTML = "Welcome " + username + " & Sign out";
    }
}

// 导航栏点击事件
function navigationClick() {
    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            if (link.href.includes("courseware.html") && !getCookie(usernameCookieName)) {
                event.preventDefault();
                window.location.href = "login.html";
            }
        });
    });
}

// 注册表单提交事件
function registerFormSubmit() {
    document.getElementById("register-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        setCookie(usernameCookieName, username, 7);
        setCookie(passwordCookieName, password, 7);
        window.location.href = "login.html";
    });
}

// 登录表单提交事件
function loginFormSubmit() {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("login-username").value;
        var password = document.getElementById("login-password").value;
        if (username === getCookie(usernameCookieName) && password === getCookie(passwordCookieName)) {
            window.location.href = "index.html";
        } else {
            alert("Incorrect username or password");
        }
    });
}

// 登录页面注册按钮点击事件
function loginRegisterButtonClick() {
    document.querySelector("#login-form button:not([type='submit'])").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "register.html";
    });
}

// 首页导航栏点击事件
function indexNavigationClick() {
    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            if (link.href.includes("courseware.html") && !getCookie(usernameCookieName)) {
                event.preventDefault();
                window.location.href = "login.html";
            } else if (link.href.includes("login.html")) {
                event.preventDefault();
                window.location.href = "login.html";
            }
        });
    });
}

// 首页点击登录注册链接
function indexLoginSignupClick() {
    document.getElementById("login-signup-link").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "login.html";
    });
}

// 首页检查登录状态
function indexCheckLogin() {
    checkCookie();
    indexNavigationClick();
    indexLoginSignupClick();
}

// 首页初始化
function initIndexPage() {
    indexCheckLogin();
}

// 注册页面初始化
function initRegisterPage() {
    registerFormSubmit();
}

// 登录页面初始化
function initLoginPage() {
    loginFormSubmit();
    loginRegisterButtonClick();
}

// 根据页面加载不同的初始化函数
function initPage() {
    var path = window.location.pathname;
    if (path.includes("index.html")) {
        initIndexPage();
    } else if (path.includes("register.html")) {
        initRegisterPage();
    } else if (path.includes("login.html")) {
        initLoginPage();
    } else {
        navigationClick(); // 确保在其他页面也调用 navigationClick 函数
    }
}

// 页面加载完成后初始化
window.onload = initPage;
