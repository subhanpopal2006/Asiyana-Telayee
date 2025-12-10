// Loader نمایش داده می‌شود، بعد از مدت زمان مشخص fade out
setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0"; // شروع fade out نرم و طولانی

    // بعد از 2 ثانیه fade out، loader مخفی و محتوای اصلی نشان داده شود
    setTimeout(() => {
        loader.style.display = "none";
        document.getElementById("content").style.display = "block";
        document.body.style.overflow = "auto";
    }, 2000); // هماهنگ با transition CSS
}, 3000); // زمان کل لودینگ قبل از fade out