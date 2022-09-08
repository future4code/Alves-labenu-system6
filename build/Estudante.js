"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
const Pessoa_1 = require("./Pessoa");
class Estudante extends Pessoa_1.Pessoa {
    constructor(id, nome, email, data_nasc, turma_id, hobby) {
        super(id, nome, email, data_nasc, turma_id);
        this.hobby = hobby;
    }
}
exports.Estudante = Estudante;
//# sourceMappingURL=Estudante.js.map