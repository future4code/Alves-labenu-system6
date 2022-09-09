"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const CriaTurma_1 = require("./endpoints/Turma/CriaTurma");
const CriaEstudante_1 = require("./endpoints/Estudante/CriaEstudante");
const CriaDocentes_1 = require("./endpoints/Docente/CriaDocentes");
app_1.app.post("/turma", CriaTurma_1.CriaTurma);
app_1.app.post("/estudante", CriaEstudante_1.CriaEstudante);
app_1.app.post("/docente", CriaDocentes_1.CriaDocente);
//# sourceMappingURL=index.js.map