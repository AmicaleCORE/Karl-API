import {get} from "~/framework/functions/Routes";
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {
    return get(app, `/members/`, `Get all members.`, (req: Request, res: Response) => {
        // TODO: Get all members from database.
    })
}