export const lantanideosTrue = function (
    metal_alca, semi_metal, metal_repre
    , gas_nobre, nao_metal, metal_alca_terro
    , halogenio, metal_transicao, actinideos
) {
    nao_metal.forEach(function (div) {
        div.classList.add('invisivel')
    });
    semi_metal.forEach(function (div) {
        div.classList.add('invisivel')
    });
    metal_transicao.forEach(function (div) {
        div.classList.add('invisivel')
    });
    gas_nobre.forEach(function (div) {
        div.classList.add('invisivel')
    });
    metal_repre.forEach(function (div) {
        div.classList.add('invisivel')
    });
    metal_alca.forEach(function (div) {
        div.classList.add('invisivel')
    });
    halogenio.forEach(function (div) {
        div.classList.add('invisivel')
    });
    metal_alca_terro.forEach(function (div) {
        div.classList.add('invisivel')
    });
    actinideos.forEach(function (div) {
        div.classList.add('invisivel')
    });
}
export const lantanideosFalse = function (
    metal_alca, semi_metal, metal_repre
    , gas_nobre, nao_metal, metal_alca_terro
    , halogenio, metal_transicao, actinideos
) {
    nao_metal.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    semi_metal.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    metal_transicao.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    gas_nobre.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    metal_repre.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    metal_alca.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    halogenio.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    metal_alca_terro.forEach(function (div) {
        div.classList.remove('invisivel')
    });
    actinideos.forEach(function (div) {
        div.classList.remove('invisivel')
    });
}
