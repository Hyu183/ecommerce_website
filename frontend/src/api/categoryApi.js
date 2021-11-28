import axiosClient from './axiosClient';

class CategoryApi {
    //user: obj - name, email, password
    getMain = () => {
        const url = '/category';
        return axiosClient.get(url);
    };

    getSecondSubCat = (catID) => {
        const url = `/category/subCat/${catID}`;
        return axiosClient.get(url);
    };

    //third subCat
    getAllSubCat = () => {
        const url = '/category/allSubCat';
        return axiosClient.get(url);
    };

    getColorList = () => {
        const url = '/category/color';
        return axiosClient.get(url);
    };

    getSizeList = () => {
        const url = '/category/size';
        return axiosClient.get(url);
    };

    getBrandList = () => {
        const url = '/category/brand';
        return axiosClient.get(url);
    };
}

const categoryApi = new CategoryApi();

export default categoryApi;
