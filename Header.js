document.querySelectorAll('.Items .content').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.Items .content').forEach(el => {
                el.classList.remove('active');
            });

            this.classList.add('active');
        });
    });

    window.onload = () => {
        const firstItem = document.querySelector('.Items .content');
        if(firstItem) firstItem.classList.add('active');
    };