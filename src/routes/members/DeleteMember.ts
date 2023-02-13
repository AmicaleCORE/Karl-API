import {destroy} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return destroy(app, `/members/:id`, `Delete a member.`, (req: Request, res: Response) => {
        // TODO: Delete member.
    })
}