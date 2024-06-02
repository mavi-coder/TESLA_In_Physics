const accounts = [{ email: "example@gmail.com", password: "1234" },
                  { email: "example2@gmail.com", password: "4321"},
                  { email: "example3@gmail.com", password: "1324"} 
];

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = accounts.find(account => account.email === email && account.password === password);
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
