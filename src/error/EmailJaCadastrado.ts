import { BaseError } from "./BaseError";

export class EmailJaCadastrado extends BaseError{
    constructor(){
        super("O email enviado , ja esta cadastrado",401)
    }
}