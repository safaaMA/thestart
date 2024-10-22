function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}
window?.addEventListener("scroll", reveal);

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const progressValue = circle.getAttribute('data-progress');
        if (progressValue) {
            console.log(`Setting --progress to ${progressValue}%`); // Print to console for debugging
            circle.style.setProperty('--progress', `${progressValue}%`);
        }
    });
});
document.getElementById('event-list').addEventListener('click', function (event) {
    var rightNav = document.getElementById('box-list2');
    // التبديل بين عرض القائمة الجانبية وإخفائها
    if (rightNav.style.display === 'block') {
        rightNav.style.display = 'none';
    } else {
        rightNav.style.display = 'block';
    }
    // منع انتشار الحدث لضمان عدم تفعيل كود النقر على الشاشة كلها
    event.stopPropagation();
});

document.addEventListener('click', function () {
    if (window.innerWidth < 766) {
        var rightNav = document.getElementById('right-nav');
        rightNav.style.display = 'none';
    }
});
document.addEventListener('click', function () {
        var pop = document.getElementById('pop');
        pop.style.display = 'none';
});

document.getElementById('form').addEventListener('click', function (event) {
    event.stopPropagation();
});

document.getElementById('right-nav').addEventListener('click', function (event) {
    event.stopPropagation();
});


document.getElementById('btn').addEventListener('click', function (event) {
    var pop = document.getElementById('pop');
    // التبديل بين عرض القائمة الجانبية وإخفائها
    if (pop.style.display === 'block') {
        pop.style.display = 'none';
    } else {
        pop.style.display = 'block';
    }
    // منع انتشار الحدث لضمان عدم تفعيل كود النقر على الشاشة كلها
    event.stopPropagation();
});
document.getElementById('close').addEventListener('click', function (event) {
    var pop = document.getElementById('pop');
    if (pop.style.display === 'block') {
        pop.style.display = 'none';
    } else {
        pop.style.display = 'block';
    }
    event.stopPropagation();
});
