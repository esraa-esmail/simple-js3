let regname = document.getElementById('regname');
let regemail = document.getElementById('regemail');
let regpass = document.getElementById('regpass');
let regerror = document.getElementById('regerror');
let regbtn = document.getElementById('regbtn');
regbtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (validation(regemail) && validation(regname) && validation(regpass)) {

        localStorage.setItem('username', regname.value.trim())
        localStorage.setItem('email', regemail.value.trim())
        localStorage.setItem('password', regpass.value.trim())
        regerror.style.color = 'green'
        regerror.innerHTML = 'regtration success'
        setTimeout(() => {
            window.location.href = 'login.html'
        }, 2000);
    }
    else {
        regerror.style.color = 'red'
        regerror.innerHTML = 'regtration fail'
    }


})
function validation(element) {
    let text = element.value
    let regex = {
        regname: /^[a-zA-Z ]{3,}$/,          // اسم 3 حروف أو أكتر
        regemail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // إيميل
        regpass: /^.{6,}$/
    };

    if (text === '') {
        regerror.innerHTML = 'regtration fail'
        regerror.style.color = 'red'
        element.focus()
        return false
    }
    if (regex[element.id].test(text)) {
        regerror.style.color = 'green'
        regerror.innerHTML = 'regtration success'

        return true
    }
    else {
        regerror.innerHTML = 'regtration fail'
        regerror.style.color = 'red'
        element.focus()
        return false
    }
}

