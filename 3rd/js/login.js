// التحقق من حالة تسجيل الدخول عند تحميل الصفحة
window.onload = function() {
    // إذا كان المستخدم قد سجل دخوله، يوجه إلى الصفحة الرئيسية
    if (localStorage.getItem('userEmail')) {
        if (window.location.pathname === '/login.html') {
            window.location.href = 'home.html';
        }
    } else {
        // إذا لم يكن قد سجل الدخول، يوجه إلى صفحة تسجيل الدخول
        if (window.location.pathname !== '/login.html') {
            window.location.href = 'login.html';
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
                window.location.href = 'home.html'; // التوجيه إلى الصفحة الرئيسية
            } else {
                document.getElementById('errorMessage').innerText = 'البريد الإلكتروني أو كلمة المرور غير صحيحين!';
            }
        })
        .catch(error => {
            console.error('خطأ في تحميل ملف JSON:', error);
        });
}
