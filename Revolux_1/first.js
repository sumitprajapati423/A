// ---------------Contact -------------

const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        let valid = true;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');
        const messageError = document.getElementById('messageError');

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email';
            valid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address';
                valid = false;
            } else {
                emailError.textContent = '';
            }
        }

        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Please enter your phone number';
            valid = false;
        } else {
            const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
            if (!phoneRegex.test(phoneInput.value.trim())) {
                phoneError.textContent = 'Please enter a valid phone number (Format: 123-456-7890)';
                valid = false;
            } else {
                phoneError.textContent = '';
            }
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter your message';
            valid = false;
        } else {
            messageError.textContent = '';
        }

        if (!valid) {
            event.preventDefault();
        }
    });


    // ---------------------Modal button----------

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // ---------------------------------