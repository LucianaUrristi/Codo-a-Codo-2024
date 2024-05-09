const users = [];

document.addEventListener("DOMContentLoaded", () => {
    users = JSON.parse(localStorage.getItem("users"));
    const form = document.querySelector('.formcontacto__form');
  
    form.addEventListener('submit', (event) =>  {
        event.preventDefault();
        const user = {
            nombre: form.querySelector('input[name="nombre"]').value.trim(),
            apellido: form.querySelector('input[name="apellido"]').value.trim(),
            email: form.querySelector('input[name="email"]').value.trim(),
            turno: form.querySelector('select[name="turno"]'),
            ageRange: form.querySelector('input[name="ageRange"]:checked'),
        };
        users.push(user);


        // const nombre = form.querySelector('input[name="nombre"]').value.trim();
        // const apellido = form.querySelector('input[name="apellido"]').value.trim();
        // const email = form.querySelector('input[name="email"]').value.trim();
        // const ageRange = form.querySelectorAll('input[name="ageRange"]:checked');

        if(nombre === '' || apellido === '' || email === '' || ageRange.length === 0){
            const error = document.querySelector(".error");
            error.textContent = "Por favor, completa los campos obligatorios."; //mensaje de error.

            setTimeout(() => {        // para que desaparezca el mensaje a los 2 segundos.
                error.textContent = "";
            }, 2000);
            return;
        }
        //localStorage.setItem(users, JSON.stringify("users"));

        form.reset();
    });

    const checkboxes = form.querySelectorAll('input[name="ageRange"]');
    checkboxes.forEach(function(checkbox){
        checkbox.addEventListener('change', function(){
            if(this.checked) {
                checkboxes.forEach(function(otherCheckbox){
                    if(otherCheckbox !== checkbox){
                        otherCheckbox.disabled = true;
                    }
                });
            } else {
                checkboxes.forEach(function(otherCheckbox){
                    otherCheckbox.disabled = false;
                });
            }
        });
    });

});

function difuminarImagen(event) {
        event.preventDefault();
        let imagenChachamaru = document.getElementById('chachamaru');
        imagenChachamaru.classList.add('fadeOut'); 

        setTimeout(function() {
            document.getElementById('contacto').reset();
        }, {once: true});

        // NO FUNCIONA EL RESETEO AUN
};