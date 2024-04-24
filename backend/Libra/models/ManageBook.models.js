const { ObjectId } = require("mongodb");

class ManageBookModel {
    constructor (client) {
        this.SachDB = client.db().collection("sach");
    }
    
    extractBookData(payload) {
        const sach = {
            masach: payload.masach,
            tensach: payload.tensach,
            dongia: payload.dongia,
            soquyen: payload.soquyen,
            namxuatban: payload.namxuatban,
            manxb: payload.manxb,
            tacgia: payload.tacgia,
            muon: payload.muon
        };

        // Objects.keys(contact).forEach((key) => contact[key] === undefined && delete contact[key]);

        return sach;
    }

    async create(payload) {
        const sach = this.extractBookData(payload);
        const result = await this.SachDB.findOneAndUpdate(
            sach,
            {$set: sach},
            {returnDocument: "after", upsert: true}
        );
        return result;
    }

    async find(filter) {
        const cursor = await this.SachDB.find(filter);
        return await cursor.toArray();
    }

    async showWithId(id) {
        const filter = { _id: ObjectId.isValid(id) ? new ObjectId(id) : null };
        const documents = await this.SachDB.find(filter);
        return documents.toArray();
    }

    async findById(id) {
        return await this.SachDB.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async findByName(tensach) {
        return await this.find({
            tensach: { $regex: new RegExp(tensach), $options: "i" },
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractBookData(payload);
        const result = await this.SachDB.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after", upsert: true }
        );

        return result;
    }

    async delete(id) {
        const result = await this.SachDB.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });

        return result;
    }

    async deleteAll() {
        const result = await this.SachDB.deleteMany({});
        
        return result.deletedCount;
    }

} 

module.exports = ManageBookModel;
