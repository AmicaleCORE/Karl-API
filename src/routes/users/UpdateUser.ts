import {put} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return put(app, `/users/:id`, `Update a user's information.`, (req: Request, res: Response) => {
        // TODO: Update user.
    })
}