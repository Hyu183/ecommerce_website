import userRouter from '../routes/user.route.js';

export default (app) => {
    app.use('/user', userRouter);
};
