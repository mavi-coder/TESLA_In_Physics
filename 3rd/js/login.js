 function login() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email === 'example@gmail.com' && password === '1234') {
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