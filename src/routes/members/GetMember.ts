import {Express, Request, Response} from "express";
import {get} from "~/framework/functions/Routes";

module.exports = (app: Express) => {
    return get(app, `/members/:id`, `Get a member by his ID.`, (req: Request, res: Response) => {
        // TODO: Get a member from his primary key (id).
    })
}