import {Request, Response} from "express"
import connection from "../../connection"

export const BuscaTurma = async (req:Request, res:Response): Promise <any> =>{
    const result = await connection.select('*').from('Turma')

    try{
        res.status(200).send(result) 
    } catch (error: any) {
        res.status(res.statusCode || 500).send(error.message)
    }
}
