import {Express, Request, Response} from "express";
import {get} from "~/framework/Functions/Routes";
import {models} from "~/database/Orm";

module.exports = (app: Express) => {
    return get(app, '/members/', "Recover all members information.", (req: Request, res: Response) => {
        models.member.findAll().then((list: any[]) => {
            if (list.length === 0) return res.status(204).json()

            res.json({
                message: "Members recovered.",
                members: list
            })
        }).catch((err: Error) => {
            res.status(500).json({
                message: `An internal error occurred!`,
                error: err
            })
        })
    })
}