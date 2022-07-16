const User = require('../../models/userModel');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'MONGODB_URL = mongodb+srv://admin:admin@cluster0.jam2e.mongodb.net/test?retryWrites=true&w=majority';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});
describe('Test for User Schema', () => {
    // the code below is for insert testing
    it('Test for Logout User',async () => {
        const status = await User.findOneAndDelete({_id:Object("62dcf64d669783d1f1d394c8")});
                expect(status.ok);
    });
});
  