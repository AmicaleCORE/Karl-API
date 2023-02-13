import {Express, Request, Response} from "express";
import { get } from "~/framework/functions/Routes";

module.exports = (app: Express) => {
    return get(app, '/', `Get API status information.`, (req: Request, res: Response) => {
        res.json({
            message: `Welcome in the Karl Rest API 👋`
        })
    })
}