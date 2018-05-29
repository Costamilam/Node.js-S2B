const bcrypt = require('bcrypt');
const saltRounds = 10;
const saltSystem = '$2b$10$.Dp3FUolUS4it5lJyQKyDu';

module.exports.hashPassword = async function(userPassword) {
    let salt = await bcrypt.genSalt(saltRounds);
    return {
        userSalt: salt, 
        userPassword: await bcrypt.hash(userPassword, `${salt}${saltSystem}`)
    };
}

module.exports.check = async function(userPassword, userPlainPassword, userSalt) {
    return await bcrypt.compare(userPlainPassword, userPassword);
    //return userPassword === await bcrypt.hash(userPlainPassword, `${userSalt}${saltSystem}`);
}