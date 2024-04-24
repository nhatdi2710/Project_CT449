const { ObjectId } = require("mongodb");

class ManageLoanModel {
    constructor (client) {
        this.muonDB = client.db().collection("theodoimuonsach");
    }

    extractMuonData(payload) {
        const muonsach = {
            madocgia: payload.madocgia,
            masach: payload.masach,
            ngaymuon: payload.ngaymuon,
            ngayhentra: payload.ngayhentra,
            ngaytra: payload.ngaytra
        };

        // Objects.keys(contact).forEach((key) => contact[key] === undefined && delete contact[key]);

        return muonsach;
    }

    async create(payload) {
        const muonsach = this.extractMuonData(payload);
        const result = await this.muonDB.findOneAndUpdate(
            muonsach,
            {$set: muonsach},
            {returnDocument: "after", upsert: true}
        );
        return result;
    }
}

module.exports = ManageLoanModel;
