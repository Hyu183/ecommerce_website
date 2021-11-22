import userRouter from './src/routes/user.route.js';
import productRouter from './src/routes/product.route.js';
import categoryRouter from './src/routes/category.route.js';
import orderRouter from './src/routes/order.route.js';

export default (app) => {
    app.use('/user', userRouter);
    app.use('/product', productRouter);
    app.use('/category', categoryRouter);
    app.use('/order', orderRouter);
};
