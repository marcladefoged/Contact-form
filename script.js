const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const messageInput = document.querySelector("#message-input");
const sendButton = document.querySelector("#send-button");

sendButton.addEventListener('click', (e) => {
    // let errorMessage = []
    console.log('Email has been sent!');

    if (emailInput.value === '' || emailInput.value === null) {
        // errorMessage.push('Please insert an email!')
        emailInput.classList.add("errorInput");
        console.log("Email is required!")
    } 
    
    if (messageInput.value.length <= 8) {
        messageInput.classList.add("errorInput");
        console.log('Message must be longer than 8 characters!')
    }

    if (messageInput.value.length >= 400) {
        console.log('Message cannot be longer than 400 characters!')
    }

    validateCphbusiness();
    // clearInput ()
})

// TODO: The email should be a Cphbusiness email. Use a custom javascript function for this validation.

function validateCphbusiness () {
    if (emailInput.value.match("cphbusiness") || (emailInput.value.match("Cphbusiness"))) {
        emailInput.classList.add("correctInput");
        console.log(emailInput.value);
        return true
        
    } else {
        emailInput.classList.add("errorInput");
        console.log("this is not a Cphbusiness email!")
        return false
    }
}

// function clearInput () {
//     nameInput.classList.remove("correctInput");
//     nameInput.classList.remove("errorInput");
//     emailInput.classList.remove("correctInput");
//     emailInput.classList.remove("errorInput");
//     messageInput.classList.remove("correctInput");
//     messageInput.classList.remove("errorInput");
// }

// TODO: All the input fields should not be empty. 

// TODO: You should consider that trailing and leading whitespace shall be removed. 

// TODO: The message input should have a minimum length of 8 characters. 

// TODO: You shall restrict the form, so no contact forms can be submitted on Friday, Saturday or Sundays. And give the user a meaningful message if they try to do so. 

// Når contact er validderet og sendt kom med alert der siger "Email has been sent"

// TODO: Use EmailJS