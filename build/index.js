"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const CriaTurma_1 = require("./endpoints/Turma/CriaTurma");
const CriaEstudante_1 = require("./endpoints/Estudante/CriaEstudante");
const CriaDocentes_1 = require("./endpoints/Docente/CriaDocentes");
const BurcaTurma_1 = require("./endpoints/Turma/BurcaTurma");
const BuscaEstudante_1 = require("./endpoints/Estudante/BuscaEstudante");
const BuscaDocentes_1 = require("./endpoints/Docente/BuscaDocentes");
const MudaTurma_1 = require("./endpoints/Turma/MudaTurma");
const MudaEstudante_1 = require("./endpoints/Estudante/MudaEstudante");
const MudarDocente_1 = require("./endpoints/Docente/MudarDocente");
app_1.app.get("/turma", BurcaTurma_1.BuscaTurma);
app_1.app.get("/estudante", BuscaEstudante_1.BuscaEstudante);
app_1.app.get("/docente", BuscaDocentes_1.BuscaDocente);
app_1.app.post("/turma", CriaTurma_1.CriaTurma);
app_1.app.post("/estudante", CriaEstudante_1.CriaEstudante);
app_1.app.post("/docente", CriaDocentes_1.CriaDocente);
app_1.app.post("/muda-turma", MudaTurma_1.MudaTurma);
app_1.app.post("/muda-estudante", MudaEstudante_1.MudaEstudante);
app_1.app.post("/muda-docente", MudarDocente_1.MudaDocente);
//# sourceMappingURL=index.js.map