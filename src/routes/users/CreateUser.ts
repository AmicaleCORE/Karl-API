import {post} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return post(app, `/users/`, `Create a user.`, (req: Request, res: Response) => {
        // TODO: Create user.
    })
}