const form = document.querySelector('form');
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const longmessage = document.querySelector("#longmessage");
const sendButton = document.querySelector("#send-button");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const isValidEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

const  validateInputs = () => {
    // getting the values from the inputs
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const longmessageValue = longmessage.value.trim();

        // Username validation
        if (usernameValue === '') {
            setError(username, 'Username is required!')
        } else {
            setSuccess(username);
        }

        // Email validation
        if (emailValue === '') {
            setError(email, 'Email is required!')
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Please provide a valid email!')
        } else if (!emailValue.match("cphbusiness") || (emailValue.match("Cphbusiness"))) {
            setError(email, 'Please use a Cphbusiness email!')
        } else {
            setSuccess(email);
        }
        
        // Longmessage validation
        if (longmessageValue === '') {
            setError(longmessage, 'Message is required!')
        } else if (longmessageValue.length < 8) {
            setError(longmessage, 'Message must be atleast 8 characters long!')
        } else {
            setSuccess(longmessage);
        }


        // Can not be submitted on Friday, Saturday or Sundays validation 
};












// sendButton.addEventListener('click', (e) => {
//     console.log('Email has been sent!');

//     if (emailInput.value === '' || emailInput.value === null) {
//         // errorMessage.push('Please insert an email!')
//         emailInput.classList.add("errorInput");
//         console.log("Email is required!")
//     } 
    
//     if (messageInput.value.length <= 8) {
//         messageInput.classList.add("errorInput");
//         console.log('Message must be longer than 8 characters!')
//     }

//     if (messageInput.value.length >= 400) {
//         console.log('Message cannot be longer than 400 characters!')
//     }

//     // validateCphbusiness();
// })

// TODO: The email should be a Cphbusiness email. Use a custom javascript function for this validation.

// function validateCphbusiness () {
//     if (email.value.match("cphbusiness") || (email.value.match("Cphbusiness"))) {
//         email.classList.add("correctInput");
//         console.log(email.value);
//         return true
        
//     } else {
//         email.classList.add("errorInput");
//         console.log("this is not a Cphbusiness email!")
//         return false
//     }
// }

// TODO: All the input fields should not be empty. 

// TODO: You should consider that trailing and leading whitespace shall be removed. 

// TODO: The message input should have a minimum length of 8 characters. 

// TODO: You shall restrict the form, so no contact forms can be submitted on Friday, Saturday or Sundays. And give the user a meaningful message if they try to do so. 

// Når contact er validderet og sendt kom med alert der siger "Email has been sent"

// TODO: Use EmailJS