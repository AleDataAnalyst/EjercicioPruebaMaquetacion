//  asegura que el código dentro de la función se ejecute cuando el documento HTML esté completamente cargado 'ready'.
$(document).ready(function () {
    // Toggle mobile menu
    // Cuando clic en elemento con ID mobile-menu (icono de menú para móviles)
    $('#mobile-menu').click(function () {
        $('.menu').slideToggle(); // toggle() para mostrar o ocultar el menú
    });

    // Toggle opciones de idioma
    // Cuando clic en elemento con ID language-switch (donde se muestra el idioma actual)
    $('#language-switch').click(function () {
        $('#language-options').toggle(); // toggle() para mostrar u ocultar opciones de idioma
    });

    // Cambiar idioma
    // Cuando clic en cualquier <span> dentro de #language-options
    $('#language-options span').click(function () {
        $('#language-switch').text($(this).text()); // cambia texto del elemento con ID language-switch al texto del <span> clicado
        $('#language-options').hide(); // oculta opciones de idioma
    });
});
