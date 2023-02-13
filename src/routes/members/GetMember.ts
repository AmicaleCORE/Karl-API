import {Express, Request, Response} from "express";
import {get} from "~/framework/Functions/Routes";
import {models} from "~/database/Orm";

module.exports = (app: Express) => {
    return get(app, '/members/:id', `Recover member's information.`, (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id)
        if (isNaN(id)) return res.status(400).json({
            message: "Member's id must be a integer!"
        })

        models.member.findByPk(id).then((member: any) => {
            if (!member) return res.status(404).json({
                message: "Member not found!"
            })
            res.json({
                message: "Member recovered!",
                member
            })
        }).catch((err: Error) => {
            res.status(500).json({
                message: `An internal error occurred!`,
                error: err
            })
        })
    })
}