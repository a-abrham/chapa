function setTxRef() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');

    var txRef = firstName + '-' + lastName + '-' + currentDate;
    document.getElementById('txRefHidden').value = txRef;
}