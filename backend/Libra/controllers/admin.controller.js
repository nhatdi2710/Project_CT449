// const { ApiError } = require("mongodb");
const ManageBookModel = require("../models/ManageBook.models");
const ManagePublishCompModel = require("../models/PublishComp.models");
const ManageUserModel = require("../models/ManageUser.models");
const MongoDB = require("../utils/mongodb.utils");
const APIError = require("../config/app-error");

// exports.login = async (req, res, next) => {
//     if (!req.body?.sdt) {
//         return next(new APIError(400, "sdt can't not empty"));
//     }
// }

// Book Handler
exports.createBook = async (req, res, next) => {
    if (!req.body?.masach) {
        return next(new APIError(400, "masach can't not empty"));
    }

    try {
        const manageBookModel = new ManageBookModel(MongoDB.client);
        const document = await manageBookModel.create(req.body);

        return res.send(document);
    } catch (error) {
        return next(new APIError(500, "An error occurred while creating the book"));
    };
}

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

exports.updateBook = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new APIError(400, "Data to update can not be empty"));
    }

    try {
        const manageBookModel = new ManageBookModel(MongoDB.client);
        const document = await manageBookModel.update(req.params.id, req.body);

        if (!document) {
            return next(new APIError(404, "Book not found"));
        }
        return res.send({message: "Book was updated successfully!"});
    } catch (error) {
        return next(new APIError(500, `Error updating with id = ${req.params.id}`));
    }
}

exports.deleteBook = async (req, res, next) => {
    try {
        const manageBookModel = new ManageBookModel(MongoDB.client);
        const document = await manageBookModel.delete(req.params.id);

        if (!document) {
            return next(new APIError(404, "Book not found"));
        }

        return res.send({message: "Book was deleted successfully!"});
    } catch (error) {
        return next(new APIError(500, `Error delete with id = ${req.params.id}`));
    }
}

exports.deleteAllBook = async (_req, res, next) => {
    try {
        const manageBookModel = new ManageBookModel(MongoDB.client);
        const deletedCount = await manageBookModel.deleteAll();
        
        return res.send({
            message: `${deletedCount} books were deleted successfully`,
        });
    } catch (error) {
        return next(new APIError(500, "Error while Delete all"));
    }
}

// ------------------------------------------------------------------------------------------------------------

// Publishing Company Handler
exports.createPC = async (req, res, next) => {
    if (!req.body?.manxb) {
        return next(new APIError(400, "manxb can't not empty"));
    }

    try {
        const managePublishCompModel = new ManagePublishCompModel(MongoDB.client);
        const document = await managePublishCompModel.create(req.body);

        return res.send(document);
    } catch (error) {
        return next(new APIError(500, "An error occurred while creating the publishing company"));
    };
}

exports.showAllPC = async (req, res, next) => {
    let documents = [];

    try {
        
        const managePublishCompModel = new ManagePublishCompModel(MongoDB.client);
        const {name} = req.query;
       

        if (name) {
            documents = await managePublishCompModel.findByName(name);
        } 
        else {
            documents = await managePublishCompModel.find({});
        }
    } catch (error) {
        return next(new APIError(500, "An error occurred while retrieving books"));
    }

    return res.send(documents);
}

exports.findOnePC = async (req, res, next) => {
    try {
        const managePublishCompModel = new ManagePublishCompModel(MongoDB.client);
        const document = await managePublishCompModel.findById(req.params.id);

        if (!document) {
            return next(new APIError(404, "Publishing company not found"));
        }
        
        return res.send(document);
    } catch (error) {
        return next(new APIError(500, `Error retrieving publishing company with id = ${req.params.id}`));
    }
}

exports.updatePC = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new APIError(400, "Data to update can not be empty"));
    }

    try {
        const managePublishCompModel = new ManagePublishCompModel(MongoDB.client);
        const document = await managePublishCompModel.update(req.params.id, req.body);

        if (!document) {
            return next(new APIError(404, "Publishing company not found"));
        }
        return res.send({message: "Publishing company was updated successfully!"});
    } catch (error) {
        return next(new APIError(500, `Error updating with id = ${req.params.id}`));
    }
}

exports.deletePC = async (req, res, next) => {
    try {
        const managePublishCompModel = new ManagePublishCompModel(MongoDB.client);
        const document = await managePublishCompModel.delete(req.params.id);

        if (!document) {
            return next(new APIError(404, "Publishing company not found"));
        }

        return res.send({message: "Publishing company was deleted successfully!"});
    } catch (error) {
        return next(new APIError(500, `Error delete with id = ${req.params.id}`));
    }
}

exports.deleteAllPC = async (_req, res, next) => {
    try {
        const managePublishCompModel = new ManagePublishCompModel(MongoDB.client);
        const deletedCount = await managePublishCompModel.deleteAll();
        
        return res.send({
            message: `${deletedCount} publishing comany were deleted successfully`,
        });
    } catch (error) {
        return next(new APIError(500, "Error while Delete all"));
    }
}

// ------------------------------------------------------------------------------------------------------------

// User Management
exports.showAllUsers = async (req, res, next) => {
    let documents = [];

    try {
        const manageUserModel = new ManageUserModel(MongoDB.client);

        documents = await manageUserModel.find({});
    } catch (error) {
        return next(new APIError(500, "An error occurred while retrieving books"));
    }

    return res.send(documents);
}