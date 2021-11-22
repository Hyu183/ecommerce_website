import db from '../../database/db.js';

const create = (product) => {
    return db('product').insert(product);
};
const addCategory = (categoryData) => {
    return db('product_category').insert(categoryData);
};
const addImgUrl = (imageUrlData) => {
    return db('product_image').insert(imageUrlData);
};
const addColor = (colorData) => {
    return db('product_color').insert(colorData);
};
const addSize = (sizeData) => {
    return db('product_size').insert(sizeData);
};

const remove = (prodID) => {
    return db('product').update({ is_deleted: 1 }).where({ id: prodID });
};

const checkProductIDExist = async (prodID) => {
    const result = await db('product').where({ id: prodID, is_deleted: 0 });
    if (result.length === 0) {
        return null;
    }
    return result[0];
};

const getProductInfor = async (prodID) => {
    const result = await db('product').where({ id: prodID });

    return result[0];
};

const getProductImage = (prodID) => {
    return db('product_image').where({ product_id: prodID });
};
const getProductBrand = async (brandID) => {
    const result = await db('brand').where({ id: brandID });
    return result[0];
};
const getProductColor = (prodID) => {
    return db('product_color').where({ product_id: prodID });
};
const getProductSize = (prodID) => {
    return db('product_size').where({ product_id: prodID });
};

const getSameBrandProduct = (prodID, brandID, limit) => {
    return db('product')
        .select('id', 'thumbnail_url')
        .where({ brand_id: brandID })
        .whereNot({ id: prodID })
        .where({ is_deleted: 0 })
        .limit(limit);
};

const getRelateProduct = (prodID, limit) => {
    return db('product')
        .select('id', 'thumbnail_url')
        .whereNot({ id: prodID })
        .where({ is_deleted: 0 })
        .limit(limit);
};

const getProductListBySecondCat = async (catID, offset, limit) => {
    const catList = await db('category')
        .select('id')
        .where({ parent_lv1_id: catID });
    const catIDArray = catList.map((e) => e.id);

    const productCat = await db('product_category')
        .select('product_id')
        .distinct('product_id')
        .whereIn('category_id', catIDArray);
    const productIDArray = productCat.map((e) => e.product_id);

    return db('product')
        .whereIn('id', productIDArray)
        .offset(offset)
        .limit(limit)
        .where({ is_deleted: 0 });
};
const countProductListBySecondCat = async (catID) => {
    const catList = await db('category')
        .select('id')
        .where({ parent_lv1_id: catID });
    const catIDArray = catList.map((e) => e.id);

    const productCat = await db('product_category')
        .select('product_id')
        .distinct('product_id')
        .whereIn('category_id', catIDArray);

    const productIDArray = productCat.map((e) => e.product_id);

    const products = await db('product')
        .whereIn('id', productIDArray)
        .offset(offset)
        .limit(limit)
        .where({ is_deleted: 0 });

    return products.length;
};
const getProductListByThirdCat = async (catID, offset, limit) => {
    const productCat = await db('product_category')
        .select('product_id')
        .where({ category_id: catID });
    const productIDArray = productCat.map((e) => e.product_id);

    return db('product')
        .whereIn('id', productIDArray)
        .where({ is_deleted: 0 })
        .offset(offset)
        .limit(limit);
};
const countProductListByThirdCat = async (catID) => {
    const productCat = await db('product_category')
        .select('product_id')
        .where({ category_id: catID });

    const productIDArray = productCat.map((e) => e.product_id);

    const products = await db('product')
        .whereIn('id', productIDArray)
        .where({ is_deleted: 0 })
        .offset(offset)
        .limit(limit);

    return products.length;
};

const getAll = (limit, offset) => {
    return db('product').where({ is_deleted: 0 }).offset(offset).limit(limit);
};
const countAll = async () => {
    const result = await db('product').where({ is_deleted: 0 });
    return result.length;
};

const getCatName = (prodID) => {
    return db
        .select('c.id', 'c.name')
        .from({ pc: 'product_category' })
        .join({ c: 'category' }, 'pc.category_id', '=', 'c.id')
        .where('pc.product_id', prodID);
};

export {
    create,
    addCategory,
    addColor,
    addImgUrl,
    addSize,
    remove,
    checkProductIDExist,
    getProductInfor,
    getProductImage,
    getProductBrand,
    getProductColor,
    getProductSize,
    getSameBrandProduct,
    getRelateProduct,
    getProductListBySecondCat,
    countProductListBySecondCat,
    getProductListByThirdCat,
    countProductListByThirdCat,
    getAll,
    countAll,
    getCatName,
};
