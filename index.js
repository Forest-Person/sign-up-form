let pass = document.querySelector('#passWord')
let passConfirm = document.querySelector('#passwordConfirm')


passConfirm.addEventListener('focusout', function(){

if(pass.value != passConfirm.value) {

alert('Passwords do not match')
passConfirm.value = ''
}}
)