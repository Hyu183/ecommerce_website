import axiosClient from './axiosClient';

class ProductApi {
    addProduct = (product) => {
        const url = '/product/add';

        return axiosClient.post(url, product, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        });
    };

    getProductDetail = (prodID) => {
        const url = `/product/detail/${prodID}`;
        return axiosClient.get(url);
    };

    getProductList = (page) => {
        const url = `/product?page=${page}`;
        return axiosClient.get(url);
    };

    getProductListByCatLv1 = (catID) => {
        const url = `/product/all/${catID}`;
        return axiosClient.get(url);
    };

    getProductListByCatLv0 = (catID) => {
        const url = `/product/cat/${catID}`;
        return axiosClient.get(url);
    };
}

const productApi = new ProductApi();

export default productApi;
