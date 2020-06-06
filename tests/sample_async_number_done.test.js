const helper = require('../async');

test('async test sample', (done) => {
    function callback(data) {
        expect(typeof data).toBe('number');
        done();
    }
    helper.asyncData(callback);
})