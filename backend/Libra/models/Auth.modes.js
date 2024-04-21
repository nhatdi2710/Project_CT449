const { ObjectId } = require("mongodb");

class AuthModel {
    constructor (client) {
        this.userDB = client.db().collection("docgia");
        this.adminDB = client.db().collection("nhanvien");
    }

    extractPCData(payload) {
        const taikhoan = {
            dienthoai: payload.dienthoai,
            password: payload.password
        };

        // Objects.keys(contact).forEach((key) => contact[key] === undefined && delete contact[key]);

        return taikhoan;
    }

    async findByDT(dienthoai) {
        return await this.userDB.find({
            dienthoai: { $regex: new RegExp(dienthoai), $options: "i" },
        });
    }
}