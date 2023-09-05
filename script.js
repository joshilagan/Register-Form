const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const checkbox = document.querySelector('.checkbox')
const submit = document.querySelector('.submit')

//create input event listeners that will color the input boxes's outlines to blue if clicked, then return the color back to the original if clicked outside the input boxes
const firstName = () => {
    fname.style.outlineStyle = 'solid';
    fname.style.outlineWidth = '3px';
    fname.style.outlineColor = 'blue';
    fname.style.border = 'none';
}
fname.addEventListener('focus', firstName);

const fname1 = ()=>{
    fname.style.outlineStyle = 'none';  
    fname.style.border = '2px solid black'
}
fname.addEventListener('blur', fname1);


const lastname = () => {
    console.log('lastname');
    lname.style.outlineStyle = 'solid';
    lname.style.outlineWidth = '3px';
    lname.style.outlineColor ='blue';
    lname.style.border = 'none';
}
lname.addEventListener('focus', lastname)

const lastname1 = () =>{
    lname.style.outlineStyle = 'none'
    lname.style.border = '2px solid black'
}
lname.addEventListener('blur', lastname1)


const emails = () => {
    email.style.outlineStyle = 'solid'
    email.style.outlineWidth = '3px'
    email.style.outlineColor = 'blue'
    email.style.border = 'none'
}
email.addEventListener('focus', emails)

const email1 = () =>{
    email.style.border = '2px solid black'
    email.style.outlineStyle = 'none'
}
email.addEventListener('blur', email1)

const passed = () => {
    password.style.outlineStyle = 'solid'
    password.style.outlineWidth = '3px'
    password.style.outlineColor = 'blue'
    password.style.border = 'none'
}
password.addEventListener('focus', passed)
const passing = () => {
    password.style.outlineStyle = 'none'
    password.style.border = '2px solid black'
}
password.addEventListener('blur', passing)

const confirm = () => {
    confirmPassword.style.outlineStyle = 'solid'
    confirmPassword.style.outlineWidth = '3px'
    confirmPassword.style.outlineColor = 'blue'
    confirmPassword.style.border = 'none'
}
confirmPassword.addEventListener('focus', confirm)

const confirmp = () => {
    confirmPassword.style.outlineStyle = 'none'
    confirmPassword.style.border = '2px solid black'

    //for password matching, if the value in confirm password input doesn't match with the value in password input, display an alert

    if(password.value !== confirmPassword.value){
        alert(`Password doesn't match`);
    }

}
confirmPassword.addEventListener('blur', confirmp)

//create an input event listener that switches the submit button's 'disabled' attribute to false whenever the checkbox is ticked and vice versa
//use disabled = false
const checking = () => {
    checkbox.checked === true ? submit.disabled = false : submit.disabled = true;
}
checkbox.addEventListener('input', checking)



