import {get} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return get(app, `/users/`, `Get all users.`, (req: Request, res: Response) => {
        // TODO: Get all users.
    })
}