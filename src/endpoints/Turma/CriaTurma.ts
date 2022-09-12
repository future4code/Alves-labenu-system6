import { Request, Response } from "express"
import connection from"../../connection"

export const CriaTurma = async (req: Request, res: Response): Promise <void> => {
    try {
        
        const {id, nome, modulo} = req.body

        if(!id ||  !nome || !modulo){
            res.statusCode = 400
 
             throw new Error ("Os dados devem ser passados corretamente!")
         }
      
        await connection("Turma")
            .insert({id, nome, modulo})

        res.status(200).send("Turma criada com sucesso!")
    } catch (error: any) {
        res.status(res.statusCode || 500).send(error.message)
    }
}