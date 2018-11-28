
const mover = [0, 0]; // mover
let enter = true; // verificador do enter
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 39 && enter === true) {
        mover[0]++;
        if (mover[0] >= 19) {
            mover[0] = 1
                ;
        }
        document.querySelectorAll('th').forEach(function (th) {
            th.classList.remove('selecionado')
                ;
        });
        document.querySelectorAll('.f' + (mover[0])).forEach(function (td) {
            td.classList.add('selecionado');
        });
    }
    if (e.keyCode === 37 && enter === true) {
        mover[0]--;
        if (mover[0] <= 0) {
            mover[0] = 18;
        }
        if (mover[0] >= 19) {
            mover[0] = 1;
        }
        document.querySelectorAll('th').forEach(function (th) {
            th.classList.remove('selecionado');
        });
        document.querySelectorAll('.f' + (mover[0])).forEach(function (th) {
            th.classList.add('selecionado');
        });
    }
    if (e.keyCode === 13 && mover[0] > 0) {
        enter = false;
        document.querySelectorAll('.F' + (mover[0])).forEach(function (td) {
            td.classList.add('destaque');
        });
        document.querySelectorAll('.F' + (mover[0]))[mover[1]].children[0].classList.add('sc');
    }
    if (e.keyCode === 40 && enter === false) {
        document.querySelectorAll('div').forEach(function (div) {
            div.classList.remove('sc');
        });
        const limit = document.querySelectorAll('.F' + (mover[0])).length;
        mover[1]++;
        if (mover[1] === limit) {
            mover[1] = 0;
        }
        document.querySelectorAll('.F' + (mover[0]))[mover[1]].children[0].classList.add('sc');
    }
    if (e.keyCode === 38 && enter === false) {
        document.querySelectorAll('div').forEach(function (div) {
            div.classList.remove('sc');
        });
        const limit = document.querySelectorAll('.F' + (mover[0])).length;
        mover[1]--;
        if (mover[1] < 0) {
            mover[1] = limit - 1;
        }
        document.querySelectorAll('.F' + (mover[0]))[mover[1]].children[0].classList.add('sc');
    }
    if (e.keyCode === 27 && enter === false) {
        document.querySelectorAll('div').forEach(function (div) {
            div.classList.remove('sc');
        });
        document.querySelectorAll('.F' + (mover[0])).forEach(function (td) {
            td.classList.remove('destaque');
        });
        enter = true;
        mover[1] = 0
    }
});
