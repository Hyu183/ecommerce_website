import axiosClient from './axiosClient';

class UserApi {
    //user: obj - name, email, password
    register = (user) => {
        const url = '/user/register';
        return axiosClient.post(url, user);
    };
    //user: obj - email, password
    login = (user) => {
        const url = '/user/login';
        return axiosClient.post(url, user);
    };

    //user: obj - email
    resetPassword = (user) => {
        const url = '/user/forgot-password';
        return axiosClient.post(url, user);
    };
}

const userApi = new UserApi();

export default userApi;
