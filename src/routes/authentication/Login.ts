import {post} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return post(app, `/auth/login`, `Login a user using personal credentials.`, (req: Request, res: Response) => {
        // TODO: User authentication.
    })
}