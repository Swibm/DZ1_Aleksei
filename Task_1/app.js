// 1) Используя регулярные выражения необходимо сделать поле для ввода эл почты и пароля

const regExpMail = /^\w+@\w+\.com|\.ru|\.info$/
const regExpPassword = /^(?=.*\d)(?=.*[a-z])/

const mailInput = document.querySelector("#username-field")
const passwordInput = document.querySelector("#password-field")
const submitButton = document.querySelector("#button-logging")
const hidePassword = document.querySelector(".hide_pass")

function mailCheck(str) {
    if(regExpMail.test(str) && str.length <=25)
    {return true}
    else {return false}
}

function passwordCheck(str) {
    if(regExpPassword.test(str) && str.length <=20 && str.length >=4)
    {return true}
    else {return false}
}


submitButton.addEventListener("click", () => {
    if(mailCheck(mailInput.value) && passwordCheck(passwordInput.value))
    {
        alert("correct credentials")
    }
    else 
    {
        alert("incorrect credentials")  
    }
})

hidePassword.addEventListener("click", () => {
    if(passwordInput.getAttribute('type') == "password")
    {
        passwordInput.setAttribute('type','text')
        hidePassword.setAttribute('src', 'pics/show_pass.png')
    }
    else 
    {
        passwordInput.setAttribute('type','password')
        hidePassword.setAttribute('src', 'pics/hide_pass.png')
    }
})