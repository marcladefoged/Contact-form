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

        let success = true

        // Username validation
        if (usernameValue === '') {
            setError(username, 'Username is required!')
            success = false;
        } else {
            setSuccess(username);
        }

        // Email validation
        if (emailValue === '') {
            setError(email, 'Email is required!')
            success = false;
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Please provide a valid email!')
            success = false;
        } else if (!emailValue.match("cphbusiness") || (emailValue.match("Cphbusiness"))) {
            setError(email, 'Please use a Cphbusiness email!')
            success = false;
        } else {
            setSuccess(email);
        }
        
        // Longmessage validation
        if (longmessageValue === '') {
            setError(longmessage, 'Message is required!')
            success = false;
        } else if (longmessageValue.length < 8) {
            setError(longmessage, 'Message must be atleast 8 characters long!')
            success = false;
        } else {
            setSuccess(longmessage);
        }

        // Can not be submitted on Friday, Saturday or Sundays validation 
        let currentDate = new Date();
        let dayOfWeek = currentDate.getDay();

        if (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0) {
            // alert ("Sorry, you can not submit this contact form on Fridays, Saturdays or Sundays. Please try again monday!");
            setError(longmessage, 'Sorry! you can not submit this contact form on Fridays, Saturdays or Sundays. Please try again monday!');
            success = false;
        } else {
            setSuccess(longmessage);
        }

        console.log(dayOfWeek);
        
        if (success) {
            sendMail ()
        }
        
};

function sendMail () {
    let params = {
        username : document.getElementById("username").value,
        email : document.getElementById("email").value,
        message : document.getElementById("longmessage").value
    }
    emailjs.send("service_dt3ualk", "template_ve56v1e", params).then(function (res) {
        alert("Success! Thank you for reaching out! Your email has been sent");
    }) 
}














// TODO: The email should be a Cphbusiness email. Use a custom javascript function for this validation.

// TODO: All the input fields should not be empty. 

// TODO: You should consider that trailing and leading whitespace shall be removed. 

// TODO: The message input should have a minimum length of 8 characters. 

// TODO: You shall restrict the form, so no contact forms can be submitted on Friday, Saturday or Sundays. And give the user a meaningful message if they try to do so. 

// Når contact er validderet og sendt kom med alert der siger "Email has been sent"

// TODO: Use EmailJS