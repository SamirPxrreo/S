document.getElementById('proponerBtn').addEventListener('click', function() {
    // Mostrar los botones de respuesta
    document.getElementById('respuestas').classList.remove('hidden');
    // Ocultar el botón de propuesta
    this.style.display = 'none';
});

document.getElementById('siBtn').addEventListener('click', function() {
    document.getElementById('mensaje').textContent = '¡Te amo!';
    // Ocultar los botones de respuesta
    document.getElementById('respuestas').classList.add('hidden');
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('mensaje').textContent = 'Vaya, y como monda...';
    // Ocultar los botones de respuesta
    document.getElementById('respuestas').classList.add('hidden');
});
