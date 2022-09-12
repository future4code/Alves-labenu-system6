import { BaseError } from "./BaseError";

export class UsuarioNaoCadastrado extends BaseError{
    constructor(){
        super("Usuario não cadastrado",404)
    }
}