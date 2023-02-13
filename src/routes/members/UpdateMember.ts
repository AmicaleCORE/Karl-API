import {Express, Request, Response} from "express";
import {put} from "~/framework/Functions/Routes";
import {models} from "~/database/Orm";
import {ValidationError} from "sequelize";

module.exports = (app: Express) => {
    return put(app, '/members/:id', "Update member's information", (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id)
        if (isNaN(id)) return res.status(400).json({
            message: "Member's id must be a integer!"
        })

        models.member.findByPk(id).then((old: any) => {
            if (!old) return res.status(404).json({
                message: "User not found!"
            })

            let js = req.body
            delete js.createdAt
            delete js.updatedAt
            delete js.id

            console.log(js)

            models.member.update(js, { where: { id }}).then(() => {
                models.member.findByPk(id).then((member: any) => {
                    if (!member) return res.status(404).json({
                        message: "User not found!"
                    })
                    res.json({
                        message: "Member updated.",
                        member
                    })
                }).catch((err: Error) => {
                    res.status(500).json({
                        message: `An internal error occurred!`,
                        error: err
                    })
                })
            }).catch((err: Error) => {
                if (err instanceof ValidationError) return res.status(400).json({
                    message: err.message, error: err
                })
                res.status(500).json({
                    message: `An internal error occurred!`,
                    error: err
                })
            })
        }).catch((err: Error) => {
            res.status(500).json({
                message: `An internal error occurred!`,
                error: err
            })
        })
    })
}