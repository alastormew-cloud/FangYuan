document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const img = document.createElement('img');
            img.src = this.src;
            lightbox.innerHTML = ''; // Clear previous content
            lightbox.appendChild(img);
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });
});