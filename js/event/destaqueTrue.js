import {actinideosTrue} from '../function/element/actinideos.js';
import {gas_nobreTrue} from '../function/element/gas_nobre.js';
import {halogenioTrue} from '../function/element/halogenio.js';
import {lantanideosTrue} from '../function/element/lantanideos.js';
import {metal_alcalinoTrue} from '../function/element/metal_alcalino.js';
import {metal_alcalino_terrosoTrue} from '../function/element/metal_alcalino_terroso.js';
import {metal_representativoTrue} from '../function/element/metal_representativo.js';
import {metal_transicaoTrue} from '../function/element/metal_transicao.js';
import {nao_metalTrue} from '../function/element/nao_metal.js';
import {semi_metalTrue} from '../function/element/semi_metal.js';

const nao_metal = document.querySelectorAll('.elemento.nao_metal')
const metal_alca = document.querySelectorAll('.elemento.metal_alcalino')
const semi_metal = document.querySelectorAll('.elemento.semi_metal')
const metal_repre = document.querySelectorAll('.elemento.metal_representativo')
const lantanideos = document.querySelectorAll('.elemento.lantanideos')
const gas_nobre = document.querySelectorAll('.elemento.gas_nobre')
const metal_alca_terro =document.querySelectorAll('.elemento.metal_alcalino_terroso')
const halogenio = document.querySelectorAll('.elemento.halogenio')
const metal_transicao = document.querySelectorAll('.elemento.metal_de_transicao')
const actinideos = document.querySelectorAll('.elemento.actinideos')
document.querySelectorAll('.legenda_destaque')[0].addEventListener('mouseover', function() {
    nao_metalTrue(
        metal_alca, semi_metal, metal_repre
        ,lantanideos, gas_nobre, metal_alca_terro
        ,halogenio, metal_transicao, actinideos
        )
})
document.querySelectorAll('.legenda_destaque')[1].addEventListener('mouseover', function() {
    metal_alcalinoTrue(
        nao_metal, semi_metal, metal_repre
        ,lantanideos, gas_nobre, metal_alca_terro
        ,halogenio, metal_transicao, actinideos
        )
})
document.querySelectorAll('.legenda_destaque')[2].addEventListener('mouseover', function() {
    metal_alcalino_terrosoTrue(
        nao_metal, semi_metal, metal_repre
        ,lantanideos, gas_nobre, metal_alca
        ,halogenio, metal_transicao, actinideos
        )
})
document.querySelectorAll('.legenda_destaque')[3].addEventListener('mouseover', function() {
    metal_transicaoTrue(
        metal_alca, semi_metal, metal_repre
        ,lantanideos, gas_nobre, metal_alca_terro
        ,halogenio, nao_metal, actinideos
        )
})
document.querySelectorAll('.legenda_destaque')[4].addEventListener('mouseover', function() {
    metal_representativoTrue(
        metal_alca, semi_metal, nao_metal
        ,lantanideos, gas_nobre, metal_alca_terro
        ,halogenio, metal_transicao, actinideos
        )
})
document.querySelectorAll('.legenda_destaque')[5].addEventListener('mouseover', function() {
    semi_metalTrue(
        nao_metal, metal_alca, metal_repre
        ,lantanideos, gas_nobre, metal_alca_terro
        ,halogenio, metal_transicao, actinideos
        )
})
document.querySelectorAll('.legenda_destaque')[6].addEventListener('mouseover', function() {
    halogenioTrue(
        metal_alca, semi_metal, metal_repre
        ,lantanideos, gas_nobre, metal_alca_terro
        ,nao_metal, metal_transicao, actinideos
        )
})
document.querySelectorAll('.legenda_destaque')[7].addEventListener('mouseover', function() {
    gas_nobreTrue(
        metal_alca, semi_metal, metal_repre
        ,lantanideos, nao_metal, metal_alca_terro
        ,halogenio, metal_transicao, actinideos
        )
})
document.querySelectorAll('.legenda_destaque')[8].addEventListener('mouseover', function() {
    lantanideosTrue(
        metal_alca, semi_metal, metal_repre
        ,nao_metal, gas_nobre, metal_alca_terro
        ,halogenio, metal_transicao, actinideos
        )
})
document.querySelectorAll('.legenda_destaque')[9].addEventListener('mouseover', function() {
    actinideosTrue(
        metal_alca, semi_metal, metal_repre
        ,lantanideos, gas_nobre, metal_alca_terro
        ,halogenio, metal_transicao, nao_metal
        )
})
