import {Express, Request, RequestHandler, Response} from "express";

export function get_with_middlewares(app: Express, path: string, description: string, middlewares: RequestHandler, callback: (req: Request, res: Response) => void) {
    return {
        path,
        description,
        method: 'GET',
        route: app.get(path, middlewares, callback)
    }
}

export function get(app: Express, path: string, description: string, callback: (req: Request, res: Response) => void) {
    return {
        path,
        description,
        method: 'GET',
        route: app.get(path, callback)
    }
}

export function post_with_middlewares(app: Express, path: string, description: string, something: RequestHandler, callback: (req: Request, res: Response) => void) {
    return {
        path,
        description,
        method: 'POST',
        route: app.post(path, something, callback)
    }
}

export function post(app: Express, path: string, description: string, callback: (req: Request, res: Response) => void) {
    return {
        path,
        description,
        method: 'POST',
        route: app.post(path, callback)
    }
}

export function put_with_middlewares(app: Express, path: string, description: string, something: RequestHandler, callback: (req: Request, res: Response) => void) {
    return {
        path,
        description,
        method: 'PUT',
        route: app.put(path, something, callback)
    }
}

export function put(app: Express, path: string, description: string, callback: (req: Request, res: Response) => void) {
    return {
        path,
        description,
        method: 'PUT',
        route: app.put(path, callback)
    }
}

export function destroy_with_middlewares(app: Express, path: string, description: string, something: RequestHandler, callback: (req: Request, res: Response) => void) {
    return {
        path,
        description,
        method: 'DELETE',
        route: app.delete(path, something, callback)
    }
}

export function destroy(app: Express, path: string, description: string, callback: (req: Request, res: Response) => void) {
    return {
        path,
        description,
        method: 'DELETE',
        route: app.delete(path, callback)
    }
}