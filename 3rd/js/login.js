window.onload = function() {
    const currentURL = window.location.href;

    // إذا كان المستخدم قد سجل دخوله
    if (localStorage.getItem('userEmail')) {
        // إذا كان المستخدم في صفحة تسجيل الدخول، وجهه إلى الصفحة الشخصية
        if (currentURL === 'https://wael-abd-alwhab.github.io/TESLA_In_Physics/3rd/login.html') {
            window.location.href = 'https://wael-abd-alwhab.github.io/TESLA_In_Physics/3rd/home.html';
        }
    } else {
        // إذا لم يكن قد سجل الدخول ولم يكن بالفعل في صفحة تسجيل الدخول، وجهه إلى صفحة تسجيل الدخول
        if (currentURL !== 'https://wael-abd-alwhab.github.io/TESLA_In_Physics/3rd/login.html') {
            window.location.href = 'https://wael-abd-alwhab.github.io/TESLA_In_Physics/3rd/login.html';
        }
    }
};

// دالة تسجيل الدخول
function login(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    fetch('data.json') // افترض أن ملف JSON هو data.json
        .then(response => response.json())
        .then(data => {
            // البحث عن المستخدم في ملف JSON
            const user = data.find(user => user.email === emailInput && user.password === passwordInput);

            if (user) {
                localStorage.setItem('userEmail', emailInput);
                window.location.href = 'https://wael-abd-alwhab.github.io/TESLA_In_Physics/3rd/home.html'; // التوجيه إلى الصفحة الشخصية
            } else {
                document.getElementById('errorMessage').innerText = 'البريد الإلكتروني أو كلمة المرور غير صحيحين!';
            }
        })
        .catch(error => {
            console.error('خطأ في تحميل ملف JSON:', error);
        });
}
