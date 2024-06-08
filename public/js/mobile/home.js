// DOM-Element auswählen, das die Swipe-Geste erkennen soll
const swipeArea = document.getElementById('swipeArea');

// Variablen zum Verfolgen der Start- und Endposition des Touch-Events
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

// Touchstart-Ereignis: Startposition des Touch-Ereignisses speichern
swipeArea.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});

swipeArea.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
    endY = event.touches[0].clientY;
});

swipeArea.addEventListener('touchend', (event) => {
   
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontaler Wisch
        if (deltaX > 0) {
            alert('Von links nach rechts gewischt');
        } else {
            alert('Von rechts nach links gewischt');
        }
    } else {
        // Vertikaler Wisch
        if (deltaY > 0) {
            alert('Von oben nach unten gewischt');
        } else {
            alert('Von unten nach oben gewischt');
        }
    }
});