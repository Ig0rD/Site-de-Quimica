// import {row} from './main.js';
export function movteclado(row) {
    let index = 0;
    console.log(row);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            console.log('keypressed');
            if (index === 0) {
                index++;
                row[0].classList.add('selecionado');
            } else if (index < 18 && index > 0) {
                index++;
                for (let i = 0; i < 18; i++) {
                    row[i].classList.remove('selecionado');
                    console.log('teste');
                }
                row[(index - 1)].classList.add('selecionado');
            }
        }
        if (e.key === 'ArrowLeft') {
            console.log('Key Detected');
            if (index < 19 && index > 1) {
                console.log(index);
                index--;
                for (let i = 0; i < 18; i++) {
                    row[i].classList.remove('selecionado');
                }
                row[(index - 1)].classList.add('selecionado');
            }
        }
    });
}
