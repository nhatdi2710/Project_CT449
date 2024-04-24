const { ObjectId } = require("mongodb");

class ManagePublishCompModel {
    constructor (client) {
        this.nxbDB = client.db().collection("nhaxuatban");
    }
    
    extractPCData(payload) {
        const nxb = {
            manxb: payload.manxb,
            tennxb: payload.tennxb,
            diachi: payload.diachi
        };

        // Objects.keys(contact).forEach((key) => contact[key] === undefined && delete contact[key]);

        return nxb;
    }

    async create(payload) {
        const nxb = this.extractPCData(payload);
        const result = await this.nxbDB.findOneAndUpdate(
            nxb,
            {$set: nxb},
            {returnDocument: "after", upsert: true}
        );
        return result;
    }

    async find(filter) {
        const cursor = await this.nxbDB.find(filter);
        return await cursor.toArray();
    }

    async findByName(tennxb) {
        return await this.find({
            tennxb: { $regex: new RegExp(tennxb), $options: "i" },
        });
    }

    async findById(id) {
        return await this.nxbDB.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractPCData(payload);
        console.log(filter);
        const result = await this.nxbDB.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after", upsert: true }
        );

        return result;
    }

    async delete(id) {
        const result = await this.nxbDB.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });

        return result;
    }

    async deleteAll() {
        const result = await this.nxbDB.deleteMany({});
        
        return result.deletedCount;
    }
} 

module.exports = ManagePublishCompModel;
