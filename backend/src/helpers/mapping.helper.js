const mappingProductCategory = (prodID, categoryIDs) => {
    const result = categoryIDs.map((categoryID) => {
        return { product_id: prodID, category_id: categoryID };
    });
    return result;
};

const mappingProductImageUrl = (prodID, imageUrls) => {
    const result = imageUrls.map((imageUrl) => {
        return { product_id: prodID, image_url: imageUrl };
    });
    return result;
};
const mappingProductColors = (prodID, colors) => {
    const result = colors.map((color) => {
        return { product_id: prodID, color_id: color };
    });
    return result;
};
const mappingProductSizes = (prodID, sizes) => {
    const result = sizes.map((size) => {
        return { product_id: prodID, size_id: size };
    });
    return result;
};

export {
    mappingProductCategory,
    mappingProductImageUrl,
    mappingProductColors,
    mappingProductSizes,
};
