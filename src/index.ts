import {app} from "./app"
import {CriaTurma} from "./endpoints/Turma/CriaTurma"
import {CriaEstudante} from "./endpoints/Estudante/CriaEstudante"
import {CriaDocente} from "./endpoints/Docente/CriaDocentes"
import { BuscaTurma } from "./endpoints/Turma/BurcaTurma"
import { BuscaEstudante } from "./endpoints/Estudante/BuscaEstudante"
import {BuscaDocente} from "./endpoints/Docente/BuscaDocentes"
import {MudaTurma} from "./endpoints/Turma/MudaTurma"
import {MudaEstudante} from "./endpoints/Estudante/MudaEstudante"
import {MudaDocente} from "./endpoints/Docente/MudarDocente"


app.get("/turma", BuscaTurma)
app.get("/estudante", BuscaEstudante)
app.get("/docente", BuscaDocente)

app.post("/turma", CriaTurma)
app.post("/estudante", CriaEstudante)
app.post("/docente", CriaDocente)

app.post("/muda-turma", MudaTurma)
app.post("/muda-estudante", MudaEstudante)
app.post("/muda-docente", MudaDocente)