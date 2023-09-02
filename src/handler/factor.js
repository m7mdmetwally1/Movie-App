import { AppError } from "../utilities/AppError.js"
import { catchError } from "../utilities/catchError.js"

export const deleteOne = (model, name) => {
    return catchError(async (req, res, next) => {
        let userId = req.decoded.id
        const document = await model.findByIdAndDelete(userId)

        !document && next(new AppError(` ${name} not found`, 404))
        let response = {}
        response[document] = document
        document && res.status(200).json({ message: `${name} deleted successfully`, ...response })
    })
}

