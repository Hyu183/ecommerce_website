import * as categoryDAO from '../dao/category.dao.js';

const getCategory = async (req, res) => {
    const mainCategories = await categoryDAO.getMainCategory();

    console.log(mainCategories);

    const fullCategories = await Promise.all(
        mainCategories.map(async (main) => {
            const subCat = await categoryDAO.getSecondCategory(main.id);
            return { ...main, subCat: [...subCat] };
        })
    );
    return res.status(200).json({ categories: fullCategories });
};

const getSubCategory = async (req, res) => {
    const catID = req.params.catIDlv2;
    const isExist = await categoryDAO.checkCatLv2Exist(catID);
    if (!isExist) {
        return res
            .status(400)
            .json({ success: 0, message: 'No category found' });
    }
    const subCat = await categoryDAO.getSecondCategory(catID);
    const curCat = await categoryDAO.getParentCat(catID);
    return res.status(200).json({ success: 1, curCat, subCat: subCat });
};

const getAllSubCategory = async (req, res) => {
    const subCat = await categoryDAO.getAllSubCategory();
    return res.status(200).json({ success: 1, subCat: subCat });
};

const getColor = async (req, res) => {
    const color = await categoryDAO.getColor();

    return res.status(200).json({ success: 1, color: color });
};

const getSize = async (req, res) => {
    const size = await categoryDAO.getSize();

    return res.status(200).json({ success: 1, size: size });
};

const getBrand = async (req, res) => {
    const brand = await categoryDAO.getBrand();

    return res.status(200).json({ success: 1, brand: brand });
};

export {
    getCategory,
    getSubCategory,
    getColor,
    getSize,
    getAllSubCategory,
    getBrand,
};
