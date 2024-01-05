var loginBtn = document.querySelector("#loginBtn");
var loginEmail = document.querySelector("#loginEmail");
var loginPass = document.querySelector("#loginPass");
var sucessLogin = document.querySelector("#sucessLogin");
var alertLogin = document.querySelector("#alertLogin");
var alert = document.querySelector("#alert");
var xx = document.querySelector('#xx');
var final = document.querySelector('#final');
console.log(final);
var mailsLog = [];
mailsLog = JSON.parse(localStorage.getItem("mails"));


console.log(mailsLog)

function check() {

    if (loginPass.value == "" && loginEmail.value == "") {
        alert.classList.replace('d-none','d-block')
      
  } else {
    for (var i = 0; i < mailsLog.length; i++) {
      if (  mailsLog[i].sPass == loginPass.value && mailsLog[i].sEmail == loginEmail.value ) {
        sucessLogin.classList.replace("d-none", "d-block");
        location.replace("./home.html");
        loginEmail.value = "";
        loginPass.value = "";
      } else if (mailsLog[i].sPass !== loginPass.value && mailsLog[i].sEmail !== loginEmail.value) {
        alertLogin.classList.replace("d-none", "d-block");
        loginEmail.value = "";
        loginPass.value = "";
      }
    }
     }
}
loginBtn.addEventListener("click", function () {
    check();
});




// sEmail: 'mo123', sPass: '123'
