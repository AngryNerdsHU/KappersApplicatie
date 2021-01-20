// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        loginCheck = true;
        console.log('user logged in: ', user);
        window.location.assign("../afsprakenOverzicht/afsprakenOverzicht.html");
    } else {
        console.log('user logged out');
    }
});

// login
const loginForm = document.querySelector('#form');
let loginCheck = false;
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        // close the signup modal & reset form
        loginForm.reset();
        loginCheck = true;
    });
    setTimeout(() => {
        if (loginCheck == false) {
            alert("Gebruikersnaam en/of wachtwoord niet herkend");
            console.log(loginCheck);
        }
    }, 1000);
});