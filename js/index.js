document.getElementById("year").textContent = new Date().getFullYear();
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = menuIcon.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = menuIcon.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const imgs = document.querySelectorAll('.carousel-img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;

    function showImage(idx) {
        imgs.forEach((img, i) => {
            img.style.display = i === idx ? 'block' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        current = (current - 1 + imgs.length) % imgs.length;
        showImage(current);
    });

    nextBtn.addEventListener('click', () => {
        current = (current + 1) % imgs.length;
        showImage(current);
    });

    showImage(current);
setInterval(() => {
        current = (current + 1) % imgs.length;
        showImage(current);
    }, 10000);
});
