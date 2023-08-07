document.getElementById("emailAdd").addEventListener("input", checkemailAdd);
function checkemailAdd(event) {
    let checkEmails = event.target.value
    let erMsg = document.getElementById("emailMessage");
    if (checkEmails != document.getElementById("confirmEmail").value) {
        erMsg.innerText = "Emails do not match";
    }
    else {
        erMsg.innerText = "";
    }
};

document.getElementById("confirmEmail").addEventListener("input", checkConfirmEmail);
function checkConfirmEmail(event) {
    let checkEmails = event.target.value
    let erMsg = document.getElementById("emailMessage");
    if (checkEmails != document.getElementById("emailAdd").value) {
        erMsg.innerText = "Emails do not match";
    }
    else {
        erMsg.innerText = "";
    }
};

function checkEmail() {
    if (emailAdd != confirmEmail) {
        alert("Emails do not match. Form has not been submitted.")
        return false;
    }
    else {
        return true;
    }
}; 
