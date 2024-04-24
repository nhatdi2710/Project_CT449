const { ObjectId } = require("mongodb");

class ManageUserModel {
    constructor (client) {
        this.UserDB = client.db().collection("docgia");
    }

    extractUserData(payload) {
        const user = {
            madocgia: payload.madocgia,
            holot: payload.holot,
            ten: payload.ten,
            ngaysinh: payload.ngaysinh,
            phai: payload.phai,
            diachi: payload.diachi,
            dienthoai: payload.dienthoai,
            password: payload.password,
            chan: payload.chan
        };

        // Objects.keys(contact).forEach((key) => contact[key] === undefined && delete contact[key]);

        return user;
    }

    async find(filter) {
        const cursor = await this.UserDB.find(filter);
        return await cursor.toArray();
    }
}

module.exports = ManageUserModel;