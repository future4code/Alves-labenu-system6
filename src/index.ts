import {app} from "./app"
import {CriaTurma} from "./endpoints/Turma/CriaTurma"
import {CriaEstudante} from "./endpoints/Estudante/CriaEstudante"
import {CriaDocente} from "./endpoints/Docente/CriaDocentes"


app.post("/turma", CriaTurma)
app.post("/estudante", CriaEstudante)
app.post("/docente", CriaDocente)