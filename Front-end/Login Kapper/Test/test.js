// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out');
        window.location.assign("../login.html");
    }
});