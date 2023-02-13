import {Express, Request, Response} from "express";
import {get} from "~/framework/Functions/Routes";

module.exports = (app: Express) => {
    return get(app, '/', 'Get rest API status.', (req: Request, res: Response) => {
        res.json({
            message: `Welcome in the Karl Rest API 👋`
        })
    })
}