class Product {
    constructor(body, thumbnail_url) {
        this.name = body.name;
        this.brand_id = body.brand_id;
        this.description = body.description;
        this.thumbnail_url = thumbnail_url;
        this.quantity = body.quantity;
        this.in_stock = body.quantity;
        this.price = body.price;
        this.created_date = new Date()
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');
    }
}

export default Product;
