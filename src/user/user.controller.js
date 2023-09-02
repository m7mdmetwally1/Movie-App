import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userModel } from '../../model/user/user.model.js';
import { catchError } from '../utilities/catchError.js';
import { deleteOne } from '../handler/factor.js';




export const signUp = catchError(async (req, res) => {
    const { firstName, lastName, email, password, age } = req.body;


    let user = await userModel.findOne({ email })
    if (user) {
        res.json({ message: "user already in use" })
    } else {
        bcrypt.hash(password, 8, async function (err, hash) {
            await userModel.insertMany({
                firstName, lastName, email, password: hash, age
            })
        })
        res.json({ message: "success" })
    }

})

export const signIn = catchError(async (req, res) => {
    const { email, password } = req.body

    let user = await userModel.findOne({ email })
    if (user && bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY)

        res.json({ message: "log in successfully", token })
    } else {
        res.json({ message: "there is wrong in email or password" })
    }


})

export const updateUser = catchError(async (req, res, next) => {
    let userId = req.decoded.id;
    const user = await userModel.findByIdAndUpdate(userId, req.body, { new: true })
    user && res.status(201).json({ message: "User updated successfully", user })
    !user && next(new AppError('user not found', 404))

})

export const deleteUser = deleteOne(userModel, 'user')

export const getAllUsers = catchError(async (req, res, next) => {
    let users = await userModel.find({})
    res.status(200).json({ message: "success", users })
})

export const forgetPassword = catchError(async (req, res, next) => {

})

