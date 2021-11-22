import db from '../../database/db.js';

const create = (order) => {
    return db('order').insert(order);
};

const addOrderDetail = (orderDetail) => {
    return db('order_detail').insert(orderDetail);
};

const getOrders = (limit, offset) => {
    return db('order').limit(limit).offset(offset);
};

const getOrderDetails = (orderID) => {
    return db
        .select('p.name', 'ord.quantity', 'ord.size_id')
        .from({ ord: 'order_detail' })
        .join({ p: 'product' }, 'ord.product_id', '=', 'p.id')
        .where('ord.order_id', orderID);
};

const countOrders = async () => {
    const result = await db('order');
    return result.length;
};

export { create, addOrderDetail, getOrders, countOrders, getOrderDetails };
