
let qrCodeDB = {
    pass_number: 'SD97FSDF',
    surname: 'JACKSON'
};

let passNumber = document.getElementById('pass-number');
let firstName = document.getElementById('first-name');
let surname = document.getElementById('surname');
let firstNamePayment = document.getElementById('first-name-payment-info');
let surnamePayment = document.getElementById('surname-payment-info');
let email = document.getElementById('email');
let qrCodeNumberContainer = document.getElementById('qr-code-container');

function autofillPdf(passNumberDB, firstNameDB, surnameDB, firstNameDB, surnameDB, emailDB, qrCodeDb) {
    passNumber.innerHTML = passNumberDB;
    firstName.innerHTML = firstNameDB;
    surname.innerHTML = surnameDB;
    firstNamePayment.innerHTML = firstNameDB;
    surnamePayment.innerHTML = surnameDB;
    email.innerHTML = emailDB;

    let srtQrCodeContainerDB = JSON.stringify(qrCodeDB);
    // new constructor establishes where it will go (in braces)
    let qrCode = new QRCode(qrCodeNumberContainer);
    // make the code image and places it in dom
    qrCode.makeCode(srtQrCodeContainerDB);
}

// Change the parameters to modify the output data in the pdf //
autofillPdf("SD97FSDF", "MARK", "JACKSON", "MARK", "JACKSON", "MARK@email.COM", qrCodeDB);