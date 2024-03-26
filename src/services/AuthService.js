import BaseService from "./BaseService";

export default class AuthService extends BaseService {

    static async auth(params) {
        return this.request({auth:true})
            .post('auth/login', params)
    }

}