import {actinideosFalse} from '../function/element/actinideos.js';
import {gas_nobreFalse} from '../function/element/gas_nobre.js';
import {halogenioFalse} from '../function/element/halogenio.js';
import {lantanideosFalse} from '../function/element/lantanideos.js';
import {metal_alcalinoFalse} from '../function/element/metal_alcalino.js';
import {metal_alcalino_terrosoFalse} from '../function/element/metal_alcalino_terroso.js';
import {metal_representativoFalse} from '../function/element/metal_representativo.js';
import {metal_transicaoFalse} from '../function/element/metal_transicao.js';
import {nao_metalFalse} from '../function/element/nao_metal.js';
import {semi_metalFalse} from '../function/element/semi_metal.js';

const nao_metal = document.querySelectorAll('.elemento.nao_metal')
const metal_alca = document.querySelectorAll('.elemento.metal_alcalino')
const semi_metal = document.querySelectorAll('.elemento.semi_metal')
const metal_repre = document.querySelectorAll('.elemento.metal_representativo')
const lantanideos = document.querySelectorAll('.elemento.lantanideos')
const gas_nobre = document.querySelectorAll('.elemento.gas_nobre')
const metal_alca_terro = document.querySelectorAll('.elemento.metal_alcalino_terroso')
const halogenio = document.querySelectorAll('.elemento.halogenio')
const metal_transicao = document.querySelectorAll('.elemento.metal_de_transicao')
const actinideos = document.querySelectorAll('.elemento.actinideos')
document.querySelectorAll('.legenda_destaque')[0].addEventListener('mouseout', function () {
    nao_metalFalse(
        metal_alca, semi_metal, metal_repre
        , lantanideos, gas_nobre, metal_alca_terro
        , halogenio, metal_transicao, actinideos
    )
})
document.querySelectorAll('.legenda_destaque')[1].addEventListener('mouseout', function () {
    metal_alcalinoFalse(
        nao_metal, semi_metal, metal_repre
        , lantanideos, gas_nobre, metal_alca_terro
        , halogenio, metal_transicao, actinideos
    )
})
document.querySelectorAll('.legenda_destaque')[2].addEventListener('mouseout', function () {
    metal_alcalino_terrosoFalse(
        nao_metal, semi_metal, metal_repre
        , lantanideos, gas_nobre, metal_alca
        , halogenio, metal_transicao, actinideos
    )
})
document.querySelectorAll('.legenda_destaque')[3].addEventListener('mouseout', function () {
    metal_transicaoFalse(
        metal_alca, semi_metal, metal_repre
        , lantanideos, gas_nobre, metal_alca_terro
        , halogenio, nao_metal, actinideos
    )
})
document.querySelectorAll('.legenda_destaque')[4].addEventListener('mouseout', function () {
    metal_representativoFalse(
        metal_alca, semi_metal, nao_metal
        , lantanideos, gas_nobre, metal_alca_terro
        , halogenio, metal_transicao, actinideos
    )
})
document.querySelectorAll('.legenda_destaque')[5].addEventListener('mouseout', function () {
    semi_metalFalse(
        nao_metal, metal_alca, metal_repre
        , lantanideos, gas_nobre, metal_alca_terro
        , halogenio, metal_transicao, actinideos
    )
})
document.querySelectorAll('.legenda_destaque')[6].addEventListener('mouseout', function () {
    halogenioFalse(
        metal_alca, semi_metal, metal_repre
        , lantanideos, gas_nobre, metal_alca_terro
        , nao_metal, metal_transicao, actinideos
    )
})
document.querySelectorAll('.legenda_destaque')[7].addEventListener('mouseout', function () {
    gas_nobreFalse(
        metal_alca, semi_metal, metal_repre
        , lantanideos, nao_metal, metal_alca_terro
        , halogenio, metal_transicao, actinideos
    )
})
document.querySelectorAll('.legenda_destaque')[8].addEventListener('mouseout', function () {
    lantanideosFalse(
        metal_alca, semi_metal, metal_repre
        , nao_metal, gas_nobre, metal_alca_terro
        , halogenio, metal_transicao, actinideos
    )
})
document.querySelectorAll('.legenda_destaque')[9].addEventListener('mouseout', function () {
    actinideosFalse(
        metal_alca, semi_metal, metal_repre
        , lantanideos, gas_nobre, metal_alca_terro
        , halogenio, metal_transicao, nao_metal
    )
})
