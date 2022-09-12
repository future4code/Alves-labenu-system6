import {Turma} from "./Turma"
import { app } from "./app"
import EstudanteEndpoint from "./endpoints/Estudante"
import DocenteEndpoint from "./endpoints/Docente"


const turma = new Turma(1, "Maria José", [], [], 0)
console.log(turma)

const estudante = new EstudanteEndpoint
console.log(EstudanteEndpoint)

const docente = new DocenteEndpoint
console.log(DocenteEndpoint)

app.post("/criar-turma", turma.criar)
app.get("/buscar-turmas-ativas", turma.ativa)
app.post("/mudar-modulo/:id", turma.mudarModulo)

app.post("/criar-estudante", estudante.criar)
app.get("/estudante/:nome", estudante.buscar)
app.post("/mudar-estudante/:id", estudante.mudarTurma)

app.post("/criar-docente", docente.criar)
app.get("/docente/:nome",docente.buscar)
app.post("/mudar-docene/:id", docente.mudarTurma)