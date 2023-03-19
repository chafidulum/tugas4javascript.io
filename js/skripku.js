function login(){
    let frm = window.document.getElementById("formLogin")
    let username = frm.email.value;
    let password = frm.passwd.value;

     if (username === 'mimin' && password === 'mimin123') {
    alert('Selamat Datang Mimin, Anda Administrator');
  } else if (username === 'budi' && password === 'budi123') {
    alert('Selamat Datang Budi, Anda Operator');
  } else {
    alert('Maaf Anda Gagal Login');
  }
}
