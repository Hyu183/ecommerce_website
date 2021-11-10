import db from '../../database/db.js';

const create = (user) => {
    return db('user').insert(user);
};

const findUserByEmail = async (email) => {
    const rows = await db('user').where('email', email);
    if (rows.length === 0) {
        return null;
    }
    return rows[0];
};

const findUserByID = async (id) => {
    const rows = await db('user').where('id', id);
    if (rows.length === 0) {
        return null;
    }
    return rows[0];
};

const checkEmailExisted = async (email) => {
    const rows = await db('user').select('id').where('email', email);

    if (rows.length === 0) {
        return false;
    }
    return true;
};

const updateAccessToken = (id, token) => {
    return db('user').where('id', id).update({ access_token: token });
};

const updatePassword = (id, newPassword) => {
    return db('user').where('id', id).update({ password: newPassword });
};

export {
    create,
    checkEmailExisted,
    findUserByEmail,
    findUserByID,
    updateAccessToken,
    updatePassword,
};
