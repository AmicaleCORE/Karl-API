import {Express, Request, Response} from "express";
import {post} from "~/framework/functions/Routes";

module.exports = (app: Express) => {
    return post(app, `/members/`, `Create a member.`, (req: Request, res: Response) => {
        const { discord_id, first_name, last_name } = req.body

        if (!discord_id || !first_name || !last_name) return res.status(400).json({
            message: ``
        })

        // TODO: Create a user in the database.
    })
}