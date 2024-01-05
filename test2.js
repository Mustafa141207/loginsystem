var mailsLog = [];
mailsLog = JSON.parse(localStorage.getItem("mails"));
console.log(mailsLog);
function show() {
    var cartona = '';
    for (var i = 0; i < mailsLog.length; i++){
        cartona = `


        <p class=" fs-2 fw-bold ">hello your name is ${mailsLog[i].sName}</p>
        
        
        `;
        document.querySelector('#final').innerHTML = cartona;
    }
}
show();
