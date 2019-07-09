
let x = 0, y = 0;

addEventListener('keydown', e => {

    let distance = 30;

    switch (e.key) {
        case 'ArrowUp':
            y--;
            break;
        case 'ArrowDown':
            y++;
            break;
        case 'ArrowRight':
            x++;
            break;
        case 'ArrowLeft':
            x--;
            break;
    }

    const pelota = document.getElementById('pelota');
    pelota.style.transform = `translate(${x * distance}px, ${y * distance}px)`;
});

