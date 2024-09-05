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


 // Check and display the username or guest
        document.addEventListener('DOMContentLoaded', function() {
            displayUsername(); // Display the username if logged in

            // Add event listener to the "Courseware" link
            document.getElementById('coursewareLink').addEventListener('click', function(event) {
                const username = getCookie('username');
                if (!username) {
                    event.preventDefault(); // Prevent the link from redirecting
                    alert('Please register');
                    window.location.href = 'login.html'; // Redirect to the registration/login page
                }
            });
        });

        // Display username or guest in the "user-info" section
        function displayUsername() {
            const username = getCookie('username');
            const userInfoDiv = document.getElementById('user-info');
            if (username) {
                userInfoDiv.innerHTML = `Welcome, ${username}`;
            } else {
                userInfoDiv.innerHTML = `<a href="login.html" class="login-link">Login & Sign up</a>`;
            }
        }

        // Set a cookie
        function setCookie(cookieName, cookieValue, expirationDays) {
            const d = new Date();
            d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000)); // Expiration time
            const expires = "expires=" + d.toUTCString();
            document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
        }

        // Get a cookie by name
        function getCookie(cookieName) {
            const name = cookieName + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(';');
            for (let i = 0; i < cookieArray.length; i++) {
                let cookie = cookieArray[i].trim();
                if (cookie.indexOf(name) === 0) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
            return "";
        }


function redirectToRegister() {
  window.location.href = 'Register.html';
}

function register() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    // You can add your registration logic here
    if (username && password) {
        // Assuming registration is successful, redirect to login page
        alert("Registration successful!");
        window.location.href = 'login.html'; // Redirects to the login page
    } else {
        alert("Please enter a valid username and password.");
    }
}
