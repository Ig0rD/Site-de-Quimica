export function geradorTabela(tabela, elementos, tbody) {
    for (let a = 0; a < tabela.length; a++) {
        for (let i = 0; i < tbody.children.length && i < tabela.length; i++) {
            if (i >= 0 && i < 10) {
                if (tabela[a][i] === '' && a === 2 && i === 0) {
                    const tr = tbody.children[i];
                    const td = document.createElement('td');
                    td.setAttribute('colspan', 10);
                    td.setAttribute('rowspan', 2);
                    td.className = 'hover';
                    const div = document.createElement('div');
                    td.appendChild(div);
                    tr.appendChild(td);
                }
                if (tabela[a][i] === '' && a === 1 && i === 0) {
                    const tr = tbody.children[i];
                    const td = document.createElement('td');
                    const div = document.createElement('div');
                    div.className = 'nquadrado';
                    td.appendChild(div);
                    tr.appendChild(td);
                }

                if (tabela[a][i] !== '' &&
            tabela[a][i] !== '*' && tabela[a][i] !== '**' && tabela[a][i] !== 'MTI') {
                    const tr = tbody.children[i];
                    const td = document.createElement('td');
                    const div = document.createElement('div');
                    const span = document.createElement('span');
                    const strong = document.createElement('strong');
                    const p = document.createElement('p');
                    const p2 = document.createElement('p');
                    const element = elementos[tabela[a][i]];
                    span.textContent = element.atomico;
                    strong.textContent = element.sigla;
                    p.textContent = element.nome;
                    p2.textContent = element.massa;
                    span.className = 'numero';
                    strong.className = 'sigla';
                    p.className = 'nome';
                    p2.className = 'massa';
                    div.appendChild(span);
                    div.appendChild(strong);
                    div.appendChild(p);
                    div.appendChild(p2);
                    div.className = `elemento ${element.class}`;
                    td.appendChild(div);
                    td.className = `cor F${a+1}`;
                    tr.appendChild(td);
                }
                if (tabela[a][i] === '' && a > 10 && a < 16 && i === 0) {
                    const tr = tbody.children[i];
                    const td = document.createElement('td');
                    const div = document.createElement('div');
                    div.className = 'nquadrado';
                    td.appendChild(div);
                    tr.appendChild(td);
                }
                if (tabela[a][i] === '*' || tabela[a][i] === '**' || tabela[a][i] === 'MTI' ) {
                    const tr = tbody.children[i];
                    const td = document.createElement('td');
                    const div = document.createElement('div');
                    td.className = 'MTI';
                    if (tabela[a][i] === '*') {
                        div.textContent = '57 - 71';
                    } else if (tabela[a][i] === '**') {
                        div.textContent = '89 - 103';
                    }
                    td.appendChild(div);
                    tr.appendChild(td);
                }
                if (tabela[a][i] === '' && a >= 0 && a < 16 && i === 2) {
                    const tr = tbody.children[i];
                    const td = document.createElement('td');
                    const div = document.createElement('div');
                    div.className = 'zquadrado';
                    td.appendChild(div);
                    tr.appendChild(td);
                }
                // if (tabela[a][i] === '' && (i === 7 || i === 8)) {
                //     console.log('tnc');

                // }
            }
        }
    }
}
