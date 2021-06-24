
const db = require('_helpers/db');

module.exports = {
    
    getAll,
    getById,
    create,
    update,
    delete: _delete
};



async function getAll() {
    return await db.Zugabfertigung.findAll();
}

async function getById(id) {
    return await getZugabfertigung(id);
}

async function create(params) {
   

    // save Frachtbrief
    await db.Zugabfertigung.create(params);
}

async function update(id, params) {
    const zugabfertigung = await getZugabfertigung(id);

   

    // copy params to user and save
    Object.assign(zugabfertigung, params);
    await zugabfertigung.save();

    console.log('update durch')
    return omitHash(zugabfertigung.get());
}

async function _delete(id) {
    const zugabfertigung = await getZugabfertigung(id);
    await zugabfertigung.destroy();
}

// helper functions

async function getZugabfertigung(id) {
    const zugabfertigung = await db.Zugabfertigung.findByPk(id);
    if (!zugabfertigung) throw 'Zugabfertigung not found';
    return zugabfertigung;
}

function omitHash(user) {
    const { hash, ...userWithoutHash } = user;
    return userWithoutHash;
}