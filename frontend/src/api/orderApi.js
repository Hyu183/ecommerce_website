import axiosClient from './axiosClient';

class OrderApi {
    getOrders = (page) => {
        const url = `/order?page=${page}`;
        return axiosClient.get(url);
    };

    //user: obj - name, email, password
    createOrder = (userID, orderDetail, total) => {
        const url = '/order/add';
        return axiosClient.post(url, {
            userID: userID,
            orderDetail: orderDetail,
            total: total,
        });
    };
}

const orderApi = new OrderApi();

export default orderApi;
