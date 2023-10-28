
var email = document.getElementById('Email');

var password = document.getElementById('Password');


const login = () => {

    if(email.value == "admin@admin.com" && password.value ==="123456"){
        alert("login Seccussefull")
        document.getElementById('login').action="./index.html"
    }else(
        alert("invalid user name and password")
       
    )
    
}
