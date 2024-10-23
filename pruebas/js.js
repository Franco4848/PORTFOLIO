// Obtener el tooltip
const tooltip = document.getElementById('tooltip');

// Agregar eventos a todos los botones con la clase .button--projects
const buttons = document.querySelectorAll('.button--projects');

buttons.forEach(button => {
    button.addEventListener('mouseover', function(event) {
        // Obtener el contenido del tooltip desde el atributo data-tooltip
        const tooltipText = this.getAttribute('data-tooltip');
        
        // Cambiar el contenido del tooltip
        tooltip.textContent = tooltipText;
        
        // Mostrar el tooltip
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });
    
    button.addEventListener('mouseout', function() {
        // Ocultar el tooltip cuando se quita el mouse
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});
