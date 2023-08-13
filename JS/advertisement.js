const popupContainer = document.querySelector('.popup-ad');
        const closeBtn = document.querySelector('.close-btn1');


        function hidePopup() {
        popupContainer.style.display = 'none';
        window.removeEventListener('load', showPopup);
        }

        function showPopup() {
        popupContainer.style.display = 'flex';
        }

        closeBtn.addEventListener('click', hidePopup);