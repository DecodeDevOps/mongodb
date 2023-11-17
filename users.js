//
// Products
//
db = db.getSiblingDB('users');
db.users.insertMany([
    {name: 'user', password: 'password', email: 'user@decodedevops.com'},
    {name: 'stan', password: 'bigbrain', email: 'stan@decodedevops.com'},
    {name: 'partner-57', password: 'worktogether', email: 'howdy@decodedevops.com'}
]);

// unique index on the name
db.users.createIndex(
    {name: 1},
    {unique: true}
);
