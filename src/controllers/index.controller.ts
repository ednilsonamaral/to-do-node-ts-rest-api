import { NextFunction, Request, Response } from "express";

class IndexController {

    public index = (req: Request, res: Response, next: NextFunction) => {
        try {
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }

    public healthCheck = (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json({
                message: '😊 API its ok, buddy!'
            });
        } catch (error) {
            next(error);
        }
    }

}

export default IndexController;
