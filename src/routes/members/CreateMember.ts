import {Express, Request, Response} from "express";
import {post} from "~/framework/Functions/Routes";
import {models} from "~/database/Orm";
import {ValidationError} from "sequelize";

module.exports = (app: Express) => {
    return post(app, '/members/', 'Create a user', (req: Request, res: Response) => {
        const { discord_id, first_name, last_name } = req.body

        const missing_fields: string[] = []
        if (!discord_id) missing_fields.push('discord_id')
        if (!first_name) missing_fields.push('first_name')
        if (!last_name) missing_fields.push('last_name')

        if (missing_fields.length !== 0) return res.status(400).json({
                message: "Invalid request body!",
                missing_fields
            })
        
        models.member.count({ where: { discord_id }}).then((count: number) => {
            if (count !== 0) return res.status(409).json({ message: "Discord ID already taken!" })

            models.member.create({
                discord_id,
                first_name,
                last_name
            }).then((member: any) => {
                res.status(201).json({
                    message: `Member created.`,
                    member
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