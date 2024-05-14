document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formcontacto__form');
    let users = JSON.parse(localStorage.getItem("users")) || [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nombre = form.querySelector('input[name="nombre"]').value.trim();
        const apellido = form.querySelector('input[name="apellido"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const turno = form.querySelector('select[name="formcontacto__select"]').value;
        const ageRanges = form.querySelector('input[name="radio"]:checked');

        if (nombre === "" ||
            apellido === "" ||
            email === "" ||
            ageRanges === null){
            showError("Por favor, completa los campos obligatorios.");
            return;
        }
        const cat = document.getElementById('chachamaru');
        const meow = document.getElementById('meow');
            
        cat.classList.add('fade-out');
        cat.addEventListener("animationend",(e)=>{
            cat.classList.add("hidden");
            meow.classList.add("block");    
        });

        const user = {
            nombre,
            apellido,
            email,
            turno,
            ageRanges: ageRanges.value,
        };
        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));
        form.reset();
        });

        function showError(message) {
            const error = document.querySelector(".error");
            error.textContent = message;

            setTimeout(() => {
                error.textContent = "";
            }, 2000);
        }
        
    const radioButtons = document.getElementsByName('radio');
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('click', (event) => {
            changeRadioButtonSelection(event.target);
            });
        });
    });

    function changeRadioButtonSelection(selectedRadioButton) {
        const radioButtons = document.getElementsByName('radio');
        const clickedIndex = Array.from(radioButtons).indexOf(selectedRadioButton);
        const nextIndex = (selectedIndex + 1) % radioButtons.length;
        radioButtons[nextIndex].checked = true;
    };


// vvvvvvvvv Menú hamburguesa vvvvvvvvv

const BURGER_ID = document.getElementById("burger");
const CLOSE_NAV = document.getElementById("close-nav");
const OPEN_NAV = document.getElementById("myNav");

function hide(e) {
    e.preventDefault();
    OPEN_NAV.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
    document.addEventListener("touchmove", preventScroll, { passive: false });
}
BURGER_ID.addEventListener("click", (e) => {
    hide(e);
});
CLOSE_NAV.addEventListener("click", (e) => {
    hide(e);
});
