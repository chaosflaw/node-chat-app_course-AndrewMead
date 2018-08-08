var expect = require('expect');

var {generateMsg} = require('./msg');

describe('generateMsg', () => {
    it('should generate the correct message object', () => {
        var from = 'waterBottle94';
        var text = 'I\'m really thirsty';
        var msg = generateMsg(from, text);
        expect(msg).toMatchObject({from, text});
        expect(typeof msg.createdAt).toBe('number');
    });
});