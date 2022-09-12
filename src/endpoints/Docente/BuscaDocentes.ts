import {Request, Response} from "express"
import connection from "../../connection"

export const BuscaDocente = async (req:Request, res:Response): Promise <void> =>{
    const result = await connection.select('*').from('Docente')

    try{
        res.status(200).send(result) 
    } catch (error: any) {
        res.status(res.statusCode || 500).send(error.message)
    }
}