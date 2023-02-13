import {destroy} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return destroy(app, `/users/:id`, `Delete a user.`, (req: Request, res: Response) => {
        // TODO: Delete user.
    })
}