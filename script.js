//Obtener el tooltip
const tooltip = document.getElementById('tooltip');
//obtener los botones
const buttons = document.querySelectorAll('.social--items');

buttons.forEach(button => {
    button.addEventListener('mouseover', function(event){
        // obtener el contenido de tooltip, a traves del data-tooltip
        const tooltiptext = this.getAttribute('data-tooltip');
        tooltip.textContent = tooltiptext;


        const rect = this.getBoundingClientRect();

        // Ajustar la posición del tooltip
        tooltip.style.top = rect.bottom + window.scrollY + 'px'; // Posicionar debajo del botón
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px'; // Centrar el tooltip horizontalmente

        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    button.addEventListener('mouseout', function() {
        // Ocultar el tooltip cuando se quita el mouse
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});