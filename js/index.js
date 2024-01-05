let signName = document.querySelector("#signName");
let signEmail = document.querySelector("#signEmail");
let signPassword = document.querySelector("#signPassword");
let signBtn = document.querySelector("#signBtn");
let alertSign1 = document.querySelector('#alertSign1');
let alertOk = document.querySelector("#alertOk");
let mails = [];

function store() {
  if ((signName.value || signEmail.value || signPassword.value) !=='') {
     var mail = {
       sName: signName.value,
       sEmail: signEmail.value,
       sPass: signPassword.value,
     };
     mails.push(mail);
     localStorage.setItem("mails", JSON.stringify(mails));
    console.log(mails, localStorage.getItem("mails"));
    correct();
    clear();
  } else {
    incorrect();
  }
  
};
signBtn.addEventListener('click', function () {
  store();
});

function clear() {
  signName.value = '';
  signEmail.value = '';
  signPassword.value = '';
};
function correct() {
  alertSign1.classList.add('d-none');
  alertOk.classList.replace('d-none','d-block')
};
function incorrect() {
  alertSign1.classList.replace("d-none", "d-block");
};






