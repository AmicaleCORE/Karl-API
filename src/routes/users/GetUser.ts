import {get} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return get(app, `/users/:id`, `Get a user by its ID.`, (req: Request, res: Response) => {
        // TODO: Get user.
    })
}