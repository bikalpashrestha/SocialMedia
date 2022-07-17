const Post = require('../../models/postModel');
const mongoose = require('mongoose');
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
describe('Test for Post Schema', () => {
    it('Test for Get Posts',async () => {
       
        const getPosts = await Post.find();
        expect(getPosts.ok);
    });
});
