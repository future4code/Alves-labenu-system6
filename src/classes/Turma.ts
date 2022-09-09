import {Docente} from './Docente'
import {Estudante} from './Estudante'

export class Turma{
    constructor(
        protected id: string | number,
        public nome: string,
        protected docente: Docente[],
        protected estudante: Estudante[],
        protected modulo: number
    ){  
        this.id = id
        this.nome = nome
        this.docente = docente
        this.estudante = estudante
        this.modulo = modulo
    }
    
}
