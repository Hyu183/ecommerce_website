class OrderDetail {
    constructor(orderID, detail) {
        this.order_id = orderID;
        this.product_id = detail.prodID;
        this.price = detail.price;
        this.quantity = detail.quantity;
        this.color_id = detail.colorID;
        this.size_id = detail.sizeID;
    }
}

export default OrderDetail;
