const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'ABC'
        },{
            id: '2',
            name: 'Jen',
            room: '123'
        },{
            id: '3',
            name: 'Zebra',
            room: 'ABC'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Coffee',
            room: 'Stimulants'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);

    });

    it('should return names for room:ABC', () => {
        var userList = users.getUserList('ABC');
        expect(userList).toEqual(['Mike','Zebra']);
    });

    it('should remove a user', () => {
        var userReturn = users.removeUser('1');
        expect(userReturn).toMatchObject({
            id: '1',
            name: 'Mike',
            room: 'ABC'
        });
        expect(users.users.length).toBe(2);
    });

    it('should not remove a non-existent user', () => {
        var userReturn = users.removeUser('8000');
        expect(userReturn).toBeUndefined();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var returnedUser = users.getUser('3');
        expect(returnedUser).toMatchObject({
            id: '3',
            name: 'Zebra',
            room: 'ABC'
        });
    });

    it('should not find a non-existent user', () => {
        var returnedUser = users.getUser('8000');
        expect(returnedUser).toBeUndefined();
    });
});