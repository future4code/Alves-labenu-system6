import { Request, Response } from "express"
import connection from"../../connection"

export const CriaEstudante = async (req: Request, res: Response): Promise <void> => {
    try {
        
        const {id, nome, email, data_nasc, turma_id} = req.body
      

        await connection("Estudante")
            .insert({id, nome, email, data_nasc, turma_id})

        res.status(200).send("Estudante criado com sucesso!")
    } catch (error: any) {
        res.status(res.statusCode || 500).send(error.message)
    }
}