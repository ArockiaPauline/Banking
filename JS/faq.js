let askedques = document.querySelectorAll('.question');

    askedques.forEach(header => {
    header.addEventListener('click', faq);
    });

    function faq() {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    let icon = this.querySelector('i');
    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    } else {
        content.style.display = 'block';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    }
    }