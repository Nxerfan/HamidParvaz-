document.querySelectorAll('.Items .content').forEach(item => {
        item.addEventListener('click', function() {
            // حذف کلاس active از تمام گزینه‌ها
            document.querySelectorAll('.Items .content').forEach(el => {
                el.classList.remove('active');
            });
            
            // اضافه کردن کلاس active به گزینه‌ای که روی آن کلیک شده
            this.classList.add('active');
        });
    });
    
    // اختیاری: فعال کردن گزینه اول به صورت پیش‌فرض هنگام لود صفحه
    window.onload = () => {
        const firstItem = document.querySelector('.Items .content');
        if(firstItem) firstItem.classList.add('active');
    };