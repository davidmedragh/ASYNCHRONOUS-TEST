const helper = require('../async');

test('async test sample', () => {
    function callback(data) {
        expect(typeof data).toBe('string');
    }
    helper.asyncData(callback);
})