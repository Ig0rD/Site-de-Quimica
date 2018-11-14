import {elementos} from './elementos.js';
import {movteclado} from './movteclado.js';
export {tbody};
// export {row};
const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tabela = [
    [0, 2, 10, 18, 36, 54, 86, '', ''],
    ['', 3, 11, 19, 37, 55, 87, '', ''],
    ['', '', '', 20, 38, '', '', 56, 88],
    ['', '', '', 21, 39, 71, 103, 57, 89],
    ['', '', '', 22, 40, 72, 104, 58, 90],
    ['', '', '', 23, 41, 73, 104, 59, 91],
    ['', '', '', 24, 42, 74, 106, 60, 92],
    ['', '', '', 25, 43, 75, 107, 61, 93],
    ['', '', '', 26, 44, 76, 108, 62, 94],
    ['', '', '', 27, 45, 77, 109, 63, 95],
    ['', '', '', 28, 46, 78, 110, 64, 96],
    ['', '', '', 29, 47, 79, 111, 65, 97],
    ['', 4, 12, 30, 48, 80, 112, 66, 98],
    ['', 5, 13, 31, 49, 81, 113, 67, 99],
    ['', 6, 14, 32, 50, 82, 114, 68, 100],
    ['', 7, 14, 33, 51, 83, 115, 69, 101],
    ['', 8, 15, 34, 52, 84, 116, 70, 102],
    [1, 9, 17, 35, 53, 85, 117,71,103],
];
const row = [];
const tr = document.createElement('tr');
for (let i=1; i <= 18; i++) {
    const th = document.createElement('th');
    row.push(th);
    //   th.className = 'F' +i;
    th.textContent = 'F'+i;
    tr.appendChild(th);
    thead.appendChild(tr);
}
console.log(row);
for (let a = 0; a < tabela.length; a++) {
    for (let i = 0; i < tbody.children.length && i < tabela.length; i++) {
        if (tabela[a][i]=== '') {
            const tr = tbody.children[i];
            const td = document.createElement('td');
            const div = document.createElement('div');
            div.className = 'nquadrado';
            td.appendChild(div);
            tr.appendChild(td);
        } else {
            const tr = tbody.children[i];
            const td = document.createElement('td');
            const div = document.createElement('div');
            const span1 = document.createElement('span');
            const span2 = document.createElement('spant');
            const span3 = document.createElement('span');
            const element = elementos[tabela[a][i]];
            span1.textContent = element.atomico;
            span2.textContent = element.sigla;
            span3.textContent = element.nome;
            span1.className='sigla';
            span2.className='numatomico';
            span3.className='nomeext';
            div.appendChild(span1);
            div.appendChild(span2);
            div.appendChild(span3);
            div.className = 'quadrado';
            td.appendChild(div);
            td.className = 'F'+(a+1);
            tr.appendChild(td);
        }
    }
}
movteclado(row);
