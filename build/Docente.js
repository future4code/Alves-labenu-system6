"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = void 0;
const Pessoa_1 = require("./Pessoa");
class Docente extends Pessoa_1.Pessoa {
    constructor(id, nome, email, data_nasc, turma_id, especialidades) {
        super(id, nome, email, data_nasc, turma_id);
        this.especialidades = especialidades;
    }
}
exports.Docente = Docente;
//# sourceMappingURL=Docente.js.map