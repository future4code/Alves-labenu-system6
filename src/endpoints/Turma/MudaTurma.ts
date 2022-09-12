import { Request, Response } from "express"
import connection from"../../connection"

export const MudaTurma = async (req: Request, res: Response): Promise <void> => {
    try {
            const {turma_id, modulo} = req.body

        if(!turma_id || !modulo){
            res.statusCode = 400
 
             throw new Error ("Os dados turma e novo módulo são obrigatórios!")
         }
      
        const result = await connection("Turma").insert({turma_id, modulo})

        res.status(200).send(result)
    } catch (error: any) {
        res.status(res.statusCode || 500).send(error.message)
    }
}