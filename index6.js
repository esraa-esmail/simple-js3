let welcom = document.getElementById('welcom')
let wel = localStorage.getItem('username')
welcom.innerHTML = `welcom,${wel}`