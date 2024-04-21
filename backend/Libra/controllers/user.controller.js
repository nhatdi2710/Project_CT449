// const { ApiError } = require("mongodb");
const ManageBookModel = require("../models/ManageBook.models");
const MongoDB = require("../utils/mongodb.utils");
const APIError = require("../config/app-error");

// Login
exports.login = async (req, res, next) => {
    // localStorage.setItem('user', JSON.stringify({
    //     dt: req.body.dienthoai,
    //     password: req.body.password
    // }));
    res.send("Dang Nhap Thanh Cong!");
}

// Book Handler
exports.showAllBook = async (req, res, next) => {
    let documents = [];

    try {
        
        const manageBookModel = new ManageBookModel(MongoDB.client);
        const {name} = req.query;
       

        if (name) {
            documents = await manageBookModel.findByName(name);
        } 
        else {
            documents = await manageBookModel.find({});
        }
    } catch (error) {
        return next(new APIError(500, "An error occurred while retrieving books"));
    }

    return res.send(documents);
}

exports.findOneBook = async (req, res, next) => {
    try {
        const manageBookModel = new ManageBookModel(MongoDB.client);
        const document = await manageBookModel.findById(req.params.id);

        if (!document) {
            return next(new APIError(404, "Book not found"));
        }
        
        return res.send(document);
    } catch (error) {
        return next(new APIError(500, `Error retrieving book with id = ${req.params.id}`));
    }
}