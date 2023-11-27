let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("password2");
let form = document.querySelector("#form");

function showError (input, message) {
    const formControl = input.parentElement
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerHTML = message;
}

function showSuccess (input) {
    const formControl = input.parentElement
    formControl.className = "form-control success";
}

function checkEmail(input){
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(re.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, "Email is not vailed");
    }
}

function checkInputLength(input,min,max){
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} you must be at least ${min} Characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} you must be less then ${max} Characters`);
    } else {
        showSuccess(input);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}




function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Password is not same")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputLength(username, 3, 20)
    checkInputLength(password, 6, 30)
    checkEmail(email);
    checkPasswordMatch(password,password2)
})
