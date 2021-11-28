import db from '../../database/db.js';

const getMainCategory = () => {
    return db('category')
        .select('id', 'name')
        .whereNull('parent_lv1_id')
        .whereNull('parent_lv2_id');
};

const getSecondCategory = (mainID) => {
    return db('category').select('id', 'name').where('parent_lv1_id', mainID);
};

// const getThirdCategory = (secondID) => {
//     return db('category').select('id', 'name').where('parent_lv2_id', secondID);
// };

const getParentCat = async (catID) => {
    const result = await db
        .select(
            'c1.id',
            'c1.name',
            { parent_id: 'c2.id' },
            { parent_name: 'c2.name' }
        )
        .from({ c1: 'category' })
        .join({ c2: 'category' }, 'c1.parent_lv1_id', '=', 'c2.id')
        .where('c1.id', catID);

    return result[0];
};

const getAllSubCategory = () => {
    return db('category')
        .select('id', 'name')
        .whereNotNull('parent_lv1_id')
        .whereNotNull('parent_lv2_id');
};

const checkCatIDExist = async (catID) => {
    const result = await db('category').select('id').where({ id: catID });
    if (result.length === 0) {
        return null;
    }
    return result[0];
};

const checkCatLv2Exist = async (catID) => {
    const result = await db('category')
        .select('id')
        .where({ id: catID })
        .whereNull('parent_lv2_id');
    if (result.length === 0) {
        return null;
    }
    return result[0];
};

const getColor = () => {
    return db('color');
};

const getSize = () => {
    return db('size');
};

const getBrand = () => {
    return db('brand');
};

export {
    getMainCategory,
    getSecondCategory,
    // getThirdCategory,
    checkCatIDExist,
    checkCatLv2Exist,
    getColor,
    getSize,
    getAllSubCategory,
    getBrand,
    getParentCat,
};
