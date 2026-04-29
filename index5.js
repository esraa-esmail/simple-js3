// //login
let logemail = document.getElementById('logemail');
let logpass = document.getElementById('logpass');
let logerror = document.getElementById('logerror');
let logbtn = document.getElementById('logbtn');
logbtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (validation()) {
        logerror.innerHTML = 'login success'
        logerror.style.color = 'green'
        setTimeout(() => {
            window.location.href = 'home.html'
        }, 2000);
    }
})
function validation() {

    let email = logemail.value.trim()
    let pass = logpass.value.trim()
    let storedemail = localStorage.getItem('email')
    let storedpass = localStorage.getItem('password')

    if (email === '' || pass === '') {
        logerror.innerHTML = 'login fail'
        logerror.style.color = 'red'

        return false

    }

    if (storedemail === email && storedpass === pass) {
        logerror.innerHTML = 'login success'
        logerror.style.color = 'green'
        return true
    }
    else {
        logerror.innerHTML = 'login fail'
        logerror.style.color = 'red'

        return false
    }
}




