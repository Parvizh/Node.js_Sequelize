const Workers = require('../models/workers')
const User = require('../models/user')
const errorHandler = require('../helpers/error_handler');

exports.addWorker = async (req, res) => {
    const { id } = req.user
    const { workerId } = req.body
    try {
        const addDb = await Workers.create({ adminId: id, workerId })
        res.status(200).json({
            success: 0,
            message: "success",
            addDb
        })
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}

exports.getWorkers = async (req, res) => {
    const { id } = req.user
    try {
        const workers = await Workers.findAll({
            where: { adminId: id },
            attributes:['adminId'],
            include: [{
                as:'worker',
                model: User,
            }]
        })

        res.status(200).json({
            success: 0,
            message: "success",
            workers
        })
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}

exports.getAdmin = async (req,res)=>{
    const {id} = req.user;
    try {
        const userAndAdmin = await Workers.findAll({
            where: { workerId: id },
            attributes:['workerId'],
            include: [{
                as:'admin',
                model: User,
            }]
        })

        res.status(200).json({
            success: 0,
            message: "success",
            userAndAdmin
        })
    } catch (error) {
        errorHandler(res,500,error.message)
    }
}