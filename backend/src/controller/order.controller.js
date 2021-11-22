import * as orderDAO from '../dao/order.dao.js';
import Order from '../models/order.model.js';
import OrderDetail from '../models/orderDetail.model.js';

const getOrderList = async (req, res) => {
    const page = req.query.page || 0;
    const limit = 10;
    const offset = page * limit;

    const total = await orderDAO.countOrders();

    const orders = await orderDAO.getOrders(limit, offset);

    const orderDetails = await Promise.all(
        orders.map(async (order) => {
            const details = await orderDAO.getOrderDetails(order.id);
            return { ...order, details };
        })
    );

    return res
        .status(200)
        .json({ success: 1, message: 'OK', orderDetails, total });
};

const createOrder = async (req, res) => {
    const userID = req.body.userID;
    const orderDetails = req.body.orderDetail; //array
    const totalPrice = req.body.total;

    //create Order - user_id, created_date, status = 0, total
    const order = new Order(userID, totalPrice);
    const orderID = await orderDAO.create(order);

    //add order detail - order_id, product_id,price, quantity,color_id,size_id
    await Promise.all(
        orderDetails.forEach(async (element) => {
            const orderDetail = new OrderDetail(orderID, element);
            await orderDAO.addOrderDetail(orderDetail);
        })
    );

    return res.status(200).json('OK');
};

export { getOrderList, createOrder };
