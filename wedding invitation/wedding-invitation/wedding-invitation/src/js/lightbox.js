document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `<span class="close">&times;</span><img class="lightbox-img" src="" alt="">`;
    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.querySelector('.lightbox-img').src = this.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.querySelector('.close').addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });
});