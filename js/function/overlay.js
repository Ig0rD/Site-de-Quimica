import {
    elementos
} from '../element/elementos.js';
// import {tbody} from '../main.js';

export function overlaygen(nat, tbody) {
    const div = document.createElement('div');
    div.classList = 'overlay';
    // div.appendAll(function(elements) {
    //     for (const e of elements) this.appendChild(e);
    // });
    const sair = document.createElement('button');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    p1.textContent = elementos[nat - 1].atomico;
    p2.textContent = elementos[nat - 1].name;
    p3.textContent = elementos[nat - 1].massa;
    p4.textContent = elementos[nat - 1].sigla;
    p5.textContent = elementos[nat - 1].class;
    sair.textContent = 'sair';
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(sair);
    tbody.appendChild(div);
    sair.addEventListener('click', function(a) {
        document.querySelector('.overlay').remove();
    });
}
