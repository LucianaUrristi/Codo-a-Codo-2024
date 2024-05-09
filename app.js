document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector('.formcontacto__form');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const nombre=form.querySelector('input[name="nombre"]').value.trim();
        const apellido=form.querySelector('input[name="apellido"]').value.trim();
        const email=form.querySelector('input[name="email"]').value.trim();
        const ageRange=form.querySelectorAll('input[name="ageRange"]:checked');

        if(nombre ==='' || apellido ==='' || email === '' || ageRange.length === 0){
            alert("Por favor, completa los campos obligatorios.");
            return;
        }

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