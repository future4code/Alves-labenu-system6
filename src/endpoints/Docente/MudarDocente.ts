import { Request, Response } from "express"
import connection from"../../connection"

export const MudaDocente = async (req: Request, res: Response): Promise <void> => {
    try {
            const {id, turma_id} = req.body

        if(!id || !turma_id){
            res.statusCode = 400
              throw new Error ("Os dados do docente são obrigatórios!")
         }
      
        const result = await connection("Docente").insert({id, turma_id})

        res.status(200).send(result)
    } catch (error: any) {
        res.status(res.statusCode || 500).send(error.message)
    }
}