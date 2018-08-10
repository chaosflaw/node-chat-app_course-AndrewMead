var expect = require('expect');

var {generateMsg, generateLocationMsg} = require('./msg');

describe('generateMsg', () => {
    it('should generate the correct message object', () => {
        var from = 'waterBottle94';
        var text = 'I\'m really thirsty';
        var msg = generateMsg(from, text);
        expect(msg).toMatchObject({from, text});
        expect(typeof msg.createdAt).toBe('number');
    });
});

describe('generateLocationMsg', () => {
    it('should generate correct location object', () => {
        var from = 'MonaLisa';
        var latitude = 48.860633;
        var longitude = 2.337633;
        var url = `https://www.google.com/maps?q=48.860633,2.337633`;
        var locationObj = generateLocationMsg(from, latitude, longitude);
        
        expect(locationObj).toMatchObject({from, url});
        expect(typeof locationObj.createdAt).toBe('number');
    });
})