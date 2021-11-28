import db from '../../database/db.js';

const create = (order) => {
    return db('order').insert(order);
};

const addOrderDetail = (orderDetail) => {
    return db('order_detail').insert(orderDetail);
};
const updateQuantity = (productID, quantity) => {
    return db('product')
        .decrement('in_stock', quantity)
        .where({ id: productID });
};

const getOrders = (limit, offset) => {
    return db('order').limit(limit).offset(offset);
};

const getOrderDetails = (orderID) => {
    return db
        .select('ord.id', 'p.name', 'ord.quantity', { size: 's.name' })
        .from({ ord: 'order_detail' })
        .join({ p: 'product' }, 'ord.product_id', '=', 'p.id')
        .join({ s: 'size' }, 'ord.size_id', '=', 's.id')
        .where('ord.order_id', orderID);
};

const countOrders = async () => {
    const result = await db('order');
    return result.length;
};

export {
    create,
    addOrderDetail,
    getOrders,
    countOrders,
    getOrderDetails,
    updateQuantity,
};
