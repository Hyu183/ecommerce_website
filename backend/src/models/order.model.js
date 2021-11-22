class Order {
    constructor(userID, totalPrice) {
        this.user_id = userID;
        this.status = 0;
        this.total = totalPrice;
        this.created_date = new Date()
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');
    }
}

export default Order;
