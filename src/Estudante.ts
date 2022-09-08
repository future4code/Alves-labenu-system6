import {Pessoa} from './Pessoa'

export class Estudante extends Pessoa{
    hobby: string
    constructor( 
        id: string | number, 
        nome: string,
        email: string, 
        data_nasc: string, 
        turma_id: string | number,
        hobby: string 
    ) 
    { super(id, nome, email, data_nasc, turma_id)
        this.hobby = hobby
    }
}