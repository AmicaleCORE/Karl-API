import {post} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return post(app, `/auth/validate-token`, `Validate a user authentication token.`, (req: Request, res: Response) => {
        // TODO: Validate user authentication token.
    })
}