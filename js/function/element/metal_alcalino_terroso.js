export const metal_alcalino_terrosoTrue = function (
    nao_metal, semi_metal, metal_repre
    , lantanideos, gas_nobre, metal_alca
    , halogenio, metal_transicao, actinideos
) {
    nao_metal.forEach(function (div) {
        div.classList.add('invisivel')
    });
    semi_metal.forEach(function (div) {
        div.classList.add('invisivel')
    });
    metal_repre.forEach(function (div) {
        div.classList.add('invisivel')
    });
    lantanideos.forEach(function (div) {
        div.classList.add('invisivel')
    });
    gas_nobre.forEach(function (div) {
        div.classList.add('invisivel')
    });
    metal_alca.forEach(function (div) {
        div.classList.add('invisivel')
    });
    halogenio.forEach(function (div) {
        div.classList.add('invisivel')
    });
    metal_transicao.forEach(function (div) {
        div.classList.add('invisivel')
    });
    actinideos.forEach(function (div) {
        div.classList.add('invisivel')
    });
}
export const metal_alcalino_terrosoFalse = function (
    nao_metal
    , semi_metal
    , metal_repre
    , lantanideos
    , gas_nobre
    , metal_alca
    , halogenio
    , metal_transicao
    , actinideos
) {
    nao_metal.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    semi_metal.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    metal_repre.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    lantanideos.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    gas_nobre.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    metal_alca.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    halogenio.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    metal_transicao.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    actinideos.forEach(function (div) {
        div.classList.remove('invisivel')
    });
}
