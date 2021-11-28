class Product {
    constructor(body, thumbnail_url) {
        this.name = body.name;
        this.brand_id = JSON.parse(body.brand_id);
        this.description = body.description;
        this.thumbnail_url = thumbnail_url;
        this.quantity = JSON.parse(body.quantity);
        this.in_stock = JSON.parse(body.quantity);
        this.price = JSON.parse(body.price);
        this.created_date = new Date()
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');
    }
}

export default Product;
