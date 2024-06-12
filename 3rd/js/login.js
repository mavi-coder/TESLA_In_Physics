const accounts = [{ phone: "01066258336", password: "f1g6n" },
                
];

function login() {
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const user = accounts.find(account => account.phone === phone  && account.password === password);
    if (user) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.body.style.display = 'block';
    } else {
        alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.display = 'block';
});
