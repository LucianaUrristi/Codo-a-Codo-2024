document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const form = document.querySelector(".formcontacto__form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = form.querySelector('input[name="nombre"]').value.trim();
    const apellido = form.querySelector('input[name="apellido"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const turno = form.querySelector('select[name="turno"]').value;
    const ageRanges = form.querySelectorAll('input[name="ageRange"]:checked');

    if (
        nombre === "" ||
        apellido === "" ||
        email === "" ||
        ageRanges.length === 0
    ) {
    showError("Por favor, completa los campos obligatorios.");
        return;
    }

    const user = {
        nombre,
        apellido,
        email,
        turno,
        ageRange: Array.from(ageRanges).map((checkbox) => checkbox.value),
    };
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    form.reset();
    });

    const checkboxes = form.querySelectorAll('input[name="ageRange"]');
    checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
    if (this.checked) {
        checkboxes.forEach(function (otherCheckbox) {
        if (otherCheckbox !== checkbox) {
            otherCheckbox.disabled = true;
        }
        });
    } else {
        checkboxes.forEach(function (otherCheckbox) {
        otherCheckbox.disabled = false;
        });
    }
    });
    // const cat = document.getElementById('chachamaru');
    // const meow = document.getElementById('meow');
    // e.preventDefault();
    // cat.classList.add('fade-out');
    // cat.addEventListener("animationend",()=>{
    //     cat.classList.add("hidden");
    //     meow.classList.add("block");    
    // });
});

function showError(message) {
    const error = document.querySelector(".error");
    error.textContent = message;

    setTimeout(() => {
    error.textContent = "";
    }, 2000);
    }
});
// function difuminarImagen(e) {
//     event.preventDefault();
//     let imagenChachamaru = document.getElementById('chachamaru__image');
//     imagenChachamaru.classList.add('fadeOut');
//     console.log(imagenChachamaru.classList);

//     setTimeout(function () {
//         imagenChachamaru.classList.remove('fadeOut');
//         document.querySelector('.formcontacto__form').reset();
//         document.querySelector('.formcontacto__botao').style.backgroundColor = '#F6BBBE'; // Restablecer el color de fondo del botón
//         document.querySelector('.formcontacto__botao').style.color = '#C56742'; // Restablecer el color del texto del botón
//     }, 2000);
//};


// const form = document.getElementById('form_id');

// form.addEventListener('submit', e =>{
//     const cat = document.getElementById('chachamaru');
//     const meow = document.getElementById('meow');
//     e.preventDefault();
//     cat.classList.add('fade-out');
//     cat.addEventListener("animationend",()=>{
//         cat.classList.add("hidden");
//         meow.classList.add("block");
//     });
// });

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
