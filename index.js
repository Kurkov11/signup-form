function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
document.getElementById('claim-btn').onclick = function(){
    var isError = false;

    if(document.getElementById('fname-input').value == ''){
        document.getElementById('fname-empty').style.display = 'block';
        document.getElementById('fname-input').style.backgroundImage = 'url(images/icon-error.svg)';
        document.getElementById('fname-input').style.border = '0.5px solid red';
        document.getElementById('fname-input').placeholder = '';
        isError = true;
    }else{
        document.getElementById('fname-empty').style.display = 'none';
        document.getElementById('fname-input').style.backgroundImage = 'none';
        document.getElementById('fname-input').style.border = '0.5px solid hsl(246, 25%, 77%)';
        document.getElementById('fname-input').placeholder = 'First Name';
    }
    if(document.getElementById('lname-input').value == ''){
        document.getElementById('lname-empty').style.display = 'block';
        document.getElementById('lname-input').style.backgroundImage = 'url(images/icon-error.svg)';
        document.getElementById('lname-input').style.border = '0.5px solid red';
        document.getElementById('lname-input').placeholder = '';
        isError = true;
    }else{
        document.getElementById('lname-empty').style.display = 'none';
        document.getElementById('lname-input').style.backgroundImage = 'none';
        document.getElementById('lname-input').style.border = '0.5px solid hsl(246, 25%, 77%)';
        document.getElementById('lname-input').placeholder = 'Last Name';
    }
    if(document.getElementById('email-input').value == ''){
        document.getElementById('email-empty').style.display = 'block';
        document.getElementById('email-wrong').style.display = 'none';
        document.getElementById('email-input').style.backgroundImage = 'url(images/icon-error.svg)';
        document.getElementById('email-input').style.border = '0.5px solid red';
        document.getElementById('email-input').placeholder = '';
        isError = true;
    }else if(! isEmail(document.getElementById('email-input').value)){
        document.getElementById('email-wrong').style.display = 'block';
        document.getElementById('email-empty').style.display = 'none';
        document.getElementById('email-input').style.backgroundImage = 'url(images/icon-error.svg)';
        document.getElementById('email-input').style.border = '0.5px solid red';
        document.getElementById('email-input').style.color = 'red';
        document.getElementById('email-input').placeholder = '';
        isError = true;
    }else{
        document.getElementById('email-empty').style.display = 'none';
        document.getElementById('email-wrong').style.display = 'none';
        document.getElementById('email-input').style.backgroundImage = 'none';
        localStorage.setItem("email-storage", document.getElementById('email-input').value);
        document.getElementById('email-input').style.border = '0.5px solid hsl(246, 25%, 77%)';
        document.getElementById('email-input').style.color = 'black';
        document.getElementById('email-input').placeholder = 'Email';
    }
    if(document.getElementById('password-input').value == ''){
        document.getElementById('password-empty').style.display = 'block';
        document.getElementById('password-input').style.backgroundImage = 'url(images/icon-error.svg)';
        document.getElementById('password-input').style.border = '0.5px solid red';
        document.getElementById('password-input').placeholder = '';
        isError = true;
    }else{
        document.getElementById('password-empty').style.display = 'none';
        document.getElementById('password-input').style.backgroundImage = 'none';
        document.getElementById('password-input').style.border = '0.5px solid hsl(246, 25%, 77%)';
        document.getElementById('password-input').placeholder = 'Password';
    }
    if(isError == false){
        console.log(localStorage.getItem("email-storage"));
        window.location.href = 'index2.html';
    }
};