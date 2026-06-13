/* =====================================
   EMAIL MASKING
===================================== */

const maskEmailInput =
document.querySelector("#mask-email-input");

const maskBtn =
document.querySelector("#mask-btn");

const maskOutput =
document.querySelector("#mask-output");


function maskEmail(email) {

    const [username, domainName] =
        email.split("@");

    const maskedUsername =
        username
        .slice(0, 4)
        .padEnd(username.length, "*");

    return `${maskedUsername}@${domainName}`;
}


maskBtn.addEventListener("click", () => {

    const email =
        maskEmailInput.value.trim();

    if (!email) {

        maskOutput.textContent =
            "Please enter an email";

        return;
    }

    maskOutput.textContent =
        maskEmail(email);
});


/* =====================================
   URL GENERATOR
===================================== */

const urlInput =
document.querySelector("#url-input");

const urlBtn =
document.querySelector("#url-btn");

const urlOutput =
document.querySelector("#url-output");


function inputUrl(domain) {

    return `https://${domain}.com`;
}


urlBtn.addEventListener("click", () => {

    const domain =
        urlInput.value.trim();

    if (!domain) {

        urlOutput.textContent =
            "Please enter a domain";

        return;
    }

    urlOutput.textContent =
        inputUrl(domain);
});


/* =====================================
   EMAIL VALIDATION
===================================== */

const validateEmailInput =
document.querySelector(
    "#validate-email-input"
);

const validateBtn =
document.querySelector("#validate-btn");

const validateOutput =
document.querySelector(
    "#validate-output"
);


function isValidEmail(email) {

    return email.includes("@")
        && email.includes(".");
}


validateBtn.addEventListener("click", () => {

    const email =
        validateEmailInput.value.trim();

    if (!email) {

        validateOutput.textContent =
            "Please enter an email";

        return;
    }

    const result =
        isValidEmail(email);

    validateOutput.textContent =
        result
        ? "✅ Valid Email"
        : "❌ Invalid Email";
});