import {put} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return put(app, `/members/:id`, `Update a member's information.`, (req: Request, res: Response) => {
        // TODO: Update member.
    })
}