import {post} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return post(app, `/auth/reset-token`, `Reset a user authentication token.`, (req: Request, res: Response) => {
        // TODO: Reset user authentication token.
    })
}