
const db = require('_helpers/db');

module.exports = {
    
    getAll,
    getById,
    create,
    update,
    delete: _delete
};



async function getAll() {
    return await db.WagendatenBetrieblich.findAll();
}

async function getById(id) {
    return await getWagendatenBetrieblich(id);
}

async function create(params) {
   

    // save Frachtbrief
    await db.WagendatenBetrieblich.create(params);
}

async function update(id, params) {
    const wagendatenBetrieblich = await getWagendatenBetrieblich(id);

   

    // copy params to user and save
    Object.assign(wagendatenBetrieblich, params);
    await wagendatenBetrieblich.save();

    console.log('update durch')
    return omitHash(wagendatenBetrieblich.get());
}

async function _delete(id) {
    const wagendatenBetrieblich = await getWagendatenBetrieblich(id);
    await wagendatenBetrieblich.destroy();
}

// helper functions

async function getWagendatenBetrieblich(id) {
    const wagendatenBetrieblich = await db.WagendatenBetrieblich.findByPk(id);
    if (!wagendatenBetrieblich) throw 'WagendatenBetrieblich not found';
    return wagendatenBetrieblich;
}

function omitHash(user) {
    const { hash, ...userWithoutHash } = user;
    return userWithoutHash;
}