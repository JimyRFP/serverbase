"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCPF = isValidCPF;
function isValidCPF(cpf) {
    if (typeof (cpf) !== 'string')
        return false;
    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
        return false; // Verifica se o CPF tem 11 dígitos e não são todos iguais
    }
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf[i - 1]) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11)
        resto = 0;
    if (resto !== parseInt(cpf[9]))
        return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf[i - 1]) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11)
        resto = 0;
    if (resto !== parseInt(cpf[10]))
        return false;
    return true;
}
