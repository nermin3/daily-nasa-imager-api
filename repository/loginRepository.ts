import { connect } from "../config/dbConfig";
import { LoginModel } from '../model/loginModel';
import { APILogger } from '../logger/logger';

export class LoginRepository {
    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    async login(userInfo) {
        const data = await LoginModel.find({username: userInfo.username});
        return data;
    }

    async register(userInfo) {
        let data = {};
        try {
            data = await LoginModel.create(userInfo);
        } catch(error) {
            this.logger.error('Error::' + error);
            data = {
                error
            }
        }
        return data;
    }
}