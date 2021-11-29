import axiosClient from './axiosClient';

class ProductApi {
    addProduct = (product, token) => {
        const url = '/product/add';

        return axiosClient.post(url, product, {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        });
    };

    getProductDetail = (prodID) => {
        const url = `/product/detail/${prodID}`;
        return axiosClient.get(url);
    };

    getProductList = (page, token) => {
        const url = `/product?page=${page}`;
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    getProductListByCatLv1 = (catID, page) => {
        const url = `/product/all/${catID}?page=${page}`;
        return axiosClient.get(url);
    };

    getProductListByCatLv0 = (catID, page) => {
        const url = `/product/cat/${catID}?page=${page}`;
        return axiosClient.get(url);
    };
}

const productApi = new ProductApi();

export default productApi;
