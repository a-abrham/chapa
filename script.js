function setTxRef() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    var randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;


    var txRef = firstName + '-' + lastName + '-' + currentDate + '-' + randomNum;
    document.getElementById('txRefHidden').value = txRef;
}